document.addEventListener('DOMContentLoaded', () => {
  const jokeInterface = document.getElementById('jokeInterface') as HTMLElement;
  const loadJokeButton = document.getElementById('loadJoke') as HTMLButtonElement;

  loadJokeButton.addEventListener('click', () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        jokeInterface.innerText = `${data.setup} - ${data.punchline}`;document.addEventListener('DOMContentLoaded', () => {
          const jokeInterface = document.getElementById('jokeInterface') as HTMLElement;
          const loadJokeButton = document.getElementById('loadJoke') as HTMLButtonElement;
        
          if (!jokeInterface || !loadJokeButton) {
            console.error('Failed to find elements');
            return;
          }
        
          loadJokeButton.addEventListener('click', async () => {
            try {
              const response = await fetch('https://official-joke-api.appspot.com/random_joke');
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              jokeInterface.innerText = `${data.setup} - ${data.punchline}`;
            } catch (error) {
              jokeInterface.innerText = 'Failed to fetch a joke. Please try again!';
              console.error('Fetch error:', error);
            }
          });
        });
        
      })
      .catch(error => {
        jokeInterface.innerText = 'Failed to fetch a joke. Please try again!';
        console.error('Fetch error:', error);
      });
  });
});

setTimeout((x) => {
  console.log("End of the page");
},1000);

function setJokeSpan(joke) {
  let newJoke = joke;
  if(joke) {
    setTimeout(() => {
      newJoke += joke;
      console.log("Both are same value")
    }, 4000);
  }
};



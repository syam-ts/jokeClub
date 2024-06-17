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



interface IJoke {
  id: number;
  joke: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

class JokeOfToday {
  private joke: IJoke;

  constructor(joke: IJoke) {
    this.joke = joke;
  }

  public getJoke(): IJoke {
    return this.joke;
  }

  public setJoke(joke: IJoke): void {
    this.joke = joke;
  }

  public displayJoke(): void {
    console.log(`Joke of the day: ${this.joke.joke}`);
  }
}

class JokeComponent {
  private jokeOfToday: JokeOfToday;

  constructor(jokeOfToday: JokeOfToday) {
    this.jokeOfToday = jokeOfToday;
  }

  public render(): void {
    const jokeElement = document.getElementById('joke');
    jokeElement!.innerHTML = this.jokeOfToday.getJoke().joke;
  }
}

const jokeOfToday = new JokeOfToday({
  id: 1,
  joke: 'Why don\'t scientists trust atoms?',
  category: 'chemistry',
  createdAt: new Date(),
  updatedAt: new Date(),
});

const jokeComponent = new JokeComponent(jokeOfToday);
jokeComponent.render();

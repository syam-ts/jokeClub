document.addEventListener('DOMContentLoaded', function() {
  const jokeInterface = document.getElementById('jokeInterface');
  const loadJokeButton = document.getElementById('loadJoke');

  loadJokeButton.addEventListener('click', function() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(function(data) {
        jokeInterface.innerText = `${data.setup} - ${data.punchline}`;
      })
      .catch(function(error) {
        jokeInterface.innerText = 'Failed to fetch a joke. Please try again!';
        console.error('Fetch error:', error);
      });
  });
});

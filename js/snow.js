    // Configuration des flocons de neige
    const snowflakesContainer = document.body;
    const numberOfSnowflakes = 100;

    function createSnowflake() {
      const snowflakeElement = document.createElement('div');
      snowflakeElement.classList.add('snowflake');
      snowflakeElement.textContent = Math.random() > 0.5 ? '*' : '+';
      snowflakesContainer.appendChild(snowflakeElement);

      snowflakeElement.style.left = Math.random() * 100 + 'vw';
      snowflakeElement.style.opacity = Math.random();
      snowflakeElement.style.transform = 'scale(' + Math.random() + ')';
      snowflakeElement.style.animationDuration = Math.random() * 3 + 2 + 's';
      // snowflakeElement.style.animationDuration = Math.random() + 2 + 's';

      snowflakeElement.style.animationName = 'fall';
      snowflakeElement.style.animationIterationCount = 'infinite';
      snowflakeElement.style.animationTimingFunction = 'linear';

      // Suppression du flocon de neige après qu'il soit tombé
      snowflakeElement.addEventListener('animationend', function() {
        snowflakeElement.remove();
      });
    }

    // Génération initiale de flocons de neige
    for (let i = 0; i < numberOfSnowflakes; i++) {
      createSnowflake();
    }

    // Génération continue de flocons de neige
    setInterval(createSnowflake,1000 );
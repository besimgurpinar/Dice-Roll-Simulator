
    const dice = document.querySelector('.dice');
    const rollButton = document.querySelector('#roll');

    rollButton.addEventListener('click', () => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      dice.textContent = randomNumber;
    });
  
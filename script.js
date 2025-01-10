document.addEventListener('DOMContentLoaded', function() {
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const resultText = document.getElementById('resultText');
    let randomNumber = Math.floor(Math.random() * 500) + 1; // 预设范围1到100
    let attempts = 0;

    guessButton.addEventListener('click', function() {
        const userGuess = parseInt(guessInput.value);
        attempts++;

        if (userGuess === randomNumber) {
            resultText.textContent = `恭喜你！你猜对了数字 ${randomNumber}，总共尝试了 ${attempts} 次。游戏已重置，试试新的数字吧！`;
            // 重置游戏
            randomNumber = Math.floor(Math.random() * 500) + 1;
            attempts = 0;
            guessInput.value = '';
        } else if (userGuess < randomNumber) {
            resultText.textContent = `你猜的数字太小了，再试一次！`;
        } else {
            resultText.textContent = `你猜的数字太大了，再试一次！`;
        }

        guessInput.value = '';
    });
});
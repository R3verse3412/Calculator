document.addEventListener('DOMContentLoaded', function () {
    let currentInput = ''; 
    const displayElement = document.createElement('div');
    displayElement.classList.add('display');
    document.querySelector('.screen .card-body').appendChild(displayElement);

    const MAX_LENGTH = 10; 


    function updateDisplay(value) {
        displayElement.textContent = value || '0'; 
    }

    function handleButtonClick(event) {
        const buttonValue = event.target.id;

        switch (buttonValue) {
            case 'C': 
                currentInput = '';
                break;
            case '=': 
                try {
                    currentInput = eval(currentInput).toString();
                } catch {
                    currentInput = 'Error'; 
                }
                break;
            case 'erase': 
                currentInput = currentInput.slice(0, -1);
                break;
            case '*':
                currentInput += '*';
                break;
            case '-':
            case '+':
            case '/':
            case '%':
            case '.':
                currentInput += buttonValue; 
                break;
            default: 
                if (!isNaN(buttonValue)) { 
                    currentInput += buttonValue;
                }
                break;
        }

   
        if (currentInput.length > MAX_LENGTH) {
            currentInput = currentInput.slice(0, MAX_LENGTH); 
        }

        updateDisplay(currentInput);
    }


    document.querySelectorAll('.button, .button-blue, #erase, #C').forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    updateDisplay(currentInput);
});

document.addEventListener('DOMContentLoaded', function() {
    var calculatorForm = document.getElementById('calculatorForm');
    var resultElement = document.getElementById('result');

    calculatorForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var operand1 = parseFloat(calculatorForm.elements['operand1'].value);
        var operand2 = parseFloat(calculatorForm.elements['operand2'].value);
        var operator = calculatorForm.elements['operator'].value;

        var result;
        switch (operator) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '/':
                result = operand1 / operand2;
                break;
            default:
                result = 'Invalid operator';
        }

        resultElement.textContent = result;
    });
});

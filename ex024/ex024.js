(function (win, doc) {
  "use stricts";
  /*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:
- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;
- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

  var $visor = doc.querySelector('[data-js="visor"]');
  var $buttonsNumber = doc.querySelectorAll('[data-js="buttonNumber"]');
  var $buttonCe = doc.querySelector('[data-js="button-CE"]');
  var $operationsButtons = doc.querySelectorAll('[data-js="buttonOperations"]');
  var $buttonEqual = doc.querySelector('[data-js="button-equal"]');

  function initialize() {
    initEvents();
  }

  function initEvents() {
    Array.prototype.forEach.call($buttonsNumber, function (button) {
      button.addEventListener("click", handleClickNumber, false);
    });
    Array.prototype.forEach.call($operationsButtons, function (button) {
      button.addEventListener("click", handleClickOperations, false);
    });
    $buttonCe.addEventListener("click", handleClickCE, false);
    $buttonEqual.addEventListener("click", handleClickEqual, false);
  }

  function handleClickNumber() {
    event.preventDefault();
    $visor.value += this.value;
  }

  function handleClickCE() {
    event.preventDefault();
    $visor.value = 0;
  }
  function removeLastItemIdIsOperator(string) {
    //remove ultimo item digitado quando o mesmo é um operador
    if (isLastItemAnOperation(string)) {
      return string.slice(0, -1);
    }
    return string;
  }

  function handleClickOperations() {
    event.preventDefault();
    $visor.value = removeLastItemIdIsOperator($visor.value);
    $visor.value += this.value;
  }

  function isLastItemAnOperation(number) {
    var operations = getOperations();
    var lastItem = number.split("").pop();
    return operations.some(function (operator) {
      return operator === lastItem;
    });
  }

  function getOperations() {
    return Array.prototype.map.call($operationsButtons, function (button) {
      return button.value;
    });
  }

  function handleClickEqual() {
    event.preventDefault();
    $visor.value = removeLastItemIdIsOperator($visor.value);
    var allValues = $visor.value.match(getRegexOperation());
    $visor.value = allValues.reduce(calculateAllValues);
  }

  function getRegexOperation(){
    return new RegExp('\\d+[' + getOperations().join('') + ']?','g');
  }

  function calculateAllValues(accumulate, actual) {
    var firstValue = accumulate.slice(0, -1);
    var operator = accumulate.split("").pop();
    var lastValue = removeLastItemIdIsOperator(actual);
    var lastoperator = isLastItemAnOperation(actual)
      ? actual.split("").pop()
      : "";
    return doOperator(operator, firstValue, lastValue) + lastoperator;
  }

  function doOperator(operator, firstValue, lastValue) {
    switch (operator) {
      case "+":
        return Number(firstValue) + Number(lastValue);
      case "-":
        return Number(firstValue) - Number(lastValue);
      case "*":
        return Number(firstValue) * Number(lastValue);
      case "/":
        return Number(firstValue) / Number(lastValue);
    }
  }

  initialize();
})(window, document);

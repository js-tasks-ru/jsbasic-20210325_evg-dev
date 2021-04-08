let calculator = {
  
};
calculator.read = function(x, y) {
  calculator.a = x;
  calculator.b = y;
}
calculator.sum = function(x, y) {
  return calculator.a + calculator.b;
}
calculator.mul = function(x, y) {
  return calculator.a * calculator.b;
}

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально

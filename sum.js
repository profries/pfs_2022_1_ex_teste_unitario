function sum(a, b) {
    if(a < 0 || b <0) throw new Error("Numeros devem ser positivos");
    return a + b;
  }
  module.exports = sum;
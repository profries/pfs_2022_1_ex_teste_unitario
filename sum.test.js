const sum = require('./sum');

test('soma 1 + 2 igual a 3', () => {
  expect(sum(1, 2)).toEqual(3);
});

test('soma -1 + 2 deve gerar Erro', () => {
    expect(() => sum(-1, 2)).toThrow("Numeros devem ser positivos");
});
  

/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');

describe('Pruebas alternativas - Página Hola Mundo', () => {
  let documentBody;

  beforeAll(() => {
    const htmlPath = path.join(__dirname, '../index.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    document.documentElement.innerHTML = htmlContent;
    documentBody = document.body;
  });

  test('Debe contener un bloque de estilos en el head', () => {
    const styles = document.querySelectorAll('style');
    expect(styles.length).toBeGreaterThan(0);
  });

  test('La estructura principal está centrada vertical y horizontalmente', () => {
    const bodyStyles = getComputedStyle(document.body);
    expect(bodyStyles.display).toBe('flex');
    expect(bodyStyles.justifyContent).toBe('center');
    expect(bodyStyles.alignItems).toBe('center');
  });

  test('El título no está vacío y tiene buen tamaño', () => {
    const h1 = document.querySelector('h1');
    expect(h1.textContent.trim().length).toBeGreaterThan(5);
  });
});

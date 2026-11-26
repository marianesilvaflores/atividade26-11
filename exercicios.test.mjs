import { describe, it, expect } from 'vitest';
import { par, media, filtrarMaiores18 } from './exercicios.mjs';

describe('par', () => {
  it('2 é par', () => {
    expect(par(2)).toBe(true);
  });

  it('3 não é par', () => {
    expect(par(3)).toBe(false);
  });

  it('zero é par', () => {
    expect(par(0)).toBe(true);
  });
});

describe('media', () => {
  it('calcula a média', () => {
    expect(media([7, 8, 9])).toBe(8);
  });

  it('rejeita uma lista vazia', () => {
    expect(() => media([])).toThrow(
      'A lista de notas não pode estar vazia.'
    );
  });
});

describe('filtrarMaiores18', () => {
  it('inclui Ana e Carla e exclui Beto', () => {
    const usuarios = [
      { name: 'Ana', age: 22 },
      { name: 'Beto', age: 17 },
      { name: 'Carla', age: 30 }
    ];

    expect(filtrarMaiores18(usuarios)).toEqual([
      { name: 'Ana', age: 22 },
      { name: 'Carla', age: 30 }
    ]);
  });

  it('inclui quem tem exatamente 18 anos', () => {
    expect(filtrarMaiores18([
      { name: 'Davi', age: 18 }
    ])).toEqual([
      { name: 'Davi', age: 18 }
    ]);
  });
});
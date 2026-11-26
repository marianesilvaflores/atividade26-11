export function par(n) {
  return n % 2 === 0;
}

export function media(notas) {
  if (notas.length === 0) {
    throw new Error('A lista de notas não pode estar vazia.');
  }

  const soma = notas.reduce((total, nota) => total + nota, 0);
  return soma / notas.length;
}

export function filtrarMaiores18(usuarios) {
  return usuarios.filter(usuario => usuario.age >= 18);
}


import { describe, it, expect } from 'vitest';
import { par, media, filtrarMaiores18 } from './exercicios.mjs';

describe('par', () => {
  it('retorna true para 2', () => {
    expect(par(2)).toBe(true);
  });

  it('retorna false para 3', () => {
    expect(par(3)).toBe(false);
  });

  it('considera zero um número par', () => {
    expect(par(0)).toBe(true);
  });
});

describe('media', () => {
  it('calcula a média de 7, 8 e 9', () => {
    expect(media([7, 8, 9])).toBe(8);
  });

  it('lança erro para uma lista vazia', () => {
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
    const usuarios = [{ name: 'Davi', age: 18 }];

    expect(filtrarMaiores18(usuarios)).toEqual([
      { name: 'Davi', age: 18 }
    ]);
  });
});
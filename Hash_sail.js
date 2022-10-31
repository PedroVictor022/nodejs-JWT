import { scryptSync, randomBytes, timingSafeEqual } from 'crypto'

function hashMoreSecurity(senha) {
   const sec = randomBytes(16).toString('hex'); // passando o tamanho dos bytes junto de uma codificacao
   const hashSec = scryptSync(senha, sec, 64).toString('hex'); // passando a senha, a hashSegura e o tamanho

   return `${sec}:${hashSec}`
}

class Usuario {
   constructor(nome, senha) {
      this.nome = nome;
      [this.sec, this.hash] = hashMoreSecurity(senha).split(':')
   }
}

const u1 = new Usuario('Jose', 'jose123456');
console.log(u1);
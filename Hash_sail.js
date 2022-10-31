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

   auth(nome, senha) {
      if(nome === this.nome) {
         const verifyHash = scryptSync(senha, this.sec, 64);
         const hashReal = Buffer.from(this.hash, 'hex');

         const hashsVerify = timingSafeEqual(verifyHash, hashReal);
         if(hashsVerify) {
            console.log('Usuario autenticado')
            return true;
         }else {
            console.log('Usuario nao identificado!')
            return false;
         }

      }
   }
}

const u1 = new Usuario('Jose', 'jose123456');
console.log(u1);
u1.auth('Jose', 'jose123456');
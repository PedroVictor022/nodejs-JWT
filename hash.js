import { createHash } from "crypto";

function createHashMessage(msg) {
   return createHash('SHA256').update(msg).digest('hex')
}

class Usuario {
   constructor(nome, senha) {
      this.nome = nome;
      this.hash = createHashMessage(senha);
   }

   authentication(nome, senha) {
      if(nome === this.nome && this.hash === createHashMessage(senha)) {
         console.log('User auth successfully!')
         return true;
      }
      console.log('Usuario ou senha incorretos');
   }

}

const user1 = new Usuario('Pedro', 'teste1234');
const user2 = new Usuario('Laura', '123')

console.log(user1);
user1.authentication('Pedro', 'teste1234');
user2.authentication('Laura', '1234');
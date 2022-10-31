const msgSecret = 'Mensagem secreta';

function criptMsg (msg, movimentos) {
   const msgCifrada = msg.split('').map(character => {
      const codigoCaracter = character.charCodeAt(0);
      return String.fromCharCode(codigoCaracter + movimentos)
   })
   return msgCifrada.join('')
}

const mensagemCifrada = criptMsg(msgSecret, 3)

function decifraMsg (msg, movimentos) {
   const msgCifrada = msg.split('').map(character => {
      const codigoCaracter = character.charCodeAt(0);
      return String.fromCharCode(codigoCaracter - movimentos)
   })
   return msgCifrada.join('')
}

console.log(mensagemCifrada, '\n', decifraMsg(mensagemCifrada, 3))
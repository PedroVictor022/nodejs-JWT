const msgSecret = 'Mensagem secreta';

function criptMsg (msg, movimentos) {
   const msgCifrada = msg.split('').map(character => {
      const codigoCaracter = character.charCodeAt(0);
      return String.fromCharCode(codigoCaracter + movimentos)
   })
   return msgCifrada.join('')
}

console.log(criptMsg(msgSecret, 3))
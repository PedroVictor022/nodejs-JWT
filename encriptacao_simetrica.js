import { createCipheriv, randomBytes, createDecipheriv} from "crypto"
// createCipheriv - vai criar e encriptar um dado,
// randomBytes cria um valor aleatorio
// createDecipherivFUNCAO PARA DESENCRIPTAR A MENSAGEM


const mensagem = 'As senhas do banco sao: 1209, 12309, 48934, 59407'
const chave = randomBytes(32);
const vi = randomBytes(16)

const cifra = createCipheriv('aes256', chave, vi)
const msgCifrada = cifra.update(mensagem, 'utf-8', 'hex') + cifra.final('hex')

console.log(msgCifrada);


// transmissao

const decifra = createDecipheriv('aes256', chave, vi)
const mensagemDecifrada = decifra.update(msgCifrada, 'hex', 'utf-8') + decifra.final('utf-8');

console.log(mensagemDecifrada);
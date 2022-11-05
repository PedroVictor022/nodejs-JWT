import { generateKeyPairSync, createSign, createVerify} from 'crypto'

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
   modulusLength: 2048,
   publicKeyEnconding: {
      type: 'spki',
      format: 'pem'
   },
   privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem'
   }
})

let documentoExemplo = "Documento de transferencia de bem material"

// Criando assinatura digital
const assinarDoc = createSign('rsa-sha256');
assinarDoc.update(documentoExemplo);

const assinatura = assinarDoc.sign(privateKey, 'hex');
console.log(`Assinatura: ${assinatura}`);

// Intermediario

documentoExemplo += ": arquivo alterado"

// ENVIANDO ASSINATURA
const verificador = createVerify('rsa-sha256');

verificador.update(documentoExemplo);



const ehVerificado = verificador.verify(publicKey, assinatura, 'hex')

console.log(ehVerificado)
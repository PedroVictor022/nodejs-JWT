import {generateKeyPairSync, publicEncrypt, privateDecrypt} from "crypto";

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
   modulusLength: 2048,
   publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
   },
   privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem'
   }
});

const dadosCriptografados = publicEncrypt(
   publicKey, 
   Buffer.from('Encriypt messager!')
)

console.log(dadosCriptografados.toString('hex'));

// ------------ TRANSMISSAO --------------
const dadosDecifrados = privateDecrypt(privateKey, dadosCriptografados);

console.log(`Dados ${dadosDecifrados.toString('utf-8')}`);
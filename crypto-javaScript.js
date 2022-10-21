
const NodeRSA = require('node-rsa');
const fs = require('fs');

var publicKey = new NodeRSA();
var privateKey = new NodeRSA(); 

const password = Buffer.from("Gustav0&M0oura$ç"); 
const publica = fs.readFileSync("./keys/publicKey.pem", "utf8");
const privada = fs.readFileSync("./keys/privateKey.pem", "utf8");

console.log(publica);
console.log(privada);

publicKey.importKey(publica);
privateKey.importKey(privada);

const encrypted = privateKey.encryptPrivate(password, "base64");
const decrypted = publicKey.decryptPublic(encrypted, "utf8");


console.log("dado criptografado: ",encrypted);
console.log("dado descriptografado: ",decrypted);




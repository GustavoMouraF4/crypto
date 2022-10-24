
const NodeRSA = require('node-rsa');
const fs = require('fs');

const BEGIN_PUBLIC_KEY = "-----BEGIN PUBLIC KEY-----";
const BEGIN_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----";
const END_PUBLIC_KEY = "-----END PUBLIC KEY-----";
const END_PRIVATE_KEY = "-----END PRIVATE KEY-----";

var publicKey = new NodeRSA();
var privateKey = new NodeRSA(); 

const password = Buffer.from("Gustav0&M0oura$ç"); 
const publicKey = BEGIN_PUBLIC_KEY + "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzHTetUcdlyIiaKjo4etCF5X2+u8DIEwsGqzxoXfhh/n2ajYphCa/rnik+qW4LfcbKfPZHuVoDpfoAdAg07NNwYwTo1jvTzWkq70Y32Qcr8iNsfUlWdAhQja7PZZGPn5pskj0mFYQMIdyvJ+PvqY/pNWxnxR2pWmojSgYpVS8lzoWYX6w3wCDCj3f6PASIaaX1nzzu/WdxtDX9iWKtt0dbIt9ym6EiYTHw2pAp8ssbtFWkHTkXbh+s9b1uhpouBMuSPYXkvsecqNsENnYLSbGIiSKFo+WqTNLF/GtYPi+ze2Nd9Ny4OqfPj5984Bd8r4+3VnOGjFzVK6H5/sPiFxrswIDAQAB" + END_PUBLIC_KEY;
const privateKey = BEGIN_PRIVATE_KEY + "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDMdN61Rx2XIiJoqOjh60IXlfb67wMgTCwarPGhd+GH+fZqNimEJr+ueKT6pbgt9xsp89ke5WgOl+gB0CDTs03BjBOjWO9PNaSrvRjfZByvyI2x9SVZ0CFCNrs9lkY+fmmySPSYVhAwh3K8n4++pj+k1bGfFHalaaiNKBilVLyXOhZhfrDfAIMKPd/o8BIhppfWfPO79Z3G0Nf2JYq23R1si33KboSJhMfDakCnyyxu0VaQdORduH6z1vW6Gmi4Ey5I9heS+x5yo2wQ2dgtJsYiJIoWj5apM0sX8a1g+L7N7Y1303Lg6p8+Pn3zgF3yvj7dWc4aMXNUrofn+w+IXGuzAgMBAAECggEAf1cjBqDeay0VZT4eneca6Pm8NBn9RnZq2cpxTHIQA9LJiOlm/insJMx7ZKkmh2pqfryjtDyJjN1L4SUx7Oi2Ox/1cz2G/zyX7Wb/QNNnkoxExFu9Aa1Bqa3Q/NDFu1KcnjAWN3MS7kbOTXDL5KBC73UxBbWHGAswsYoRn5ehRkYHkdH//nNLTyVLBpUo6WJtkPgfBLYa3cA4UQsLFrKdCGbcnqUBKUKtfon+rUKkjAxjuJrq2xE77RAek3M+yJCi/A1sqdR2TJFB2TwXokNZE0sD9+EsFWRt7iKesR6QTIy+jQQrdwTnZ9FY/h5awMoUWKWEwEkzdCAXbF72a+prIQKBgQD4IDTyWoPIt+IQb406MTEX2uzIqb0h4Tqc/Hi4IZaT4QkEN5lekxYSX14ad7v+MGclXztGqRnboA3iKcDIRn1GRFwnqVn+f/iwLE+rUx30FO3MkS2ulcOjaUjlxzUPclSrVt1PbPfiw/2sxu4EoograSysmJfB7qNrC2xcriul+wKBgQDS8eP3sBr6WnuoQ5X/v7gZkaKoTNRNQtQLU8Qz7BQNK4CjG680mWX/pzVfOkYihhuFVx1r8hUKklyKNyRXLaqOQ9fPR3XMfVm5u29jsIjRghsjATeVxkpeEtP/1bB1oC2uBk1TQuAxvfiC5/aAzjr8ZPMIgiCjLbNvxWZUJ/E7qQKBgGV8HsvFU8Nj2nWoepYDirXcGB7WtgHGckfFR8bgDgt77kkoSHWTKWLoWL/wmxaTS4zQj5kODwJyS1tmgnAnzJNR4HNkY+ehBeFgrlE/lK/BY6XY91tB7BvJM0SwHrarp4/Q3oHe6uB4Eyh40N9abuF6iggp/WAXsAVXTcH2hunDAoGBAMuS841i3/ZCAlqVtxnU3QeX++DuHGjfmKHB2nS9XXCETiWbHw/lBoGdza00IOFKiR66vsMhIltMepBMvP6BLLsVEB2S+kU5p7DOCaashK2kISo8D3e0oKp/AydAA4bQ6aSrok47GQAINN+omsUdweE4Ty8j3fl8rlGssJ+A2JbZAoGBALIGyws4Ns6VeLPWuS63ST8gcEoRUKgZfC5/zdJJHb3oPgxXDzukum669QyjFmuD+w5qQZ0SS/HMC+2J5JAR3F6Sh7Idx2V7GmBdxY5eqO4EPrCVs2pY37j0uq8L3Vil32MMbwoSLiA4vZp3IHYJukrKbTR6wfPEOTcgjVUbM2Fl" + END_PRIVATE_KEY;


console.log(publica);
console.log(privada);

publicKey.importKey(publica);
privateKey.importKey(privada);

const encrypted = privateKey.encryptPrivate(password, "base64");
const decrypted = publicKey.decryptPublic(encrypted, "utf8");


console.log("dado criptografado: ",encrypted);
console.log("dado descriptografado: ",decrypted);




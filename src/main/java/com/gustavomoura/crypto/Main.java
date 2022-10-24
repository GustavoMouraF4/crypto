package com.gustavomoura.crypto;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.xml.bind.DatatypeConverter;
import java.security.*;
import java.util.Base64;

public class Main {

    public static void main(String[] args) throws NoSuchAlgorithmException, NoSuchPaddingException, InvalidKeyException, IllegalBlockSizeException, BadPaddingException {

        //standard seed to always create the same keys
        String seed = "abcdefghijklmnoaabcdefghijklmnoa";
        SecureRandom secureRandom = new SecureRandom(seed.getBytes());

        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
        keyPairGenerator.initialize(2048, secureRandom);

        KeyPair keyPair = keyPairGenerator.generateKeyPair();
        System.out.println("Public Key: " + DatatypeConverter.printBase64Binary(keyPair.getPublic().getEncoded()));
        System.out.println("Private Key: " + DatatypeConverter.printBase64Binary(keyPair.getPrivate().getEncoded()));
        System.out.println();

        //password that will be encrypted
        String password = "Gustav0&M0oura$ç";
        //encrypted password that was generated in javaScript
        String encryptedPassword = "ZXZD7VZnJXQ+VRJ5PjucHls44ij2TaMOoOouTSyizYov6zHi9vEba00JqPcu8zquMWcQ5XWIRdeZCyyVh+cHctagUSmiSHuiVDhbBsOfU/+8pxBHmhcS38hj77CJmnk804ZonYD66S844SJqqH5XshCEerF9rxgQDSPfJVecskCuCBAaj+77tZyaR37C87C8QpvT5pgl1w8RigWsTTzFLe4saBC3Au1uzHurfTGzFgirTXWbtDimIc6xaFsLePqY4wFVNyWGffo+Gu2TP3luJONe3u8CoRPs/Tc/MX6JhACu2RnljfxIZPVnz9Y/waE7F22y83xI5r9OqZBg5Dkr6Q==";

        // decryption
        byte[]  encryptedPasswordDecoded = Base64.getDecoder().decode(encryptedPassword);
        Cipher cipherDecrypt = Cipher.getInstance("RSA");
        cipherDecrypt.init(Cipher.DECRYPT_MODE, keyPair.getPublic());
        byte[] result = cipherDecrypt.doFinal(encryptedPasswordDecoded);
        String decryptedPassword =  new String(result);
        System.out.println("Decrypted password: " + decryptedPassword);


    }
}
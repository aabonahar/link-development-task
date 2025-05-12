import { Injectable } from '@angular/core';
import SecureStorage from 'secure-web-storage';
import * as CryptoJS from 'crypto-js';

const SECRET_KEY = 'secret_key'; 
@Injectable({
  providedIn: 'root'
})
export class CryptoStorageService {
  constructor() {}

  public secureStorage = new SecureStorage(localStorage, {
    hash: (key: string): string => {
      return CryptoJS.SHA256(key).toString();
    },

    encrypt: (data: string): string => {
      return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
    },

    decrypt: (data: string): string => {
      const bytes = CryptoJS.AES.decrypt(data, SECRET_KEY);
      return bytes.toString(CryptoJS.enc.Utf8);
    }
  });
}

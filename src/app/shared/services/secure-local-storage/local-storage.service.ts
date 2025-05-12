import { Injectable } from '@angular/core';
import { CryptoStorageService } from './crypto-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorgaeService {
  constructor(private _cryptoLocalStorage: CryptoStorageService) { }
  setJsonValue(key: string, value: any) {
    this._cryptoLocalStorage.secureStorage.setItem(key, value);
  };

  getJsonValue(key: string) {
    return this._cryptoLocalStorage.secureStorage.getItem(key);
  };

  removeJsonValue(key:string){
    return this._cryptoLocalStorage.secureStorage.removeItem(key)
  };

  clearToken() {
    return this._cryptoLocalStorage.secureStorage.clear();
  };
}

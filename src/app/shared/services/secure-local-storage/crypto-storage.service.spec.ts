/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CryptoStorageService } from './crypto-storage.service';

describe('Service: CryptoStorage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptoStorageService]
    });
  });

  it('should ...', inject([CryptoStorageService], (service: CryptoStorageService) => {
    expect(service).toBeTruthy();
  }));
});

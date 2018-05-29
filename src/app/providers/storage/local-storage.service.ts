import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Injectable()
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

	get(key: string) {
		return this.storage.get(key);
	}

	save(key: string, value: string) {
		this.storage.set(key, value);
	}

	clear(key: string) {
  		this.storage.remove(key);
	}
}

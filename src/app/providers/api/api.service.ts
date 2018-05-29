import { Injectable } from '@angular/core';
import { GlobalConstants } from '../../constants/global.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService<T> {

	constructor(protected http: HttpClient) { }

	private buildURL(endpoint: string) {
		return GlobalConstants.API.BASE_URL + endpoint;
	}

	public get<T>(endpoint: string): Observable<T> {
		const url = this.buildURL(endpoint);

		return this.http.get<T>(url);
	}

	public post<T>(endpoint: string, obj: any): Observable<T> {
		const url = this.buildURL(endpoint);

		return this.http.post<T>(url, JSON.stringify(obj));
	}

	public put<T>(endpoint: string, obj: any): Observable<T> {
		const url = this.buildURL(endpoint);

		return this.http.put<T>(url, JSON.stringify(obj));
	}

	public delete<T>(endpoint: string): Observable<T> {
		const url = this.buildURL(endpoint);

		return this.http.delete<T>(url);
	}
}

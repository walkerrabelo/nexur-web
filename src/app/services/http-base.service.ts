import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
export class HttpBaseService<T> {

    protected API: string;

    constructor(
        protected http: HttpClient,
        protected endpoint: string,
        protected idName: string  /* Woraround to fix id names */) {
        this.API = `${environment.api_url}/${this.endpoint}`;
    }

    getById(id: string) {
        return this.http.get<T>(`${this.API}/view?id=${id}`).pipe(take(1));
    }

    list(): Observable<T[]> {
        return this.http.get<T[]>(`${this.API}/index`);
    }

    protected create(record: T): Observable<T> {
        const url = `${this.API}/create`;
        return this.http.post<T>(url, record).pipe(take(1));
    }

    protected update(record: T): Observable<T> {
        // tslint:disable-next-line: no-string-literal
        const id = record[this.idName];
        const url = `${this.API}/update?id=${id}`;
        return this.http.post<T>(url, record)
        .pipe(take(1));
    }

    save(record: T): Observable<T> {
        // tslint:disable-next-line: no-string-literal
        if (record[this.idName]) {
            return this.update(record);
        }
        return this.create(record);
    }

    delete(id: string) {
        return this.http.get<T>(`${this.API}/delete?id=${id}`).pipe(take(1));
    }
}

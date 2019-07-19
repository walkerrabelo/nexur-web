import { HttpClient } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';

export class HttpBaseService<T> {

    private readonly API_BASE = 'https://api.nexur.com.br/';
    private API: string;

    constructor(protected http: HttpClient, private endpoint: string) {
        this.API = `${this.API}/${this.endpoint}`;
    }

    getById(id: string) {
        return this.http.get<T>(`${this.API}/view?id=${id}`).pipe(take(1));
    }

    list() {
        return this.http.get<T[]>(`${this.API}/index`);
    }

    private create(record: T) {
        return this.http.post(`${this.API}/create`, record).pipe(take(1));
    }

    private update(record: T) {
        // tslint:disable-next-line: no-string-literal
        return this.http.post(`${this.API}/update?id=${record['id']}`, record)
        .pipe(take(1));
    }

    save(record: T) {
        // tslint:disable-next-line: no-string-literal
        if (record['id']) {
            return this.update(record);
        }
        return this.create(record);
    }

    delete(id: string) {
        return this.http.get<T>(`${this.API}/delete?id=${id}`).pipe(take(1));
    }
}

import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from '../shared/loader/loader.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    public toasterService: ToastrService,
    private loaderService: LoaderService
    ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.showLoader();
    return next.handle(req).pipe(
      tap(evt => {
        console.log(evt);
        if (evt instanceof HttpResponse) {
          this.onEnd();
          if (evt.body && evt.body.success) {
            this.toasterService.success(
              evt.body.success.message,
              evt.body.success.title,
              { positionClass: 'toast-bottom-center' }
            );
          }
        }
      }),
      catchError((err: any) => {
        this.onEnd();
        console.log(err);
        if (err instanceof HttpErrorResponse) {
          try {
            if (err.status === 409) {
              this.toasterService.error('Nome de usuário já existe', err.error.title, {
                positionClass: 'toast-bottom-center'
              });
            } else {
              this.toasterService.error(err.error.message, err.error.title, {
                positionClass: 'toast-bottom-center'
              });
            }
          } catch (e) {
            console.log('Deu ruim...');
            this.toasterService.error('Ops ! Deu algo errado... :(.', '', {
              positionClass: 'toast-bottom-center'
            });
          }
          // log error
        }
        return of(err);
      })
    );
  }

  private onEnd(): void {
    this.hideLoader();
  }
  private showLoader(): void {
    this.loaderService.show();
  }
  private hideLoader(): void {
    this.loaderService.hide();
  }
}

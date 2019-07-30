import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderService } from './shared/loader/loader.service';
import { LoaderState } from './shared/loader/loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  title = 'Nexur';

  showLoader = false;
  private subscription: Subscription;
  constructor(private loaderService: LoaderService) { }
  ngOnInit() {
    this.subscription = this.loaderService.loaderState
    .subscribe((state: LoaderState) => {
      this.showLoader = state.show;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

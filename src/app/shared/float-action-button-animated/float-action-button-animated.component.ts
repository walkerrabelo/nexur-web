import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-float-action-button-animated',
  templateUrl: './float-action-button-animated.component.html',
  styleUrls: ['./float-action-button-animated.component.css']
})
export class FloatActionButtonAnimatedComponent implements OnInit {

  @Input()
  link = '';
  @Input()
  tooltip = '';

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercicio-drag-drop-item',
  templateUrl: './exercicio-drag-drop-item.component.html',
  styleUrls: ['./exercicio-drag-drop-item.component.css']
})
export class ExercicioDragDropItemComponent implements OnInit {

  @Input()
  showSubTitle = true;
  constructor() { }

  ngOnInit() {
  }

}

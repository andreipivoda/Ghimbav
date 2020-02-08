import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() letter:string;
  @Input() title:string;
  constructor() { }

  ngOnInit(): void {
  }

}

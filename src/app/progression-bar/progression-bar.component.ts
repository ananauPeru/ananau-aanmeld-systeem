import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progression-bar',
  templateUrl: './progression-bar.component.html',
  styleUrls: ['./progression-bar.component.scss']
})
export class ProgressionBarComponent implements OnInit {

  @Input() waarde: number;
  @Input() stap: number;
  constructor() { }

  ngOnInit() {
  }

}

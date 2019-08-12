import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.css']
})
export class SkillBarComponent implements OnInit {

  title = 'materialApp'; 
  mode = 'determinate';

  @Input() color: string = '';
  @Input() value: number;
  @Input() label: string = '';

  constructor() { }

  ngOnInit() {
  }

}

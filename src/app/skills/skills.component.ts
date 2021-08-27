import {Component, Input, OnInit} from '@angular/core';
import {SkillsService} from '../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() img?: string;
  @Input() title?: string;
  @Input() color?: string;


  constructor(private skillsService: SkillsService) {
  }

  ngOnInit(): void {

  }

}

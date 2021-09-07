import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input() cel: number;
@Input() fer: number;

  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }

  ngOnChange(changes: SimpleChanges)  {
     // this.fer = (this.cel * 9) / 5 + 32;
    console.log(changes.cel.currentValue);


  }

  print(event: Event) {
    console.log(event);

  }
}

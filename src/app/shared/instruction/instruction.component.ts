import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.data);
  }

}

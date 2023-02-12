import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GroupHostDirective } from '../group-host.directive';
import { ComponentService } from '../shared/component.service';
import { InstructionComponent } from '../shared/instruction/instruction.component';
import { DatepickerComponent } from '../shared/datepicker/datepicker.component';
import { InputComponent } from '../shared/input/input.component';
import { RadioComponent } from '../shared/radio/radio.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  currentIndex: number = 0;

  @Input() group: any;

  @ViewChild(GroupHostDirective, {static: true}) groupHost!: GroupHostDirective

  constructor(private componentService: ComponentService) { }

  ngOnInit(): void {
    console.log(this.group.elements);
    this.loadComponent(this.currentIndex);
  }

  loadComponent(index: number){
    const viewContainerRef = this.groupHost.viewContainerRef;
    // viewContainerRef.clear();

    const type = this.group.elements[index].question ? this.group.elements[index].question.questionGraphic : this.group.elements[index].type;
    const label = this.group.elements[index].question ? this.group.elements[index].question.questionLabel : 'Instructions';
    const groupItem = this.componentService.getComponent(type, label);
    const componentRef = viewContainerRef.createComponent(groupItem.component);
    componentRef.instance.data = groupItem.data;
    if(this.currentIndex!=this.group.elements.length-1) {
      this.currentIndex++;
      this.loadComponent(this.currentIndex);
    }
  }

  getComponent(obj: any): any{
    // return obj.question ? this.componentService.getComponent(obj.question.questionGraphic, 'text') : this.componentService.getComponent(obj.type, 'text');
    const strComp = obj.question ? obj.question.questionGraphic : obj.type;

    if(strComp.toLowerCase() === 'instructions' || strComp.toLowerCase() === 'text'){
      return InstructionComponent;
    } else if(strComp.toLowerCase() === 'date picker'){
      return DatepickerComponent;
    }else if(strComp.toLowerCase() === 'number'){
      return InputComponent;
    }else if(strComp.toLowerCase() === 'radio button'){
      return RadioComponent;
    }
  }

}

import { Injectable } from '@angular/core';
import { InstructionComponent } from './instruction/instruction.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { GroupItem } from "../group/group-Item";

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor() { }

  // getItemObj(obj: any): any{
  //   const componentName = obj.question ? obj.question.questionGraphic : obj.type;
  //   const item = {
  //     component: this.getComponent(componentName),
  //     data: {
  //       question: "Hello World"
  //     }
  //   }
  //   return item;
  // }

  getComponent(type: string, label: string){
    if(type.toLowerCase() === 'instructions') {
      return new GroupItem(
        InstructionComponent, { question: label }
      )
    }else if(type.toLowerCase() === 'date picker'){
      return new GroupItem(
        DatepickerComponent, { question: label }
      )
    }else if(type.toLowerCase() === 'number'){
      return new GroupItem(
        InputComponent, { question: label }
      )
    }else if(type.toLowerCase() === 'radio button'){
        return new GroupItem(
          RadioComponent, { question: label }
        )
    }else{
      return new GroupItem(
        InstructionComponent, { question: label }
      )
    }
  }
}

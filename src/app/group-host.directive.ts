import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[groupHost]'
})
export class GroupHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}

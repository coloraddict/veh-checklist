import { Component, OnInit } from '@angular/core';
import { ChecklistService } from '../checklist.service';
import { GroupItem } from '../group/group-Item';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  checklist: any;
  group: GroupItem[] = [];

  constructor(private checklistService: ChecklistService) { }

  ngOnInit(): void {
    this.checklistService.getChecklist().subscribe(result => {
      this.checklist = result;
      this.group = this.checklist.groups[0];
      console.log(this.checklist);
    })
  }

}

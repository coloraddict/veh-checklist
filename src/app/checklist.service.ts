import { Injectable } from '@angular/core';
import checklist from './_files/checklist.json';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  _checklist = checklist;

  constructor() { }

  getChecklist(){
    return of(checklist);
  }
}

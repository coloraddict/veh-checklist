import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { HomeComponent } from './home/home.component';
import { GroupComponent } from './group/group.component';
import { GroupHostDirective } from './group-host.directive';
import { DatepickerComponent } from './shared/datepicker/datepicker.component';
import { InstructionComponent } from './shared/instruction/instruction.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';

@NgModule({
  declarations: [
    AppComponent,
    ChecklistComponent,
    HomeComponent,
    GroupComponent,
    GroupHostDirective,
    DatepickerComponent,
    InstructionComponent,
    InputComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

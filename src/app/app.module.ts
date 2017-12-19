import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FamilyGroupService } from './services/family-group.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule
  ],
  providers: [FamilyGroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }

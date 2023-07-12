import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ListHomeComponent } from './list/pages/list-home.component';
import { AddFormComponent } from './list/components/add-form/add-form.component';

@NgModule({
  declarations: [AppComponent, ListHomeComponent, AddFormComponent],
  imports: [BrowserModule, MatButtonModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

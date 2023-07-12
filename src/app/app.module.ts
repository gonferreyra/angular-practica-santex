import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ListHomeComponent } from './list/pages/list-home.component';

@NgModule({
  declarations: [AppComponent, ListHomeComponent],
  imports: [BrowserModule, MatButtonModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

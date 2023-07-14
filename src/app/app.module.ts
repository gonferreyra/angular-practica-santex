import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ListHomeComponent } from './list/pages/list-home.component';
import { AddFormComponent } from './list/components/add-form/add-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [AppComponent, ListHomeComponent, AddFormComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

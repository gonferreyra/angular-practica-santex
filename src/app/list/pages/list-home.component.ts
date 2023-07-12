import { Component, OnInit } from '@angular/core';
import { PriceList } from '../interfaces/list.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.scss'],
})
export class ListHomeComponent implements OnInit {
  public list: PriceList[] = [
    {
      name: 'Clutch',
      price: '500',
    },
    {
      name: 'Compressor',
      price: '180',
    },
  ];
  public isListShowing: boolean = false;

  public newItemForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: ['', [Validators.required, Validators.minLength(2)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadFromLocalStorage();
  }

  // Validaciones de errores
  isNotValidField(field: string): boolean | null {
    return (
      this.newItemForm.controls[field].errors &&
      this.newItemForm.controls[field].touched
    );
  }

  showList() {
    this.isListShowing = !this.isListShowing;
  }

  onSubmit() {
    if (this.newItemForm.invalid) {
      this.newItemForm.markAllAsTouched();
      return;
    }
    this.list.push(this.newItemForm.value);
    this.saveToLocalStorage();
    this.newItemForm.reset();
  }

  public saveToLocalStorage() {
    localStorage.setItem('list', JSON.stringify(this.list));
  }

  public loadFromLocalStorage() {
    if (!localStorage.getItem('list')) {
      return;
    }

    this.list = JSON.parse(localStorage.getItem('list')!);
  }
}

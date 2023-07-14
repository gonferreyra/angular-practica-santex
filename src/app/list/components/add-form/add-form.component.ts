import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'list-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent {
  public newItemForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: ['', [Validators.required, Validators.minLength(2)]],
  });

  constructor(private fb: FormBuilder, private listService: ListService) {}

  // Validaciones de errores
  isNotValidField(field: string): boolean | null {
    return (
      this.newItemForm.controls[field].errors &&
      this.newItemForm.controls[field].touched
    );
  }

  onSubmit() {
    if (this.newItemForm.invalid) {
      this.newItemForm.markAllAsTouched();
      return;
    }
    this.listService.list.push(this.newItemForm.value);
    this.listService.saveToLocalStorage();
    this.newItemForm.reset();
    // To make error disapear after reset the form
    Object.keys(this.newItemForm.controls).forEach((key) => {
      this.newItemForm.controls[key].setErrors(null);
    });
  }
}

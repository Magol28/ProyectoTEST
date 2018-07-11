import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn  } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  orders = [
    { id: 1, name: 'order 1' },
    { id: 2, name: 'order 2' },
    { id: 3, name: 'order 3' },
    { id: 4, name: 'order 4' },
    { id: 5, name: 'order 1' },
    { id: 6, name: 'order 2' },
    { id: 7, name: 'order 3' },
    { id: 8, name: 'order 4' },
    { id: 9, name: 'order 1' },
    { id: 10, name: 'order 2' },
    { id: 11, name: 'order 3' },
    { id: 12, name: 'order 4' }
  ];
  constructor(private formBuilder: FormBuilder) { 
    const controls = this.orders.map(c => new FormControl(false));
    controls[0].setValue(true);

    this.form = this.formBuilder.group({
      orders: new FormArray(controls, minSelectedCheckboxes(1))
    });
  }

  ngOnInit() {
  }
  submit() {
    const selectedOrderIds = this.form.value.orders
      .map((v, i) => v ? this.orders[i].id : null)
      .filter(v => v !== null);

    console.log(selectedOrderIds);
  }
}
function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      .map(control => control.value)
      .reduce((prev, next) => next ? prev + next : prev, 0);

    return totalSelected >= min ? null : { required: true };
  };

  return validator;
}
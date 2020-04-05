import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loveCalculatorForm: FormGroup;
  errorMessage: any = {
    required: 'Required',
    minlength: 'Min length is',
    maxLength: 'Max length is'
  }


  validation: any = {
    nameMinLength: 2,
    nameMaxLength: 20
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initLoveCalculatorForm();
  }

  initLoveCalculatorForm() {
    this.loveCalculatorForm = this.formBuilder.group({
      yourName: ['', Validators.compose([Validators.required, Validators.maxLength(this.validation.nameMaxLength), Validators.minLength(this.validation.nameMinLength)])],
      crushName: ['', Validators.compose([Validators.required, Validators.maxLength(this.validation.nameMaxLength), Validators.minLength(this.validation.nameMinLength)])]
    });
  }


  calculateLovePercentage(loveForm) {
    if (loveForm.status === 'VALID') {
      var form = loveForm;
      var reqObj = {
        fullname: form.get('yourName').value,
        email: form.get('crushName').value
      };
    }
  }

}

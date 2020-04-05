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

  showLoveResult : boolean = true;
  firstName : string = "Raj";
  lastName : String = "Roja"
  finalScore : any = 74;

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
        var yourName = this.trimAll(form.get('yourName').value);
        var crushName =  this.trimAll(form.get('crushName').value);

        this.firstName = yourName;
        this.lastName = crushName;

        yourName= yourName.toLowerCase();
        crushName= crushName.toLowerCase();
        var totalNum= this.getNum(yourName) * this. getNum(crushName);

        this.initLoveCalculatorForm();

        this.showLoveResult = true;
        this.finalScore = totalNum % 100;


    }
  }



  trimAll(name) {
    while (name.substring(0, 1) == " ") { name = name.substring(1, name.length) }
    while (name.substring(name.length - 1, name.length) == " ") { name = name.substring(0, name.length - 1) }
    return name;
  }

  getNum(name) {
    var outputNum = 0;
    for (var i = 0; i < name.length; i++) { outputNum += name.charCodeAt(i) }
    return outputNum;
  }

}

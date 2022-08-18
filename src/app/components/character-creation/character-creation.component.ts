import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css'],
})
export class CharacterCreationComponent implements OnInit {
  form: FormGroup;
  characterNameControl = new FormControl('');
  seasons: any = [
    {
      value: 1,
      text: 'Spring',
    },
    {
      value: 2,
      text: 'Summer',
    },
    {
      value: 3,
      text: 'Autumn',
    },
    {
      value: 4,
      text: 'Winer',
    },
  ];

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      farm: ['Crescent', Validators.required],
      name: ['Cynthia', Validators.required],
      gender: ['nb', Validators.required],
      season: [2, Validators.required],
      birthDate: [
        1,
        [Validators.required, Validators.min(1), Validators.max(28)],
      ],
    });
  }

  ngOnInit() {}

  onSubmit(): void {
    console.log(this.form);
  }

  keyPressNumbers(event) {
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
}

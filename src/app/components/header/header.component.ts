import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  logoImage = '../../../assets/image/logo.png';

  searchForm: FormGroup;

  constructor() {
    this.searchForm = new FormGroup({
      "search": new FormControl('', Validators.required)
    });
  }
  submit() {
    console.log(this.searchForm);
  }

  ngOnInit(): void {
  }
}

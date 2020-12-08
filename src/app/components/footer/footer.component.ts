import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  logoFooter: string = '../../../assets/image/logo-footer.png';
  linkCompany: string = 'https://htc-cs.ru';

  constructor() { }

  ngOnInit(): void {
  }

}

import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements AfterViewInit {

  @ViewChild('notFound') notFound?: ElementRef;
  private fullHeightWindow = 0;
  private headerHeight = 0;
  private footerHeight = 0;
  heightContainer = 0;

  constructor() { }

  ngAfterViewInit(): void {
    if (this.notFound) {
      const height = document.querySelector('.header') as HTMLElement;
      const footer = document.querySelector('.footer') as HTMLElement;

      this.fullHeightWindow = window.innerHeight;
      this.headerHeight = !!height ? height.offsetHeight : 0;
      this.footerHeight = !!footer ? footer.offsetHeight + 72 : 0;

      this.notFound.nativeElement.style.height = this.fullHeightWindow - (this.headerHeight + this.footerHeight) + 'px';
      console.log(this.headerHeight, this.footerHeight);
    }
  }
}

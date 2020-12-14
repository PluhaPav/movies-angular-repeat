import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {

  logoImage = '../../../assets/image/logo.png';

  searchForm: FormGroup;

  constructor(private searchService: SearchService) {
    this.searchForm = new FormGroup({
      search: new FormControl('', Validators.required)
    });
    this.searchForm.get('search')?.valueChanges.pipe(
      debounceTime(500),
    ).subscribe(result => this.searchService.setSearchString(result));
  }

  submit(): void {
    this.searchService.setSearchString(this.searchForm.value.search);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // fromEvent(this.searchForm.nativeElement, 'keyup')
    //   .pipe(
    //     filter(Boolean),
    //     debounceTime(1500),
    //     distinctUntilChanged(),
    //     tap((event: KeyboardEvent) => {
    //       console.log(event)
    //       console.log(this.searchInput.nativeElement.value)
    //     })
    //   )
    //   .subscribe();
  }
}

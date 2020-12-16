import { Component, } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

import { SearchService } from 'src/app/services/search/search.service';
import { TabsService } from 'src/app/services/tabs/tabs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  logoImage = '../../../assets/image/logo.png';

  searchForm: FormGroup;

  constructor(
    private router: Router,
    private searchService: SearchService,
    private tabsService: TabsService
  ) {
    this.searchForm = new FormGroup({
      search: new FormControl('', Validators.required)
    });
    this.searchForm.get('search')?.valueChanges.pipe(
      debounceTime(500),
    ).subscribe(result => this.searchService.setSearchString(result));
  }

  submit(): void {
    this.searchService.setSearchString(this.searchForm.value.search);
    this.router.navigate(['/']);
    this.tabsService.setIndex(0);
  }
}

import { Component, DoCheck } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

import { TabsService } from 'src/app/services/tabs/tabs.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements DoCheck {
  currentIndexTab = 0;
  constructor(private tabsService: TabsService) {
    this.currentIndexTab = tabsService.getIndex();
  }
  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.tabsService.setIndex(tabChangeEvent.index);
  }
  ngDoCheck(): void {
    this.currentIndexTab = this.tabsService.getIndex();
  }
}

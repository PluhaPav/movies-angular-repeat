import { Component, DoCheck } from '@angular/core';
import { ModalAuthorizationService } from './services/modals/modal-authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {

  modalVisible: boolean;

  constructor(private modalAuthorizationService: ModalAuthorizationService) {
    this.modalVisible = modalAuthorizationService.getStatusModal();
  }

  ngDoCheck(): void {
    this.modalVisible = this.modalAuthorizationService.getStatusModal();
  }

}

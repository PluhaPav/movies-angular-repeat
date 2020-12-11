import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalAuthorizationService {
  private visibleModal = false;

  toggleModal(): void {
    this.visibleModal = !this.visibleModal;
    document.body.style.overflow = this.visibleModal ? 'hidden' : 'auto';
    document.body.style.paddingRight = this.visibleModal ? '16px' : '0';
  }

  hide(): void {
    this.visibleModal = false;
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0';
  }

  getStatusModal(): boolean {
    return this.visibleModal;
  }
}

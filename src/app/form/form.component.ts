import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  modalState: 'none' | 'grid' = 'grid';

  closeModal(modal: HTMLElement) {
    this.modalState = 'none';
  }

  @HostListener('window:keydown.escape', ['$event'])
  handleEscape(event: KeyboardEvent) {
    this.modalState = 'none';
  }
}

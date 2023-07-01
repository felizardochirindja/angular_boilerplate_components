import { Component, TemplateRef } from '@angular/core';
import { NavItem } from './core/design-system/nav/nav.types';
import { ConfirmModalService } from './core/design-system/confirm-modal/shared/confirm-modal.service';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
    constructor(
        private modalService: ConfirmModalService
    ) {}

    openModal(modalTemplate: TemplateRef<any>) {
        this.modalService.open(modalTemplate, {
            message: "message",
            actions: {
                confirm: { label: "confirmar", color: 'success' }
            },
            dismissible: true,
        }).subscribe(action => {
            console.log('modal action', action);
        })
    }
}

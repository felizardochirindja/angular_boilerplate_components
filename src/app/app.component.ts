import { Component, TemplateRef } from '@angular/core';
import { NavItem } from './core/design-system/nav/nav.types';
import { ConfirmModalService } from './core/design-system/confirm-modal/shared/confirm-modal.service';

@Component({
  selector: 'app-root',
  template: `
      <button (click)="openModal(modalTemplate)">open modal</button>
      <router-outlet></router-outlet>

      <ng-template #modalTemplate/>
  `,
})
export class AppComponent {
    navItems: NavItem[] = [
        {
            icon: 'icon 1',
            type: 'normal',
            link: 'teste',
            title: 'title',
            subtitle: 'subtitle',
            active: true,
            disabled: false,
            badge: {
                text: '28',
                type: 'info'
            },
            hidden: (item: NavItem) => {                
                return false
            },
            children: [],
        },
        {
            type: 'space',
            children: [],
            hidden(item) {
                return false
            },
        },
        {
            icon: 'icon 2',
            type: 'pack',
            link: 'teste 2',
            title: 'title 2 pack',
            subtitle: 'subtitle 2',
            active: false,
            disabled: false,
            hidden: (item: NavItem) => {                
                return false;
            },
            children: [
                {
                    icon: 'icon 2.1',
                    type: 'normal',
                    link: 'teste 2.1',
                    title: 'title 2.1 pack',
                    subtitle: 'subtitle 2.1',
                    active: false,
                    disabled: false,
                    badge: {
                        text: '12',
                        type: 'warning'
                    },
                    hidden: (item: NavItem) => {
                        return false
                    },
                    children: [],
                },
                {
                    type: 'divide',
                    children: [],
                    hidden: (item: NavItem) => {
                        return false
                    },
                },
                {
                    icon: 'icon 2.2',
                    type: 'expand',
                    link: 'teste 2.2',
                    title: 'title 2.2 pack',
                    subtitle: 'subtitle 2.2',
                    active: false,
                    disabled: false,
                    badge: {
                        text: '12',
                        type: 'warning'
                    },
                    hidden: (item: NavItem) => {
                        return false;
                    },
                    children: [
                        {
                            icon: 'icon 2.1.1',
                            type: 'normal',
                            link: 'teste 2.1.1',
                            title: 'title 2.1.1',
                            subtitle: 'subtitle 2.1.1',
                            active: false,
                            disabled: true,
                            badge: {
                                text: '12',
                                type: 'warning'
                            },
                            hidden: (item: NavItem) => {
                                return false
                            },
                            children: [],
                        },
                        {
                            icon: 'icon 2.1.2',
                            type: 'normal',
                            link: 'teste 2.1.2',
                            title: 'title 2.1.2',
                            subtitle: 'subtitle 2.1.2',
                            active: false,
                            disabled: false,
                            badge: {
                                text: '12',
                                type: 'warning'
                            },
                            hidden: (item: NavItem) => {
                                return false
                            },
                            children: [],
                        },
                    ],
                },
            ],
        },
    ]

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

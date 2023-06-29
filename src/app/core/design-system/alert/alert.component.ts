import { Component, Input } from '@angular/core';
import { AlertAppearance, AlertIcon, AlertType } from './alert.types';

@Component({
  selector: 'ds-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() type: AlertType = 'success'
  @Input() appearance: AlertAppearance = 'fill'
  @Input() showIcon: boolean = false

  getIconByType(): AlertIcon {
    switch (this.type) {
      case 'success':
        return AlertIcon.success
      case 'info':
        return AlertIcon.info
      case 'error':
        return AlertIcon.error
    }
  }

  dismiss() {

  }
}

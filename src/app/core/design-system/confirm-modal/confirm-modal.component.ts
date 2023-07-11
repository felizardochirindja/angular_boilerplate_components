import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalConfig } from './shared/confirm-modal.types';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent {
  config!: ConfirmModalConfig

  @Output() closed = new EventEmitter()
  @Output() submited = new EventEmitter()

  constructor(
    private elementRef: ElementRef
  ) {}

  close() {
    this.elementRef.nativeElement.remove()
    this.closed.emit()
  }

  confirm() {
    this.elementRef.nativeElement.remove()
    this.submited.emit()
  }
}

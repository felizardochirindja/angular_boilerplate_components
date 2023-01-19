import { ItemService } from './item.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListCardComponent } from './item-list-card.component';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, ItemListCardComponent],
  template: `
    <h2>Discovery items</h2>

    <app-item-list-card *ngFor="let item of itemService.items; let i = index" [item]="item" [itemIndex]="i"></app-item-list-card>
  `,
})
export class ItemListComponent {
  constructor(readonly itemService: ItemService) {}
}

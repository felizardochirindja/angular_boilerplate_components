import { Item } from './item.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-list-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <ul>
      <li>{{ item.name }}</li>
      <li> {{ item.description }}</li>
    <ul>
    
    <a href="/details/{{ itemIndex }}">more</a>
  `,
})
export class ItemListCardComponent {
  @Input() item!: Item;
  @Input() itemIndex!: number;
}

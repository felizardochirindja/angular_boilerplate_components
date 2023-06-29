import { Component, Input } from '@angular/core';
import { NavItem } from '../../nav.types';
import { ExpandComponent } from '../expand/expand.component';
import { NormalComponent } from '../normal/normal.component';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'ds-pack-side-nav-item',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.css'],
  standalone: true,
  imports: [NormalComponent, ExpandComponent, NgIf, NgForOf]
})
export class PackComponent {
  @Input() navItem!: NavItem
}

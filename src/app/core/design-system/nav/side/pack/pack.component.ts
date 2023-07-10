import { Component, Input } from '@angular/core';
import { NavItem } from '../../nav.types';
import { ExpandSideNavItemComponent } from '../expand/expand-side-nav-item.component';
import { DefaultSideNavItemComponent } from '../default/default-side-nav-item.component';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'ds-pack-side-nav-item',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.css'],
  standalone: true,
  imports: [DefaultSideNavItemComponent, ExpandSideNavItemComponent, NgIf, NgForOf]
})
export class PackComponent {
  @Input() navItem!: NavItem
}

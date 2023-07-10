import { Component, Input } from '@angular/core';
import { NavItem } from '../../nav.types';
import { ExpandSideNavItemComponent } from '../expand/expand-side-nav-item.component';
import { DefaultSideNavItemComponent } from '../default/default-side-nav-item.component';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'ds-pack-side-nav-item',
  templateUrl: './pack-side-nav-item.component.html',
  styleUrls: ['./pack-side-nav-item.component.css'],
  standalone: true,
  imports: [DefaultSideNavItemComponent, ExpandSideNavItemComponent, NgIf, NgForOf]
})
export class PackSideNavItemComponent {
  @Input() navItem!: NavItem
}

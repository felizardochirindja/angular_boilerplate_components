import { Component, Input } from '@angular/core';
import { NavItem } from '../../nav.types';
import { ExpandSideNavItemComponent } from '../expand/expand-side-nav-item.component';
import { SimpleSideNavItemComponent } from '../empty/simple-side-nav-item.component';
import { NgForOf, NgIf } from '@angular/common';
import { SeparatorSideNavItemComponent } from '../separator/separator-side-nav-item.component';
import { SpaceSideNavItemComponent } from '../space/space-side-nav-item.component';

@Component({
  selector: 'ds-pack-side-nav-item',
  templateUrl: './pack-side-nav-item.component.html',
  styleUrls: ['../styles/fixed.css'],
  standalone: true,
  imports: [SimpleSideNavItemComponent, ExpandSideNavItemComponent, SeparatorSideNavItemComponent, SpaceSideNavItemComponent, NgIf, NgForOf]
})
export class PackSideNavItemComponent {
  @Input() navItem!: NavItem
}

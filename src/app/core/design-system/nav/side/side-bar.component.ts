import { NavItem, SideNavPosition } from '../nav.types';
import { Component, Input } from '@angular/core';
import { EmptySideNavItemComponent } from './empty/empty-side-nav-item.component';
import { JsonPipe, NgForOf, NgIf } from '@angular/common';
import { ExpandSideNavItemComponent } from './expand/expand-side-nav-item.component';
import { PackSideNavItemComponent } from './pack/pack-side-nav-item.component';

@Component({
  selector: 'ds-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-nav.component.css'],
  standalone: true,
  imports: [EmptySideNavItemComponent, ExpandSideNavItemComponent, PackSideNavItemComponent, NgForOf, NgIf, JsonPipe]
})
export class SideBarComponent {
  @Input() navItems: NavItem[] = []
  @Input() position: SideNavPosition = 'left'
}

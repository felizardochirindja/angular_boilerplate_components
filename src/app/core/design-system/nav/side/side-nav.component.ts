import { NavItem, SideNavPosition } from '../nav.types';
import { Component, Input } from '@angular/core';
import { DefaultSideNavItemComponent } from './default/default-side-nav-item.component';
import { JsonPipe, NgForOf, NgIf } from '@angular/common';
import { ExpandSideNavItemComponent } from './expand/expand-side-nav-item.component';
import { PackComponent } from './pack/pack.component';

@Component({
  selector: 'ds-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  standalone: true,
  imports: [DefaultSideNavItemComponent , ExpandSideNavItemComponent, PackComponent, NgForOf, NgIf, JsonPipe]
})
export class SideNavComponent {
  @Input() navItems: NavItem[] = []
  @Input() position: SideNavPosition = 'left' 
}

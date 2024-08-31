import { NavItem, SideNavPosition } from '../nav.types';
import { Component, Input } from '@angular/core';
import { SimpleSideNavItemComponent } from './empty/simple-side-nav-item.component';
import { JsonPipe, NgForOf, NgIf } from '@angular/common';
import { ExpandSideNavItemComponent } from './expand/expand-side-nav-item.component';
import { PackSideNavItemComponent } from './pack/pack-side-nav-item.component';
import { SeparatorSideNavItemComponent } from './separator/separator-side-nav-item.component';
import { SpaceSideNavItemComponent } from './space/space-side-nav-item.component';

@Component({
  selector: 'ds-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  standalone: true,
  imports: [SimpleSideNavItemComponent, ExpandSideNavItemComponent, PackSideNavItemComponent, SeparatorSideNavItemComponent, SpaceSideNavItemComponent, NgForOf, NgIf, JsonPipe]
})
export class SideBarComponent {
  @Input() navItems: NavItem[] = []
  @Input() position: SideNavPosition = 'left'
}

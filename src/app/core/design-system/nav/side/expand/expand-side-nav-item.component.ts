import { Component, Input } from '@angular/core';
import { NavItem } from '../../nav.types';
import { JsonPipe, NgClass, NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SimpleSideNavItemComponent } from '../empty/simple-side-nav-item.component';
import { SeparatorSideNavItemComponent } from '../separator/separator-side-nav-item.component';
import { SpaceSideNavItemComponent } from '../space/space-side-nav-item.component';

@Component({
  selector: 'ds-expand-side-nav-item',
  templateUrl: './expand-side-nav-item.component.html',
  styleUrls: ['../styles/fixed.css'],
  standalone: true,
  imports: [SimpleSideNavItemComponent, ExpandSideNavItemComponent, SeparatorSideNavItemComponent, SpaceSideNavItemComponent, NgClass, RouterLink, RouterLinkActive, NgIf,NgForOf, NgTemplateOutlet, JsonPipe]
})
export class ExpandSideNavItemComponent {
  @Input() navItem!: NavItem
  expanded: boolean = false

  toggleExpand(): void {
    console.log('clicked');
    
    this.expanded = !this.expanded
  }
}

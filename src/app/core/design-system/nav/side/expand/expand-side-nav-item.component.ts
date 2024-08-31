import { Component, Input } from '@angular/core';
import { NavItem } from '../../nav.types';
import { JsonPipe, NgClass, NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { EmptySideNavItemComponent } from '../empty/empty-side-nav-item.component';

@Component({
  selector: 'ds-expand-side-nav-item',
  templateUrl: './expand-side-nav-item.component.html',
  styleUrls: ['./expand-side-nav-item.component.css'],
  standalone: true,
  imports: [EmptySideNavItemComponent, ExpandSideNavItemComponent,  NgClass, RouterLink, RouterLinkActive, NgIf,NgForOf, NgTemplateOutlet, JsonPipe]
})
export class ExpandSideNavItemComponent {
  @Input() navItem!: NavItem
  expanded: boolean = false

  toggleExpand(): void {
    console.log('clicked');
    
    this.expanded = !this.expanded
  }
}

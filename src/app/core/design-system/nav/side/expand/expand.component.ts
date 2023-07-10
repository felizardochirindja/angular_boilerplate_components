import { Component, Input } from '@angular/core';
import { NavItem } from '../../nav.types';
import { JsonPipe, NgClass, NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DefaultSideNavItemComponent } from '../default/default-side-nav-item.component';

@Component({
  selector: 'ds-expand-side-nav-item',
  templateUrl: './expand.component.html',
  styleUrls: ['./expand.component.css'],
  standalone: true,
  imports: [DefaultSideNavItemComponent, ExpandComponent,  NgClass, RouterLink, RouterLinkActive, NgIf,NgForOf, NgTemplateOutlet, JsonPipe]
})
export class ExpandComponent {
  @Input() navItem!: NavItem
  expanded: boolean = false

  toggleExpand(): void {
    console.log('clicked');
    
    this.expanded = !this.expanded
  }
}

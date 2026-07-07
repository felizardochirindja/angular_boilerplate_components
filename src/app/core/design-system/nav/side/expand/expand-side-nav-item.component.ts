import { Component, Input } from '@angular/core';
import { NavItem } from '../../nav.types';
import { NgClass, NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { SimpleSideNavItemComponent } from '../simple/simple-side-nav-item.component';
import { SeparatorSideNavItemComponent } from '../separator/separator-side-nav-item.component';
import { SpaceSideNavItemComponent } from '../space/space-side-nav-item.component';

@Component({
  selector: 'ds-expand-side-nav-item',
  templateUrl: './expand-side-nav-item.component.html',
  styleUrls: ['../styles/fixed.css'],
  standalone: true,
  imports: [SimpleSideNavItemComponent, ExpandSideNavItemComponent, SeparatorSideNavItemComponent, SpaceSideNavItemComponent, NgClass, NgIf,NgForOf, NgTemplateOutlet]
})
export class ExpandSideNavItemComponent {
  @Input() navItem!: NavItem
  expanded: boolean = false

  toggleExpand(): void {    
    this.expanded = !this.expanded
  }
}

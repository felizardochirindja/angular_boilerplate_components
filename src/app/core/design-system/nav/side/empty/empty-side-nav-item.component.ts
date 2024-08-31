import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from '../../nav.types';

@Component({
  selector: 'ds-empty-side-nav-item',
  templateUrl: './empty-side-nav-item.component.html',
  styleUrls: ['./empty-side-nav-item.component.css'],
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive, NgIf, NgTemplateOutlet]
})
export class EmptySideNavItemComponent {
  @Input() navItem!: NavItem
}

import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from '../../nav.types';

@Component({
  selector: 'ds-simple-side-nav-item',
  templateUrl: './simple-side-nav-item.component.html',
  styleUrls: ['../styles/fixed.css'],
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive, NgIf, NgTemplateOutlet]
})
export class SimpleSideNavItemComponent {
  @Input() navItem!: NavItem
}

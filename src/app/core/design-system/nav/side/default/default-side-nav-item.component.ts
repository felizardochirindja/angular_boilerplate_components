import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from '../../nav.types';

@Component({
  selector: 'ds-normal-side-nav-item',
  templateUrl: './default-side-nav-item.component.html',
  styleUrls: ['./default-side-nav-item.component.css'],
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive, NgIf, NgTemplateOutlet]
})
export class DefaultSideNavItemComponent {
  @Input() navItem!: NavItem
}

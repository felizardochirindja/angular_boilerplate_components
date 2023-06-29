import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from '../../nav.types';

@Component({
  selector: 'ds-normal-side-nav-item',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.css'],
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive, NgIf, NgTemplateOutlet]
})
export class NormalComponent {
  @Input() navItem!: NavItem
}

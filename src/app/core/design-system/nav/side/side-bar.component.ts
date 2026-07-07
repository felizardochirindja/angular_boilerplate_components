import { NavItem, SideNavPosition } from '../nav.types';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { SimpleSideNavItemComponent } from './empty/simple-side-nav-item.component';
import { NgForOf, NgIf } from '@angular/common';
import { ExpandSideNavItemComponent } from './expand/expand-side-nav-item.component';
import { PackSideNavItemComponent } from './pack/pack-side-nav-item.component';
import { SeparatorSideNavItemComponent } from './separator/separator-side-nav-item.component';
import { SpaceSideNavItemComponent } from './space/space-side-nav-item.component';

@Component({
  selector: 'ds-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  standalone: true,
  imports: [SimpleSideNavItemComponent, ExpandSideNavItemComponent, PackSideNavItemComponent, SeparatorSideNavItemComponent, SpaceSideNavItemComponent, NgForOf, NgIf]
})
export class SideBarComponent {
  @Input() navItems: NavItem[] = []
  @Input() position: SideNavPosition = 'left'
  @Input() isOpen: boolean = true
  @Output() isOpenChange = new EventEmitter<boolean>()

  isMobile: boolean = window.innerWidth <= 768

  @HostListener('window:resize')
  onResize(): void {
    this.isMobile = window.innerWidth <= 768
    if (!this.isMobile) {
      this.isOpen = true
      this.isOpenChange.emit(true)
    }
  }

  closeNav(): void {
    this.isOpen = false
    this.isOpenChange.emit(false)
  }

  onItemClick(): void {
    if (this.isMobile) {
      this.closeNav()
    }
  }
}

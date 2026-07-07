import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../../../nav/side/side-bar.component';
import { NavItem } from '../../../nav/nav.types';

@Component({
  selector: 'ds-left-side-bar-skeleton',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SideBarComponent],
  templateUrl: './left-side-bar-skeleton.component.html',
  styleUrls: ['./left-side-bar-skeleton.component.css'],
})
export class LeftSideBarSkeletonComponent {
  navOpened: boolean = true;
  isMobile: boolean = window.innerWidth <= 768;

  navItems: NavItem[] = [
    {
      icon: '🏠',
      type: 'simple',
      link: '/example',
      title: 'Dashboard',
      subtitle: 'Overview',
      active: true,
      disabled: false,
      badge: {
        text: '28',
        type: 'info',
      },
      hidden: (item: NavItem) => false,
      children: [],
    },
    {
      type: 'space',
      children: [],
      hidden: () => false,
    },
    {
      icon: '📦',
      type: 'pack',
      link: '/products',
      title: 'Products',
      subtitle: 'Manage catalog',
      active: false,
      disabled: false,
      hidden: () => false,
      children: [
        {
          icon: '📋',
          type: 'simple',
          link: '/products/list',
          title: 'All Products',
          subtitle: 'Browse items',
          active: false,
          disabled: false,
          badge: {
            text: '12',
            type: 'warning',
          },
          hidden: () => false,
          children: [],
        },
        {
          type: 'separator',
          children: [],
          hidden: () => false,
        },
        {
          icon: '📂',
          type: 'expand',
          link: '/products/categories',
          title: 'Categories',
          subtitle: 'Organize',
          active: false,
          disabled: false,
          hidden: () => false,
          children: [
            {
              icon: '🏷️',
              type: 'simple',
              link: '/products/categories/electronics',
              title: 'Electronics',
              subtitle: 'Gadgets & devices',
              active: false,
              disabled: true,
              hidden: () => false,
              children: [],
            },
            {
              type: 'separator',
              hidden: () => false,
              children: [],
            },
            {
              icon: '👕',
              type: 'simple',
              link: '/products/categories/clothing',
              title: 'Clothing',
              subtitle: 'Apparel & fashion',
              active: false,
              disabled: false,
              hidden: () => false,
              children: [],
            },
          ],
        },
      ],
    },
    {
      type: 'separator',
      children: [],
      hidden: () => false,
    },
    {
      icon: '⚙️',
      type: 'simple',
      link: '/settings',
      title: 'Settings',
      subtitle: 'Preferences',
      active: false,
      disabled: false,
      hidden: () => false,
      children: [],
    },
  ];

  @HostListener('window:resize')
  onResize(): void {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.navOpened = true;
    }
  }

  toggleNav(): void {
    this.navOpened = !this.navOpened;
  }
}

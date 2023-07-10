import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from '../../../nav/side/side-nav.component';
import { NavItem } from '../../../nav/nav.types';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, SideNavComponent],
  templateUrl: './default-side-skeleton.component.html',
  styleUrls: ['./default-side-skeleton.component.css'],
})
export class DefaultSideSkeletonComponent {
  navOpened: boolean = true;
  
  navItems: NavItem[] = [
    {
      icon: 'icon 1',
      type: 'normal',
      link: 'teste',
      title: 'title',
      subtitle: 'subtitle',
      active: true,
      disabled: false,
      badge: {
        text: '28',
        type: 'info',
      },
      hidden: (item: NavItem) => {
        return false;
      },
      children: [],
    },
    {
      type: 'space',
      children: [],
      hidden(item) {
        return false;
      },
    },
    {
      icon: 'icon 2',
      type: 'pack',
      link: 'teste 2',
      title: 'title 2 pack',
      subtitle: 'subtitle 2',
      active: false,
      disabled: false,
      hidden: (item: NavItem) => {
        return false;
      },
      children: [
        {
          icon: 'icon 2.1',
          type: 'normal',
          link: 'teste 2.1',
          title: 'title 2.1 pack',
          subtitle: 'subtitle 2.1',
          active: false,
          disabled: false,
          badge: {
            text: '12',
            type: 'warning',
          },
          hidden: (item: NavItem) => {
            return false;
          },
          children: [],
        },
        {
          type: 'divide',
          children: [],
          hidden: (item: NavItem) => {
            return false;
          },
        },
        {
          icon: 'icon 2.2',
          type: 'expand',
          link: 'teste 2.2',
          title: 'title 2.2 pack',
          subtitle: 'subtitle 2.2',
          active: false,
          disabled: false,
          badge: {
            text: '12',
            type: 'warning',
          },
          hidden: (item: NavItem) => {
            return false;
          },
          children: [
            {
              icon: 'icon 2.1.1',
              type: 'normal',
              link: 'teste 2.1.1',
              title: 'title 2.1.1',
              subtitle: 'subtitle 2.1.1',
              active: false,
              disabled: true,
              badge: {
                text: '12',
                type: 'warning',
              },
              hidden: (item: NavItem) => {
                return false;
              },
              children: [],
            },
            {
              icon: 'icon 2.1.2',
              type: 'normal',
              link: 'teste 2.1.2',
              title: 'title 2.1.2',
              subtitle: 'subtitle 2.1.2',
              active: false,
              disabled: false,
              badge: {
                text: '12',
                type: 'warning',
              },
              hidden: (item: NavItem) => {
                return false;
              },
              children: [],
            },
          ],
        },
      ],
    },
  ];
}

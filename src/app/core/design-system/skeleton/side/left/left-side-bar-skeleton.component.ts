import { Component } from '@angular/core';
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
  
  navItems: NavItem[] = [
    {
      icon: 'icon 1',
      type: 'simple',
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
          type: 'simple',
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
          type: 'separator',
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
              type: 'simple',
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
              type: 'separator',
              hidden: (item: NavItem) => {
                return false;
              },
              children: [],
            },
            {
              icon: 'icon 2.1.2',
              type: 'simple',
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

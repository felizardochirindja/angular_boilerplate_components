export interface NavItem {
    title?: string
    subtitle?: string
    type: 'simple' | 'expand' | 'pack' | 'separator' | 'space'
    hidden: (item: NavItem) => boolean
    active?: boolean
    disabled?: boolean
    link?: string
    icon?: string
    badge?: {
        text: string
        type: 'info' | 'warning'
    };
    children: NavItem[]
}

export interface Nav {
    type: 'normal' | 'compact',
    navItems: NavItem[],
}

export type SideNavPosition = 'left' | 'right'

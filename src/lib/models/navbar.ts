
export type LinkNavigation = {
    type: 'link';
    name?: string;
    icon?: string;
    link: string;
    external?: boolean;
}

export type DropdownNavigation = {
    type: 'dropdown';
    id: string;
    name?: string;
    icon?: string;
    list: DropdownItem[];
}

export type DropdownItem = {
    name: string;
    link: string;
    external?: boolean;
}

export type Navigation = LinkNavigation | DropdownNavigation;

export type NavigationBar = {
    link?: string;
    name?: string;
    icon?: string;
    navigation?: Navigation[];
}

export type NavigationBarLazy = {
    link?: string;
    name?: string;
    icon?: string;
    navigation?: (Navigation | {type: string})[];
}

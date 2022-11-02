export type Variant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'orange' | 'light' | 'dark';

export interface MenuItem {
    key: string;
    label: string;
    url?: string;
    children?: MenuItem[];
}

// types
import { MenuItem } from './docs';

export const MENU_ITEMS: MenuItem[] = [
    {
        key: 'getting-started',
        label: 'Getting Started',
        children: [
            {
                key: 'introduction',
                label: 'Introduction',
                url: '/docs/introduction',
            },
            {
                key: 'quick-start',
                label: 'Quick Start',
                url: '/docs/quick-start',
            },
            {
                key: 'customization',
                label: 'Customization',
                url: '/docs/customization',
            },
            {
                key: 'routing',
                label: 'Routing',
                url: '/docs/routing',
            },
            {
                key: 'code-spliting',
                label: 'Code Spliting',
                url: '/docs/code-spliting',
            },
            {
                key: 'change-log',
                label: 'Change Log',
                url: '/docs/change-log',
            },
        ],
    },
    {
        key: 'style-guide',
        label: 'Style Guide',
        children: [
            {
                key: 'colors',
                label: 'Colors',
                url: '/docs/colors',
            },
            {
                key: 'typography',
                label: 'Typography',
                url: '/docs/typography',
            },
        ],
    },
    {
        key: 'components',
        label: 'Components',
        children: [
            {
                key: 'bootstrap',
                label: 'Bootstrap',
                url: '/docs/bootstrap',
            },
            {
                key: 'custom',
                label: 'Custom',
                url: '/docs/custom',
            },
            {
                key: 'plugins',
                label: 'Plugins',
                url: '/docs/plugins',
            },
        ],
    },
    {
        key: 'sections',
        label: 'Sections',
        children: [
            {
                key: 'navbars',
                label: 'Navbars',
                url: '/docs/navbars',
            },
            {
                key: 'heros',
                label: 'Heros',
                url: '/docs/heros',
            },
        ],
    },
];

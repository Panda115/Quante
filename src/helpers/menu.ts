// menu items
import { MENU_ITEMS } from '../types/docs/menu';

// types
import { MenuItem } from '../types/docs/docs';

const getMenuItems = () => {
    // NOTE - You can fetch from server and return here as well
    return MENU_ITEMS;
};

const findMenuItem = (menuItems: MenuItem[] | undefined, menuItemKey: MenuItem['key'] | undefined): MenuItem | null => {
    if (menuItems && menuItemKey) {
        for (var i = 0; i < menuItems.length; i++) {
            if (menuItems[i].key === menuItemKey) {
                return menuItems[i];
            }
            var found = findMenuItem(menuItems[i].children, menuItemKey);
            if (found) return found;
        }
    }
    return null;
};

export { getMenuItems, findMenuItem };

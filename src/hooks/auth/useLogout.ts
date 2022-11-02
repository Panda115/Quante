// helpers
import { logout as logoutApi } from '../../helpers';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';

export default function useLogout() {
    const api = new APICore();

    const logout = () => {
        const response = logoutApi();
        response
            .then(() => {
                api.setLoggedInUser(null);
                setAuthorization(null);
            })
            .catch((e) => {
                console.error(e);
            });
    };

    return [logout];
}

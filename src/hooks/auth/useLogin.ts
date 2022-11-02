// helpers
import { useState } from 'react';
import { login as loginApi } from '../../helpers';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';

export default function useLogin() {
    const api = new APICore();

    const [user, setUser] = useState();
    const [error, setError] = useState();

    const login = ({ email, password }: { email: string; password: string }) => {
        const response = loginApi({ email, password });
        response
            .then((response:any) => {
                setUser(response.data);
                api.setLoggedInUser(response.data);
                setAuthorization(response.data!['token']);
            })
            .catch((e) => {
                setError(e);
            });
    };

    return [user, error, login];
}

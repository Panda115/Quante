import { useState } from 'react';

// helpers
import { signup as signupApi } from '../../helpers';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';

export default function useSignup() {
    const api = new APICore();

    const [user, setUser] = useState();
    const [error, setError] = useState();

    const signup = ({ fullname, email, password }: { fullname: string; email: string; password: string }) => {
        const response = signupApi({ fullname, email, password });
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

    return [user, error, signup];
}

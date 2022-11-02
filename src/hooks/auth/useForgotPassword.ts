import { useState } from 'react';

// helpers
import { forgotPassword as forgotPasswordApi } from '../../helpers';
export default function useForgotPassword(): [string, string, boolean, ({ email }: { email: string }) => void] {
    const [resetPasswordSuccess, setResetPasswordSuccess] = useState('');
    const [error, setError] = useState('');
    const [passwordReset, setPasswordReset] = useState(false);

    const forgotPassword = ({ email }: { email: string }) => {
        const response = forgotPasswordApi({ email });
        response
            .then((response:any) => {
                setResetPasswordSuccess(response.data.message);
                setPasswordReset(true);
            })
            .catch((e) => {
                setError(e);
                setPasswordReset(false);
            });
    };

    return [resetPasswordSuccess, error, passwordReset, forgotPassword];
}

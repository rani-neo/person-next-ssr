import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { signIn, SignInInput } from 'aws-amplify/auth'; // Import signIn and SignInInput

import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Login = () => {
    const router = useRouter();
    const { user } = useAuthenticator((context) => [context.user]);

    useEffect(() => {
        const checkUser = async () => {
            try {
                // Provide input parameters (username/email and password) to signIn
                const input: SignInInput = {
                    username: 'username', // Replace with actual username or email
                    password: 'password', // Replace with actual password
                };
                await signIn(input);

                // If signIn succeeds, redirect to dashboard
                router.push('/dashboard');
            } catch (error) {
                // User is not logged in
                // Handle the error or leave it empty if no action is required
            }
        };
        checkUser();
    }, [router]); // Removed 'user' from dependencies as it's not used inside the useEffect

    return <Authenticator />;
};

export default Login;

import { useAuthenticator } from '@aws-amplify/ui-react-core';
import { Auth } from 'aws-amplify';
import { useNavigation } from 'next/navigation'; // Use next/navigation instead of next/router
import { useEffect } from 'react';
import React from 'react';

const withAuth = (WrappedComponent: any) => {
    const WrapperComponent = (props: any) => {
        const navigation = useNavigation(); // Use useNavigation hook

        if (typeof window !== 'undefined') {
            const { user } = useAuthenticator((context: { user: any }) => [context.user]);

            useEffect(() => {
                const checkAuth = async () => {
                    try {
                        await Auth.currentAuthenticatedUser();
                    } catch (err) {
                        navigation.navigate('/login'); // Use navigation.navigate instead of router.push
                    }
                };

                checkAuth();
            }, [navigation, user]);
        }

        return <WrappedComponent {...props} />;
    };

    return WrapperComponent;
};

export default withAuth;

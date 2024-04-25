import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
    const ComponentWithAuth = (props: any) => {
        const router = useRouter();

        useEffect(() => {
            const checkAuth = async () => {
                try {
                    // Check authentication logic here
                    // Redirect if not authenticated
                } catch (error) {
                    router.push('/login');
                }
            };

            checkAuth();
        }, [router]);

        return <WrappedComponent {...props} />;
    };

    return ComponentWithAuth;
};

export default withAuth;

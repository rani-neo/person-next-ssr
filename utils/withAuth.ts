import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Auth } from 'aws-amplify';

const withAuth = (WrappedComponent: React.ComponentType) => {
  const RequireAuth: React.FC<any> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
        try {
          await Auth.currentAuthenticatedUser();
        } catch (error) {
          router.push('/signin'); // Redirect to the sign-in page if not authenticated
        }
      };

      checkAuth();
    }, []);

    return <WrappedComponent {...props} />;
  };

  return RequireAuth;
};

export default withAuth;

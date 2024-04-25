// withAuth.d.ts
import { ComponentType } from 'react';

declare module 'app/utils/withAuth' {
    const withAuth: (Component: ComponentType<any>) => ComponentType<any>;
    export default withAuth;
}

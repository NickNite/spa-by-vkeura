import React from 'react';


export const withSuspense = (Component) => {
    let suspense = (props) => {
        return <React.Suspense fallback={<p>Loading...</p>}>
            <Component {...props} />
        </React.Suspense>
    }
    return suspense
};
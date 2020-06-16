import React from 'react';

//Хок для react.lazy  (HOC for react.lazy) 
export const withSuspense = (Component) => {
    let suspense = (props) => {
        return <React.Suspense fallback={<p>Loading...</p>}>
            <Component {...props} />
        </React.Suspense>
    }
    return suspense
};
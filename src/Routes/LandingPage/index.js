import React from 'react';
import Home from '../../components/dashboard/Home';


const LandingPageLayout = ({
    ...otherProps
}) => {
    return (
        <div>
            <Home />
        </div>
    )
}

export default LandingPageLayout;

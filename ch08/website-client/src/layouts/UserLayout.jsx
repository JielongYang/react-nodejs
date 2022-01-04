import { connect } from 'umi';
import React from 'react';

const UserLayout = props => {
    const { children } = props;
    return (
        <div>
            {children}
        </div>
    );
};

export default connect(({ }) => ({}))(UserLayout);
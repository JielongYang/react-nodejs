import React from 'react';
import Header from './Header';

const HelloSSR = () => {
    return (
        <div>
            <Header />
            <div>Hello SSR in React!</div>
            <button onClick={() => { alert('点击') }}>点我</button>
        </div>
    )
}

export default HelloSSR;
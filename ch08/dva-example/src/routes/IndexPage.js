import React from 'react';
import { connect } from 'dva';

function IndexPage({ dispatch, example }) {
    const { count } = example;
    return (
        <div>
            <span>{count}</span>
            <button
                onClick={() => {
                    dispatch({ type: "example/save", payload: { count: count + 1 } });
                }}
            >
                +
          </button>
        </div>
    );
}

export default connect(({ example }) => ({
    example,
}))(IndexPage);

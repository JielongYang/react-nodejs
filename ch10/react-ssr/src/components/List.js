import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

const List = (props) => {
    console.log('props', props.list);
    return (
        <div>
            <Header />
            <div>List Page</div>
            <ul>
                {
                    props.list.map((item) => {
                        return (
                            <li key={item}>
                                {item}
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    list: state.list
});
export default connect(mapStateToProps, null)(List);
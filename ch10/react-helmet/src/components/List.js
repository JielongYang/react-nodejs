import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import Header from './Header';

const List = (props) => {
    return (
        <div>
            <Helmet>
                <title>List Page Title</title>
                <meta charset="utf-8" />
                <meta name="description" content="List Page Description" />
            </Helmet>
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
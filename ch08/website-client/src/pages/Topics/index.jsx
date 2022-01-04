import React from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Input, Card, Table } from 'antd';
import { history } from 'umi';

@connect(({ topics }) => ({
    topics
}))
export default class Topics extends React.Component {
    componentDidMount() {
        this.props.dispatch({ type: 'topics/fetchTopics' })
    }
    onSearch(value) {
        this.props.dispatch({
            type: 'topics/overrideStateProps',
            payload: { title: value }
        })
        this.props.dispatch({ type: 'topics/fetchTopics' })
    }
    render() {
        const { topics } = this.props;
        const columns = [
            {
                title: '标题',
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: '作者',
                dataIndex: 'author_name',
                key: 'author_name',
            },
            {
                title: '回复数',
                dataIndex: 'reply_count',
                key: 'reply_count',
            },
            {
                title: '操作',
                key: 'operate',
                render: (record) =>
                    <a onClick={() => history.push(`/topics/${record._id}`)}>
                        查看
          </a>
            }];
        const tableProps = {
            dataSource: topics.topics,
            columns,
            pagination: false
        }
        return (
            <PageHeaderWrapper>
                <Card>
                    <Input.Search
                        enterButton="Search"
                        onSearch={this.onSearch.bind(this)}
                    />
                </Card>
                <Card>
                    <Table {...tableProps} />
                </Card>
            </PageHeaderWrapper>
        );
    }
}
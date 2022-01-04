import React from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Card, Input, List } from 'antd';
import moment from 'moment';

@connect(({ topicDetail }) => ({
    topicDetail
}))
export default class Topics extends React.Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'topicDetail/overrideStateProps',
            payload: { id: this.props.match.params.id }
        })
        this.props.dispatch({ type: 'topicDetail/getDetail' })
    }
    onSubmit() {
        this.props.dispatch({
            type: 'topicDetail/createComment',
        })
    }
    onType(e) {
        this.props.dispatch({
            type: 'topicDetail/overrideStateProps',
            payload: { editingComment: e.target.value }
        })
    }
    render() {
        const { topicDetail } = this.props;
        const { topic, comments } = topicDetail;
        return (
            <PageHeaderWrapper>
                <Card
                    title={topic.title}
                    extra={`${topic.author_name}(${moment(topic.create_at).format('YYYY-MM-DD')})`}
                >
                    <p>{topic.content}</p>
                </Card>
                <Card title='发表评论'>
                    <Input onChange={this.onType.bind(this)} />
                    <Button onClick={this.onSubmit.bind(this)}>submit</Button>
                </Card>
                <Card title='评论列表'>
                    <List
                        dataSource={comments}
                        itemLayout="horizontal"
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={item.author_name}
                                    description={item.content}
                                />
                            </List.Item>
                        )}
                    />
                </Card>
            </PageHeaderWrapper>
        );
    }
}
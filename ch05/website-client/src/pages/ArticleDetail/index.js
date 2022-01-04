import React from 'react';
import { Button, Container, Card, Paper, TextField } from '@material-ui/core';

export default class ArticleDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            article: {},
            comment: ''
        }
    }
    componentDidMount() {
        this.fetchArticle()
    }
    fetchArticle() {
        fetch(`http://reactnode-api.com/articles/${this.props.match.params.id}`).then(res => {
            return res.json()
        }).then(res => {
            this.setState({ article: res });
        }).catch(e => {
            alert('获取文章详情失败');
        })
    }
    commitComment() {
        fetch(`http://reactnode-api.com/articles/${this.props.match.params.id}/comments`, {
            method: "POST",
            body: JSON.stringify({ comment: this.state.comment }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => {
            return res.json();
        }).then(res => {
            this.setState({ comment: "" });
            this.fetchArticle();
        }).catch(e => {
            alert('提交文章评论失败');
        })
    }
    render() {
        const { article } = this.state;
        return (
            <div>
                <Container maxWidth="md">
                    <Card>
                        <h1>{article.title}</h1>
                        <h5>{article.subtitle}</h5>
                        <span>---{article.author} at {article.created_at}</span>
                        <p>{article.content}</p>
                    </Card>
                    <Paper>评论列表</Paper>
                    {article && article.comments ?
                        article.comments.map((item) =>
                            <Card>
                                <p>{item}</p>
                            </Card>
                        )
                        : null}
                    <TextField
                        style={{ marginTop: 16 }}
                        value={this.state.comment}
                        placeholder="请输入评论"
                        fullWidth
                        onChange={e => {
                            this.setState({ comment: e.target.value })
                        }}
                    />
                    <Button
                        style={{ float: "right", marginTop: 16 }}
                        color="primary"
                        onClick={this.commitComment.bind(this)}
                    >
                        发表评论
                    </Button>
                </Container>
            </div>
        )
    }
}
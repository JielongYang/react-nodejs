import React from 'react';
import { Button, Card, Container, Paper, TextareaAutosize } from '@material-ui/core';

export default class ArticleEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            article: {}
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
    editArticle() {
        fetch(`http://reactnode-api.com/articles/${this.props.match.params.id}`, {
            method: "PATCH",
            body: JSON.stringify({ content: this.state.article.content }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => {
            return res.json();
        }).then(res => {
            this.props.history.push(`/articles/${this.props.match.params.id}`)
        }).catch(e => {
            alert('编辑文章内容失败');
        })
    }
    render() {
        const { article } = this.state;
        return (
            <div>
                <Container maxWidth="md">
                    <Card>
                        <Paper style={{ marginBottom: 16 }}>{article.title}</Paper>
                        <TextareaAutosize
                            style={{ width: "100%" }}
                            value={article.content}
                            onChange={e => {
                                this.setState({ article: { ...article, content: e.target.value } })
                            }}
                        />
                        <Button
                            style={{ float: "right", marginTop: 16 }}
                            color="primary"
                            onClick={this.editArticle.bind(this)}
                        >
                            提交
                        </Button>
                    </Card>
                </Container >
            </div >
        )
    }
}
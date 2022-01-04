import React from 'react';
import { Button, Container, Card, CardActions, Grid, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default class Articles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [{
                title: 'title',
                subtitle: 'subtitle',
            }],
            search_text: '',
        }
    }
    componentDidMount() {
        this.fetchArticles();
    }
    fetchArticles() {
        fetch(`http://reactnode-api.com/articles?search_text=${this.state.search_text}`).then(res => {
            return res.json()
        }).then(res => {
            this.setState({ articles: res });
        }).catch(e => {
            alert('获取文章列表失败');
        })
    }
    render() {
        return (
            <div>
                <Container maxWidth="md">
                    <Card style={{ padding: '20px' }}>
                        <Grid container>
                            <Grid item xs={6}>
                                <TextField
                                    placeholder="搜索文章内容"
                                    value={this.state.search_text}
                                    onChange={e => {
                                        this.setState({ search_text: e.target.value });
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Button onClick={this.fetchArticles.bind(this)} color="primary" variant="contained">
                                    Search!
                                </Button>
                            </Grid>
                        </Grid>
                    </Card>
                    {
                        this.state.articles.length ?
                            this.state.articles.map(item =>
                                <Card style={{ padding: '16px' }} key={item.id}>
                                    <p>{item.title}</p>
                                    <span>{item.subtitle}</span>
                                    <CardActions>
                                        <Link to={`articles/${item.id}`}>
                                            <Button size="small">Learn More</Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            ) : null
                    }
                </Container>
            </div>
        )
    }
}
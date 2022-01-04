import React from 'react';
import axios from 'axios';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: []
        }
    }

    componentDidMount() {
        const that = this;
        axios.get('http://localhost:8000/items')
            .then(function (response) {
                that.setState({
                    todoItems: [...response.data]
                })
            })
    }

    addTodoItem = (todoItemValue) => {
        const newTodoItem = {
            id: this.state.todoItems.length,
            value: todoItemValue,
            done: false,
            delete: false
        };
        const that = this;
        axios.post('http://localhost:8000/items', {
            todoItem: newTodoItem
        })
            .then(function (response) {
                that.setState({
                    todoItems: [...response.data]
                })
            })
    }

    deleteTodoItem = (item) => {
        const that = this;
        axios.delete('http://localhost:8000/items', {
            data: {
                id: item.id
            }
        })
            .then(function (response) {
                that.setState({
                    todoItems: [...response.data]
                })
            })
    }

    render() {
        return (
            <div>
                <h1>TodoList</h1>
                <TodoForm
                    addTodoItem={this.addTodoItem}
                />
                <TodoList
                    todoItems={this.state.todoItems}
                    deleteTodoItem={this.deleteTodoItem}
                />
            </div>
        );
    }
}
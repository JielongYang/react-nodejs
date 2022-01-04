import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: [
                { id: 0, value: 'React', done: false, delete: false }
            ]
        }
    }

    addTodoItem = (todoItemValue) => {
        const newTodoItem = {
            id: this.state.todoItems.length,
            value: todoItemValue,
            done: false,
            delete: false
        };
        this.setState({
            todoItems: [...this.state.todoItems, newTodoItem]
        })
    }

    deleteTodoItem = (item) => {
        item.delete = true;
        this.setState({
            todoItems: [...this.state.todoItems, item]
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
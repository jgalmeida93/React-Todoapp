import React from 'react'


const Todos = ({todos, deleteTodo}) => {

    // Se todoList estiver vazio, irá retornar a mensagem 'You have no todo's left, yay!'
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id} onClick={() => {deleteTodo(todo.id)}}>
                    <span>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left, yay!</p>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;
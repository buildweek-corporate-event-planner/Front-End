import React, { useState } from 'react';

const TodoForm = () => {
    // const [newTodo, setNewTodo] = useState('');

    // const handleChanges = e => {
    //     setNewTodo(e.target.value);
    // };

    // const submitForm = e => {
    //     e.preventDefault();
    //     dispatch({
    //         type: "ADD_ITEM",
    //         payload: newTodo
    //     })
    //     setNewTodo("");
    // }

    // const clearCompleted = e => {
    //     e.preventDefault();
    //     dispatch({
    //         type: "CLEAR"
    //     });
    // };

    return (
        <div className = "todo-form">
            <form onSubmit={submitForm}>
                <label htmlFor="todo" hidden>
                    Todo
                </label>
                <input name="todo" onChange={handleChanges} value={newTodo} />
                <button>Add Todo</button>
                <button onClick={clearCompleted}>Clear Completed</button>
            </form>
        </div>
    );
};

export default TodoForm;  
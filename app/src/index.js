import React from 'react';
import ReactDom from 'react-dom';

function TodoItem() {
    return(
        <span>Podrochit</span>
    );
}

function TodoList() {
    return(
        <ul>
            <li><TodoItem /></li>
            <li><TodoItem /></li>
            <li><TodoItem /></li>
        </ul>
    );
}

ReactDom.render(<TodoList />, document.getElementById('root'));
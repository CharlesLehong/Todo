import PropTypes from "prop-types";
import Todo from "./Todo";

function Todos({ todos, deleteTodo, editTodo }) {
    return (
        <>
            {todos.map((todo, index) => (
                <Todo
                    todo={todo}
                    key={index}
                    addBottomMargin={todos.length !== index + 1}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                />
            ))}
        </>
    );
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
};

export default Todos;

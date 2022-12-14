import PropTypes from "prop-types";
import IconEdit from "./icons/IconEdit";
import IconTrash from "./icons/IconTrash";

function Todo({ todo, addBottomMargin, deleteTodo, editTodo }) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const deleteCurrentTodo = () => {
        deleteTodo(todo.id);
    };

    const editCurrentTodo = () => {
        editTodo(todo.id);
    };

    const niceDate = (dateString) => {
        const date = new Date(dateString);
        const hour = date.getHours();
        const minute = date.getMinutes();

        return `${
            months[date.getMonth()]
        } ${date.getDate()}, ${date.getFullYear()} at ${
            hour === 0 ? "0" : ""
        }${hour}:${minute === 0 ? "0" : ""}${minute}`;
    };

    return (
        <div
            className="todo"
            key={todo.id}
            style={{
                marginBottom: addBottomMargin ? "15px" : "0px",
            }}
        >
            <div>
                <h3>{todo.title}</h3>
                <p>{niceDate(todo.due)}</p>
            </div>
            <div>
                <button className="btn-icon" onClick={() => editCurrentTodo()}>
                    <IconEdit />
                </button>
                <button
                    className="btn-icon"
                    onClick={() => deleteCurrentTodo()}
                >
                    <IconTrash fill="#ff1744" />
                </button>
            </div>
        </div>
    );
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    addBottomMargin: PropTypes.bool,
    deleteTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
};

Todo.defaultProps = {
    addBottomMargin: false,
};

export default Todo;

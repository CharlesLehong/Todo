import PropTypes from "prop-types";
import Button from "./Button";

function Form({ todo, saveTodo, updateTodo }) {
    const save = (e) => {
        e.preventDefault();
        saveTodo(todo);
    };

    const update = (todo) => {
        updateTodo(todo);
    };

    return (
        <form className="add-form" onSubmit={save}>
            <div className="form-control">
                <label htmlFor="text">Title</label>
                <input
                    type="text"
                    name="text"
                    required
                    value={todo.title}
                    onChange={(e) => update({ ...todo, title: e.target.value })}
                />
            </div>
            <div className="form-control">
                <label htmlFor="due-date">Due date</label>
                <input
                    type="datetime-local"
                    name="due-date"
                    required
                    value={todo.due}
                    onChange={(e) => update({ ...todo, due: e.target.value })}
                />
            </div>
            <div className="form-actions">
                <Button
                    text="Save"
                    color="#4CAF50"
                    block={true}
                    type="submit"
                />
            </div>
        </form>
    );
}

Form.propTypes = {
    todo: PropTypes.object.isRequired,
    saveTodo: PropTypes.func.isRequired,
};

export default Form;

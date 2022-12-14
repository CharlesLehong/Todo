import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Todos from "./components/Todos";

function App() {
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState(false);
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({
        title: "",
        due: new Date().toISOString().substring(0, 16),
    });

    const toggleForm = () => {
        setShowForm(!showForm);
        setEditing(false);
        setTodo({
            title: "",
            due: new Date().toISOString().substring(0, 16),
        });
    };

    const updateTodoProperty = (todo) => {
        setTodo(todo);
    };

    const saveTodo = (todo) => {
        if (todo.id) updateTodo(todo);
        else createTodo(todo);
    };

    const deleteTodo = (id) => {
        fetch("http://localhost:5002/todo/" + id, { method: "DELETE" })
            .then((response) => response.json())
            .then(() => setTodos(todos.filter((t) => t.id !== id)));
    };

    const editTodo = (id) => {
        fetch("http://localhost:5002/todo/" + id)
            .then((response) => response.json())
            .then((data) => {
                setTodo(data);
                setEditing(true);
                setShowForm(true);
            });
    };

    const createTodo = (todo) => {
        fetch("http://localhost:5002/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo),
        })
            .then((response) => response.json())
            .then(() => {
                setShowForm(!showForm);
                setEditing(false);
                fetchTodos();
            });
    };

    const updateTodo = (todo) => {
        fetch("http://localhost:5002/todo/" + todo.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo),
        })
            .then((response) => response.json())
            .then(() => {
                setShowForm(!showForm);
                setEditing(false);
                fetchTodos();
            });
    };

    const fetchTodos = () => {
        fetch("http://localhost:5002/todo")
            .then((response) => response.json())
            .then((data) => setTodos(data));
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <>
            <div className="container">
                <Header
                    showForm={showForm}
                    editing={editing}
                    toggleForm={toggleForm}
                />
                {showForm && (
                    <div>
                        <hr />
                        <Form
                            todo={todo}
                            saveTodo={saveTodo}
                            updateTodo={updateTodoProperty}
                        />
                    </div>
                )}
            </div>
            {todos.length > 0 ? (
                <div className="container">
                    <Todos
                        todos={todos}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                </div>
            ) : (
                <div className="container empty">No todos added yet.</div>
            )}
        </>
    );
}

export default App;

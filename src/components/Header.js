import Button from "./Button";
import PropTypes from "prop-types";

function Header({ showForm, toggleForm, editing }) {
    const headerTitle = () => {
        let title = "todo";
        if (editing && showForm) return "Edit " + title;
        if (!editing && showForm) return "Add " + title;
        return "Todo list";
    };
    return (
        <header className="header">
            <h1>{headerTitle()}</h1>
            <Button
                color={showForm ? "red" : "#4CAF50"}
                text={showForm ? "Close" : "Add"}
                onClick={toggleForm}
            />
        </header>
    );
}

Header.propTypes = {
    showForm: PropTypes.bool.isRequired,
    toggleForm: PropTypes.func.isRequired,
    editing: PropTypes.bool,
};

Header.defaultProps = {
    editing: false,
};

export default Header;

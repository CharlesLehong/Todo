import PropTypes from "prop-types";

function Button({ text, color, me, block, onClick }) {
    return (
        <button
            className={`btn ${block ? "btn-block" : ""}`}
            style={{ backgroundColor: color, marginRight: me }}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    me: PropTypes.string,
    onClick: PropTypes.func,
    block: PropTypes.bool,
};

Button.defaultProps = {
    color: "red",
    me: "0px",
    block: false,
};

export default Button;

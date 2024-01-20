import "./button-style.css";

/**
 * @typedef {object} ButtonObj
 * @property {JSX.Element} [children]
 */

/**
 * @param {ButtonObj} params
 * 
 * @returns {JSX.Element}
 */
const ButtonComponent = params => {
    return (
        <div className="button-component">
            <button>
                {params.children || "button"}
            </button>
        </div>
    );
}

export default ButtonComponent;
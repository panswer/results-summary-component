import "./text-style.css";

/**
 * @typedef {object} TextComponentObj
 * @property {string | JSX.Element} children
 * @property {string} componentClass
 */

/**
 * @param {TextComponentObj} params
 * 
 * @returns {JSX.Element}
 */
const TextComponent = (params) => {
    const className = params.componentClass || "regular-text";

    return (
        <>
            <div className="text-component">
                <span className={className}>
                    {params.children}
                </span>
            </div>
        </>
    );
}

export default TextComponent;
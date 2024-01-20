import "./result-footer-style.css"
import ButtonComponent from '../../atoms/button/button-component';

/**
 * @typedef {object} ResultFooterObj
 * @property {(e: any) => void} onClick
 */

/**
 * @param {ResultFooterObj} params 
 * 
 * @returns {JSX.Element}
 */
const ResultFooterComponent = params => {
    return (
        <div className="result-footer-component">
            <ButtonComponent>
                continue
            </ButtonComponent>
        </div>
    )
}

export default ResultFooterComponent;
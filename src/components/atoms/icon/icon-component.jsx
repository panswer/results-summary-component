/**
 * @typedef {"reaction"|"memory"|"verbal"|"visual"} IconEnum
 */

/**
 * @typedef {object} IconObj
 * @property {IconEnum} type
 */

import "./icon-style.css";
import iconMemory from '../../../assets/icon-memory.svg';
import iconReaction from '../../../assets/icon-reaction.svg';
import iconVerbal from '../../../assets/icon-verbal.svg';
import iconVisual from '../../../assets/icon-visual.svg';

export const iconTypes = {
    memory: iconMemory,
    reaction: iconReaction,
    verbal: iconVerbal,
    visual: iconVisual,
};

/**
 * @param {IconObj} params
 * 
 * @returns {JSX.Element}
 */
const Icon = (params) => {
    const icon = iconTypes[params.type] || iconTypes.memory;

    return (
        <div className="icon-component">
            <img src={icon} alt={params.type} />
        </div>
    );
}

export default Icon;
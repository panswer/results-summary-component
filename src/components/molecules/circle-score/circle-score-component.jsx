/**
 * @typedef {object} CircleScoreObj
 * @property {number} score
 * @property {number} scoreTop
 */

import "./circle-score-style.css";
import TextComponent from "../../atoms/text/text-component";
import { useState, useEffect } from "react";

/**
 * @param {CircleScoreObj} params
 * 
 * @returns {JSX.Element}
 */
const CircleScore = (params) => {
    const [scoreTransition, setScoreTransition] = useState(0);

    useEffect(() => {
        let newScore = scoreTransition;

        if (params.score > newScore) {
            newScore++;
        }

        if (params.score < newScore) {
            newScore--;
        }

        setTimeout(() => {
            if (newScore !== scoreTransition) {
                setScoreTransition(newScore);
            }
        }, 100);
    }, [scoreTransition, params]);

    return (
        <div className="circle-score-component">
            <TextComponent componentClass="text-white text-h1">
                {scoreTransition}
            </TextComponent>
            <TextComponent componentClass="text-light-blue">
                of {params.scoreTop}
            </TextComponent>
        </div>
    );
}

export default CircleScore;
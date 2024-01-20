/**
 * @typedef {object} ResultHeaderObj
 * @property {number} score
 * @property {number} scoreMax
 * @property {string} scoreText
 * @property {number} scoreAverage
 */

import "./result-header-style.css";
import TextComponent from "../../atoms/text/text-component";
import CircleScore from "../../molecules/circle-score/circle-score-component";

/**
 * @param {ResultHeaderObj} params
 * 
 * @returns {JSX.Element}
 */
const ResultHeader = (params) => {
    const score = params.score || 0;
    const scoreTotal = params.scoreMax || 100;
    const scoreText = params.scoreText || "Great";
    const scoreAverage = params.scoreAverage || 65;

    return (
        <div className="result_header_container">
            <div className="text-1">
                <TextComponent componentClass="text-light">
                    Your Result
                </TextComponent>
            </div>
            <div className="score_total">
                <CircleScore score={score} scoreTop={scoreTotal} />
            </div>
            <div className="score_total-str">
                <TextComponent componentClass="text-white">
                    {scoreText}
                </TextComponent>
            </div>
            <div className="score_description">
                <TextComponent componentClass="text-light text-center">
                    You scored higher than {scoreAverage}% of the people who have taken these tests.
                </TextComponent>
            </div>
        </div>
    );
}

export default ResultHeader;
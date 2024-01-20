/**
 * @typedef {import('../../molecules/sub-score/sub-score-component').SubScoreTypes} SubScoreTypes
 */

/**
 * @typedef {object} SubScoreValue
 * @property {number} maxScore
 * @property {number} score
 * @property {SubScoreTypes} type
 */

/**
 * @typedef {object} ResultBodyObj
 * @property {SubScoreValue[]} scores
 */


import "./result-body-style.css";
import Text from '../../atoms/text/text-component';
import SubScore from '../../molecules/sub-score/sub-score-component';
import { useState, useEffect } from "react";

/**
 * @type {SubScoreValue[]}
 */
const defaultValues = [{
    maxScore: 100,
    score: 0,
    type: 'reaction'
}, {
    maxScore: 100,
    score: 0,
    type: 'memory'
}, {
    maxScore: 100,
    score: 0,
    type: 'verbal'
}, {
    maxScore: 100,
    score: 0,
    type: 'visual'
}];

/**
 * @param {ResultBodyObj} params
 * 
 * @returns {JSX.Element}
 */
const ResultBody = (params) => {
    const [scoresState, setScoresState] = useState(defaultValues);

    useEffect(() => {
        if (params.scores) {
            setScoresState(params.scores);
        }
    }, [params.scores]);

    return (
        <div className="result-body_component">
            <Text componentClass='text-gray text-h2'>
                Summary
            </Text>
            <div className="result">
                {
                    scoresState
                        .map(score => <>
                            <SubScore
                                maxScore={score.maxScore}
                                score={score.score}
                                type={score.type}
                                key={score.type}
                            />
                        </>)
                }
            </div>
        </div>
    );
}

export default ResultBody;
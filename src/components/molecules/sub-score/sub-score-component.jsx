/**
 * @typedef {import('../../atoms/icon/icon-component').IconEnum} SubScoreTypes
 */

/**
 * @typedef {object} SubScoreObj
 * @property {SubScoreTypes} type
 * @property {number} score
 * @property {number} maxScore
 */

import { useEffect, useState } from 'react';
import "./sub-score-style.css";
import Icon from '../../atoms/icon/icon-component';
import Text from '../../atoms/text/text-component';

/**
 * @param {SubScoreObj} params
 * 
 * @returns {JSX.Element}
 */
const SubScore = (params) => {
    const [currentScore, setCurrentScore] = useState(0);

    useEffect(() => {
        let newScore = currentScore;

        if (newScore < params.score) {
            newScore++;
        }

        if (newScore > params.score) {
            newScore--;
        }

        setTimeout(() => {
            if (newScore !== currentScore) {
                setCurrentScore(newScore);
            }
        }, 10);
    }, [currentScore, params]);

    /**
     * @param {SubScoreTypes} type
     * 
     * @returns {string} 
     */
    const classByType = type => {
        const classes = ['text-title'];

        if (type === 'memory') {
            return classes
                .concat('text-yellow')
                .join(' ');
        }

        if (type === 'reaction') {
            return classes
                .concat('text-orange')
                .join(' ');
        }

        if (type === 'verbal') {
            return classes
                .concat('text-green')
                .join(' ');
        }

        return classes
            .concat('text-blue')
            .join(' ');
    }

    return (
        <div className="sub-score_component" datatype={params.type}>
            <Icon type={params.type} />
            <Text componentClass={classByType(params.type)}>
                {params.type}
            </Text>
            <span className="score">
                <Text>{currentScore}</Text>
                <Text componentClass="text-gray">/</Text>
                <Text componentClass="text-gray">{params.maxScore}</Text>
            </span>
        </div>
    );
}

export default SubScore;
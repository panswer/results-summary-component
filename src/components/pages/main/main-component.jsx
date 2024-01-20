import ResultBody from "../../organisms/result-body/result-body-component";
import ResultHeader from "../../organisms/result-header/result-header-component";
import ResultFooter from "../../organisms/result-footer/result-footer-component";
import "./main-style.css";

/**
 * @typedef {import('../../organisms/result-body/result-body-component').SubScoreValue} SubScoreValue
 */

/**
 * @typedef {object} ScoreObj
 * @property {SubScoreValue[]} data
 */

/**
 * @returns {JSX.Element}
 */
const MainComponent = () => {
    /**
     * @type {ScoreObj}
     */
    const score = {
        data: [{
            maxScore: 100,
            score: 80,
            type: 'reaction'
        },{
            maxScore: 100,
            score: 92,
            type: 'memory'
        },{
            maxScore: 100,
            score: 61,
            type: 'verbal'
        },{
            maxScore: 100,
            score: 72,
            type: 'visual'
        }],
    };

    return (
        <div className="main-component">
            <div className="flex-component-center">
                <ResultHeader score={76} />
                <ResultBody scores={score.data} />
                <ResultFooter />
            </div>
        </div>
    );
}

export default MainComponent;
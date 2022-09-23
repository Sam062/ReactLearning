import { Button } from '@mui/material';
import React, { } from 'react';


export const Question = ({ questions, currQuestionIndex, setCurrQuestionIndex, finalResultJson, currentQuestionObj, setCurrentQuestionObj }) => {

    const handleOptionSelect = (event, qid) => {
        if (finalResultJson.some(options => options.qid === qid)) {
            finalResultJson.forEach(result => {
                if (result.qid === qid) {
                    result.selectedOption = event.target.value
                }
            })
        } else {
            const result = {};
            result.qid = qid;
            result.selectedOption = event.target.value;
            finalResultJson.push(result);
            console.log(result);
        }
        console.log(finalResultJson);
    }

    const nextQuestion = () => {
        currQuestionIndex < questions.length - 1 ? setCurrQuestionIndex(currQuestionIndex + 1) : setCurrQuestionIndex(currQuestionIndex);
        console.log("NEXT QUES : ", currQuestionIndex + 1);
        setCurrentQuestionObj(questions[currQuestionIndex + 1]);

    };

    const previousQuestion = () => {
        (currQuestionIndex > 0 && currQuestionIndex <= questions.length ? setCurrQuestionIndex(currQuestionIndex - 1) : setCurrQuestionIndex(currQuestionIndex));
        setCurrentQuestionObj(questions[currQuestionIndex - 1]);
        console.log("PREV QUES : ", currQuestionIndex - 1);
    }

    return (
        <div className='border rounded p-3 mt-4'>
            <p style={{ width: "30rem", height: "5rem", fontSize: "25px",overflow: "auto" }}>ID-{currentQuestionObj.qid}: {currentQuestionObj.question}</p>
            <div style={{ display: 'flex', flexDirection: "column" }}>
                <button className='form-control m-1' onClick={(e) => { handleOptionSelect(e, currentQuestionObj.qid) }} value={currentQuestionObj.option1}>{currentQuestionObj.option1}</button>

                <button className='form-control m-1' onClick={(e) => { handleOptionSelect(e, currentQuestionObj.qid) }} value={currentQuestionObj.option2}>{currentQuestionObj.option2}</button>

                <button className='form-control m-1' onClick={(e) => { handleOptionSelect(e, currentQuestionObj.qid) }} value={currentQuestionObj.option3}>{currentQuestionObj.option3}</button>

                <button className='form-control m-1' onClick={(e) => { handleOptionSelect(e, currentQuestionObj.qid) }} value={currentQuestionObj.option4}>{currentQuestionObj.option4}</button>

            </div>

            <div className='mt-2' style={{ display: 'flex', justifyContent: "space-between" }}>
                <Button onClick={previousQuestion} disabled={currQuestionIndex === 0}>Previous</Button>

                <Button onClick={nextQuestion} disabled={currQuestionIndex === questions.length - 1}>Next</Button>
            </div>
        </div>
    )
}

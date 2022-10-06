import { Button } from '@mui/material';
import React, { } from 'react';


export const Question = ({ questions, currQuestionIndex, setCurrQuestionIndex, finalResultJson, currentQuestionObj, setCurrentQuestionObj }) => {

    const handleOptionSelect = (option, qid) => {
        if (finalResultJson.some(options => options.qid === qid)) {
            finalResultJson.forEach(result => {
                if (result.qid === qid) {
                    result.selectedOption = option;
                }
            })
        } else {
            const result = {};
            result.qid = qid;
            result.selectedOption = option;
            finalResultJson.push(result);
            console.log(result);
        }
        alert(JSON.stringify(finalResultJson));
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

    console.log("CURRENT QUESTION OBJ  TEST ::", currentQuestionObj);
    return (
        <div className='border rounded p-3 mt-4'>
            <p style={{ width: "40rem", height: "auto", minHeight: "2rem", maxHeight: "", fontSize: "25px", overflow: "auto" }}>ID-{currentQuestionObj.qid}: {currentQuestionObj.questionStatement}-{currentQuestionObj.questionType}</p>

            <div style={{ display: 'flex', flexDirection: "column", width: "inherit" }}>
                {
                    Object.keys(currentQuestionObj).length > 0 && currentQuestionObj.options.option.map((option, index) => {
                        return (currentQuestionObj.questionType === "MCQ") ?
                            // Question type - MCQ
                            <button key={index} className='form-control m-1' style={{ width: "40rem", height: "auto", minHeight: "3rem" }}
                                onClick={() => handleOptionSelect(option, currentQuestionObj.qid)}>
                                <label style={{ width: "auto", height: "auto", minHeight: "3rem" }} >
                                    {option}
                                </label>
                            </button>
                            :
                            //Question type - MAQ
                            (currentQuestionObj.questionType === "MAQ") ?
                                <div key={index} className='p-3' style={{ display: "flex" }}>
                                    <input className='form-check-input' type="checkbox" name='option' value={option} />
                                    <label className=' ms-4'>{option}</label>
                                </div>
                                :
                                //Question type - Boolean
                                <>
                                    <div key={index} className='p-3' style={{ display: "flex" }}>
                                        <input className='form-check-input' type="radio" name='answer' value={option} />
                                        <label className=' ms-4'>{option}</label>
                                    </div>
                                </>
                    })
                }

            </div>

            <div className='mt-2' style={{ display: 'flex', justifyContent: "space-between" }}>
                <Button onClick={previousQuestion} disabled={currQuestionIndex === 0}>Previous</Button>

                <Button onClick={nextQuestion} disabled={currQuestionIndex === questions.length - 1}>Next</Button>
            </div>
        </div>
    )
}

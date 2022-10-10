import { Button } from '@mui/material';
import React, { useState } from 'react';


export const Question = ({ questions, currQuestionIndex, setCurrQuestionIndex, finalResultJson, setFinalResultJson, currentQuestionObj, setCurrentQuestionObj, activeOption, setActiveOption }) => {
    const [checked, setChecked] = useState([]);

    const handleCheckbox = (option, qid) => {
        if (!checked.some(op => op === option)) {
            checked.push(option);
        } else {
            for (let i = 0; i < checked.length; i++) {
                if (checked[i] === option) {
                    checked.splice(i, 1);
                }
            }
            // setChecked(checked);
        }
        console.log("OPTION :: ", option);
        console.log("CHECKED :: ", checked);
        handleOptionSelect(checked, qid);
    }

    const handleOptionSelect = (option, qid) => {
        if (finalResultJson.some(options => options.qid === qid)) {
            let temp = [...finalResultJson];
            temp.forEach(result => {
                if (result.qid === qid) {
                    result.selectedOption = option;
                }
                setFinalResultJson(temp)
            })
        } else {
            const result = {};
            result.qid = qid;
            result.selectedOption = option;
            setFinalResultJson(prevState => [...prevState, result])
        }
    }

    const nextQuestion = () => {
        currQuestionIndex < questions.length - 1 ? setCurrQuestionIndex(currQuestionIndex + 1) : setCurrQuestionIndex(currQuestionIndex);
        // console.log("NEXT QUES : ", currQuestionIndex + 1);
        setCurrentQuestionObj(questions[currQuestionIndex + 1]);

    };

    const previousQuestion = () => {
        (currQuestionIndex > 0 && currQuestionIndex <= questions.length ? setCurrQuestionIndex(currQuestionIndex - 1) : setCurrQuestionIndex(currQuestionIndex));
        setCurrentQuestionObj(questions[currQuestionIndex - 1]);
        // console.log("PREV QUES : ", currQuestionIndex - 1);
    }

    // console.log("CURRENT QUESTION OBJ  TEST ::", currentQuestionObj);
    console.log("FINAL RESULT JSON  ::", finalResultJson);
    return (
        <div className='border rounded p-3 mt-4'>
            <p style={{ width: "40rem", height: "auto", minHeight: "2rem", maxHeight: "", fontSize: "25px", overflow: "auto" }}>ID-{currentQuestionObj.qid}: {currentQuestionObj.questionStatement}-{currentQuestionObj.questionType}</p>

            <div style={{ display: 'flex', flexDirection: "column", width: "inherit" }}>
                {
                    Object.keys(currentQuestionObj).length > 0 && currentQuestionObj.options.option.map((option, index) => {
                        return (currentQuestionObj.questionType === "MAQ") ?
                            <div key={index + currentQuestionObj.qid} className='p-2 m-1 border rounded '
                                onClick={() => handleCheckbox(option, currentQuestionObj.qid)}
                                style={checked.some(op => op === option) ? { display: "flex", backgroundColor: "cadetblue", color: "antiquewhite" } : { display: "flex" }}>
                                <input className='form-check-input' type="checkbox" name='option'
                                    defaultChecked={checked.some(op => op === option)}
                                />
                                <label className=' ms-4'>{option}{activeOption}</label>
                            </div>
                            :
                            //Question type - Boolean
                            <div key={index + currentQuestionObj.qid} className='p-2 m-1 border rounded'
                                onClick={() => handleOptionSelect(option, currentQuestionObj.qid)}
                                style={finalResultJson.some(e => e.qid === currentQuestionObj.qid && e.selectedOption === option) ? {
                                    display: "flex", backgroundColor: "cadetblue", color: "antiquewhite"
                                } : { display: "flex" }}>
                                <label className=' ms-4 ps-3 pe-3'>{option}</label>
                            </div>

                        // (currentQuestionObj.questionType === "MCQ") ?
                        // // Question type - MCQ
                        // <button key={index} className='form-control m-1' style={{ width: "40rem", height: "auto", minHeight: "3rem" }}
                        //     onClick={() => handleOptionSelect(option, currentQuestionObj.qid)}>
                        //     <label style={{ width: "auto", height: "auto", minHeight: "3rem" }} >
                        //         {option}
                        //     </label>
                        // </button>
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

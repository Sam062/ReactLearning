import { Button } from '@mui/material';
import React, { } from 'react';


export const Question = ({ questions, currQuestionIndex, setCurrQuestionIndex, finalResultJson, currentQuestionObj, setCurrentQuestionObj, activeOption, setActiveOption }) => {

    const handleCheckbox = (option, qid) => {
        let val = option + ", ";
        handleOptionSelect(val, qid);
    }

    const handleOptionSelect = (option, qid, index) => {
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
        if (activeOption.some(e => e.qid === qid)) {
            let temp = [...activeOption];
            temp.forEach(e => {
                if (qid === e.qid) {
                    e.index = index;
                    setActiveOption(temp)
                }
            })
        } else {
            setActiveOption(e => [...e, { index, qid }])
        }
        // console.log(JSON.stringify(finalResultJson));
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
    console.log(activeOption);
    return (
        <div className='border rounded p-3 mt-4'>
            <p style={{ width: "40rem", height: "auto", minHeight: "2rem", maxHeight: "", fontSize: "25px", overflow: "auto" }}>ID-{currentQuestionObj.qid}: {currentQuestionObj.questionStatement}-{currentQuestionObj.questionType}</p>

            <div style={{ display: 'flex', flexDirection: "column", width: "inherit" }}>
                {
                    Object.keys(currentQuestionObj).length > 0 && currentQuestionObj.options.option.map((option, index) => {
                        return (currentQuestionObj.questionType === "MAQ") ?
                            <div key={index + currentQuestionObj.qid} className='p-3' style={{ display: "flex" }}>
                                <input className='form-check-input' type="checkbox" name='option'
                                    onClick={() => handleCheckbox(option, currentQuestionObj.qid)} />
                                <label className=' ms-4'>{option}{activeOption}</label>
                            </div>
                            :
                            //Question type - Boolean
                            <div key={index + currentQuestionObj.qid} className='p-2 m-1 border rounded'
                                onClick={() => handleOptionSelect(option, currentQuestionObj.qid, index)}
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

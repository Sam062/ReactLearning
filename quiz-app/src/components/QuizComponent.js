import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, CircularProgress } from '@mui/material';
import { Question } from './Question';
import { useQuestionData } from './useQuestionData';

export const QuizComponent = () => {
    const { userEmail, password } = useParams();
    const questions = useQuestionData(userEmail, password);
    const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
    const [finalResultJson] = useState([]);

    const navigate = useNavigate();


    const [currentQuestionObj, setCurrentQuestionObj] = useState({
        "questionStatement": "",
        "marks": '',
        "questionType": "",
        "questionCategory": "",
        "options": {
            "optionId": "",
            "option": []
        }
    });

    useEffect(() => {
        questions.length && setCurrentQuestionObj(questions[0]);
        setCurrQuestionIndex(0);
    }, [questions])


    const handleSubmitTest = (e) => {
        e.preventDefault();
        if (finalResultJson && questions && finalResultJson.length === questions.length) {
            alert(JSON.stringify(finalResultJson))
        } else {
            if (window.confirm('Some of the questions are still unanswered, Are you sure to submit?')) {
                alert(JSON.stringify(finalResultJson));
                // navigate("/testResult");
            }
        }
        navigate("/testResult");
    }

    const handleQuesClick = (ques, index) => {
        setCurrentQuestionObj(ques);
        setCurrQuestionIndex(index);
    }
    return (
        <div className='ps-2' style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
            <div style={{ width: "25%", height: "75vh", overflowY: "auto" }} className="border rounded p-2">
                <h3 className="text-danger" style={{ fontWeight: '400' }}>Questions</h3>
                <ol>
                    {
                        questions.map((ques, index) => {
                            return <li key={ques.qid} className='list-styled'>
                                <Link to={"/question"} className='btn btn-light border m-1'
                                    style={{
                                        backgroundColor: currQuestionIndex === index ? "cadetblue" : "whitesmoke",
                                        color: currQuestionIndex === index ? "antiquewhite" : "inherit",
                                        textAlign: "left"
                                    }}
                                    onClick={() => handleQuesClick(ques, index)}>ID-{ques.qid}: {ques.questionStatement}</Link>
                            </li>
                        })
                    }
                </ol>
            </div>
            <div style={{ width: "75%" }} className='ps-2 pe-2'>
                {
                    questions.length > 0 ?
                        <>
                            <div className='bg-light' style={{ display: "flex", justifyContent: "space-between", width: "100%", textTransform: "uppercase" }}>
                                <span className='p-1 ms-2' style={{ width: "3rem", }}>
                                    <span className='text-success' style={{ fontWeight: "", fontSize: "30px" }}>
                                        {currQuestionIndex + 1}
                                    </span>
                                    /{questions.length}
                                </span>
                                <span className='p-1 mt-1 me-2'>
                                    <Button className='bg-danger'
                                        variant='contained' onClick={handleSubmitTest}>
                                        Submit Test
                                    </Button>
                                </span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: "center" }}>

                                <Question currentQuestionObj={currentQuestionObj} setCurrentQuestionObj={setCurrentQuestionObj} questions={questions} currQuestionIndex={currQuestionIndex} setCurrQuestionIndex=
                                    {setCurrQuestionIndex} finalResultJson={finalResultJson} />
                            </div>
                        </>
                        : (
                            <CircularProgress style={{ margin: "10.5rem" }}
                                size={100}
                                thickness={2}
                            />
                        )
                }
            </div>
        </div>
    )
}

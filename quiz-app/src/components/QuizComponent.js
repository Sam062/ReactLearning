import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, CircularProgress } from '@mui/material';
import { Question } from './Question';
import { useQuestionData } from './useQuestionData';

export const QuizComponent = () => {
    const questions = useQuestionData();
    const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
    const [userEmail] = useState('abc@xyz.com')
    const [isTestFinished, setTestFinished] = useState(false);
    const [testResult, setTestResult] = useState(0);
    const [finalResultJson] = useState([]);

    const [currentQuestionObj, setCurrentQuestionObj] = useState({
        qid: '',
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correctAnswer: ""
    });

    useEffect(() => {
        questions.length && setCurrentQuestionObj(questions[0]);
        setCurrQuestionIndex(0);
    }, [questions])


    const handleSubmitTest = () => {
        if (finalResultJson && questions && finalResultJson.length === questions.length) {
            setTestFinished(true);
            alert(JSON.stringify(finalResultJson))
        } else {
            alert('Some of the questions are still unanswered, Are you sure to submit?');
            setTestFinished(true);
        }
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
                                    onClick={() => handleQuesClick(ques, index)}>ID-{ques.qid}: {ques.question}</Link>
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
                                <span className='border border-rounded ' style={{ fontSize: "22px", boxShadow: "4px 4px 2px black", padding: "8px" }}>{userEmail}</span>
                                <span className='p-1 mt-1 me-2'>
                                    <Link to={"/testResult/"+encodeURIComponent(finalResultJson)} style={{ textDecoration: "none" }}>
                                        <Button className='bg-danger'
                                            // color="error"
                                            variant='contained' onClick={() => { handleSubmitTest() }}>
                                            Submit Test
                                        </Button>
                                    </Link>
                                </span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: "center" }}>

                                <Question currentQuestionObj={currentQuestionObj} setCurrentQuestionObj={setCurrentQuestionObj} questions={questions} currQuestionIndex={currQuestionIndex} setCurrQuestionIndex=
                                    {setCurrQuestionIndex} finalResultJson={finalResultJson} />
                                {
                                    isTestFinished &&
                                    <span className="border border-rounded p-4" style={{ margin: "5rem", height: "fit-content", textAlign: "-webkit-center" }} onClick={() => setTestFinished(false)}>
                                        <h1 className='display-6'>Result</h1>
                                        <h1 className={testResult < questions.length / 3 ? "display-3 text-danger" : "display-3 text-success"}>
                                            {testResult}/{questions.length}
                                        </h1>
                                        <h1 className='display-6 text-muted' style={{ fontSize: "20px" }}>
                                            {
                                                testResult / questions.length * 100
                                            }%
                                        </h1>
                                    </span>
                                }
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

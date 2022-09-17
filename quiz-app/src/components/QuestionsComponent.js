import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes, useParams } from 'react-router-dom';

const questions = [
    {
        questionId: 101,
        question: "What is you name?",
        op1: "AAAAA",
        op2: "BBBBB BBB BB",
        op3: "CCC CC CC C",
        op4: "DDASXC CSA",
        correctAns: "AAAAA"
    },
    {
        questionId: 102,
        question: "What is your pet name?",
        op1: "X",
        op2: "Y",
        op3: "Z",
        op4: "S",
        correctAns: "Z"
    },
    {
        questionId: 103,
        question: "What is your friends name?",
        op1: "A",
        op2: "B",
        op3: "C",
        op4: "D",
        correctAns: "A"
    }, {
        questionId: 104,
        question: "What is your friends pet name?",
        op1: "X",
        op2: "Y",
        op3: "Z",
        op4: "S",
        correctAns: "Z"
    }, {
        questionId: 105,
        question: "What is yhakuyai uyaiuyia name?",
        op1: "X",
        op2: "Y",
        op3: "Z",
        op4: "S",
        correctAns: "Z"
    },
    {
        questionId: 106,
        question: "What is your country name?",
        op1: "X",
        op2: "Y",
        op3: "Z",
        op4: "S",
        correctAns: "Z"
    },
    {
        questionId: 107,
        question: "What ajkaouiai uhiuyaiuiau ?",
        op1: "X",
        op2: "Y",
        op3: "Z",
        op4: "S",
        correctAns: "Z"
    },
    {
        questionId: 108,
        question: "What is your poaispoi isj?",
        op1: "X",
        op2: "Y",
        op3: "Z",
        op4: "S",
        correctAns: "Z"
    },
    {
        questionId: 109,
        question: "What is your ahiuay hauyaiuhban ?",
        op1: "X",
        op2: "Y",
        op3: "Z",
        op4: "S",
        correctAns: "Z"
    },
    {
        questionId: 110,
        question: "Whoiauydo ijoaiaoa iuaoaiuao oaip ban ?",
        op1: "X",
        op2: "Y",
        op3: "Z",
        op4: "S",
        correctAns: "Z"
    }
]

export function SelectedQuestionComponent() {
    const { id } = useParams();
    return (
        <div className='p-2 '>
            {
                questions.map(ques => {
                    if (ques.questionId == id) {
                        return <div>
                            <h2 className='display-6'>{ques.question}</h2>
                            <div className='border-top'>
                                <ol className='list-unstyled p-2'>
                                    <li key={ques.questionId} className="mt-2 mb-2"><input className='form-check-input' type="radio" name='ans' value={ques.op1}></input> {ques.op1}</li>
                                    <li key={ques.questionId} className="mt-2 mb-2"><input className='form-check-input' type="radio" name='ans' value={ques.op2}></input> {ques.op2}</li>
                                    <li key={ques.questionId} className="mt-2 mb-2"><input className='form-check-input' type="radio" name='ans' value={ques.op3}></input> {ques.op3}</li>
                                    <li key={ques.questionId} className="mt-2 mb-2"><input className='form-check-input' type="radio" name='ans' value={ques.op4}></input> {ques.op4}</li>
                                </ol>
                            </div>
                            <button className='btn border-dark btn-sm'>Previous</button>
                            <button className='btn border-dark btn-sm ms-3'>Next </button>
                        </div>
                    }
                })
            }
        </div>
    )
}

const divStyle = { "padding": "2rem", "marginTop": "1rem" };
export const QuestionsComponent = () => {
    return (
        <div style={{ display: "flex", padding: "2rem", border: '1' }}>
            <Router>
                <div style={divStyle} >
                    <h1 className="display-6 text-danger">Questions</h1>
                    <ol>
                        {
                            questions.map(ques => {
                                return <li key={ques.questionId}>
                                    <Link to={"/question/" + ques.questionId} className='btn '>{ques.question}</Link>
                                </li>
                            })
                        }
                    </ol>

                </div>
                <div style={divStyle}>
                    <Routes>
                        <Route path='/question/:id' element={<SelectedQuestionComponent />} />
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

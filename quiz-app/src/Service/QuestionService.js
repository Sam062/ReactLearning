import axios from 'axios';

const BASE_URL = "http://localhost:9695/questions";
export function getAllQuestions() {
    const URI = "/getAllQuestions";
    return axios.get(BASE_URL + URI);

    // return [
    //     {
    //         questionId: 101,
    //         question: "Number of primitive data types in Java are?",
    //         op1: "1",
    //         op2: "8",
    //         op3: "6",
    //         op4: "7",
    //         correctAns: "8"
    //     },
    //     {
    //         questionId: 102,
    //         question: "What is your pet name?",
    //         op1: "X",
    //         op2: "Y",
    //         op3: "Z",
    //         op4: "S",
    //         correctAns: "Z"
    //     },
    //     {
    //         questionId: 103,
    //         question: "What is your friends name?",
    //         op1: "A",
    //         op2: "B",
    //         op3: "C",
    //         op4: "D",
    //         correctAns: "A"
    //     }, {
    //         questionId: 104,
    //         question: "What is your friends pet name?",
    //         op1: "X",
    //         op2: "Y",
    //         op3: "Z",
    //         op4: "S",
    //         correctAns: "Z"
    //     }, {
    //         questionId: 105,
    //         question: "What is yhakuyai uyaiuyia name?",
    //         op1: "X",
    //         op2: "Y",
    //         op3: "Z",
    //         op4: "S",
    //         correctAns: "Z"
    //     },
    //     {
    //         questionId: 106,
    //         question: "What is your country name?",
    //         op1: "X",
    //         op2: "Y",
    //         op3: "Z",
    //         op4: "S",
    //         correctAns: "Z"
    //     },
    //     {
    //         questionId: 107,
    //         question: "What ajkaouiai uhiuyaiuiau ?",
    //         op1: "X",
    //         op2: "Y",
    //         op3: "Z",
    //         op4: "S",
    //         correctAns: "Z"
    //     },
    //     {
    //         questionId: 108,
    //         question: "What is your poaispoi isj?",
    //         op1: "X",
    //         op2: "Y",
    //         op3: "Z",
    //         op4: "S",
    //         correctAns: "Z"
    //     },
    //     {
    //         questionId: 109,
    //         question: "What is your ahiuay hauyaiuhban ?",
    //         op1: "X",
    //         op2: "Y",
    //         op3: "Z",
    //         op4: "S",
    //         correctAns: "Z"
    //     },
    //     {
    //         questionId: 110,
    //         question: "Whoiauydo ijoaiaoa iuaoaiuao oaip ban ?",
    //         op1: "X",
    //         op2: "Y",
    //         op3: "Z",
    //         op4: "S",
    //         correctAns: "Z"
    //     }
    // ]
}
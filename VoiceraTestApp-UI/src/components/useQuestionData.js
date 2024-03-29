import { useEffect, useState } from 'react'
import { getAllQuestions } from '../Service/QuestionService';

export const useQuestionData = (userEmail, password) => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        getAllQuestions(userEmail, password).then(
            response => {
                console.log("RESPONSE FROM QUESTIOPNS :: ");
                console.log(response.data);
                console.log("Question LIST:: ");
                console.log(response.data.testSet[0].questionList);
                
                setQuestions(response.data.testSet[0].questionList);
            }
        ).catch((response) => console.log("Error catched", response));
    }, []);
    return questions;
}

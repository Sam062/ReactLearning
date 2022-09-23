import { useEffect, useState } from 'react'
import { getAllQuestions } from '../Service/QuestionService';

export const useQuestionData = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        getAllQuestions().then(
            response => {
                setQuestions(response.data);
            }
        ).catch((response) => alert("Error catched", response));
    }, []);
    return questions;
}

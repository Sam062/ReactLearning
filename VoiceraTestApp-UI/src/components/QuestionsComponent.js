import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes, useParams } from 'react-router-dom';
import { FooterComponent } from './FooterComponent';
import { HeaderComponent } from './HeaderComponent';
import { QuizComponent } from './QuizComponent';
import { ResultComponent } from './ResultComponent';
import { getAllQuestions } from '../Service/QuestionService';
import {useQuestionData} from '../components/useQuestionData'


export const QuestionsComponent = () => {
   
   const [globalState, setGlobalState]= useState('');

    return (
        <div>
        </div>
    )
}

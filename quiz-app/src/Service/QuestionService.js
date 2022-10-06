import axios from 'axios';

const BASE_URL = "http://localhost:9695/questions";
export function getAllQuestions(userEmail, password) {
    const URI = "/getAllQuestions";
    // alert(userEmail + ", "+password);
    return axios.get(BASE_URL + URI + '/' + userEmail + '/' + password);
}

export function validdateCandidateDetails(candidateEmail, testCode) {
    const URI = "/isValidCandidate";

    const data = {
        "email": candidateEmail,
        "secretCode": testCode
    }

    return axios.post(BASE_URL + URI, data);

}
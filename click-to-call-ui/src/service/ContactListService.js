import axios from 'axios';

const URL = "http://localhost:9695/contacts";

class CampaignListService {

    getAllContactLists() {
        return axios.get(`${URL}/getAllContactLists`);
    }

    deleteContactList(id) {
        return axios.delete(`${URL}/deleteContactList/${id}`);
    }

    addContactList(data) {
        return axios.post(`${URL}/saveOrUpdateContactList`, data);
    }

}

export default new CampaignListService();
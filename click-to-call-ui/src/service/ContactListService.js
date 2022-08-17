import axios from 'axios';

const URL="http://localhost:9695/contacts";

class CampaignListService{

    getAllContactLists(){
       return axios.get(`${URL}/getAllContactLists`);
    }

    deleteContactList(id){
        return axios.delete(`${URL}/deleteContactList/${id}`);
    }

}

export default new CampaignListService();
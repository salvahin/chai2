const axios = require('axios');
class User{
    constructor(userId){
        this.userId = userId;
    }
    getUserId() {
        return axios.get('https://reqres.in/api/users/'+this.userId)
        .then(response => response.data.data.id);
    }
}
module.exports = {User};
/*
getUserReport(repoIndex) {
    if(this.canViewRepos){
        return axios.get('https://api.github.com/users/'+this.userName+'/repos')
        .then(response => response.data[repoIndex]);
    }
    return Promise.reject('Cannot view repos');
}*/
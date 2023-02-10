import BaseAPI from '$root/page/base.api';

const bookerApi = {
    createBook : (data) => BaseAPI.post('/booking', data),
    getListBook : () => BaseAPI.get('/booking') 
}

export default bookerApi;
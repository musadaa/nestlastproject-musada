import BaseAPI from '$root/page/base.api';

const bookerApi = {
    createBook : (data) => BaseAPI.post('/booking', data),
    getListBook : () => BaseAPI.get('/booking'),
    getDetailBook : (param) => BaseAPI.get('/booking/'+param),
    updateBook : (data, param) => BaseAPI.put('/booking/'+param, data),
    getDetailBookInv : (param) => BaseAPI.post('/booking/'+param)  
}

export default bookerApi;
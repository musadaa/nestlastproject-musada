import BaseAPI from '$root/page/base.api';

const bookerApi= {
    createbook : (data) => BaseAPI.post('api/booking', data) 
}

export default bookerApi;
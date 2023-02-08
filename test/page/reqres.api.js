import BaseAPI from '$root/page/base.api';

const reqresApi= {
    register : (data) => BaseAPI.post('api/register', data) 
}

export default reqresApi;
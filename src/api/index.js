import axios from '../utils/axios';
// import qs from 'qs';
export function getList(params) {
    return axios({
        url: '/api/getList',
        method: 'get',
        params
    });
}

// export async function getSyncList(params) {
//     return await axios({
//         url: '/api/getList',
//         method: 'get',
//         params
//     });
// }

// get
export async function getPermission(params) {
    return await axios({
        url: '/api/permission',
        method: 'get',
        params
    });
}

export async function getMenuList(params) {
    return await axios({
        url: '/api/menu',
        method: 'get',
        params
    });
}

//post
// export async function **(data) {
//     return await axios({
//         url: '/',
//         method: 'post',
//         data
//     })
// }


//
// export async function *(data) {
//     data = qs.stringify(data);
//     return await axios({
//         url: '/*/*',
//         method: 'post',
//         data
//     })
// }

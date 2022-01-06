import React from 'react';
import axios from 'axios';



export const userLogin = (req) => {
    return axios(
        { 
            "method":'POST',
            'url':'http://localhost:9293/SpringMVC/servlet/User/Access/login',
            "data":req
        }
    )
}
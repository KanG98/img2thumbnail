import axios from 'axios';

const formHeader = {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
}

export const uploadFile = async (file) => {
    try {
         await axios.post('http://localhost:3050/image', file, formHeader);
    } catch(err) {
        console.log(err);
    }
    
}



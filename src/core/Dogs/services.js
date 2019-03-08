import axios from 'axios';

export const getDetails = params => (
    axios.get(`https://dog.ceo/api/breed/${ params }/images/random`)
        .then(({ data: { message } }) => message)
);

export const getList = () => (
    axios.get('https://dog.ceo/api/breeds/list')
        .then(({ data: { message } }) => message)
);

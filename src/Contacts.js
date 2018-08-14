import axios from 'axios';

let contacts = [];

export default {
    add(contact) {
        if (
            contact.hasOwnProperty('nombre') &&
            contact.hasOwnProperty('email') &&
            contact.hasOwnProperty('id')
        ) {
            contacts.push(contact);
            /*
            contacts.push({
                nombre : 'Mario',
                email : 'Mario@gmail.com',
                id: 10
            });
            */
        } else {
            throw 'invalid format';
        }
    },
    delete(contactId) {
        const index = contacts
            .map(({id}) => id)
            .findIndex(id => id === contactId);

        if(index > -1) {
            contacts = [
                ... contacts.slice(0, index),
                ... contacts.slice(index + 1)
            ];
        }
    },
    reset() {
        contacts = [];
    },
    db() {
        return [
            ... contacts
        ];
    },
    fetchStarWars(url) {
        // https: //swapi.co/
        // http: //swapi.co/api/people

        return axios.get(url)
            .then(({ data }) => {
                return data.count;
            })
    }
}
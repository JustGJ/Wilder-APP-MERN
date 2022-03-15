import axios from 'axios';

const url = 'http://localhost:3005/api/wilder';

export const wildersRequest = {
    getAll: () =>
        axios
            .get(`${url}/all`)
            .then((res) => res.data)
            .catch((err) => err),
    create: (data: any) => {
        axios
            .post(`${url}/create`, data)
            .then((res) => res)
            .catch((err) => err);
    },
    // find: (id) => {
    //     axios
    //         .get(`${url}/find/${id}`)
    //         .then((res) => res)
    //         .catch((err) => console.log(err));
    // },

    delete: (id: number) => {
        axios
            .delete(`${url}/delete/${id}`)
            .then((res) => res)
            .catch((err) => console.log(err));
    },
    // update: (id) => {
    //     axios
    //         .update(`${url}/update`, id)
    //         .then((res) => res)
    //         .catch((err) => console.log(err));
    // },
};

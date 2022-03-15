import React, { useEffect, useState } from 'react';
import { wildersRequest } from '../../api';
import Wilder from './Wilder';
import { BsFillPlusCircleFill } from 'react-icons/bs';
// interface IWilder {
//     key: any;
//     id: any;
//     name: string;
//     city: string;
//     skills: any;
// }

const WildersList = () => {
    const [wilders, setWilders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getWilders = async () => {
            try {
                const wildersData = await wildersRequest.getAll();
                setWilders(wildersData.result);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        getWilders();
    }, [wilders, loading]);
    return (
        <div className="wildersList">
            {wilders?.map((wilder) => (
                <Wilder
                    key={wilder._id}
                    id={wilder._id}
                    name={wilder.name}
                    city={wilder.city}
                    skills={wilder.skills}
                />
            ))}
        </div>
    );
};

export default WildersList;

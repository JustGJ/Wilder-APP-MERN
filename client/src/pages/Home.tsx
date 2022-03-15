import React from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import WildersList from '../components/wilders/WildersList';

const Home = () => {
    return (
        <div className="home">
            <h1>
                Créer un Wilder
                <NavLink to="/create">
                    <BsFillPlusCircleFill />
                </NavLink>
            </h1>
            <WildersList />
        </div>
    );
};

export default Home;

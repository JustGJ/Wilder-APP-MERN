import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonBack from '../components/ui/ButtonBack';
import WilderForm from '../components/wilders/WilderForm';

const Create = () => {
    const navigate = useNavigate();
    return (
        <div className="content">
            <ButtonBack text="Revenir en arrière" click={() => navigate('/')} />
            <h2>Créer un nouveau Wilder</h2>
            <WilderForm />
        </div>
    );
};

export default Create;

import React from 'react';
import Layout from './components/layout/Layout';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Create from './pages/Create';

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<Create />} />

                    {/* <Route path="/create" element={<Create />} />
                    <Route path="/update/:id" element={<Update />} />
                    <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </Layout>
        </>
    );
}

export default App;

import { useContext } from 'react';

// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// context
import { UserContext } from './context/User';

// components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// pages

const RoutesApp = () => {

    const { dataUser, setDataUser } = useContext(UserContext);

    return(
        <BrowserRouter>
            <Header />
            <Routes>
                
            </Routes>
            <Footer />
        </BrowserRouter>
    )
    
};

export default RoutesApp;
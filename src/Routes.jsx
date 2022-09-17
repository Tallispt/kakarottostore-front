import { useContext } from 'react';

// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// context
import { UserContext } from './context/User';

// components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// pages
import Home from './pages/Home/Home';

const RoutesApp = () => {

    const { dataUser, setDataUser } = useContext(UserContext);

    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
    
};

export default RoutesApp;
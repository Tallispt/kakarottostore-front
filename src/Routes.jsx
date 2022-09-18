import { useContext } from 'react';

// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// context
import { UserContext } from './context/User';

// pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import TShirts from './pages/Products/TShirts/TShirts';
import Sweatshirts from './pages/Products/Sweatshirt/Sweatshirts';
import Contact from './pages/Contact/Contact';

const RoutesApp = () => {

    const { dataUser, setDataUser } = useContext(UserContext);

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home dataUser={dataUser} />} />
                <Route path="/login" element={<Login setDataUser={setDataUser} />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/t-shirts" element={<TShirts />} />
                <Route path="/sweatshits" element={<Sweatshirts />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
    
};

export default RoutesApp;
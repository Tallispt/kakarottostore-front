// rotas
import RoutesApp from "./Routes";

//GlobalStyle
import GlobalStyle from "./assets/styles/GlobalStyles";

// context
import UserProvider from "./context/User";

// react-toastify
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

    return (
        <UserProvider>
            <GlobalStyle />
            <ToastContainer autoClose={1500} />
            <RoutesApp />
        </UserProvider>
    )

};

export default App;
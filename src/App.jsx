// rotas
import RoutesApp from "./Routes";

// context
import UserProvider from "./context/User";

// react-toastify
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

    return(
        <UserProvider>
            <ToastContainer autoClose={1500} />
            <RoutesApp />
        </UserProvider>
    )

};

export default App;
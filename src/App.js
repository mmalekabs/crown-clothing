import Home from "./routes/home/home.components";
import {Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index={true} element={<Home/>}/>
                <Route path='sign-in' element={<SignIn/>}/>
                <Route/>
            </Route>
        </Routes>
    );
}

export default App;

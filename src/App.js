import Home from "./routes/home/home.components";
import {Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index={true} element={<Home/>}/>
                <Route/>
            </Route>
        </Routes>
    );
}

export default App;

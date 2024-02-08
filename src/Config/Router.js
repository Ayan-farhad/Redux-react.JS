import { Route, Routes } from "react-router-dom";
import Dashboard from "../Component/Dashboard";
import ContactUs from "../Screens/ContactUs";
import AboutUs from "../Screens/AboutUs";
import Detail from "../Screens/Detail";

function RouterApp(){
    return(
        <Routes>
            <Route>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/ContactUS" element={<ContactUs/>}/>
                <Route path="/AboutUs" element={<AboutUs/>}/>
                <Route path="/Detail" element={<Detail/>}/>

            </Route>
        </Routes>
    )
}

export default RouterApp;
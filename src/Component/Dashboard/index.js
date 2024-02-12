import Header from "../Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../Footer";

function Dashboard() {
    const navigate = useNavigate();
    const [color, setColor] = useState(0);
    const [show, setShow] = useState(0)
    const theme = useSelector(state => state.theme)

    
    
    return (
        <>
            <Header />
        {/* <Footer/> */}
            <br />
            {/* <div style={divStyle}>

                <button onClick={() => navigate('/ContactUS')}
                    style={contactBtn} >ContactUs</button>
 
                <button onClick={() => navigate('/AboutUs')}
                    style={aboutBtn} >AboutUs</button>

                <button onClick={() => navigate('/Detail')}
                    style={detailBtn} >Detail</button>
            </div> */}
        </>
    )
}

export default Dashboard;

// const divStyle ={
//     backgroundColor: 'bisque',
//     width: '100%',
//     height: '300px',
//     textAlign: 'center',
    
// };
// const contactBtn = {
//     backgroundColor: 'rgb(147, 112, 181)',
//     width: '150px',
//     height: '50px',
// };
// const aboutBtn = {
//     backgroundColor: 'rgb(147, 112, 181)',
//     width: '150px',
//     height: '50px',
    
// };
// const detailBtn = {
//     backgroundColor: 'rgb(147, 112, 181)',
//     width: '150px',
//     height: '50px',
// };

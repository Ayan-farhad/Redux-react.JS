import Header from "../../Component/Header";
import { useNavigate } from "react-router-dom";

function ContactUs() {
    const navigate = useNavigate();

    return (
        <div>
            <Header/>
            <br />
            <div style={divStyle}>

                <button onClick={() => navigate('/ContactUS')}
                    style={contactBtn} >ContactUs</button>

                <button onClick={() => navigate('/AboutUs')}
                    style={aboutBtn} >AboutUs</button>

                <button onClick={() => navigate('/Detail')}
                    style={detailBtn} >Detail</button>
            <h1>ContactUS page</h1>
            </div>
        </div>
    )
}

export default ContactUs;

const divStyle ={
    backgroundColor: 'bisque',
    width: '100%',
    height: '300px',
    textAlign: 'center',
    
};
const contactBtn = {
    backgroundColor: 'rgb(147, 112, 181)',
    width: '150px',
    height: '50px',
};
const aboutBtn = {
    backgroundColor: 'rgb(147, 112, 181)',
    width: '150px',
    height: '50px',
    
};
const detailBtn = {
    backgroundColor: 'rgb(147, 112, 181)',
    width: '150px',
    height: '50px',
};

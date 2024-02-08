import Header from "../../Component/Header";
import { useNavigate } from "react-router-dom";

function ContactUs() {
    const navigate = useNavigate();

    return (
        <div>
            <Header/>
            <div style={{ width: '70%', height: '300px', background: 'bisque', margin: '0px auto' }}>

                <div >
                <button onClick={()=>navigate('/ContactUS')}
                     style={{width:'30%', height:'60px'}} >ContactUs</button>

                    <button onClick={()=>navigate('/AboutUs')}
                    style={{width:'30%', height:'60px'}} >AboutUs</button>

                    <button onClick={()=>navigate('/Detail')}
                    style={{width:'30%', height:'60px'}} >Detail</button>
                </div>
                <h1>ContactUS page</h1>
            </div>
        </div>
    )
}

export default ContactUs;
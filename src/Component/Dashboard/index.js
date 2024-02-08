import Header from "../Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { useSelector } from "react-redux";
function Dashboard() {
    const navigate = useNavigate();
    const [color, setColor] = useState(0);
    // const theme = useSelector(state => state.theme)



    return (
        <>
            <Header />
            <br />
            {/* <div style={{ width: '70%', height: '300px', background:'white', margin: '0px auto' }}>

                        <button style={greenBtn} onClick={() => setColor(0)}>Green</button>
                        <button style={redBtn} onClick={() => setColor(1)} >Red</button>
                        <button style={yellowBtn} onClick={() => setColor(2)}>Yellow</button>
                    <br/>
                    <button onClick={() => navigate('/ContactUS')}
                        style={{ width: '30%', height: '60px' }} >ContactUs</button>

                    <button onClick={() => navigate('/AboutUs')}
                        style={{ width: '30%', height: '60px' }} >AboutUs</button>

                    <button onClick={() => navigate('/Detail')}
                        style={{ width: '30%', height: '60px' }} >Detail</button>
            </div> */}
        </>
    )
}

export default Dashboard;

const top={
    marginTop: '50px'
};
const greenBtn ={
    backgroundColor: 'green',
    width:150,
    height:30,
    color: 'white'
    
};
const redBtn ={
    backgroundColor: 'red',
    width:150,
    height:30,
    color: 'white'
    
};
const yellowBtn ={
    backgroundColor: 'yellow',
    width:150,
    height:30,
    color: 'white'
    
};
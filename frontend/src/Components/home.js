import React from "react";
import '../styles.css';
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate=useNavigate();
    return(
        <div className="WholeDiv">
            <div className="back" onClick={()=>{navigate('/home')}}>Back</div>
            <div className="running">
                <p className="course">Data structures and Algorithms</p>
                <p className="course">React</p>
                <p className="course">Node Js</p>
                <p className="course">Manual Testing</p>
                <p className="course">API Testing</p>
            </div>
        </div>
    );
}

export default Home;
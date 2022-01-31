
import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGOUT } from "../../redux/types";

const Header = (props) => {

    let navigate = useNavigate();

    const logOut = () => {
        props.dispatch({ type: LOGOUT });
        navigate("/");
    }



    return (
        <div>
            <div className="headerTr">
                <span className="navigateButtons" onClick={() => navigate(-1)}>back</span>
                <span>Dogecoin</span>
                <span className="navigateButtons" onClick={() => logOut()}>LogOut</span>
            </div>
            <div className="center paddingY">
                <button className="sendTr" onClick={() => navigate('/newTransaction')}> Send </button>
            </div>
        </div>
    )
}

export default connect((state) => ({

    credentials: state.credentials

}))(Header);
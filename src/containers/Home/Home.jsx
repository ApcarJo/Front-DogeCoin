import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Link from '../../components/Link/Link';
import Login from '../../containers/Login/Login';

const Home = (props) => {

    let navigate = useNavigate();

    const goTo = (path) => {
        navigate(path);
    }

    return (
        <div className="center">
            {/* {this.state.user && (<Login/>)}     */}
            {console.log(props.credentials.user)}

            <div className="center">
                <Login />
            </div>
        </div>
    )
}

// export default Home;
export default connect((state) => ({

    credentials: state.credentials

}))(Home);
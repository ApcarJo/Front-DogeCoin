
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Link = (props) => {

    let navigate = useNavigate();

    return (
        <div className="buttonlink" onClick={() => navigate(props.to)}>
            <span>{props.name}</span>
        </div>
    )
}

export default Link;
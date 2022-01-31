import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

const NewTransaction = (props) => {

    let navigate = useNavigate();

    const [dataTransaction, setDataTransaction] = useState(
        {
            address: '',
            quantity: '',
            user_id: '',
            isSent: true,
        });
        
    const [errors, setErrors] = useState({});

    const updateForm = (e) => {
        setDataTransaction({ ...dataTransaction, [e.target.name]: e.target.value })
    }

    const checkError = (arg) => {
        switch (arg) {
            case 'address':
                if ((dataTransaction.address.lenght < 1)) {
                    setErrors({ ...errors, eAddress: 'Introduce una dirección válida' });
                } else {
                    setErrors({ ...errors, eAddress: '' });
                }

                break;

            case 'quantity':
                if (dataTransaction.quantity <= 0) {
                    setErrors({ ...errors, eQuantity: 'Introduce una cantidad válida' });
                } else {
                    setErrors({ ...errors, eQuantity: '' });
                }
                break;

            default:
                break;
        }
    }

    const sendTransaction = async () => {

        let body = {
            address: dataTransaction.address,
            quantity: dataTransaction.quantity,
            user_id: props.credentials.user?._id,
            isSent: true
        }

        let res = await axios.post('https://dogecoin-back.herokuapp.com/transactions', body, { headers: { 'authorization': 'Bearer ' + props.credentials.token } });
        console.log(res);

        setTimeout(() => {
            navigate(`/transactions`);
        }, 750);
    }

    return (
        <div className="vistaRegisterUser">
            <div className="actionCard center column">
                NEW TRANSACTION
                <div className="box1">
                    <input className="inputRegister" name="address" type="text" onChange={updateForm} onBlur={() => checkError("address")} placeholder="Address" required />
                    <div className="errorsText">{errors.eAddress}</div>
                </div>


                <div className="box1">
                    <input className="inputRegister" name="quantity" type="number" onChange={updateForm}
                        onBlur={() => checkError("quantity")} placeholder="Quantity" required />
                    <div className="errorsText">{errors.quantity}</div>
                </div>

                <div className="sendButton center" onClick={() => sendTransaction()}>Register</div>
            </div>
        </div>
    )
}

export default connect((state) => ({

    credentials: state.credentials

}))(NewTransaction);
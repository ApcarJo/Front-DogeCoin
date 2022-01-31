import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import spinner from '../../img/spinner2.gif'
import TransactionBox from '../../components/TransactionBox/TransactionBox'
import { useNavigate } from 'react-router-dom';

const Transaction = (props) => {

    let navigate = useNavigate();

    // Hooks
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        getTransactions();
    }, []);

    const newDate = new Date();
    const transArray = [];

    const getTransactions = async () => {
        try {
            const token = props?.credentials.token;

            let body = {
                user_id: props.credentials.user._id
            }

            // let res = await axios.post(`https://dogecoin-back.herokuapp.com/transactions/all`, body, { headers: { 'authorization': 'Bearer ' + token } });
            let res = await axios.post('https://dogecoin-back.herokuapp.com/user/getUser', body, { headers: { 'authorization': 'Bearer ' + token } });
            setTransactions(res.data.transactions);
            // for (let i in transactions) {
            //     transArray.push(i);
            // }

        } catch (err) {
            console.log({ message: err.message });
        }
    }
    if (transactions) {
        return (
            <div className="center column">
                <div className="bg-grey">
                    <div className="headerTr">
                    <span onClick={()=>navigate(-1)}>back</span>
                    <p>Dogecoin</p>
                    <p>tools</p>
                </div>
                <div>
                    {transactions.map((a, index) => (
                        <div className="">
                            <div>
                                <span className="dateTr df left">
                                    {(moment(props.date).format('DDMMYY') == moment(newDate).format('DDMMYY')) ? moment(a.Date).format("MMM Do YY") : null}
                                </span>
                            </div>
                            <TransactionBox
                                address={a.address}
                                quantity={a.quantity}
                                isSent={a.isSent}
                                date={a.date}
                            />
                        </div>
                    ))}
                </div>
            </div>
            </div >
        );
    } else {

    return (
        <div className="spinnerContainer">
            <div className="spinner">
                <img src={spinner} alt="spinner" width="60" />
            </div>
        </div>
    );
}
}

export default connect((state) => ({

    credentials: state.credentials

}))(Transaction);
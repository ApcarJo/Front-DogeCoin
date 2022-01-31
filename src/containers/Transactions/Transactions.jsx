import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import TransactionBox from '../../components/TransactionBox/TransactionBox'
import Header from '../../components/Header/Header';
import GraphicBox from '../../components/GraphicBox/GraphicBox';
import { useNavigate } from 'react-router-dom';

const Transaction = (props) => {

    let navigate = useNavigate();

    // Hooks
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        getTransactions();
    }, []);

    const newDate = new Date();


    const getTransactions = async () => {
        try {
            const token = props?.credentials.token;

            let body = {
                user_id: props.credentials.user._id
            }

            // let res = await axios.post(`https://dogecoin-back.herokuapp.com/transactions/all`, body, { headers: { 'authorization': 'Bearer ' + token } });
            let res = await axios.post('https://dogecoin-back.herokuapp.com/user/getUser', body, { headers: { 'authorization': 'Bearer ' + token } });
            setTransactions(res.data.transactions);

        } catch (err) {
            console.log({ message: err.message });
        }
    }
    return (
        <div className="center column">
            <div className="boxTr bg-grey">
                <Header />
                <GraphicBox />
                <div className="center paddingY">
                    <button className="sendTr" onClick={() => navigate('/newTransaction')}> Send </button>
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
}

export default connect((state) => ({

    credentials: state.credentials

}))(Transaction);
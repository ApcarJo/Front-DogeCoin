import React from 'react';
import moment from 'moment';

const TransactionBox = (props) => {

    const newDate = new Date();

    return (
        <div className="-transaction df center row">
            <div className="df column" style={{width:16 + 'em'}}>
                <span className="df left">{props.isSent ? 'Enviado' : 'Recibido'}</span>
                <span className="df left">{moment(props.date).format('DDMMYY') == moment(newDate).format('DDMMYY') ? moment(props.date).calendar() : null}</span>
            </div>
            <div className="center df column">
                <div className="coinStyle df row">
                <span>+*** </span>
                <span> DOGE</span> 
                </div>
                <span className="priceQuantity">+${props.quantity}</span>
            </div>

        </div>
    )
}

export default TransactionBox;
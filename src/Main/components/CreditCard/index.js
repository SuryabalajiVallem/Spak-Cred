import React, { useRef,useEffect } from 'react';
import CreditBackSide from './CardBackSide'
import CreditFrontSide from './CardFrontSide'

const cardBackgroundName = () => {
    let random = Math.floor(Math.random() * 25 + 1);
    return `${random}.jpeg`;
};

const BACKGROUND_IMG = cardBackgroundName();

const CreditCard = (props) => {
    const cardRef = useRef({});
    useEffect(() => {
        cardRef.current.style.transform = 'rotateY(' + props.toggle + ')';
    }, [props.toggle])
    const myStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/credit-card-background/${BACKGROUND_IMG})`,
    };
    return (
        <div className="card-container">
            <div className="card-main"  ref={cardRef} >
                <div className="card-img card-front " style={myStyle} >
                    <CreditFrontSide  
                    cardNumber={props.cardNumber}
                    cardHolder={props.cardHolder}
                    cardMonth={props.cardMonth}
                    cardYear={props.cardYear}
                    ></CreditFrontSide>
                </div>
                <div className="card-img card-back" style={myStyle}>
                    <CreditBackSide  cardNumber={props.cardNumber} cardCvv = {props.cardCvv}></CreditBackSide>
                </div>
            </div>
        </div>
    );
};

export default CreditCard;

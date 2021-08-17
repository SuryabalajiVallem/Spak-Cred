import React, { useState, useEffect,useMemo} from 'react';
import TextTransition from "react-text-transition";
const CARDS = {
    visa: '^4',
    amex: '^(34|37)',
    mastercard: '^5[1-5]',
    discover: '^6011',
    unionpay: '^62',
    troy: '^9792',
    diners: '^(30[0-5]|36)'
};

const CreditBackSide = (props) => {
    const [cardCvvNumber,setCardCvvNumber] = useState([]);
    const cardType = (cardNumber) => {
        const number = cardNumber;
        let re;
        for (const [card, pattern] of Object.entries(CARDS)) {
            re = new RegExp(pattern);
            if (number.match(re) != null) {
                return card;
            }
        }

        return 'visa';
    };

    const useCardType = useMemo(() => {
        return cardType(props.cardNumber);
    }, [props.cardNumber]);
    
    useEffect(() => {
        let finalCardCvvArray = []
        let temp = props.cardCvv.split('')
        for(let element of temp){
            if(element)
            finalCardCvvArray.push('*')
        }
        setCardCvvNumber(finalCardCvvArray);
    }, [props.cardCvv]);
   
    return (
        <div>
            <div>
                <div className="blackStrip"></div>
                <div className="m-2 mt-3 d-flex justify-content-end">
                    <div className="cvv">CVV</div>
                </div>
                <div className="m-2 whiteStrip d-flex justify-content-end">
                    <div className="cvvValue">
                        {
                            props.cardCvv && cardCvvNumber.map((e, i) => <TextTransition
                                key={i}
                                inline
                                text={e}
                                springConfig={{ stiffness: 80, damping: 20 }}
                                direction="down"
                                className="num pr-3"
                            />)
                        }
                    </div>
                </div>
                <div className="mt-4 m-1 d-flex justify-content-end">
                    <img
                        alt={useCardType}
                        src={process.env.PUBLIC_URL+`/credit-card-types/${useCardType}.png`}
                        className="card-type-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default CreditBackSide;

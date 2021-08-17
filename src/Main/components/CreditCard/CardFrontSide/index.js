import React, { useState, useMemo,useEffect} from 'react';
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


const CreditFrontSide = (props) => {
    let defVal = "#### #### #### ####";
    const [cardNumArr, setcardNumArr] = useState(defVal.split(''));
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
        let temp = cardNumArr.map(formatNumber);
        setcardNumArr(temp);
    }, [props.cardNumber]);

    
    const formatNumber = function(char,i){ 
        
        if(props.type==='amex'){
            if(i===4 || i===11) {    
                char=' ';
            }
            else if(i<4 || i>13)
                char = (props.cardNumber[i]===undefined)?'#':props.cardNumber[i];
            else {
                char = (props.cardNumber[i]===undefined)?'#':'*';
            }
        }
        else{
            if(i===4 || i===9 || i===14) {    
                char=' ';
            }
            else if(i<4 || i>14)
                char = (props.cardNumber[i]===undefined)?'#':props.cardNumber[i];
            else {
                char = (props.cardNumber[i]===undefined)?'#':'*';
            }
        }
        return char; 
    }
 
    return (
        <div style={{color:'white'}}>
            <div className="p-4 d-flex justify-content-between">
                <img src= {process.env.PUBLIC_URL+`/credit-card-images/chip.png`} className="chip" alt="chip" />
                <img
                    alt={useCardType}
                    src={process.env.PUBLIC_URL+`/credit-card-types/${useCardType}.png`}
                    className="card-type-image"
                />
            </div>
        <div  className="numRow mt-3 align-middle card-number-section">
            <strong>
            { props.type==='amex'?
                        cardNumArr.slice(0,17).map((n,i)=>(
                            <TextTransition
                                inline 
                                key={i}
                                text={ n }
                                springConfig={{ stiffness: 80, damping: 20 }}
                                direction="down"
                                className="num pr-3"
                                />
                            )) 
                        :
                        cardNumArr.map((n,i)=>(
                            <TextTransition
                                key={i}
                                inline
                                text={ n }
                                springConfig={{ stiffness: 80, damping: 20 }}
                                direction="down"
                                className="num pr-3"
                                />
                            ))
                    }
            </strong>
        </div>
        <div className="row card-holder-expiry-section">
            <div className="col-9">
                <div className="row h6 metaText">Card Holder</div>
                <div className="row h6">
                    <div className="pr-3 h6 card-holder-name">{ props.cardHolder || 'VALLEM SURYA BALAJI' }</div>
                </div>
            </div>
            <div className="col-3" >
                <div className="row h6 metaText">Expiry</div>
                <div className="row h6">
                <TextTransition
                    inline
                    text={ props.cardMonth || 'MM' }
                    springConfig={{ stiffness: 80, damping: 20 }}
                    className="p-0 h6 mon"
                    direction="down"
                    />
                    /
                    <TextTransition
                    inline
                    text={ props.cardYear.toString().substr(2, 2) || 'YY'}
                    springConfig={{ stiffness: 80, damping: 20 }}
                    className="p-0 h6"
                    direction="down"
                    />
                    
                </div>
            </div>
        </div>
    </div>
    );
};

export default CreditFrontSide;

import React, { useState, useCallback } from 'react';
import CreditForm from './components/CreditForm';
import CreditCard from './components/CreditCard';
const initialState = {
    cardNumber: '#### #### #### ####',
    cardHolder: 'VALLEM SURYA BALAJI',
    cardMonth: '',
    cardYear: '',
    cardCvv: '',
    isCardFlipped: false,
    toggle:'0deg',
    fieldType:''
};

const Main = () => {
    const [state, setState] = useState(initialState);
    const updateStateValues = useCallback(
        (keyName, value) => {
            if(keyName === 'clear-form'){
                setState(initialState);
            }else{
                setState({
                    ...state,
                    [keyName]: value || initialState[keyName]
                });
            }
        },
        [state]
    );
    const updateCardFlip = useCallback(
        (toggleValue) => {
            setState({
                ...state,
               toggle: toggleValue || initialState['toggle']
            });
        },
        [state]
    )
    return (
        <div className="wrapper">
            <CreditForm
                cardMonth={state.cardMonth}
                cardYear={state.cardYear}
                onUpdateState={updateStateValues}
                onFlipCreditCard={updateCardFlip}
            >
                <CreditCard 
                    cardNumber={state.cardNumber}
                    cardHolder={state.cardHolder}
                    cardMonth={state.cardMonth}
                    cardYear={state.cardYear}
                    cardCvv={state.cardCvv}
                    isCardFlipped={state.isCardFlipped}
                    toggle = {state.toggle}
                    onUpdateState
                    onFlipCreditCard>
                </CreditCard>
            </CreditForm>
        </div>
    );
};

export default Main;

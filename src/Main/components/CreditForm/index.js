import React, {useState, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import { FormControl,InputLabel,TextField,Select,MenuItem,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const currentYear = new Date().getFullYear();
const creditExpiryMonths = Array.from({ length: 12 }, (x, i) => {
    const month = i + 1;
    return month <= 9 ? '0' + month : month;
});
const creditExpiryYears = Array.from({ length: 9 }, (_x, i) => currentYear + i);
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    formControl: {
        minWidth: 120,
      },
  }));

export default function CreditForm({
    onUpdateState,
    onFlipCreditCard,
    children
}) {
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [cardMonth, setCardMonth] = useState('');
    const [cardYear, setCardYear] = useState('');
    const [cardCvv, setCardCvv] = React.useState('');
    const classes = useStyles();
    const boxRef = useRef(null);
    const cardNumberRef = useRef(null);
    const cardHolderRef = useRef(null);
    const cardExpiryRef = useRef(null);
   
    const handleFormChange = (event) => {
        const { name, value } = event.target;
        if (name === 'cardCvv') {
            const regex = /^[0-9]{0,4}$/
            if (regex.test(event.target.value)) {
                setCardCvv(value)
            }
        }else{
            if(name === 'cardHolder'){
                setCardHolder(value)
            }
            if(name === 'cardMonth'){
                setCardMonth(value)
            }
            if(name === 'cardYear'){
                setCardYear(value)
            }
        }
        onUpdateState(name, value);
    };
    const handleSubmit = () =>{
        setCardNumber('')
        setCardHolder('')
        setCardMonth('')
        setCardYear('')
        onUpdateState('clear-form','');
    }
    const updateToggle = function(){
        onFlipCreditCard('180deg')
    };

    const revertToggle = function(){
        onFlipCreditCard('360deg')
    };
    const updateCardNumber = function(e){
        const { name, value } = e.target;
        const regex =  /^[0-9]{0,16}$/
        let num = e.target.value.replaceAll(' ','');
        if(regex.test(num)){
            let ctype = getCardType(num).toLowerCase();
            ctype = ctype.length===0?'visa':ctype;
            if(ctype==='amex'){
                let tempCardNumber = (num.slice(0,4).replace(/(.{4})/g, '$1 ') + 
                    num.slice(4,10).replace(/(.{6})/g, '$1 ') +
                    num.slice(10,15)).trim();
                setCardNumber(tempCardNumber);
            }
            else{
                setCardNumber(num.replace(/(.{4})/g, '$1 ').trim());
            }
            onUpdateState(name, value);
        }
        
    }
    
    const getCardType = (cardNum) =>{
        var payCardType = "";
        var regexMap = [
          {regEx: /^4[0-9]{5}/ig,cardType: "VISA"},
          {regEx: /^5[1-5][0-9]{4}/ig,cardType: "MASTERCARD"},
          {regEx: /^3[47][0-9]{3}/ig,cardType: "AMEX"},
          {regEx: /^(5[06-8]\d{4}|6\d{5})/ig,cardType: "MAESTRO"}
        ];
        
        for (var j = 0; j < regexMap.length; j++) {
          if (cardNum.match(regexMap[j].regEx)) {
            payCardType = regexMap[j].cardType;
            break;
          }
        }
    
        if (cardNum.indexOf("50") === 0 || cardNum.indexOf("60") === 0 || cardNum.indexOf("65") === 0) {
          var g = "508500-508999|606985-607984|608001-608500|652150-653149";
          var i = g.split("|");
          for (var d = 0; d < i.length; d++) {
            var c = parseInt(i[d].split("-")[0], 10);
            var f = parseInt(i[d].split("-")[1], 10);
            if ((cardNum.substr(0, 6) >= c && cardNum.substr(0, 6) <= f) && cardNum.length >= 6) {
             payCardType = "RUPAY";
              break;
            }
          }
        }
        return payCardType;
      
    }
    const updateActiveBox = (x,y,width,height) =>{
        boxRef.current.style.display = 'block';
        boxRef.current.style.borderColor='white';
        boxRef.current.style.transform= `translate(${x}rem,${y}rem)`;
        boxRef.current.style.height= `${height}rem`;
        boxRef.current.style.width= `${width}rem`;
    }
    const boxAtCardNumber = ()=>{
        updateActiveBox('1.5','9','21','3.1');
    }
    const boxAtName = ()=>{
        updateActiveBox('1.5','13.5','21.5','3.7');
    }
    const boxAtDate = ()=>{
        updateActiveBox('23','13.5','6','3.6');
    }
    const resetBox = ()=>{
        boxRef.current.style.borderColor='transparent';
        boxRef.current.style.transform= "translate(0,0)";
    }
    return (
        <div className="credit-form-container">
            <div className="card-list">{children}</div>
            <div ref={boxRef} className="card-box"></div>
            <div className="credit-form-inner">
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center" spacing={3}>
                    <Grid item xs={12}  className="pb-28">
                        <InputLabel htmlFor="my-input">Card Number</InputLabel>
                         <TextField ref={cardNumberRef} type="text" value={ cardNumber } className="form-control"  autoComplete="off" label="Enter Card Number" variant="outlined" name= "cardNumber"  onChange={updateCardNumber}  onFocus={boxAtCardNumber} onBlur={resetBox}/>
                    </Grid>
                    <Grid item xs={12} >
                        <InputLabel htmlFor="my-input">Card Holder</InputLabel>
                        <TextField ref={cardHolderRef}  value={cardHolder}   style={{width:'100%'}} id="outlined-basic" name="cardHolder" type="tel"  autoComplete="off" label="Enter Card Holder" onChange={handleFormChange}  onFocus={boxAtName} onBlur={resetBox} variant="outlined" />
                    </Grid>
                        <Grid item xs={3}  spacing={3} >
                            <InputLabel htmlFor="my-input">Expiry Date</InputLabel>
                            <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Month</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    name="cardMonth"
                                    onChange={handleFormChange}
                                    onFocus={boxAtDate}
                                    onBlur={resetBox}
                                    value={cardMonth}
                                    label="Month"
                                    ref={cardExpiryRef}
                                >
                                     {creditExpiryMonths.map((val, index) => (
                                    <MenuItem value={val}>{val}</MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}   className=" pt-28">
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">Year</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    name="cardYear"
                                    onChange={handleFormChange}
                                    onFocus={boxAtDate}
                                    onBlur={resetBox}
                                    value={cardYear}
                                    ref={cardExpiryRef}
                                    label="Year"
                                >
                                    {creditExpiryYears.map((val, index) => (
                                        <MenuItem value={val}>{val}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <InputLabel htmlFor="my-input">CVV</InputLabel>
                            <TextField style={{ width: '100%' }} value={cardCvv}  onFocus={updateToggle}  onBlur={revertToggle} name="cardCvv" onChange={handleFormChange}  id="outlined-basic" type="tel" autoComplete="off" label="Enter CVV" variant="outlined" />
                        </Grid>
                    <Grid item xs={12}>
                        <Button className="form-submit" onClick={handleSubmit} variant="contained" color="primary">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

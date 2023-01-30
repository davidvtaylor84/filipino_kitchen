import React,{useRef, useState} from 'react'
import classes from './Checkout.module.css';


const Checkout = (props) => {

    const [formInputValid, setFormInputValid]=useState({
        name: true,
        address: true,
        postcode: true,
        phoneNo: true
    });

    const isEmpty = value => value.trim()==='';

    const nameInputRef = useRef();
    const addressOneInputRef = useRef();
    const postcodeInputRef = useRef();
    const phoneInputRef = useRef();



    const confirmHandler = (event) =>{
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAddress = addressOneInputRef.current.value;
        const enteredPostcode = postcodeInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredAddressIsValid = !isEmpty(enteredAddress);
        const enteredPostcodeIsValid = !isEmpty(enteredPostcode);
        const enteredPhoneIsValid = !isEmpty(enteredPhone);

        setFormInputValid({
            name: enteredNameIsValid,
            address: enteredAddressIsValid,
            postcode: enteredPostcodeIsValid,
            phoneNo: enteredPhoneIsValid
        })

        const formIsValid = enteredNameIsValid && enteredAddressIsValid && enteredPostcodeIsValid & enteredPhoneIsValid;

        if(!formIsValid){
            return;
        }

        props.onConfirm({
            name: enteredName,
            address: enteredAddress,
            postcode: enteredPostcode,
            phoneNo: enteredPhone
        });
    }

    const nameControlClasses = `${classes.control} ${formInputValid.name ? '': classes.invalid}`;
    const addressControlClasses = `${classes.control} ${formInputValid.address ? '': classes.invalid}`;
    const postcodeControlClasses = `${classes.control} ${formInputValid.postcode? '': classes.invalid}`;
    const phoneControlClasses = `${classes.control} ${formInputValid.phoneNo ? '': classes.invalid}`;

  return (
    <form onSubmit={confirmHandler}>
        <div className={nameControlClasses}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name'ref={nameInputRef}/>
            {!formInputValid.name && <p>Please enter a valid name</p>}
        </div>
        <div className={addressControlClasses}>
            <label htmlFor='address1'>Address</label>
            <input type='text' id='address1' ref={addressOneInputRef}/>
            {!formInputValid.address && <p>Please enter a valid address</p>}
        </div>
        <div className={postcodeControlClasses}>
            <label htmlFor='postcode'>Postcode</label>
            <input type='text' id='postcode'ref={postcodeInputRef}/>
            {!formInputValid.postcode && <p>Please enter a valid postcode</p>}
        </div>
        <div className={phoneControlClasses}>
            <label htmlFor='phone'>Phone No.</label>
            <input type='text' id='phone'ref={phoneInputRef}/>
            {!formInputValid.phoneNo && <p>Please enter a valid phone number</p>}
        </div>
        <div className={classes.actions}>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button>Confirm</button>
        </div>
    </form>
  )
}

export default Checkout
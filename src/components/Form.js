import React, {useContext, useState} from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {FirebaseContext} from "../context/firebase/firebaseContext";

const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)
    const submitHandler = event => {
        event.preventDefault()
        if (value.trim()){
            firebase.addNote(value.trim()).then(()=>{
                alert.show('New note was created!', 'success')
            }).catch(()=>{
                alert.show('Something went wrong!', 'danger')
            })
            alert.show('New note was created!', 'success')
            setValue('')
        } else {
            alert.show('Type note title, please!', 'warning')
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder={'Type note name'}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    );
};

export default Form;
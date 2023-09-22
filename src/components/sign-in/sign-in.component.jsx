import {useState} from "react";
import {
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup
} from '../../utils/firebase/firebase.util'

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-in.styles.scss';

const defaultFormField = {
    email: '',
    password: '',
}

const SignIn = () => {
    const [formField, setFormField] = useState(defaultFormField);
    const {email, password} = formField;

    const resetFormFields = () => {
        setFormField(defaultFormField);
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
                alert(`Email and password doesn't match`);
            } else {
                console.log(error);
            }
        }
    }

    const onChange = (event) => {
        const {name, value} = event.target;

        setFormField({...formField, [name]: value})
    }

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={onSubmit}>
                <FormInput
                    label='Email'
                    type='text'
                    required={true}
                    onChange={onChange}
                    name='email'
                    value={email}
                />

                <FormInput
                    label='Password'
                    type='password'
                    required={true}
                    onChange={onChange}
                    name='password'
                    value={password}
                />
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign in</Button>
                </div>

            </form>
        </div>
    );
}

export default SignIn
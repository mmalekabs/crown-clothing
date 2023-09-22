import {useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase.util'
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-up.styles.scss';

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmationPassword: ''
}

const SignUpForm = () => {
    const [formField, setFormField] = useState(defaultFormField);
    const {displayName, email, password, confirmationPassword} = formField;

    const resetFormFields = () => {
        setFormField(defaultFormField);
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmationPassword) {
            alert('passwords do not match');
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();


        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
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
        <div className='sign-up-container'>
            <h2>Dont have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={onSubmit}>
                <FormInput
                    label='Display Name'
                    type='text'
                    required={true}
                    onChange={onChange}
                    name='displayName'
                    value={displayName}
                />

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

                <FormInput
                    label='Confirmation Password'
                    type='password'
                    required={true}
                    onChange={onChange}
                    name='confirmationPassword'
                    value={confirmationPassword}
                />

                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    );
}

export default SignUpForm
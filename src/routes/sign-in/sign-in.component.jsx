import {signInWithGooglePopup, signInWithGoogleRedirect} from '../../utils/firebase/firebase.util'
import {signInWithRedirect} from "firebase/auth";

const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response)
    }
    return (
        <div>
            <h1>Sign-in page</h1>
            <button onClick={logGoogleUser}>Sign in with Goolge</button>
        </div>
    );
}

export default SignIn
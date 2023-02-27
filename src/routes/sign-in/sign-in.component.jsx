import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import { SignUpForm } from "../../components/sign-up-form/sign-up-form.component";

export const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <button onClick={logGoogleUser}>Sign in Page With Google</button>
            <SignUpForm />
        </div>
    )
}
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils"

export const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        
    }

    return (
        <div>
            <h1>Sign in Page</h1>
        </div>
    )
}
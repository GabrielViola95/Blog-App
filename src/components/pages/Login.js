import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase-config';

const Login = ({setIsAuth}) => {

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true );
            setIsAuth(true);
        })
    }

    return (
        <div className='loginPage'>
            <p>Acceder con Google para continuar</p>
            <button onClick={signInWithGoogle} className='login-with-google-btn'> Accerder con Google</button>
        </div>
    )
}

export default Login;
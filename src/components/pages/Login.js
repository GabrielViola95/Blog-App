import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';

const Login = ({setIsAuth}) => {

    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true );
            setIsAuth(true);
            navigate("/");
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
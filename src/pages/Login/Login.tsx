import React, { useState } from 'react'
import CenteredLayout from '../../components/Layout/CenteredLayout/CenteredLayout';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../redux/auth';
import { useHistory } from 'react-router-dom';
import './Login.css';

const Login: React.FunctionComponent = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [ email, setEmail ] = useState('');
    const [ emailError, setEmailError ] = useState( false );
    const { error } = useSelector( (state: any) => state.auth );

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        setEmail( e.target.value );
    };

    const handleSubmit = () => {
        if ( email.includes('@') ){
            setEmailError( false );
            dispatch(loginAction( { email, history } ));
        } else {
            setEmailError( true );
        }
    }

    return (
        <CenteredLayout>
            <div className='login'>
                <img alt='capgemini logo' src='https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg'/>
                <div className='field login__field--input'>
                    <p className='control login__control--input'>
                        <input className='input login__input' type='email' placeholder='Email' onChange={ handleChange } value={ email }/>
                        <span className='icon is-small is-left'>
                        <i className='fas fa-envelope'></i>
                        </span>
                        <span className='icon is-small is-right'>
                        <i className='fas fa-check'></i>
                        </span>
                    </p>
                    { emailError && <span className='has-text-danger'>Check your email</span>}
                </div>
                <div className='field login__field--button'>
                    <p className='control'>
                        <button className='button is-success login__button' onClick={ handleSubmit }>
                        Login
                        </button>
                        { error && <p className='has-text-danger'>{ error }</p>}
                    </p>
                </div>
            </div>
        </CenteredLayout>
    )
};

export default Login;
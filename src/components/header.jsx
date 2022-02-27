

import React, { useContext } from 'react';
import './header.css';
import { Button } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { AppContext } from '../contexts/AppContext';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
    const history = useHistory();
    const { user } = useContext(AppContext);
    const { setUser } = useContext(AppContext)
    const { cartItems } = useContext(AppContext);

    const Logout = () => {
        history.push('/auth');
        setUser(null)
    }
    const onCart = () => {
        if (cartItems.length > 0) {
            history.push('Cart')
        }
    }
    return (
        <>
            <div className="header-section">
                <img style={{"height": "85px"}} src='https://1000logos.net/wp-content/uploads/2020/01/UMKC-Kangaroos-Logo-2005.png'></img>
                <span className="header-name">E-UMKC</span>
                {user ? <span class="header-btns">
                    <Button onClick={e => onCart()} variant="contained" color="default" startIcon={<AddShoppingCartIcon />}>{cartItems.length}</Button>
                    <Button onClick={Logout} variant="contained" color="default" startIcon={<ExitToAppIcon />}>Logout</Button>
                </span> : null}
            </div >

        </>
    )
}

export default Login;
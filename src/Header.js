import React from 'react'
import { Link, useHistory} from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket , user}] = useStateValue();
    const history = useHistory();
    const login = ()=>{
        if(user){
        auth.signOut();
        history.push("/login")
        }
    }
    return (
        <nav class="header">
            <Link to="/">
                <img className="header__logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img>
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'} className="header__link">
                    <div onClick={login} className="header__options">
                        <span className="header__optionsLineOne">Hello {user ?.email}</span>
                        <span className="header__optionsLineTwo">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__options">
                        <span className="header__optionsLineOne">Returns</span>
                        <span className="header__optionsLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__options">
                        <span className="header__optionsLineOne">Your</span>
                        <span className="header__optionsLineTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                   <div className="header__optionBasket">
                       <ShoppingBasketIcon/>
                        <span className="header__optionsLineTwo header__basketCount">{basket?.length}</span>
                   </div>
                </Link>
            </div>
        </nav>
    )
}


export default Header

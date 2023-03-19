import React, { useRef, useEffect } from 'react';
import { Container } from 'reactstrap';
import logo from '../../assets/images/icons8-floor-reading-lamp-64.png';
import { NavLink, Link } from 'react-router-dom';
import '../../styles/header.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartUiActions } from '../../store/shopping-cart/cartUISlice';

const nav__links = [
  {
    display: 'Home',
    path: '/home',
  },
  {
    display: 'Furnitures',
    path: '/furnitures',
  },
  {
    display: 'Cart',
    path: '/cart',
  },
  {
    display: 'Contact',
    path: '/contact',
  },
];
const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('header__shrink');
      } else {
        headerRef.current.classList.remove('header__shrink');
      }
    });
    return () => document.removeEventListener('scroll', headerRef);
  },[]);
  const logout =()=>{
    localStorage.clear()
    window.location.reload()
}
  return (
    <header className='header' ref={headerRef}>
      <Container>
        <div className='nav__wrapper d-flex align-items-center justify-content-between'>
          <Link to='/home'>
            <div className='logo'>
              <img src={logo} alt='logo' style={{ width: '80px', height: '40px' }}/>
              <h5>Supellex Design</h5>
            </div>
            
          </Link>

          {/* ======= menu ======= */}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <div className='menu d-flex align-items-center gap-5 '>
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? 'active__menu' : ''
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          {/* ======= nav right icons ======= */}

          <div className='nav__right d-flex align-items-center gap-4'>

             <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none"
           stroke="currentColor" strokeWidth="1" strokeLinecap="none" strokeLinejoin="round" 
           className="feather feather-log-out" onClick={logout}>
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>   
            
            {/* <span class="glyphicon glyphicon-search" aria-hidden="true">

            </span> */}

            <span className='cart__icon' onClick={toggleCart}>
              <i className='ri-shopping-basket-line' />
              <span className='cart__badge'>{totalQuantity}</span>
            </span>

            <span className='user'>
              <Link to='/login'>
                <i className='ri-user-line' />
              </Link>
            </span>

            <span className='mobile__menu' onClick={toggleMenu}>
              <i className='ri-menu-line' />
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

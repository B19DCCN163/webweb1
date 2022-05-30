import React from 'react'
import { Link , NavLink} from 'react-router-dom'
import logo from  './header_logo.png'
import './Header.css'
  // <header>
        // {/* <Link to ='/products'>products</Link>
        // <Link to ='/gioithieu'>gioithieu</Link>
        // <Link to ='/user'>user</Link> */}
    // {/* </header> */}

export default function Header() {
  return (
  
    <div className='sticky'>
            <div className='header__wrap'> 
                <div className="container header__container">

                    <div className='header__menu-icon d-md-none'
                    
                    >
                        <span className="material-icons">
                            menu
                        </span>
                    </div>

                    <Link to='/' className="header__logo">
                        <img className="header__logo-img" src={logo} />
                    </Link>

                    <div className="header__nav d-none d-md-block">
                        <ul className="header__nav-list"> 
                            <li className="header__nav-item">
                                <NavLink to ='/' className={(navData) => navData.isActive ? "header__active header__nav-link" : "header__nav-link"}>Trang chủ</NavLink>
                            </li>
                            <li className="header__nav-item">
                            <NavLink to ='/gioithieu' className={(navData) => navData.isActive ? "header__active header__nav-link" : "header__nav-link"}>Giới thiệu</NavLink>
                            </li>
                            <li className="header__nav-item">
                                <Link to='/products' className="header__nav-link">Sản phẩm</Link>
                            </li>
                            <li className="header__nav-item">
                  
                                  <Link to='/tintuc' className="header__nav-link">Tin tức</Link>

                            </li> 
                            {/* <li className="header__nav-item">
                  
                                  <Link to='/iproduct' className="header__nav-link">iProduct</Link>

                            </li> */}

                            <li className="header__nav-item">
                  
                                <Link to='/user/login' className="header__nav-link">Đăng nhập</Link>

                            </li>
                            <li className="header__nav-item">
                  
                                  <Link to='/user/register' className="header__nav-link">Đăng ký</Link>

                            </li>
                            {/* <li className="header__nav-item">
                  
                                  <Link to='/user/register' className="header__nav-link">Tin Tuc</Link>

                            </li> */}
                            <li className="">
                  
                                  <Link to='/' className="header__nav-link1"><i class="fa fa-shopping-cart"></i></Link>

                            </li>
                            

                           

                        </ul>
                   
                    </div>
                    
                </div>
                <div class = "col-left"></div>   
            </div>
            
          
        </div>
     
  )
}

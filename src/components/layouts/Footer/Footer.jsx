import React from 'react'
import './Footer.css'
import logo from  './logo_footer.png'
export default function Footer() {
  return (
  <>
    <div className='footer__container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-4'>
                            <div className='footer__item'>

                                <div>
                                    <span className="material-icons footer__item-icon">
                                        location_on
                                    </span>
                                </div>
                                <div className='footer__item-title'>Địa chỉ</div>
                                <div className='footer__item-des'>20 Hồ Tùng Mậu, Cầu Giấy, Hà Nội</div>
                            </div>

                        </div>
                        <div className='col-12 col-md-4'>
                            <div className='footer__item'>
                                <div className='footer__item-logo'>
                                    <img src={logo} />
                                </div>
                                <div className='footer__item-des'> Duy Dan </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-4'>
                            <div className='footer__item'>
                                <div>
                                    <span className="material-icons footer__item-icon">
                                        email
                                    </span>
                                </div>
                                <div className='footer__item-title'>Email & phone</div>
                                <div className='footer__item-des'>Goitencuaalanang@gmail.com</div>
                                <div className='footer__item-des'>0986 695 565</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='footer__coppyright'>
                <p className='footer__coppyright-des'>Abc <a href='http://mauweb.monamedia.net/' >Duy Dan</a> </p>
            </div> */}
  </>
  )
}

import React from 'react'
import './iProduct.css'
import { Link } from 'react-router-dom'

export default function iProduct() {
  return (
    <div className="product__detail-container container">
            <div className="product__detail-section">
                <div className="product__info row">
                    <div className="col-12 col-md-6">
                        <img className="product__info-img" src='https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/cover_image_mobile_3/715x773/17f82f742ffe127f42dca9de82fb58b1/4/j/1645188313_M1296ZRIW_M932_E03_GHC.jpg?imwidth=800' />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="product__info-right">
                            <div className="product__info-path">
                                <Link to="/" className="product__info-path-link">Trang chủ</Link>/
                                <Link to="/products" className="product__info-path-link">Sản phẩm</Link>/
                                <Link to="" className="product__info-path-link">WOMEN'S FASHION</Link>
                            </div>

                            <h2 className="product__info-title">MEDIUM DIOR BOOK TOTE</h2>
                            <span className="line"></span>
                            <div className="product__info-price-group">
                                <span className="product__info-price-current">30.000 đ</span>
                                <span className="product__info-price-old">
                                    50000 đ </span>
                            </div>
                            <div className="product__info-material">
                                <span>Chất liệu: </span>
                                <span>Gold</span>
                            </div>
                            <p className="product__info-des">The best tote of dior</p>

                            <div className="product__info-group">
                            <div className='quantity__container'>

                                        <span className="quantity-btn quantity-down"
                                        >-</span>
                                        <span className="quantity-num">0</span>
                                        <span className="quantity-btn quantity-up"
                                        >+</span> 
                                        </div>

                                <div className="product__info-btn"
                                   
                                >
                                    Thêm vào giỏ</div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div className="product__detail-section">
                <div className="product__sub">
                    <div className="product__sub-tabs">
                        <div className="product__sub-tab ">Mô tả đánh giá  </div>
                       
                    </div>
                    <div className="product__sub-body">
                        <div className="product__sub-body-item d-none">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="product__sub-body-item">
                            <div className="product__sub-body-comments">
                              Newbie
                            </div>

                            <div className="comment__add">
                                <div className="comment__avatar">
                                    <img className="comment__avatar-img" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fatpsoftware.vn%2Fcac-icon-facebook-co-y-nghia-gi-giai-thich-y-nghia-cac-icon-facebook.html&psig=AOvVaw2CUkJhKlQvdMAXZeDsaTui&ust=1653745866126000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLC6rsrp__cCFQAAAAAdAAAAABAD" />
                                </div>
                                <input placeholder="Nhận xét của bạn về sản phẩm...." className="comment__add-input" />
                                <span className="comment__add-btn">Gửi</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
  )
}

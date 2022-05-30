import React from 'react'
import './Products.css'
import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <div className="container">
      <form action="timkiem">
{/* <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
  <div class="input-group">
    <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon1" class="form-control border-0 bg-light" />
    <div class="input-group-append">
      <button id="button-addon1" type="submit" class="btn btn-link text-primary"><i class="fa fa-search"></i></button>
    </div>
  </div>
</div> */}
<div className='timkiem'>
<div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
  <div class="input-group">
    <div class="input-group-prepend">
      <button id="button-addon2" type="submit" class="btn btn-link text-warning"><i class="fa fa-search"></i></button>
    </div>
    <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon2" class="form-control border-0 bg-light" />
  </div>
</div>
</div>
{/* <div class="input-group mb-4 border rounded-pill p-1">
  <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon3" class="form-control bg-none border-0" />
  <div class="input-group-append border-0">
    <button id="button-addon3" type="button" class="btn btn-link text-success"><i class="fa fa-search"></i></button>
  </div>
</div>
<div class="input-group mb-4 border rounded-pill p-1">
  <div class="input-group-prepend border-0">
    <button id="button-addon4" type="button" class="btn btn-link text-info"><i class="fa fa-search"></i></button>
  </div>
  <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon4" class="form-control bg-none border-0" />
</div> */}
</form>
      <div className="product-title">
        WOMEN'S FASHION 
      </div>
      <div className="product-list">
        <Link to="/iProduct"></Link>
        <div className="product-item">
          <div className="product-img">
            <img src="https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/cover_image_mobile_3/715x773/17f82f742ffe127f42dca9de82fb58b1/4/j/1645188313_M1296ZRIW_M932_E03_GHC.jpg?imwidth=800" alt="" />
          </div>
         <div className="product-desc">
         <div className="product-name">
         <Link className='link' to="/iproduct"><p>MEDIUM DIOR BOOK TOTE</p></Link>
          </div>
          <div className="product-price">
            <span>20000đ</span><del>25000đ</del>
          </div>
         </div>
        </div>
        <div className="product-item">
          <div className="product-img">
            <img src="https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/cover_image_mobile_3/715x773/17f82f742ffe127f42dca9de82fb58b1/4/j/1645188313_M1296ZRIW_M932_E03_GHC.jpg?imwidth=800" alt="" />
          </div>
         <div className="product-desc">
         <div className="product-name">
         <Link className='link' to="/iproduct"><p>MEDIUM DIOR BOOK TOTE</p></Link>
          </div>
          <div className="product-price">
            <span>20000đ</span><del>25000đ</del>
          </div>
         </div>
        </div>
        <div className="product-item">
          <div className="product-img">
            <img src="https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/cover_image_mobile_3/715x773/17f82f742ffe127f42dca9de82fb58b1/4/j/1645188313_M1296ZRIW_M932_E03_GHC.jpg?imwidth=800" alt="" />
          </div>
         <div className="product-desc">
         <div className="product-name">
         <Link className='link' to="/iproduct"><p>MEDIUM DIOR BOOK TOTE</p></Link>
          </div>
          <div className="product-price">
            <span>20000đ</span><del>25000đ</del>
          </div>
         </div>
        </div>
        <div className="product-item">
          <div className="product-img">
            <img src="https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/cover_image_mobile_3/715x773/17f82f742ffe127f42dca9de82fb58b1/4/j/1645188313_M1296ZRIW_M932_E03_GHC.jpg?imwidth=800" alt="" />
          </div>
         <div className="product-desc">
         <div className="product-name">
         <Link className='link' to="/iproduct"><p>MEDIUM DIOR BOOK TOTE</p></Link>
          </div>
          <div className="product-price">
            <span>20000đ</span><del>25000đ</del>
          </div>
         </div>
        </div>
        <div className="product-item">
          <div className="product-img">
            <img src="https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/cover_image_mobile_3/715x773/17f82f742ffe127f42dca9de82fb58b1/4/j/1645188313_M1296ZRIW_M932_E03_GHC.jpg?imwidth=800" alt="" />
          </div>
         <div className="product-desc">
         <div className="product-name">
         <Link className='link' to="/iproduct"><p>MEDIUM DIOR BOOK TOTE</p></Link>
          </div>
          <div className="product-price">
            <span>20000đ</span><del>25000đ</del>
          </div>
         </div>
        </div>
        <div className="product-item">
          <div className="product-img">
            <img src="https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/cover_image_mobile_3/715x773/17f82f742ffe127f42dca9de82fb58b1/4/j/1645188313_M1296ZRIW_M932_E03_GHC.jpg?imwidth=800" alt="" />
          </div>
         <div className="product-desc">
         <div className="product-name">
         <Link className='link' to="/iproduct"><p>MEDIUM DIOR BOOK TOTE</p></Link>
          </div>
          <div className="product-price">
            <span>20000đ</span><del>25000đ</del>
          </div>
         </div>
        </div>
      </div>
      {/* hàng 2 */}
      <div className="product-title">
        MENT'S FASHION
      </div>
      <div className="product-list">
        <div className="product-item">
          <div className="product-img">
            <img src="https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/cover_image_mobile_3/715x773/17f82f742ffe127f42dca9de82fb58b1/4/j/1645188313_M1296ZRIW_M932_E03_GHC.jpg?imwidth=800" alt="" />
          </div>
         <div className="product-desc">
         <div className="product-name">
            <p>MEDIUM DIOR BOOK TOTE</p>
          </div>
          <div className="product-price">
            <span>20000đ</span><del>25000đ</del>
          </div>
         </div>
        </div>
        <div className="product-item">
          <div className="product-img">
            <img src="https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/cover_image_mobile_3/715x773/17f82f742ffe127f42dca9de82fb58b1/4/j/1645188313_M1296ZRIW_M932_E03_GHC.jpg?imwidth=800" alt="" />
          </div>
         <div className="product-desc">
         <div className="product-name">
            <p>MEDIUM DIOR BOOK TOTE</p>
          </div>
          <div className="product-price">
            <span>20000đ</span><del>25000đ</del>
          </div>
         </div>
        </div>
        <div className="product-item">
          <div className="product-img">
            <img src="https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/cover_image_mobile_3/715x773/17f82f742ffe127f42dca9de82fb58b1/4/j/1645188313_M1296ZRIW_M932_E03_GHC.jpg?imwidth=800" alt="" />
          </div>
         <div className="product-desc">
         <div className="product-name">
            <p>MEDIUM DIOR BOOK TOTE</p>
          </div>
          <div className="product-price">
            <span>20000đ</span><del>25000đ</del>
          </div>
         </div>
        </div>
        <div className="product-item">
          <div className="product-img">
            <img src="https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/cover_image_mobile_3/715x773/17f82f742ffe127f42dca9de82fb58b1/4/j/1645188313_M1296ZRIW_M932_E03_GHC.jpg?imwidth=800" alt="" />
          </div>
         <div className="product-desc">
         <div className="product-name">
            <p>MEDIUM DIOR BOOK TOTE</p>
          </div>
          <div className="product-price">
            <span>20000đ</span><del>25000đ</del>
          </div>
         </div>
        </div>
        <div className="product-item">
          <div className="product-img">
            <img src="https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/cover_image_mobile_3/715x773/17f82f742ffe127f42dca9de82fb58b1/4/j/1645188313_M1296ZRIW_M932_E03_GHC.jpg?imwidth=800" alt="" />
          </div>
         <div className="product-desc">
         <div className="product-name">
            <p>MEDIUM DIOR BOOK TOTE</p>
          </div>
          <div className="product-price">
            <span>20000đ</span><del>25000đ</del>
          </div>
         </div>
        </div>
        <div className="product-item">
          <div className="product-img">
            <img src="https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/cover_image_mobile_3/715x773/17f82f742ffe127f42dca9de82fb58b1/4/j/1645188313_M1296ZRIW_M932_E03_GHC.jpg?imwidth=800" alt="" />
          </div>
         <div className="product-desc">
         <div className="product-name">
            <p>MEDIUM DIOR BOOK TOTE</p>
          </div>
          <div className="product-price">
            <span>20000đ</span><del>25000đ</del>
          </div>
         </div>
        </div>
      </div>
    </div>
  )
}
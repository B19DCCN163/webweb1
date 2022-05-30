import './Gioithieu.css'
import img from './anhgt.jpg'
import { Link } from 'react-router-dom'

function IntroduceSection() {

    return (
        <div className='introduce__container'>
            <div className='introduce container'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <img src={img} className='introduce__img' />
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='section__content'>
                            <div className='section__content-heading'>
                                GIỚI THIỆU <br />SẢN PHẨM
                            </div>
                            {/* <div className='section__content-number'>
                                1
                            </div> */}
                            <div className='section__content-desc'>
                            “Routine đang tạo ra những bộ trang phục sản xuất trong nước hoàn toàn có thể sánh ngang với các thương hiệu thời trang nam đến từ nước ngoài về kiểu dáng, chất lượng lẫn phong cách thời trang.” - CEO Routine.

Như ý nghĩa của tên gọi, trang phục của Routine hướng đến việc trở thành thói quen, lựa chọn hàng ngày cho nam giới trong mọi tình huống. Bởi Routine hiểu rằng, sự tự tin về phong cách ăn mặc sẽ làm nền tảng, tạo động lực cổ vũ mỗi người mạnh dạn theo đuổi những điều mình mong muốn. Trong đó, trang phục nam phải mang vẻ đẹp lịch lãm, hợp mốt và tạo sự thoải mái, quan trọng nhất là mang đến cảm giác “được là chính mình” cho người mặc.
                            </div>
                            <Link to='/' className='section__content-btn'>Tìm hiểu thêm</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroduceSection
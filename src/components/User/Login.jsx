import { Link} from 'react-router-dom'
import './Login.css'
import login_img from './login_img.jpg'

function Login() {
    return (
        <div className='login__container'>
            <div className="container bg-white pb-5">
                <div className="row d-flex justify-content-start align-items-center mt-sm-5">
                    <div className="col-lg-5 col-10">
                        <div className=" d-none d-lg-block"> <img src={login_img} alt="" /> </div>
                    </div>
                    <div className="col-lg-4 offset-lg-2 col-md-6 offset-md-3">

                        <div className="mt-3 mt-md-5">
                            <h5 className='login__heading'>ĐĂNG NHẬP</h5>
                            <div className="pt-4">
                                <div className="d-flex flex-column pb-3">
                                    <label htmlFor="username">Tài khoản</label>
                                    <input
                                        type="username" name="username" id="username" className="border-bottom border-primary pt-2" />
                                    <p className='input__message' ></p>
                                </div>

                                <div className="d-flex flex-column pb-3">
                                    <label htmlFor="password">Mật khẩu</label>
                                    <input                                      
                                        type="password" name="password" id="password" className="border-bottom border-primary pt-2" />
                                    <p className='input__message' ></p>
                                </div>

                                <div className="d-flex jusity-content-end pb-4">
                                    <div className="ml-auto">
                                        <a href="#" className="text-danger text-decoration-none">Quên mật khẩu?</a>
                                    </div>
                                </div>
                                <div className='login__btn'>Đăng nhập</div>
                                <div className="register mt-5">
                                    <p>Bạn chưa có tài khoản? <Link to="/user/register">Tạo mới tài khoản</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
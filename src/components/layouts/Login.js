import {Link, useNavigate} from "react-router-dom";
import { Field } from "formik";
import FormErrors from "../FormErrors";
import {useEffect, useRef, useState} from "react";
import { Formik, Form as FormMik } from "formik";
import http from "../../http-common";
import cookies from "react-cookies";

function Login() {
    document.body.classList.add('authentication-bg');
    let navigate = useNavigate();
    const initError = {
        "email":"",
        "password" :""
    }
    const [errors, setErrors] = useState(initError)

    function submitLogin(data)
    {
        http.post('login', data)
            .then(result => {
                cookies.save('access_token', result.data.token)
                navigate('/products')
            })
            .catch(err => {
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div className="account-pages pt-5 my-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="account-card-box">
                            <div className="card mb-0">
                                <div className="card-body p-4">

                                    <div className="text-center">
                                        <div className="my-3">
                                            <a href="index.html">
                                                <span><img src="/template/Uplon/assets/images/logo.png" alt="" height="28"/></span>
                                            </a>
                                        </div>
                                        <h5 className="text-muted text-uppercase py-3 font-16">Sign In</h5>
                                    </div>

                                    <Formik initialValues={{}} onSubmit={async (values) => {
                                                await submitLogin(values)
                                            }}
                                    >
                                        <FormMik>

                                        <div className="form-group mb-3">
                                            <Field name="email" className='form-control' type="text" placeholder={'email'}/>
                                            {errors ? <FormErrors errors={errors.email}/> : ''}
                                        </div>

                                        <div className="form-group mb-3">
                                            <Field name="password" className='form-control' type="password" placeholder={'password'}/>
                                            {errors ? <FormErrors errors={errors.password}/> : ''}
                                        </div>

                                        {/*<div className="form-group mb-3">*/}
                                        {/*    <div className="custom-control custom-checkbox">*/}
                                        {/*        <input type="checkbox" className="custom-control-input"*/}
                                        {/*               id="checkbox-signin" checked=""/>*/}
                                        {/*            <label className="custom-control-label" htmlFor="checkbox-signin">Remember*/}
                                        {/*                me</label>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}

                                        <div className="form-group text-center">
                                            {/*<Link to={'/products'}>*/}
                                            <button className="btn btn-success btn-block waves-effect waves-light"
                                                    type="submit"> Log In
                                            </button>
                                            {/*</Link>*/}
                                        </div>

                                        <a href="pages-recoverpw.html" className="text-muted"><i
                                            className="mdi mdi-lock mr-1"></i> Forgot your password?</a>

                                        </FormMik>
                                    </Formik>

                                    <div className="text-center mt-4">
                                        <h5 className="text-muted py-2"><b>Sign in with</b></h5>

                                        <div className="row">
                                            <div className="col-12">
                                                <button type="button"
                                                        className="btn btn-facebook waves-effect font-14 waves-light mt-3">
                                                    <i className="fab fa-facebook-f mr-1"></i> Facebook
                                                </button>{' '}

                                                <button type="button"
                                                        className="btn btn-twitter waves-effect font-14 waves-light mt-3">
                                                    <i className="fab fa-twitter mr-1"></i> Twitter
                                                </button>{' '}

                                                <button type="button"
                                                        className="btn btn-googleplus waves-effect font-14 waves-light mt-3">
                                                    <i className="fab fa-google-plus-g mr-1"></i> Google+
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-12 text-center">
                                <p className="text-white-50">Don't have an account? <a href="pages-register.html"
                                                                                       className="text-white ml-1"><b>Sign
                                    Up</b></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
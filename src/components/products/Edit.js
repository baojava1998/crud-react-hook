import React, {useEffect, useRef, useState} from "react";
import Form from "../products/Form"
import ProductService from "../../services/ProductService";
import {useNavigate, useParams} from "react-router-dom";
import { Formik, Form as FormMik } from "formik";
import Swal from "sweetalert2";
function Edit() {
    const { productId }= useParams();
    let navigate = useNavigate();
    const initError = {
        "name":"",
        "detail" :""
    }
    const [errors, setErrors] = useState(initError)

    const initialProductState = {
        id: null,
        name: "",
        detail: ""
    };

    const [currentProduct, setCurrentProduct] = useState(initialProductState);
    const [isLoading, setIsLoading] = useState(true);

    const getProduct = (productId) => {
        ProductService.edit(productId)
            .then(response => {
                setCurrentProduct(response.data.data);
                setIsLoading(false);
            })
            .catch(e => {
                console.log(e)
            });
    };

    const isCallEffect = useRef(false);
    useEffect(() => {
        if(isCallEffect.current) {
            getProduct(productId);
        }
        isCallEffect.current = true;
    }, [productId]);

    const updateProduct = (data) => {
        ProductService.update(productId, data)
            .then(response => {
                navigate(-1)
                Swal.fire(
                    'Good job!',
                    'You update Product success!',
                    'success'
                )
            })
            .catch(e => {
                setErrors(e.response.data.errors)
            });
    };

    if (!isLoading) {
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box">
                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    {/*<li className="breadcrumb-item"><a href="#">Uplon</a></li>*/}
                                    {/*<li className="breadcrumb-item"><a href="#">Forms</a></li>*/}
                                    <li className="breadcrumb-item active">Form Validation</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Form Validation</h4>
                        </div>
                    </div>
                </div>
                <div className={'card-box'}>
                    <Formik initialValues={currentProduct}
                            onSubmit={async (values) => {
                                await updateProduct(values)
                            }}
                    >
                        <FormMik>
                            <Form currentProduct={currentProduct} errors={errors}/>
                        </FormMik>
                    </Formik>
                </div>
            </div>
        );
    }
}
export default Edit;
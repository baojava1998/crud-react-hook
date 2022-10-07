import Form from "../products/Form"
import ProductService from "../../services/ProductService";
import { useNavigate } from "react-router-dom";
import { Formik, Form as FormMik } from "formik";
import  {useState} from "react";
import Swal from "sweetalert2";

function Create() {
    let navigate = useNavigate();
    const initError = {
        "name":"",
        "detail" :""
    }
    const [errors, setErrors] = useState(initError)
    const saveProduct = (data) => {
        ProductService.create(data)
            .then(response => {
                navigate('/products')
                Swal.fire(
                    'Good job!',
                    'You create Product success!',
                    'success'
                )
            })
            .catch(e => {
                setErrors(e.response.data.errors)
            });
    };

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
                <Formik initialValues={{ name: "", detail: "" }}
                    onSubmit={async (values) => {
                        await saveProduct(values)
                    }}
                >
                    <FormMik>
                        <Form errors={errors}/>
                    </FormMik>
                </Formik>
            </div>
        </div>
    );
}
export default Create;
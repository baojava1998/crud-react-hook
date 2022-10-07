import { Field } from "formik";
import FormErrors from "../FormErrors";
import {useNavigate} from "react-router-dom";

function Form(props) {
    let navigate = useNavigate();
    function back () {
        navigate(-1)
    }
    return (
        <div>
            <div className="form-group">
                <label>Name</label>
                <Field name="name" className={props.errors && props.errors.name ? 'form-control parsley-error' : 'form-control'} type="text"/>
                {props.errors ? <FormErrors errors={props.errors.name}/> : ''}
            </div>

            <div className="form-group">
                <label>Detail</label>
                <div>
                    <Field name="detail" className={props.errors && props.errors.detail ? 'form-control parsley-error' : 'form-control'} type="text"/>
                    {props.errors ? <FormErrors errors={props.errors.detail}/> : ''}
                </div>
            </div>
            <div className="form-group">
                <div>
                    <button type="submit" className="btn btn-primary waves-effect waves-light mr-1">
                        Submit
                    </button>
                    <button type="reset" className="btn btn-secondary waves-effect" onClick={back}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Form;
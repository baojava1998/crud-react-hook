function FormErrors(props) {
    let errors = props.errors;
    if (errors) {
        return (
            <div>
                {
                    errors.map((error) =>
                        <div className={'text-danger'}>{error}</div>
                    )
                }
            </div>
        );
    }
}

export default FormErrors;
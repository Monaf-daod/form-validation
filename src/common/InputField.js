import { Input, Label, FormGroup} from "reactstrap"
import {ErrorMessage ,useField} from "formik"

const InputField = (props) => {
    const [field, meta] =useField(props);

    return ( 
        <FormGroup>
            <Label className="fw-light">{props.placeholder}</Label>
            <Input
                {...props}
                {...field}
                width="100%"
                autoComplete="off"
                className={meta.touched && meta.error && "is-invalid"}
            />
            <ErrorMessage component="div" name={field.name} className="error"/>
        </FormGroup>
     );
}
 
export default InputField;
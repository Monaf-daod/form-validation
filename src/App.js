import {useState} from "react"
import * as Yup from 'yup'
import {Formik, Form} from "formik"
import {Row, Col, Container, Button} from "reactstrap"
import InputField from "./common/InputField"
import loginImage from "./assests/login.png"

function App() {

  const [formData, setFormData] =useState({
    firstName : "",
    lastName: "",
    email:"",
    password : "",
    confirmPassword : ""
  })
  // const handleReset =()=>{
  //    setFormData({
  //     firstName : "",
  //     lastName: "",
  //     email:"",
  //     password : "",
  //     confirmPassword : ""
  //    })
  // }

  const Schema = Yup.object({
    firstName : 
      Yup.string()
      .max(15, "Must be less than 15 charecters ")
      .required("required"),
    lastName : 
      Yup.string()
      .max(20, "Must be less than 20 charecters")
      .required("required"),
    email :
      Yup.string()
      .email("Email in invalid")
      .required("required"),
    password : 
      Yup.string()
      .min(6, "Password must be at least 6 charecters or more")
      .required("Password is required"),
    confirmPassword : 
      Yup.string()
      .oneOf([Yup.ref("password"), null], "Must be match")
      .required("Confirm is required")
  })

  const onChange=(e) => {
    setFormData({...formData,[e.target.name] : e.target.value})
  }

  return (
    <div >
      <Container fluid
        className="py-3 px-5" 
      >
        <Row >
          <Col xs={6}>
            <Formik
              initialValues={formData}
              validationSchema={Schema}
              onSubmit ={(values) => {
                 setFormData(values)
                 alert(JSON.stringify(formData,null,2))}} 
            >
              {formik => (
                <div>
                  <h1 className="font-italic">Sign Up</h1>
                  <Form onSubmit={formik.handleSubmit}>
                    <InputField 
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                    />
                    <InputField 
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                    />
                    <InputField 
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
                    <InputField 
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                    <InputField 
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                    />
                    <Button 
                      type="submit" 
                      color="primary"
                      className="btn btn-md m-2"
                      onClick={()=> console.log(formData)}
                    >
                      Register
                    </Button>
                    <Button 
                      type="button" 
                      color="secondary"
                      className="btn btn-md m-2 rounded-5"
                      onClick={formik.handleReset}
                    >
                      Reset
                    </Button>
                  </Form>
                </div>
              )}
            </Formik>
          </Col>
          <Col xs={6} className="d-flex">
            <img 
              src={loginImage} 
              alt="login image" 
              className="shadow-lg rounded-pill align-self-center" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

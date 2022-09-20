import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from "formik";
import { Button, FormGroup } from "react-bootstrap";

const ArticleForm = (props) => {
  const ValidationSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    description: Yup.string()
      .email("You have entered an invalid email address")
      .required("Required"),
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik {...props} ValidationSchema={ValidationSchema}>
        <Form>
          <FormGroup>
            <h6>Article Title</h6>
            <Field name="title" type="text" className="form-control" />
            <ErrorMessage
              name="title"
              classname="d-block invalidfeedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <h6>Article Description</h6>
            <Field name="description" type="text" className="form-control" />
            <ErrorMessage
              name="description"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <Button variant="danger" size="lg" block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ArticleForm;
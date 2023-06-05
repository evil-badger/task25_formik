import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Это поле обязательно к заполнению'),
  email: Yup.string()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Введите адрес электронной почты в корректном формате - "username@hosting.domain"')
    .required('Это поле обязательно к заполнению'),
  phoneNumber: Yup.string()
    .matches(/^\d{12}$/, "Введите номер телефона с учетом кода страны и кода оператора, пример - 380971567896")
    .required('Это поле обязательно к заполнению'),
});

const initialValues = {
  name: '',
  email: '',
  phoneNumber: '',
};

const ValidateForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={
        (values, { setSubmitting, setFieldError, resetForm }) => {
            setSubmitting(true);
            localStorage.setItem('formData', JSON.stringify(values));
            setSubmitting(false);
            alert("Данные успешно отправлены");
            resetForm();
          }}
    >
      {
        ({ isSubmitting }) => (
        <Form className="formWrap">
          <Field className="fieldCustom" type="text" name="name" placeholder="Имя" />
          <ErrorMessage style={{ color: '#DB7093' }} name="name" component="div" />

          <Field className="fieldCustom" type="email" name="email" placeholder="Email" />
          <ErrorMessage style={{ color: '#DB7093' }} name="email" component="div" />

          <Field className="fieldCustom" type="text" name="phoneNumber" placeholder="Номер телефона" />
          <ErrorMessage style={{ color: '#DB7093' }} name="phoneNumber" component="div" />

          <button className="buttomSubmit" type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )
    }
    </Formik>
  );
};


export default ValidateForm;
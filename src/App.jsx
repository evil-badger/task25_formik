import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ValidateForm from "./components/ValidateForm";

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Это поле обязательно к заполнению'),
  email: Yup.string()
    .email('Введите адрес электронной почты в корректном формате - "username@hosting.domain"')
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


function App() {

  return (
    <>
        <ValidateForm/>
    </>
  )
}

export default App

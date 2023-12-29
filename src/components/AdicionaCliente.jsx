import React from 'react'
import { Formik } from 'formik'
import Campo from './Campo'
import * as yup from 'yup'

const validarEmail = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

const AdicionaCliente = () => {

  const esquema = yup.object({
    nome: 
      yup.string()
      .required('O campo nome é obrigatório')
      .min(5, 'O nome de ter no mínimo 5 caracteres')
      .max(30, 'O nome de ter no máximo 30 caracteres'),
    email:
      yup.string()
      .email('O campo email deve ser um email válido')
      .required('O campo email é obrigatório'),
    nascimento:
      yup.date()
      .required('A data de nascimento é obrigatória')  
      .max(new Date(), 'Você não pode ter nascido no futuro')  
  })

  return (
    <>
      <h1>Cadastro de Clientes</h1>

      <Formik
        initialValues={ { 
          nome:'Tiago Lemes', 
          email: 'tiagolemespalhano@gmail.com', 
          nascimento: '1984-10-25' } }
        validationSchema={esquema}
        onSubmit={ () => {alert('Dados enviados com suesso') } }
      >

        {(props) => (
          <form onSubmit={props.handleSubmit} noValidate>

            <Campo id="nome" name="nome" type="text" label="Nome" />

            <Campo id="email" name="email" type="email" label="Email" />

            <Campo id="nascimento" name="nascimento" type="date" label="Data de nascimento" />

            <button type="submit">Adicionar</button>

          </form>            
        )}

      </Formik>
    </>
  );
};

export default AdicionaCliente;

import React from 'react';
import { Formik } from 'formik'
import Campo from './Campo'

const validarEmail = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

const AdicionaCliente = () => {
  return (
    <>
      <h1>Cadastro de Clientes</h1>

      <Formik
        initialValues={ { 
          nome:'Tiago Lemes', 
          email: 'tiagolemespalhano@gmail.com', 
          nascimento: '1984-10-25' } }
        validate={(values) => {
          const errors = {}
          if(!values.nome) {
            errors.nome = 'O campo nome é obrigatório'
          }
          if(!values.email) {
            errors.email = 'O campo email é obrigatório'
          }
          else if(!validarEmail(values.email)) {
            errors.email = 'O campo email é inválido'
          }
          if(!values.nascimento) {
            errors.nascimento = 'O campo nascimento é obrigatório'
          }
          return errors
        }}
        onSubmit={ (values) => {alert(JSON.stringify(values)) } }
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

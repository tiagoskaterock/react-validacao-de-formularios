import React from 'react';
import { Formik } from 'formik'

const AdicionaCliente = () => {

  const validarEmail = (email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  };

  console.log(validarEmail('tiagolemespalhano@gmail.com'))

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

            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input 
                id="nome" 
                name="nome" 
                type="text" 
                onChange={props.handleChange} 
                value={props.values.nome}
              />
              <div className="error">{props.errors.nome ?? props.errors.nome}</div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                onChange={props.handleChange} 
                value={props.values.email}
              />
              <div className="error">{props.errors.email ?? props.errors.email}</div>
            </div>

            <div className="form-group">
              <label htmlFor="date">Data de Nascimento</label>
              <input 
                id="nascimento" 
                name="nascimento" 
                type="date" 
                onChange={props.handleChange} 
                value={props.values.nascimento}
              />
              <div className="error">{props.errors.nascimento ?? props.errors.nascimento}</div>
            </div>

            <button type="submit">Adicionar</button>

          </form>            
        )}

      </Formik>
    </>
  );
};

export default AdicionaCliente;

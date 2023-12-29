import React from 'react'
import { useField } from 'formik'

function Campo(props) {
  const [field, meta] = useField(props)
  return (
    <>
    	<div className="form-group">
        <label htmlFor={props.id}>{props.label}</label>
	      <input
	        {...field}
	        {...props}
	        className={meta.error ? 'is-invalid' : null}
	      />
	      <div className="error">{meta.error ?? meta.error}</div>
      </div>
    </>
  )
}

export default Campo

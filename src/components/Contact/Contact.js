import React, { useState } from 'react';
import Swal from 'sweetalert2'

export const Form = () => {

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        mensaje:''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(values)

        Swal.fire({
            icon: 'success',
            title: 'Su consulta fue registrada',
        
            })

    }

    

    return (
        <div className="container my-5">
            <form onSubmit={handleSubmit}>
                <h2>Formulario</h2>
                <input
                    className="form-control my-2"
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    value={values.nombre}
                    onChange={handleInputChange}
                    />
                {values.nombre.length === 0 && <small>Este campo es obligatorio</small>}

                <input
                    className="form-control my-2"
                    type="text"
                    placeholder="Apellido"
                    name="apellido"
                    value={values.apellido}
                    onChange={handleInputChange}
                    />
                {values.apellido.length === 0 && <small>Este campo es obligatorio</small>}

                <input
                    className="form-control my-2"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                />
                {values.email.length === 0 && <small>Este campo es obligatorio</small>}

                <input
                    className="form-control my-2"
                    type="text"
                    placeholder="Mensaje"
                    name="mensaje"
                    value={values.mensaje}
                    onChange={handleInputChange}
                />
                {values.mensaje.length === 0 && <small>Este campo es obligatorio</small>}
                <br/>
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>

            
        </div>
    )
}
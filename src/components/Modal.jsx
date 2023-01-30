import { useState } from 'react';

import CerrarBtn from '../img/cerrar.svg';


const Modal = ({ setModal, animarModal, setAnimarModal }) => {

    const [ nombre, setNombre ] = useState('');
    const [ cantidad, setCantidad ] = useState('');
    const [ categoria, setCategoria ] = useState('');

    const ocultarModal = () => {
        
        setAnimarModal( false );

        setTimeout(() => {
            setModal( false );
        }, 400);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if ([ nombre, cantidad, categoria ].includes('')) {
            console.log('fallo validacion');

            return;
        }

    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img 
                    src={ CerrarBtn } 
                    alt="cerrar modal" 
                    onClick={ ocultarModal }
                />
            </div>

            <form 
                onSubmit={ handleSubmit }
                className={ `formulario ${ animarModal ? 'animar' : 'cerrar' }` }
            >
                <legend>Nuevo Gasto</legend>

                <div className='campo'>
                    <label htmlFor="nombre">Nombre Gasto</label>

                    <input 
                        id='nombre'
                        type="text" 
                        placeholder='ej. Netflix'
                        value={ nombre }
                        onChange={ e => setNombre( e.target.value ) }
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>

                    <input 
                        id='cantidad'
                        type="number" 
                        placeholder='ej. 75'
                        value={ cantidad }
                        onChange={ e => setCantidad( Number(e.target.value) )}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="cantidad">Categoría</label>

                    <select
                        id='categoria'
                        value={ categoria }
                        onChange={ e => setCategoria( e.target.value ) }
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="servicios">Servicios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                        <option value="gastos">Gastos Varios</option>
                    </select>
                </div>

                <input
                    type='submit'
                    value='Confirmar'
                />
            </form>
        </div>
    )
}

export default Modal;
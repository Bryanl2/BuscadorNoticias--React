import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({guardarCategoria}) => {


    const OPCIONES=[
        {value:'general',label:'General'},
        {value:'business',label:'Negocios'},
        {value:'entertainment',label:'Entretenimiento'},
        {value:'health',label:'Salud'},
        {value:'science',label:'Ciencia'},
        {value:'sports',label:'Deportes'},
        {value:'technology',label:'Tecnología'},
    ]

    //Utilizar custom hook

    const[categoria,SelectNoticias] = useSelect('science',OPCIONES);

    const buscarNoticias= e=>{
       
        e.preventDefault();
        const cate=SelectNoticias(categoria);
        guardarCategoria(cate);
    }

    return ( 

        <div className={`${styles.buscador}`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onsSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading} >Encuentra Noticias por Categoría</h2>

                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input type="submit"
                               className={`${styles.btn_block} btn-large amber darken-2`}
                               value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>

     );
}
 
export default Formulario;
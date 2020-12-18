import React,{Fragment,useState,useEffect} from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/LIstadoNoticias'

function App() {

  //Definir categoría y noticias
  const [categoria,guardarCategoria]=useState('');
  const [noticias,guardarNoticias]=useState([]);

  useEffect(()=>{
    const consultarAPI=async()=>{
     
      const url=`https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=7ea4624901aa48149eb99b9a8ccc5f74`;

      const respuesta= await fetch(url);
      const noticias= await respuesta.json();
      guardarNoticias(noticias.articles);

    }
    consultarAPI();
  },[categoria])

  return (
    <Fragment>
      <Header titulo="Buscador de noticias"/>

      <div className="container white">
          
      </div>

      <div className="container white">
          <Formulario
            guardarCategoria={guardarCategoria}
          /> 

          <ListadoNoticias 
            noticias={noticias}
          />
      </div>
    </Fragment>
  );
}

export default App;

import React, {Component, Fragment} from 'react';
import Header from './Components/Header';
import ListaNoticias from './Components/ListaNoticias';
import Formulario from './Components/Formulario';

class App extends Component {
  state = {
    noticias : []
  }
  componentDidMount(){
    this.consultarNoticias();
    
  }

  consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=e4534c32fa744e039a96491a9b035735`;
    const respuesta = await fetch (url);
    const noticias =  await respuesta.json();
    console.log(noticias.articles);
    this.setState({
            noticias: noticias.articles
          });

  }
  render(){
    return (
      <Fragment>
        <Header 
          titulo="Noticias react api"
          ></Header>
          <div className = "container white contenedor-noticias"> 
            <Formulario 
              consultarNoticias={this.consultarNoticias}
              />
            <ListaNoticias
              noticias={this.state.noticias}
              />
          </div>
      </Fragment>
    );
  }
}
export default App;

import React, {Component} from 'react'

class Formulario extends Component {
    state = {
        categoria: ''
    }
    componentDidMount(){
        this.setState({
            categoria: 'general'
        })
    }
    cambiarCategorias = (e) =>{
        this.setState({
            categoria: e.target.value
        }, () =>{
            this.props.consultarNoticias(this.state.categoria);
        });
    }
    render (){
        return (

            <div className="buscador row" >
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Encuentra noticias por categoria</h2>
                        
                        <div className="input-field col s12">
                            <select
                            onChange={this.cambiarCategorias}>
                                <option value="general">General</option>
                                <option value="bussines">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnologia</option>

                            </select>
                        </div>
                   
                   </form>
                </div>
            </div>
        );
    }
}

export default Formulario;
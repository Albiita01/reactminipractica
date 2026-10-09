import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class DoctoresEspecialidad extends Component {

    urlDoctores = Global.urlDoctores;
    selectEsp = React.createRef();

    cargarDoctores = () => {
        let request = "api/Doctores/Especialidades";
        axios.get(this.urlDoctores + request).then((response) => {
            this.setState({
                especialidades: response.data
            })
        })
    }

    mostrarDoctores = (event) => {
        event.preventDefault();
        let espElegida = this.selectEsp.current.value;
        let request = "/api/Doctores/DoctoresEspecialidad/" + espElegida;

        axios.get(this.urlDoctores + request).then((response) => {
            this.setState({
                doctores: response.data
            })
        })
    }

    componentDidMount = () => {
        this.cargarDoctores();
    }

    state = ({
        especialidades: [],
        doctores: []
    })

    render() {
        return (
            <div>
                <h1>Doctores</h1>
                <form>
                    <label>Especialidades: </label>
                    <select ref={this.selectEsp}>
                        {
                            this.state.especialidades.map((esp, index) => {
                                return (<option key={index} value={esp}>{esp}</option>)
                            })
                        }
                    </select>
                    <button onClick={this.mostrarDoctores}>Mostrar doctores</button>
                    <ul>
                        {
                            this.state.doctores.map((doc, index) => {
                                return (<li key={index}>{doc.apellido}</li>)
                            })
                        }
                    </ul>
                </form>
            </div>
        )
    }
}

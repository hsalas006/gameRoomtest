import React, { Component } from "react";
//import { Link } from 'react-router-dom';
import fire from './config/Fire';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }

    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        return (
            <div className="col-md-6">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Correo electronico</label>
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
                        class="form-control" id="exmapleInoutEmail1" aria-describedby="emailHelp"
                        placeholder="Ingresar email" />
                        <small id="emailHelp" class="form-text text-muted">Su informacion no sera compartida con nigun otro sitio web</small> 
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password"
                        class="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
                    </div>
                    <button type="submit" onCLick={this.login} class="btn btn-primary">Login</button>
                    <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Registro</button>

                </form>
            </div>
        );
    }
}
export default Login;
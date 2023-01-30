import React, {useState, useEffect} from 'react';
import md5 from 'md5';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
import axios from 'axios';
import '../css/Login.css';
import { useNavigate } from 'react-router-dom';

function Login(props) {

const baseUrl="https://localhost:44322/api/usuarios";
const cookies = new Cookies();
let navigate = useNavigate();

const [form, setForm]=useState({
  username:'',
  password: ''
});


  const handleChange=e=>{
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  const iniciarSesion=async()=>{
    await axios.get(baseUrl+`/${form.username}/${md5(form.password)}`)
    .then(response=>{
      return response.data;
    }).then(response=>{
      if(response.length>0){
        var respuesta=response[0];
        cookies.set('codigo', respuesta.codigo, {path: '/'});
        cookies.set('username', respuesta.username, {path: '/'});
        cookies.set('password', respuesta.password, {path: '/'});
        cookies.set('personacodigo', respuesta.personacodigo, {path: '/'});
        cookies.set('estado', respuesta.estado, {path: '/'});
        alert("Bienvenido: "+respuesta.username);
        
        navigate('/menu');
        //props.history.push('/menu');
      }else{
        alert('El usuario o la contraseña no son correctos');
      }
    })
    
    .catch(error=>{
      console.log(error);
    })
  }

  useEffect(()=>{
      if(cookies.get('id')){
        //props.history.push('/menu');
        navigate('/menu');
      }
  },[]);



    return (
        <div className="containerPrincipal">
        <div className="containerLogin">
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
            />
            <br />
            <button className="btn btn-primary" onClick={()=>iniciarSesion()}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
    );
}

export default Login;
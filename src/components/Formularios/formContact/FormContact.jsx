import {React, useState} from "react";

import host from "../../../control/diminio"

const FormContact = () =>  {
  
    
        const [datos, setDatos] = useState({
            nombre: '',
            apellido: '',
            correo: '',
            telefono:'',
            asunto:'',
            mensaje:''
        })
    
        const handleInputChange = (event) => {
            // console.log(event.target.name)
            // console.log(event.target.value)
            setDatos({
                ...datos,
                [event.target.name] : event.target.value
            })
        }
    
        const enviarDatos = async (e) => {
 e.preventDefault()
            try {
                let config = {
                    method:"post",
                    headers:{
                        'Accept': "application/json",
                        'content-Type':"application/json"
                    }, body: JSON.stringify(datos)
                }
          await fetch(`http://${host}/Contacto/send`, config)
               // let json = await res.json()
            
     
           window.location.href = "correoEnviado";
    
             // console.log(json)
             
            } catch (error) {
                
            }
            console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
        }
      return (
        <form href="correoEnviado" onSubmit={enviarDatos} className="Dflex">
        
          <input
                  type="text"
                  id="Nombre"
                  placeholder="¿Cual es tu nombre?"
                  name="nombre"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  id="apellido"
                  placeholder="¿Cual es tu apellido?"
                  name="apellido"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  id="correo"
                  placeholder="Coloca tu correo electonico  "
                  name="correo"
                  onChange={handleInputChange}
                /> <input
                  type="text"
                  id="telefono"
                  placeholder="ingresa tu numero de telefono* "
                  name="telefono"
                  onChange={handleInputChange}
                />
                <input type="text" id="asunto" name="asunto"placeholder="Agrega un asunto"   onChange={handleInputChange} />
                <textarea
                  type="text"
                  className="textarea"
                  id="mensaje"
                  placeholder="Escribe aqui tu mensaje o duda."
                  name="mensaje"
                  onChange={handleInputChange}
                ></textarea>
                <button type="submit" value="Submit">ENVIAR</button>
        </form>
      );
    }
  
  export default FormContact;
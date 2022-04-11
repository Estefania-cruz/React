import {useState} from 'react';

export default function Welcome(props){
  
    const [ counter, setCounter]= useState (0);
    const [semaforo, setSemaforo] = useState (false);
    const contar = () => {
        setCounter(counter + 1);
        setSemaforo(!semaforo);
    }
    console.log(semaforo);
    const {Message, name} = props;
    return(
        <div>
        <p>Hola desde welcome de react {name} </p>
        <p>{Message}</p>
        <h2>Contador de react con hooks</h2>
        <h3>EL NUEMERO DEL CONTADOR ES {counter}</h3>
        <p>el semarofo esta en color {semaforo ? "red" : "green"}</p>
        <button type="submit" onClick={contar}>smar contador</button>
        </div>
    );
   /* <Welcome Message="HOLA props" name="FANNY"/>
   esto va ern app
   debajode logo
   */

}
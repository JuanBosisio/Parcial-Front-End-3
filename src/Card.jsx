//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({updateName,updateColor}) {



  return (
    <div>
      <h2>Hola {updateName}</h2>
      <h3>Sabemos que tu color favorito es:</h3>
      <h3>{updateColor}</h3>
      
    </div>
  );
}

export default Card;

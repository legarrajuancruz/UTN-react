function casa(props) {
  return (
    <section className="section">
      <h2>{props.nombre}</h2>
      <p>{props.valores}</p>
      <p>{props.animal}</p>
      <p>{props.color}</p>
      <p>{props.director}</p>
      <p>{props.ubicacion}</p>
    </section>
  );
}

export default casa;

import "./section.css";
import webcom from "../../assets/WEBCOM.png";
import Button from "../button/button";

function section() {
  const handleClickBoton = () => {
    alert("Hiciste click en boton");
  };
  const handleClickBoton2 = () => {
    alert("Hiciste click en el otro boton");
  };
  return (
    <section className="section">
      <div>
        <Button
          bgcolor="lightblue"
          hoverBgColor="cyan"
          size="14px"
          hoverSize="16px"
          texto="Agregar"
          onClick={handleClickBoton}
        />
      </div>
      <div>
        <Button
          bgcolor="red"
          hoverBgColor="orange"
          size="14px"
          hoverSize="16px"
          texto="Siguiente"
          onClick={handleClickBoton2}
        />
      </div>
      <h2>NOTICIAS SECTION</h2>
      <img src={webcom} alt="webcom" />

      <div className="container">
        <h2 className="section-title">Nuestros Servicios de Soporte Técnico</h2>
        <p className="section-description">
          Ofrecemos una gama completa de servicios de soporte técnico para
          satisfacer las necesidades de tu negocio.
        </p>
        <div className="services">
          <div className="service">
            <div className="service-icon">
              <i className="fas fa-headset"></i>
            </div>
            <h3 className="service-title">Soporte Remoto</h3>
            <p className="service-description">
              Asistencia técnica disponible las 24 horas del día, los 7 días de
              la semana.
            </p>
          </div>
          <div className="service">
            <div className="service-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h3 className="service-title">Mantenimiento Preventivo</h3>
            <p className="service-description">
              Mantenemos tus sistemas en perfecto estado con revisiones
              periódicas.
            </p>
          </div>
          <div className="service">
            <div className="service-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <h3 className="service-title">Instalación y Configuración</h3>
            <p className="service-description">
              Implementamos y configuramos equipos y software nuevos.
            </p>
          </div>
          <div className="service">
            <div className="service-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3 className="service-title">Consultoría Técnica</h3>
            <p className="service-description">
              Te asesoramos en la planificación y ejecución de proyectos
              tecnológicos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default section;

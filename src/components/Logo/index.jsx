import './Logo.css';
import pedro from './../../assets/pedro.jpeg';

const Logo = () => {
  const perfil = {
    foto: pedro,
    nome: "Pedro Mendonça",
    cargo: "Administrador",
  };

  return (
    <header className="logo-container">
      <h1 className="logo">ROBSON CONSTRUÇÕES</h1>
      <div className="profile">
        <img src={perfil.foto} alt="Foto do Pedro Mendonça" className="profile-picture" />
        <div className="profile-info">
          <p>{perfil.nome}</p>
          <p>{perfil.cargo}</p>
        </div>
      </div>
    </header>
  );
};

export default Logo;
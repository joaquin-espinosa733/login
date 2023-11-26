// AuthForm.js
import { useState } from 'react';
import styles from './AuthForm.module.css'; // Importa tu archivo CSS module
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
// import Slider from './Slider';

const AuthForm = () => {
  const [activeForm, setActiveForm] = useState('signin');

  const handleFormChange = (formType) => {
    setActiveForm(formType);
  };

  return (
    <div className=' container'>
      <div className=' row d-flex justify-content-center align-items-center'>
        {/* <div className='col-6 col-xs-4 p-0 '>
          <Slider />
        </div> */}
        <div className=' col-6 col-xs-8 p-0 m-0'>
          <div className={styles.authContainer}>
            <div className={styles.containerButtons}>
              <button
                className={`${styles.buttons} ${activeForm === 'signin' ? styles.activeButton : ''}`}
                onClick={() => handleFormChange('signin')}
              >
                Sign In
              </button>
              <button
                className={`${styles.buttons2} ${activeForm === 'signup' ? styles.activeButton : ''}`}
                onClick={() => handleFormChange('signup')}
              >
                Sign Up
              </button>
            </div>

            {/* Formulario de Sign In */}
            <form
              className={`container ${styles.authForm} ${activeForm === 'signin' ? styles.active : styles.hidden}`}
            >
              {/* Agrega aquí los campos para el inicio de sesión */}
              <span>Usuario</span>
              <input type="text" placeholder="Usuario" />
              <span>Contraseña</span>
              <input type="password" placeholder="Contraseña" />
              <br />
              <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
            </form>

            {/* Formulario de Sign Up */}
            <form
              className={`${styles.authForm} ${activeForm === 'signup' ? styles.active : styles.hidden}`}
            >
              {/* Agrega aquí los campos para el registro */}
              <span>Nombre de Usuario</span>
              <input type="text" placeholder="Nombre de usuario" /><br />
              <span>Correo Electronico</span>
              <input type="email" placeholder="Correo electrónico" /><br />
              <span>Contraseña</span>
              <input type="password" placeholder="Contraseña" />
              <br />
              <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

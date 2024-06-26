import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {

  return (
    <nav>
      
      <div className={styles.navbarBrand}>
        <h3>Gestão de Tarefas</h3>
      </div>

      <div className={styles.navbarMenu}>
        <ul>
        <li className={styles.navbarItem} href=""> Projetos </li>
        <li className={styles.navbarItem} href="">Equipes</li>
        <li className={styles.navbarItem} href="">Minhas Tarefas</li>
        <li className={styles.navbarItem} href="">Pendências</li>
        <li className={styles.navbarItem} href="">Prioridades</li>
        </ul>

        <div className={styles.searchBox}>
        <input type="text" className={styles.searchText} placeholder='Pesquisar'/>
        <a className={styles.searchBtn}>
          <img className={styles.lupa} src="https://tse4.mm.bing.net/th?id=OIP.J-NC5zdHendWhPtlgsY0LgHaHa&pid=Api&P=0&h=180" alt="" />
        </a>
      </div>

      </div>

      

    </nav>
  );
};

export default Navbar;

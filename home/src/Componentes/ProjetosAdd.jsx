import React from 'react';
import styles from "./ProjetosAdd.module.css"


export function Projetos(){
    return(
        <div className={styles.container}>
         <div className={styles.card}>
            
          <h2>Seus Projetos</h2>
         </div>
<hr />

<div class="square">
    <div class="block">
        
        <div class="centered">
            <h1>Box 1</h1>
            <p>Não importa quanto texto eu coloque aqui. Ele vai ficar centralizado</p>
        </div>
        
    </div>
</div>
<div class="square">
    <div class="block">
        
        <div class="centered">
            <h1>Só o título</h1>
        </div>
        
    </div>
</div>
        </div>
        
    )
}
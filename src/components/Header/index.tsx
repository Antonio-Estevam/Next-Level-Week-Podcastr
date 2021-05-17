import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import style from  './styles.module.scss';

export function Header() {
    const currentData = format(new Date(),'EEEEEE, d MMMM',{
        locale: ptBR,
    });

    return(
        <header className = {style.haderContainer}>
            <img src="/logo.svg" alt="Podecaster"/>

            <p>O melhor para voçê ouvir, sempre</p>

            <span>{currentData}</span>
        </header>
    );
}


//49:35
import styles from  './styles.module.scss';

export function Player() {

    return(
        <div className= {styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt="Tocando agora" />
                <strong>Tocando agora</strong>
            </header>

            <div className={styles.emptyPlayer}>
                <strong> selecione um podcast para ouvir</strong>
            </div>

            <footer>
                <div className={styles.progress}>
                    <span>00:00</span>
                    <div className={styles.emptySlider} />
                    <span>00:00</span>
                </div>

                <div className={styles.buttons}>
                    <button type="button">
                        <img src="/shuffle.svg" alt="Enbaralhar" />
                    </button>
                
                    <button type="button">
                        <img src="/play-previous.svg" alt="Tocar anterior" />
                    </button>
                
                    <button type="button" className = {styles.playButton}>
                        <img src="/play.svg" alt="Tocar" />
                    </button>
                </div>
            </footer>
        </div>
    );
}

//01:00:00


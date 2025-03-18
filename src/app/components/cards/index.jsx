import styles from "./cards.module.css"


const Card = ({capa, textAlt, titulo, ano, detalhes}) => {
    return (
        <div className={styles.trophy}>
        <div className={styles.trophyCover}>
          <img
            src= {capa}
            alt={textAlt}
          />
        </div>
        <div className={styles.trophyInfo}>
          <h3>{titulo}</h3>
          <p className={styles.year}>2012</p>
          <p className={styles.details}>Corinthians 1 x 0 Chelsea</p>
          <button className={styles.detailsButton}>Ver Detalhes</button>
        </div>
      </div>
    )
       
    }

    export default Card;

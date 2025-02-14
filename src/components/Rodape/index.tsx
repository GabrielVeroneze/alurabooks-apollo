import styles from './Rodape.module.scss'

const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <h2 className={styles.titulo}>Grupo Alura</h2>
            <ul className={styles.lista}>
                <li className={styles.subtitulo}>Educação</li>
                <li className={styles.item}>
                    <img
                        src="/imagens/CasaDoCodigo.svg"
                        alt="Logo da casa do código"
                    />
                    <a href="#!" className={styles.link}>
                        Casa do código
                    </a>
                </li>
                <li className={styles.item}>
                    <img src="/imagens/Caelum.svg" alt="Logo da caelum" />
                    <a href="#!" className={styles.link}>
                        Caelum
                    </a>
                </li>
            </ul>
            <ul className={styles.lista}>
                <li className={styles.subtitulo}>Educação online</li>
                <li className={styles.item}>
                    <img src="/imagens/Alura.svg" alt="Logo da Alura" />
                    <a href="#!" className={styles.link}>
                        Alura
                    </a>
                </li>
                <li className={styles.item}>
                    <img
                        src="/imagens/AluraEmpresas.svg"
                        alt="Logo da Alura para Empresas"
                    />
                    <a href="#!" className={styles.link}>
                        Alura para Empresas
                    </a>
                </li>
                <li className={styles.item}>
                    <img
                        src="/imagens/AluraLATAM.svg"
                        alt="Logo da Alura Latam"
                    />
                    <a href="#!" className={styles.link}>
                        Alura LATAM
                    </a>
                </li>
                <li className={styles.item}>
                    <img
                        src="/imagens/AluraStart.svg"
                        alt="Logo da Alura START"
                    />
                    <a href="#!" className={styles.link}>
                        Alura Start
                    </a>
                </li>
                <li className={styles.item}>
                    <img src="/imagens/MusicDot.svg" alt="Logo da Music Dot" />
                    <a href="#!" className={styles.link}>
                        Music Dot
                    </a>
                </li>
                <li className={styles.item}>
                    <img
                        src="/imagens/AluraLingua.svg"
                        alt="Logo da Alura Lingua"
                    />
                    <a href="#!" className={styles.link}>
                        Alura Lingua
                    </a>
                </li>
                <li className={styles.item}>
                    <img src="/imagens/PM3.svg" alt="Logo da PM3" />
                    <a href="#!" className={styles.link}>
                        PM3
                    </a>
                </li>
            </ul>
            <ul className={styles.lista}>
                <li className={styles.subtitulo}>Comunidade</li>
                <li className={styles.item}>
                    <img
                        src="/imagens/HipstersTech.svg"
                        alt="Logo do Hipsters ponto Tech"
                    />
                    <a href="#!" className={styles.link}>
                        Hipsters ponto Tech
                    </a>
                </li>
                <li className={styles.item}>
                    <img src="/imagens/ScubaDev.svg" alt="Logo do Scuba Dev" />
                    <a href="#!" className={styles.link}>
                        Scuba Dev
                    </a>
                </li>
                <li className={styles.item}>
                    <img
                        src="/imagens/LayersTech.svg"
                        alt="Logo do Layers ponto Tech"
                    />
                    <a href="#!" className={styles.link}>
                        Layers ponto Tech
                    </a>
                </li>
                <li className={styles.item}>
                    <img
                        src="/imagens/LikeABoss.svg"
                        alt="Logo do Like a Boss"
                    />
                    <a href="#!" className={styles.link}>
                        Like a Boss
                    </a>
                </li>
                <li className={styles.item}>
                    <img
                        src="/imagens/CarreiraSemFronteira.svg"
                        alt="Logo do Carreira sem fronteiras"
                    />
                    <a href="#!" className={styles.link}>
                        Carreira sem fronteiras
                    </a>
                </li>
                <li className={styles.item}>
                    <img
                        src="/imagens/HipstersJobs.svg"
                        alt="Logo do Hipsters ponto jobs"
                    />
                    <a href="#!" className={styles.link}>
                        Hipsters ponto jobs
                    </a>
                </li>
                <li className={styles.item}>
                    <img src="/imagens/GUJ.svg" alt="Logo do GUJ" />
                    <a href="#!" className={styles.link}>
                        GUJ
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Rodape

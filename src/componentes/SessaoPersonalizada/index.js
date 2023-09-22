import {Link} from 'react-scroll'
import '../../App.css'
import './SessaoPersonalizada.css'

const SessaoPersonalizada = () => {
    return (
        <section className="personalizar__fundo">
            <div className="apresentacao__conteudo__comece">
                <h2 className="comece__titulo">Não espere. <br /> Comece.</h2>
                <div>
                    <Link to="sessao__download" spy={true} smooth={true} offset={50} duration={500}>
                        <button className="botao__comece">Vamos começar!</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default SessaoPersonalizada
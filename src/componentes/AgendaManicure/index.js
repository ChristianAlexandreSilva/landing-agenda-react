import {Link} from 'react-scroll'
import '../../App.css'
import './AgendaManicure.css'

const AgendaManicure = () => {
    return (
        <section id="sessao__principal" className="apresentacao__conteudo__principal">
            <div className="apresentacao__principal">
                <h2 className="apresentacao__titulo">Aplicativo Agenda para Manicure Grátis - Para trabalhar</h2>

                <p className="apresentacao__subtitulo">Gerencie toda a sua agenda. Receba avisos do próximo agendamento!</p>

                <Link to="sessao__download" spy={true} smooth={true} offset={50} duration={500}>
                    <button className="botao__principal">Comece agora grátis!</button>
                </Link>
            </div>
            <div>
                <img className="imagem__principal" src="/imagens/1-pt.jpeg" alt="Foto do Celular" />
            </div>

        </section>
    )
}

export default AgendaManicure
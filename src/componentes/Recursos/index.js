import '../../App.css'
import './Recursos.css'
import { SlScreenSmartphone, SlClock, SlPresent, SlWallet } from "react-icons/sl";

const Recursos = () => {
    return (
        <section id="sessao__recursos">
            <div className="recursos">
                <h2 className="recursos__titulo">Vários recursos, várias utilidades</h2>

                <p className="recursos__subtitulo">Veja o que você vai poder fazer com este aplicativo!</p>
            </div>
            <div className="apresentacao__conteudo__recursos">
                <img className="imagem__recursos" src='/imagens/2-pt.jpeg' alt="" />

                <section className="recursos__flex">
                    <div>
                        <span id="icones" className="material-icons">
                            <SlScreenSmartphone className='icons_style'/>
                        </span>
                        <h4 className="icons__titulo">Agenda Portátil</h4>

                        <p className="icons__subtitulo">Esteja com sua agenda em <br /> qualquer lugar!</p>
                    </div>

                    <div>
                        <span id="icones" >
                            <SlClock className='icons_style'/>
                        </span>
                        <h4 className="icons__titulo">Lembretes</h4>

                        <p className="icons__subtitulo">Receba lembretes sobre seu <br /> próximo trabalho!</p>
                    </div>

                    <div>
                        <span id="icones" >
                            <SlPresent className='icons_style'/>
                        </span>
                        <h4 className="icons__titulo">Uso Gratuíto</h4>

                        <p className="icons__subtitulo">Use o aplicativo de graça, não se <br /> preocupe com cobranças!</p>
                    </div>

                    <div>
                        <span id="icones" >
                            <SlWallet className='icons_style'/>
                        </span>
                        <h4 className="icons__titulo">Controle Seus Ganhos</h4>

                        <p className="icons__subtitulo">Tenha controle sobre seus ganhos <br /> no dia, no mês e no ano!</p>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Recursos
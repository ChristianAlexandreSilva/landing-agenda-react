import '../../App.css'
import './SessaoDownload.css'

const SessaoDownload = () => {
    return (
        <section id="sessao__download" className="apresentacao__conteudo__download">
            <h2 className="download__titulo">Descubra do que se trata!</h2>

            <p className="download__subtitulo">Nosso aplicativo está disponível para seu dispositivo! Baixe agora para
                começar!</p>

            <div className="apresentacao__botoes">
                <a className="botao__download"
                    href="https://play.google.com/store/apps/details?id=com.firebaseapp.manicurecalendar&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" target='_blank' rel='noreferrer'><img
                        id="img__botao" src="/imagens/pt_badge_web_generic.png" alt="Botão com imagem da Google Play" /></a>

                <a className="botao__download" href="https://www.apple.com/br/store" target='_blank' rel="noreferrer" > <img id="img__botao__apple" src="/imagens/apple.png"
                        alt="Botão com a imagem da Apple Store" /></a>
            </div>
        </section>
    )
}

export default SessaoDownload
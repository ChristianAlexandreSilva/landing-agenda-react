import '../../App.css'
import './Rodape.css'

const Rodape = () => {
    return (
        <div className="rodape">
        <p className="rodape__conteudo"> &copy; Agenda manicure 2023. Todos os direitos reservados</p>
        <p className="rodape__conteudo">Google Play e logotipo do Google Play são marcas registradas da Google LCC.</p>

        <nav>
            <a className="rodape__links" href="https://beautytoolstech.web.app/policy.html" target='_blank' rel='noreferrer'>Privacidade</a>
            <a className="rodape__links" href="https://beautytoolstech.web.app/terms.html" target='_blank' rel='noreferrer'>Termos</a>
            <a className="rodape__links" href="#!">Ajuda</a>
        </nav>
    </div>
    )
}

export default Rodape
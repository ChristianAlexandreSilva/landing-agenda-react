import '../../App.css'
import './RedesSociais.css'
import { FaFacebook, FaHeart, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";

const RedesSociais = () => {
    return (
        <section id="sessao__contato" className="apresentacao__social">
            <h3 className="social__titulo">Nós < FaHeart className='coracao' /> novos amigos!</h3>
            <div className='redes'>
                <a className="social__links" href="https://pt-br.facebook.com/" target='_blank' rel='noreferrer'>
                    < FaFacebook id='icon' className='facebook'/>
                </a>
                <a className="social__links" href="https://www.instagram.com/" target='_blank' rel='noreferrer'>
                    < FaInstagram id='icon' className='instagram'/>
                </a>
                <a className="social__links"
                    href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D" target='_blank' rel='noreferrer'>
                    < FaSquareXTwitter id='icon' className='twitter'/>
                </a>
            </div>
        </section>
    )
}

export default RedesSociais
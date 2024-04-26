import style from './style.module.css'
import imagemWhatsapp from '../../assets/whatsapp-icon.png'
import imagemLinkedin from '../../assets/linkedin-icon.png'
import imagemGitHub from '../../assets/github-icon.png'


const Footer = () => {
     return (
          <>
               <div id='contato' className={style.area}>
                    <div>
                         <div className={style.areaText}>
                              <h1>Contato</h1>
                         </div>
                         <div className={style.areaImg}>
                              <img src={imagemWhatsapp} alt="imagem icone whatsapp" />
                              <img src={imagemLinkedin} alt="imagem icone linkedin" />
                              <img src={imagemGitHub} alt="imagem icone github" />
                         </div>
                    </div>
                    <div className={style.areaText}>
                         <p>Todos os direitos reservados - Thiago Rosa </p>
                    </div>

               </div>
          </>
     )
}

export default Footer;
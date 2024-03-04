import '../Header/styles.css'

const Header = () => {
     return (
          <div className="cabecalho centro">
               <div >
                    <h1>Portifólio</h1>
               </div>
               <div><h4>Sobre</h4></div>
               <div><h4>Stack</h4></div>
               <div><h4>Projetos</h4></div>
               <div ><a href="#contato">
                    <button a><h4 className="btnGlobal">Contato</h4></button>
               </a></div>
          </div>
     )
}

export default Header
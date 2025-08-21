import { useState } from 'react'
import './registro.sass'
import freilogo from '../assets/freilogo.webp'
import feiralogo from '../assets/feiralogo.webp'
import Facebook from '../assets/facebookLogo.png'
import Instagram from '../assets/InstagramLogo.png'
import Chrome from '../assets/ChromeLogo.png'
import LinkedIn from '../assets/LinkedInLogo.png'

function registro() {
  return (
    <>
        <div className='container-registro'>

            <div className='cabecalho'>

                <img 
                    src={freilogo}
                    height='50px'
                />

                <h2>5° Edição</h2>
                <h2>Feira de Profissões</h2>
                <h2>Instituto Nossa Senhora de Fátima</h2>

                <img 
                    src={feiralogo}
                    height='50px'
                />

            </div>

            <div className='main'>
                

            </div>

            <div className='rodape'>
                
                <img className='logo-rede'
                    src={Facebook}
                    height='50px'
                />

                <img className='logo-rede'
                    src={Instagram}
                    height='50px'
                />

                <img className='logo-rede'
                    src={Chrome}
                    height='50px'
                />

                <img className='logo-rede'
                    src={LinkedIn}
                    height='50px'
                />

            </div>

        </div>
    </>
  )
}

export default registro

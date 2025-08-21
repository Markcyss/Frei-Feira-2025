import { useState } from 'react'
import './inicial.sass'
import freilogo from '../assets/freilogo.webp'
import feiralogo from '../assets/feiralogo.webp'
import frei from '../assets/frei.png'
import FotoGrupo from '../assets/FotoGrupo.jpeg'
import AlunosEletro from '../assets/AlunosEletro.jpeg'
import FeiraCV from '../assets/FeiraCV.jpg'
import CasaDaMulherPaulistana from '../assets/CasaDaMulherPaulistanaLogo.png'
import STB from '../assets/LogoSTBNova.jpg'
import OticasCarol from '../assets/OticasCarolLogo.png'
import mapaGoogle from '../assets/mapaGoogle.png'
import Facebook from '../assets/facebookLogo.png'
import Instagram from '../assets/InstagramLogo.png'
import Chrome from '../assets/ChromeLogo.png'
import LinkedIn from '../assets/LinkedInLogo.png'

function App() {
  return (
    <>
        <div className='container-inicial'>

            <div className='cabecalho'>

                <img 
                    src={freilogo}
                    height='50px'
                />

                <h2>5° Edição Feira de Profissões Instituto Nossa Senhora de Fátima</h2>

                <img 
                    src={feiralogo}
                    height='50px'
                />

            </div>

            <div className='main'>
                <h1>Instituto Nossa Senhora de Fátima Apresenta:</h1>

                <img 
                    src={frei}
                    height='200px'
                />

                <div className='quadro-resumo'>

                    <h3>5° Edição da feira de Profissões</h3>

                    <p>29 de Setembro | 9:00 às 14:00</p>

                    <p>Av. Cel. Octaviano de Freitas Costa - 463 - Veleiros</p>

                    <p>Workshops, Networking, Brindes e muito mais!!</p>
                    <p>Venha conhecer nossa Feira de Profissões</p>

                    <button>Faça seu cadastro aqui</button>

                </div>

                <div className='frase-principal'>
                    <h1>ESFORÇO QUE TRANSFORMA, E O ORGULHO PERMANECE!</h1>
                </div>

                <div className='video'>

                </div>

                <div className='texto-video'>
                    <p>Veja como transformar vidas no Instituto Nossa Senhora de Fátima</p>
                    <p>Descubra tudo o que o Instituto Nossa Senhora de Fátima pode oferecer para o seu futuro!</p>
                    <p>Quer saber como é, de verdade, estudar aqui? Assista ao vídeo e mergulhe nas histórias inspiradoras de alunos que transformaram suas vidas com nossos cursos.</p>
                    <p>Conheça os bastidores, os diferenciais da nossa formação e como a nossa escola pode ser o seu próximo passo rumo ao sucesso. Venha se encantar com experiências reais e se imaginar no nosso lugar. O futuro começa agora - e ele pode começar aqui!</p>
                </div>

                <h2>Mapa de Localização</h2>

                <img className='mapa-frei'
                    src=""
                />

                <div className='carrossel-feira'>

                    <img 
                        src={FotoGrupo}
                        height='100px'
                    />

                </div>

                <div className='carrossel-cursos'>

                    <div className='cursos-eletro'>

                        <img
                            src={AlunosEletro}
                            height='200px'
                        />

                    </div>

                </div>

                <div className='carrossel-andares'>

                    <div className='salas'>

                        <img
                            src={FeiraCV}
                            height='200px'
                        />

                    </div>

                </div>

                <div className='mapa-google'>

                    <img
                        src={mapaGoogle}
                        height='200px'
                    />

                </div>

                <h2>Empresas Parceiras Presentes</h2>

                <div className='empresa'>

                    <img className='logo-empresa'
                        src={CasaDaMulherPaulistana}
                        height='200px'
                    />

                </div>

                <div className='empresa'>

                    <img className='logo-empresa'
                        src={STB}
                        height='200px'
                    />

                </div>

                <div className='empresa'>

                    <img className='logo-empresa'
                        src={OticasCarol}
                        height='200px'
                    />

                </div>

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

export default App

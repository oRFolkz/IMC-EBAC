import React, { useState } from 'react'
import './pageone.css'

const pageOne = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const conversaoPeso = (peso*10000)
    const total = (conversaoPeso/(altura*altura)).toFixed(2);



    return (
        <section>
            <div>
                <input className='altura' type="number" placeholder='Altura (CM)' onChange={e => setAltura(e.target.value)}/>
                <br />
                <input className='peso' type="number" placeholder='Peso (KG)' onChange={e => setPeso(e.target.value)}/>
            </div>
            <div>
                <h2>Sua altura :{ altura + " cm"}</h2>
                <h2>Seu peso   : { peso + " kg"}</h2>
                <h2>IMC : { total === "NaN" ? "0.00" : total }</h2>
            </div>
            <div className='tabela'>
                <p className={ total <= 18.5 ? "lineActive" : ""}>Menor do que 18.5 || Abaixo do peso normal</p>
                <p className={ total > 18.5 && total < 24.9 ? "lineActive" : ""}>18,5 - 24,9 || Peso Normal</p>
                <p className={ total >= 25 && total < 29.9 ? "lineActive" : ""}>25,0 - 29,9 || Excesso de peso</p>
                <p className={ total >= 30 && total < 34.9 ? "lineActive" : ""}>30,0 - 34,9 || Obesidade classe I</p>
                <p className={ total >= 35 && total < 39.9 ? "lineActive" : ""}>35,0 - 39,9 || Obesidade classe II</p>
                <p className={ total >= 40 ? "lineActive" : ""}>Maior ou igual a 40,0 || Obesidade classe III</p>
            </div>
            <h6>Nota do aluno : Em alguns sites o valor é diferente, mas de acordo com   
                <a href="https://dms.ufpel.edu.br/casca/modulos/imc-calc#comp/imc-main">esse site</a> meu valor esta correto :)
            </h6>
        </section>
        )
}

export default pageOne;

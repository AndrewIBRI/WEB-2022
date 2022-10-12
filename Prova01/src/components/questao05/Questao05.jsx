import axios from "axios"
import { useEffect, useState } from "react"

const Questao05 = () => {

  const [calculo, setCalculo] = useState([])
  const [region, setRegion] = useState('africa')

  useEffect(
    () => {
      axios.get(`https://restcountries.com/v2/region/${region}?fields=name,population`)
        .then(
          (response) => {
            setCalculo(response.data)
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        )
    }, [region]
  )
  const calcular = () => {
    if (region === "asia") {
      return MenosPopuloso()
    } else {
      return MaisPopuloso()
    }
  }
  const MenosPopuloso = () => {
    
    let menorPopulacao = 0
    let menosPopuloso = ""
    calculo.forEach((item, index) => {
      if (index === 0) {
        menorPopulacao = item.population
        menosPopuloso = item.name
      }

      if (item.population < menorPopulacao) {
        menorPopulacao = item.population
        menosPopuloso = item.name
      }
    })

    return (
      <tr>
        <td>{menosPopuloso}</td>
        <td>{menorPopulacao}</td>
      </tr>
    )
  }
  const MaisPopuloso = () => {

    let maiorPopulacao = 0
    let maisPopuloso = ""
    calculo.forEach((item, index) => {
      if (index === 0) {
        maiorPopulacao = item.population
        maisPopuloso = item.name
      }

      if (item.population > maiorPopulacao) {
        maiorPopulacao = item.population
        maisPopuloso = item.name
      }
    })

    return (
      <tr>
        <td>{maisPopuloso}</td>
        <td>{maiorPopulacao}</td>
      </tr>
    )
  }

  return (
    <div>
        <tbody>
          {calcular()}
        </tbody>
      <button className="btn btn-primary" onClick={() => setRegion("americas")} style={{ marginRight: "2rem"}}>Americas</button>
      <button className="btn btn-primary" onClick={() => setRegion("africa")} style={{ marginRight: "2rem"}}>Africa</button>
      <button className="btn btn-primary" onClick={() => setRegion("asia")}>Asia</button>
      
    </div>
  )
}

export default Questao05

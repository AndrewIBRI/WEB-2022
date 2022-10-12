import {useEffect,useState} from "react";
import axios from "axios";

const ListarPopuloso = () => {
    const [resultRegion, setResultRegion] = useState([]);

    useEffect(() => {
        try {
            async function getAllResults(){
                const retorno = await axios.get(`https://restcountries.com/v2/region/africa?fields=name,population`)

                setResultRegion(retorno.data)
            }
            getAllResults()
        } catch (error) {
            console.log(error)
        }
    }, [resultRegion])
    const calculo = () => {

        let populacao = 0
        let resultado = ""
        resultRegion.forEach((item) => {
          if (item.population > populacao) {
            populacao = item.population
            resultado = item.name
          }
        })
    
        return (
          <tr>
            <td>{resultado},</td>
            <td>{populacao}</td>
          </tr >
        )
      }
    return (
        <div>
            <tbody>
              {calculo()}
            </tbody>

        </div>
    )
}

export default ListarPopuloso;
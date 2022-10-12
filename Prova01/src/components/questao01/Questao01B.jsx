import React from "react"

const Disciplina = ()=> {

    let disciplinas = ['GESTÃO DE TECNOLOGIA DA INFORMAÇÃO E COMUNICAÇÃO', 'DESENVOLVIMENTO DE SOFTWARE PARA WEB', 'PROBABILIDADE E ESTATÍSTICA', 'SISTEMAS DISTRIBUÍDOS']

    const listarDisciplinas = () => {
        return disciplinas.map(
            (Element, disciplina) => {
                return(
                    <h4> {Element} </h4>
                )
            }
        )
    }

    return(
        <div>
            <h2> Listas de Disciplinas Ativas: </h2>
                {listarDisciplinas()}
        </div>
    )
}

export default Disciplina
import Inicio from "./Inicio"

const InicioPublic = ({spot}) => {
    return (
        <div>
            {spot.map((pst) => {
                return <Inicio key={pst.id}{...pst}/>
            })}
        </div>
    )
}

export default InicioPublic
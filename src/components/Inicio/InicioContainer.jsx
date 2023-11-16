import { useState, useEffect } from "react";

import { getInicio } from "../../asyncMock";

import InicioPublic from "./InicioPublic";

const InicioContainer = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [inicio, setInicio] = useState([]);

    useEffect(() => {

    setLoading(true)

      getInicio()
      .then(response => {
        setInicio(response)
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
    }, []);

    if(loading) {
        return (
            <div className="loaderContainer">
            <div className="loader"></div>
          </div>
        )
    }

    if (error)  {
        return <h3>404 NOT FOUND</h3>;
    }

    return (
        <div>
            <InicioPublic spot={inicio}/>
        </div>
    )
    }

  export default InicioContainer
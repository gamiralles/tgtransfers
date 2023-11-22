import { useState, useEffect } from "react";

import { getInicio, getPostByCategory } from "../../asyncMock";
import { useParams } from "react-router-dom";

import InicioPublic from "./InicioPublic";
import Navegacion from "../Navegacion";
import Footer from "../Footer";

const InicioContainer = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [inicio, setInicio] = useState([]);

    const { categoryId } = useParams();
    const asyncFunction = categoryId ? getPostByCategory : getInicio

    useEffect(() => {

    setLoading(true)

      asyncFunction()
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
            <Navegacion/>
            <InicioPublic spot={inicio}/>
            <Footer/>
        </div>
    )
    }

  export default InicioContainer
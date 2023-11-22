import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getInicio, getPostByCategory } from "../../asyncMock";
import PostPublic from "./PostPublic";

import Navegacion from "../Navegacion";
import Footer from "../Footer";

const PostContainer = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [post, setPost] = useState([]);

    const { categoryId } = useParams();
    const asyncFunction = categoryId ? getPostByCategory : getInicio

    useEffect(() => {

    setLoading(true)

      asyncFunction(categoryId)
      .then(response => {
        setPost(response)
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
    }, [categoryId]);

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
            <PostPublic spot={post}/>
            <Footer/>
        </div>
    )
    }

  export default PostContainer
const Post = ({titulo, info, img, titulo2, info2a, info2b, info2c, titulo3, info3a, info3b, info3c, titulo4, info4a, info4b, info4c}) => {
    return (
        <div className="infoPost">
            <br />
            <h2>{titulo}</h2>
            <br />
            <h6>{info}</h6>
            <img className="img-fluid" src={img} alt="" />
            <h3>{titulo2}</h3>
            <ul>
            <li>{info2a}</li>
            <li>{info2b}</li>
            <li>{info2c}</li>
            </ul>
            <h3>{titulo3}</h3>
            <ul>
            <li>{info3a}</li>
            <li>{info3b}</li>
            <li>{info3c}</li>
            </ul>
            <h3>{titulo4}</h3>
            <ul>
            <li>{info4a}</li>
            <li>{info4b}</li>
            <li>{info4c}</li>
            </ul>
        </div>
    )
}

export default Post;
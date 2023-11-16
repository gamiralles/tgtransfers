const Post = ({
  titulo,
  info,
  img,
  titulo2,
  info2a,
  info2b,
  info2c,
  titulo3,
  info3a,
  info3b,
  info3c,
  info3d,
  info3e,
  titulo4,
  info4a,
  info4b,
  info4c,
}) => {
  return (
    <div className="infoPost">
      <br />
      <h2>{titulo}</h2>
      <br />
      <h6>{info}</h6>
      <img className="img-fluid" src={img} alt="" />
      <h4>{titulo2}</h4>
      <ul>
        <li>{info2a}</li>
        <li>{info2b}</li>
        <li>{info2c}</li>
      </ul>
      <h4>{titulo3}</h4>
      <ul>
        <li>{info3a}</li>
        <li>{info3b}</li>
        <li>{info3c}</li>
        <li>{info3d}</li>
        <li>{info3e}</li>
      </ul>
      <h4>{titulo4}</h4>
      <ul>
        <li>{info4a}</li>
        <li>{info4b}</li>
        <li>{info4c}</li>
      </ul>
      <div className="buttonReservation">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfcimB2l_RUJgqY_ekluECH5jIKrXByOYz_nIb052ef8tLJFA/viewform" target="_blank">
          <button type="button" className="btn btn-success">Reserva ahora!</button>
        </a>
      </div>
    </div>
  );
};

export default Post;

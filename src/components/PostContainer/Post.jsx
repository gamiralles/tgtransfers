import { useTranslation } from "react-i18next";

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

const { t } = useTranslation()

  return (
    <div className="infoPost">
      <br />
      <h2>{t(titulo)}</h2>
      <br />
      <h6>{t(info)}</h6>
      <img className="img-fluid" src={img} alt="" />
      <h4>{t(titulo2)}</h4>
      <ul>
        <li>{t(info2a)}</li>
        <li>{t(info2b)}</li>
        <li>{t(info2c)}</li>
      </ul>
      <h4>{t(titulo3)}</h4>
      <ul>
        <li>{t(info3a)}</li>
        <li>{t(info3b)}</li>
        <li>{t(info3c)}</li>
        <li>{t(info3d)}</li>
        <li>{t(info3e)}</li>
      </ul>
      <h4>{t(titulo4)}</h4>
      <ul>
        <li>{t(info4a)}</li>
        <li>{t(info4b)}</li>
        <li>{t(info4c)}</li>
      </ul>
      <div className="buttonReservation">
        <a href="https://wa.me/message/3AYMG447FQRYN1" target="_blank">
          <button type="button" className="btn btn-success">{t("nav_reserva")}</button>
        </a>
      </div>
    </div>
  );
};

export default Post;

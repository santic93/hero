import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const Hero = () => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroById(id), [id]);
  const navigate = useNavigate();
  if (!hero) {
    return <Navigate to="/marvel" />;
  }
  const onReturn = () => {
    navigate(-1, {
      replace: true,
    });
  };
  const heroImg = `/${id}.jpg`;
  console.log(heroImg);
  return (
    <div className="row mt-5 ">
      <div className="col-4 animate__animated animate__lightSpeedInRight">
        <img src={heroImg} alt={hero.superhero} className="img-thumbnail " />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group lis-gropup-flush">
          <li className="list-group-item">
            <b>Alert Ego</b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Editorial</b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>Primera aparicion</b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Caracteres</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-primary" onClick={onReturn}>
          Volver
        </button>
      </div>
    </div>
  );
};

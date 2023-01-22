import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import { getApiResource } from "@utils/network";
import { changeHTTP, makeConcurrentRequest } from "../../../utils/network";

import s from "./PersonFilms.module.css";

const PersonFilms = ({ personFilms }) => {
  const [errorApi, setErrorApi] = useState(null);
  const [filmsName, setFilmsName] = useState(null);

  const getResource = async (array) => {
    const changeFilmLink = array.map((filmLink) => changeHTTP(filmLink));
    const res = await makeConcurrentRequest(changeFilmLink);

    setFilmsName(res);
  };

  useEffect(() => {
    (async () => {
      getResource(personFilms);
    })();
  }, []);

  return (
    <div className={s.personFilms}>
      {errorApi ? (
        <ErrorMessage />
      ) : (
        <div className={s.filmsList}>
          {filmsName
            ? filmsName
                .sort((a, z) => {
                  return a.episode_id - z.episode_id;
                })
                .map((film, id) => {
                  return (
                    <div className={s.film} key={id}>
                      <span className={s.episode}>Episode {film.episode_id}</span>
                      <span className={s.colon}>:</span>
                      <span className={s.title}>{film.title}</span>
                    </div>
                  );
                })
            : null}
        </div>
      )}
    </div>
  );
};

PersonFilms.propTypes = {
  personFilms: PropTypes.array,
};

export default PersonFilms;

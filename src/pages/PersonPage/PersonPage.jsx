import React, { useEffect, useState, Suspense } from "react";
import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

import ErrorMessage from "@components/ErrorMessage/ErrorMessage";
import PersonPhoto from "@components/PersonPage/PersonPhoto/PersonPhoto";
import PersonInfo from "@components/PersonPage/PersonInfo/PersonInfo";
import PersonLinkBack from "@components/PersonPage/PersonLinkBack/PersonLinkBack";
import UiLoading from "@components/Ui/UiLoading/UiLoading";

import { PEOPLE_PAGE_ROUTE, API_PERSON } from "@constants/constants";
import { getPeopleImage } from "@services/getPeopleData";
import { getApiResource } from "@utils/network";

import s from "./PersonPage.module.css";

const PersonFilms = React.lazy(() =>
  import("@components/PersonPage/PersonFilms/PersonFilms")
);

const PersonPage = () => {
  const storeDate = useSelector((state) => state.favouriteReducer);

  const [errorApi, setErrorApi] = useState(null);
  const [person, setPerson] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personId, setPersonID] = useState(null);
  const [personFavourite, setPersonFavourite] = useState(null);

  const [photo, setPhoto] = useState(null);

  const [personFilms, setPersonFilms] = useState([]);

  const location = useLocation();

  const getResource = async (url) => {
    const id = location.pathname.replace(`${PEOPLE_PAGE_ROUTE}/`, ``);

    const res = await getApiResource(`${url}/${id}`);
    storeDate[id] ? setPersonFavourite(true) : setPersonFavourite(false);
    if (res) {
      const img = getPeopleImage(id);
      setPhoto(img);
      setPersonName(res.name);
      setPersonID(id);

      setPersonFilms(res.films);
      setPerson([
        { title: "Height", data: res.height },
        { title: "Mass", data: res.mass },
        { title: "Hair Color", data: res.hair_color },
        { title: "Skin Color", data: res.skin_color },
        { title: "Eye Color", data: res.eye_color },
        { title: "Birth Year", data: res.birth_year },
        { title: "Gender", data: res.gender },
      ]);
      setErrorApi(false);
      return res;
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    (async () => {
      getResource(API_PERSON);
    })();
  }, []);
  return (
    <div className={s.personPage}>
      {errorApi ? (
        <ErrorMessage />
      ) : (
        <>
          <PersonLinkBack />
          <>
            {person ? (
              <div className={s.person}>
                {personName && <span className={s.name}>{personName}</span>}
                <div className={s.info}>
                  <PersonPhoto
                    photo={photo}
                    personName={personName}
                    personId={personId}
                    setPersonFavourite={setPersonFavourite}
                    personFavourite={personFavourite}
                  />

                  {person && <PersonInfo person={person} />}
                  {personFilms && (
                    <Suspense fallback={<UiLoading />}>
                      <PersonFilms personFilms={personFilms} />
                    </Suspense>
                  )}
                </div>
              </div>
            ) : null}
          </>
        </>
      )}
    </div>
  );
};

export default PersonPage;

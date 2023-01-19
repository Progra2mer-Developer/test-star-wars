import React, { useEffect, useState } from "react";

import { useLocation, useSearchParams } from "react-router-dom";

import { WithErrorApi } from "@hoc-helpers/WithErrorApi";

import PeopleList from "@components/PeoplePage/PeoleList/PeoleList";
import ErrorMessage from "@components/ErrorMessage/ErrorMessage";
import PeopleNav from "@components/PeoplePage/PeopleNav/PeopleNav";

import { getApiResource, changeHTTP } from "@utils/network";
import {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId,
} from "@services/getPeopleData";

import { API_PEOPLE } from "@constants/constants";

import s from "./PeoplePage.module.css";

const PeoplePage = () => {
  const [people, setPeople] = useState(null);
  const [errorApi, setErrorApi] = useState(null);
  const [page, setPage] = useState(1);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);

  const location = useLocation();

  const getResource = async (url) => {
    const res = await getApiResource(url);
    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);

      setPrevPage(changeHTTP(res.previous));
      setNextPage(changeHTTP(res.next));

      setPage(getPeoplePageId(url));
      const pageNum = location.pathname.replace("/people/page=", "");
      setPage(Number(pageNum));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };
  useEffect(() => {
    if (page) {
      getResource(API_PEOPLE + page);
    }
  }, [page]);
  return (
    <div className={s.poeplePage}>
      {errorApi ? (
        <ErrorMessage />
      ) : (
        <>
          <PeopleNav
            getResource={getResource}
            prevPage={prevPage}
            nextPage={nextPage}
            page={page}
          />
          <div>{people && <PeopleList people={people} />}</div>
        </>
      )}
    </div>
  );
};

export default PeoplePage;

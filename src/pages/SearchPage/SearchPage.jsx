import React from "react";
import { useState } from "react";
import { getApiResource } from "@utils/network";

import ErrorMessage from "@components/ErrorMessage/ErrorMessage";

import { getPeopleId, getPeopleImage } from "@services/getPeopleData";
import { API_SEARCH } from "@constants/constants";

import s from "./SearchPage.module.css";
import SearchPageInfo from "../../components/SearchPage/SearchPageInfo/SearchPageInfo";
import { useEffect } from "react";
import { API_PEOPLE, API_PERSON } from "../../constants/constants";

const SearchPage = () => {
  const [errorApi, setErrorApi] = useState(null);
  const [people, setPeople] = useState([]);

  const [page, setPage] = useState(1);

  const [inputSearchValue, setInputSearchValue] = useState("");
  const getResponse = async (api, param) => {
    const res = await getApiResource(api + param);
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
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputSearchValue(value);
    getResponse(API_SEARCH, value);
  };
  useEffect(() => {
    if (page) {
      getResponse(API_PEOPLE, 1);
    }
  }, []);
  return (
    <div className={s.searchPage}>
      {errorApi ? (
        <ErrorMessage />
      ) : (
        <>
          <h1 className={"header__text"}>Search</h1>
          <input
            value={inputSearchValue}
            onChange={handleInputChange}
            placeholder="Input character's name"
            type="text"
          />
          <SearchPageInfo people={people} />
        </>
      )}
    </div>
  );
};

export default SearchPage;

import {
  FAIL_PAGE_ROUTE,
  FAVOURITE_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  NOT_FOUND_PAGE_ROUTE,
  NOT_FOUND_ROUTE,
  PEOPLE_ITEM_PAGE_ROUTE,
  PEOPLE_PAGE_ROUTE,
  SEARCH_PAGE_ROUTE,
} from "../constants/constants";

import HomePage from "../pages/HomePage/HomePage";
import PeoplePage from "../pages/PeoplePage/PeoplePage";
import SearchPage from "../pages/SearchPage/SearchPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import FailPage from "../pages/FailPage/FailPage";
import FavouritePage from "../pages/FavouritePage/FavouritePage";
import PeopleItemPage from "../pages/PeopleItemPage/PeopleItemPage";

export const navRoutes = [
  {
    name: "Home",
    path: HOME_PAGE_ROUTE,
    element: <HomePage />,
    key: "HomePage",
  },
  {
    name: "People",
    path: PEOPLE_PAGE_ROUTE,
    element: <PeoplePage />,

    key: "PeoplePage",
  },
  {
    name: "Search",
    path: SEARCH_PAGE_ROUTE,
    element: <SearchPage />,
    key: "SearchPage",
  },
  {
    name: "Not Found",
    path: NOT_FOUND_PAGE_ROUTE,
    element: <NotFoundPage />,
    key: "NotFoundPage",
  },
  {
    name: "Fail",
    path: FAIL_PAGE_ROUTE,
    element: <FailPage />,
    key: "FailPage",
  },
];

export const publicRoutes = [
  {
    name: "Favourite",
    path: FAVOURITE_PAGE_ROUTE,
    element: <FavouritePage />,
    key: "FavouritePage",
  },
];
export const hidenRoutes = [
  {
    name: "PeopleItem",
    path: PEOPLE_ITEM_PAGE_ROUTE,
    element: <PeopleItemPage />,
    key: "PeopleItemPage",
  },
  {
    name: "Not Found",
    path: NOT_FOUND_ROUTE,
    element: <NotFoundPage />,
    key: "NotFoundPage",
  },
];

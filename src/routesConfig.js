import {
  FAIL_PAGE_ROUTE,
  FAVOURITE_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  NOT_FOUND_PAGE_ROUTE,
  PEOPLE_PAGE_ROUTE,
  SEARCH_PAGE_ROUTE,
} from "./constants";

import HomePage from "./pages/HomePage/HomePage";
import PeoplePage from "./pages/PeoplePage/PeoplePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import FailPage from "./pages/FailPage/FailPage";
import FavouritePage from "./pages/FavouritePage/FavouritePage";

export const navRoutes = [
  { name: "Home", path: HOME_PAGE_ROUTE, element: <HomePage /> },
  { name: "People", path: PEOPLE_PAGE_ROUTE, element: <PeoplePage /> },
  { name: "Search", path: SEARCH_PAGE_ROUTE, element: <SearchPage /> },
  { name: "NotFound", path: NOT_FOUND_PAGE_ROUTE, element: <NotFoundPage /> },
  { name: "Fail", path: FAIL_PAGE_ROUTE, element: <FailPage /> },
];

export const publicRoutes = [
  { name: "Favourite", path: FAVOURITE_PAGE_ROUTE, element: <FavouritePage /> },
];

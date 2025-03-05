import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app/app";
import { Setting } from "./const/const";
import offers from "./mocks/offers";
import { offersList } from "./mocks/offers-list";
import { favorites } from "./mocks/favorites";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App
      rentalOffersCount={Setting.rentOffersCount}
      offers={offers}
      offersList={offersList}
      favorites={favorites}
    />
  </StrictMode>
);

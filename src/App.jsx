import "./App.scss";
import tgwa from "./stores/telegram-store";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import MainPage from "./pages/user/mainPage/MainPage";

function App({ tg }) {
  const [styles, setStyles] = useState();
  useEffect(() => {
    tgwa.startWebApi(tg);
    setStyles({
      backgroundColor: tg.themeParams.bg_color,
      color: tg.themeParams.text_color,
      minHeight: tg.viewportHeight,
    });
  }, [tg]);

  return (
    <Routes>
      <Route path="/" element={<UserLayout styles={styles}/>}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;

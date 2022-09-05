import "./App.scss";
import tgwa from "./stores/telegram-store";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import NotFound from "./pages/NotFound";
import MainPage from "./pages/user/mainPage/MainPage";
import RulesPage from "./pages/user/rulesPage/RulesPage";
import PaymentPage from "./pages/user/paymentPage/PaymentPage";
import TutorsPage from "./pages/user/tutorsPage/TutorsPage";
import SchedulePage from "./pages/user/schedulePage/SchedulePage";
import ArticlesPage from "./pages/user/articlesPage/ArticlesPage";
import PhotosPage from "./pages/user/photosPage/PhotosPage";
import ResWorksPage from "./pages/user/resWorksPage/ResWorksPage";
import ProfilePage from "./pages/user/profilePage/ProfilePage";

function App({ tg }) {
  const [styles, setStyles] = useState();

  useEffect(() => {
    tgwa.startWebApi(tg);
    setStyles({
      // backgroundColor: tg.themeParams.bg_color,
      // color: tg.themeParams.text_color,
      minHeight: tg.viewportHeight,
    });
  }, [tg]);

  return (
    <Routes>
      <Route path="/" element={<UserLayout styles={styles} />}>
        <Route index element={<MainPage />} />
        <Route path="rules" element={<RulesPage />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="tutors" element={<TutorsPage />} />
        <Route path="schedule" element={<SchedulePage />} />
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="photos" element={<PhotosPage />} />
        <Route path="resWorks" element={<ResWorksPage />} />
        <Route path="profile" element={<ProfilePage/>}/>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage/HomePage";
import RoomsPage from "./pages/RoomsPage/RoomsPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import News from "./pages/NewsPage/News";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import QuestionsPage from "./pages/QuestionsPage/QuestionsPage";
import RulesBoking from "./pages/RulesBookingPage/RulesOrderPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ResidenceRules from "./pages/ResidenceRules/ResidenceRules";

// import ForAdmin from "./pages/ForAdmin/ForAdmin";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="rooms" element={<RoomsPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="news/:id" element={<News />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="faq" element={<QuestionsPage />} />
        <Route path="rules-booking" element={<RulesBoking />} />
        <Route path="residence-rules" element={<ResidenceRules />} />
        <Route path="profile" element={<ProfilePage />} />
        {/* <Route path="contol-panel" element={<ForAdmin />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

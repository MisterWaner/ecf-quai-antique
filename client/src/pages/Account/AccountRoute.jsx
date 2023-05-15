import { Routes, Route } from "react-router-dom";
import AccountLayout from "./AccountLayout/AccountLayout";

import Reservation from "./Rerservation/Reservation";
import Profile from "./Profile/Profile";

const AccountRoute = () => {
  return (
    <>
        <Routes>
            <Route element={<AccountLayout />}>
                <Route path="/account/reservation" element={<Reservation />}/>
                <Route path="/account/profile" element={<Profile />}/>
            </Route>
        </Routes>
    </>
  )
}

export default AccountRoute
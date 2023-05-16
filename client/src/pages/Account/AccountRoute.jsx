import { Routes, Route } from "react-router-dom";
import AccountLayout from "./AccountLayout/AccountLayout";

import Reservation from "./Rerservation/Reservation";
import Profile from "./Profile/Profile";

const AccountRoute = () => {
  return (
    <>
        <Routes>
            <Route element={<AccountLayout />}>
                <Route path="/mon-compte" element={<Profile />}/>
                <Route path="/mon-compte/reservation" element={<Reservation />}/>
            </Route>
        </Routes>
    </>
  )
}

export default AccountRoute
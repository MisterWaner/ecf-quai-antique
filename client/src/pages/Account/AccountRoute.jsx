import { Routes, Route } from "react-router-dom";
import AccountLayout from "./AccountLayout/AccountLayout";

import Reservation from "./Rerservation/Reservation";

const AccountRoute = () => {
  return (
    <>
        <Routes>
            <Route element={<AccountLayout />}>
                <Route path="/account/reservation" element={<Reservation />}/>
            </Route>
        </Routes>
    </>
  )
}

export default AccountRoute
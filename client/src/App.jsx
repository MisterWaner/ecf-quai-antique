import PublicRoute from "./pages/Public/PublicRoute";
import AdminRoute from "./pages/Admin/AdminRoute";
import AccountRoute from "./pages/Account/AccountRoute";



function App() {
    return (
        <div className="app">
            <PublicRoute />
            <AdminRoute />
            <AccountRoute />
        </div>
    );
}

export default App;

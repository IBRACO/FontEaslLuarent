import React from "react";
import { Route } from "react-router-dom";
import Home from "./page/Home";
import Services from "./page/Services";
import QuiSommesNous from "./page/QuiSommesNous";
import SingIn from "./page/SingIn";
import ContactUs from "./page/ContactUs";
import Chat from "./page/Chat";
import Inscription from "./page/Inscription";
import Training from "./page/Training";
import Don from "./page/Don";
import Cotisation from "./page/Cotisation";
import Actualite from "./page/Actualite";
// import AdminSit from "./page/AdminSit";
// import Ccotisation from "./pages/CRUD/Ccotisation";
// import UpdatePassword from "./pages/CRUD/UpdatePassword";
// import{Protected } from ".";

// import ProtectedRoute   from "./ProtectedRoute";
// import Cactualite from "./pages/CRUD/Cactualite";
// import Cadhesion from "./pages/CRUD/Cadhesion";
// import Apdatepss from "./pages/CRUD/Apdatepss";

function Switcher() {
  return (
    <div>
      <>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/quiSommesNous" component={QuiSommesNous} />
        <Route path="/singIn" component={SingIn} />
        <Route path="/cotisation" component={Cotisation} />
        <Route path="/contactUs" component={ContactUs} />
        <Route path="/chat" component={Chat} />
        <Route path="/actualite" component={Actualite} />
        <Route path="/inscription" component={Inscription} />
        <Route path="/training" component={Training} />
        <Route path="/don" component={Don} />

        {/* <Route path="/ccotisation" component={Ccotisation} />
      <Route path="/cactualite" component={Cactualite} />
      <Route path="/cadhesion" component={Cadhesion} />
      <Route path="/updatepass/:token" component={UpdatePassword} />
      <Route path="/motdepassoublier" component={Apdatepss} />  */}
        {/* <Route path="/admin_sat" component={AdminSit} /> */}
      </>
    </div>
  );
}

export default Switcher;

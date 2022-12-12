import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import FAQ from "./scenes/faq";
import Addresses from "./scenes/addressesTable";
import Books from "./scenes/booksTable";
import Carts from "./scenes/cartsTable";
import Genres from "./scenes/genresTable";
import Orders from "./scenes/ordersTable";
import Users from "./scenes/usersTable";
/*import Bar from "./scenes/bar";

import Line from "./scenes/line";
import Pie from "./scenes/pie";

import Geography from "./scenes/geography";

*/
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {<Route path="/team" element={<Team />} />}
              {<Route path="/contacts" element={<Contacts />} />}
              {<Route path="/invoices" element={<Invoices />} />}
              {<Route path="/form" element={<Form />} />}
              {<Route path="/faq" element={<FAQ />} />}
              {<Route path="/addresses" element={<Addresses />} />}
              {<Route path="/books" element={<Books />} />}
              {<Route path="/carts" element={<Carts />} />}
              {<Route path="/genres" element={<Genres />} />}
              {<Route path="/orders" element={<Orders />} />}
              {<Route path="/users" element={<Users />} />}
              {/*<Route path="/bar" element={<Bar />} />}
              {<Route path="/pie" element={<Pie />} />}
              {<Route path="/line" element={<Line />} />}
              
              {<Route path="/geography" element={<Geography />} />}
  
              */}
            </Routes>
          </main>
        </div>
        ;
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

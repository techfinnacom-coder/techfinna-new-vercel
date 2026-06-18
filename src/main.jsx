import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./LayOut/Main";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ContactPage from "./Pages/Contact/ContactPage";
import ServicePage from "./Pages/Services/ServicePage";
import Privacy from "./Pages/Privacy/Privacy";
import Terms from "./Pages/Terms/Terms";
import Discodo from "./Pages/Discodoo/Discodo";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Shipping from "./Component/Shipping/Shipping";
import BigQueryDoc from "./Component/BigQueryDoc/BigQueryDoc";
import Lookers from "./Pages/Lookers/Lookers";
import Googlesheet from "./Pages/Googlesheet/Googlesheet";
import Reconciliation from "./Pages/Reconciliation/Reconciliation";
import LookersDashboard from "./Pages/LookersDashboard/Lookers";
import PowerBi from "./Pages/PowerBi/PowerBi";
import Bigquery from "./Pages/BigQuery/Bigquery";
import SpreadsheetDemo from "./Pages/SpreadsheetDemo/SpreadsheetDemo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/service",
        element: <ServicePage></ServicePage>,
      },
      {
        path: "/discodoo",
        element: <Discodo></Discodo>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/privacy",
        element: <Privacy></Privacy>,
      },
      {
        path: "/terms",
        element: <Terms></Terms>,
      },

      {
        path: "/shipping",
        element: <Shipping></Shipping>,
      },
      {
        path: "/guides/how-to-connect-google-bigquery-with-odoo",
        element: <BigQueryDoc></BigQueryDoc>,
      },

      {
        path: "/looker-odoo-connector/privacy",
        element: <Privacy></Privacy>,
      },
      {
        path: "/looker-odoo-connector/terms",
        element: <Terms></Terms>,
      },
      {
        path: "/looker-odoo-connector",
        element: <Lookers></Lookers>,
      },
      {
        path: "/googlesheet-odoo-connector",
        element: <Googlesheet></Googlesheet>,
      },
      {
        path: "/odoo-manual-reconciliation",
        element: <Reconciliation></Reconciliation>,
      },
      {
        path: "/looker-dashboard",
        element: <LookersDashboard></LookersDashboard>,
      },
      {
        path: "/powerbi-connector",
        element: <PowerBi></PowerBi>,
      },
      {
        path: "/bigquery-connector",
        element: <Bigquery></Bigquery>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: "/demo-spreadsheet-connector",
    element: <SpreadsheetDemo></SpreadsheetDemo>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// if (rootElement?.hasChildNodes()) {
// 	hydrateRoot(
// 		rootElement,
// 		<React.StrictMode>
// 			<RouterProvider router={router} />
// 		</React.StrictMode> a
// 	);
// } else {
// 	root.render(
// 		<React.StrictMode>
// 			<RouterProvider router={router} />
// 		</React.StrictMode>
// 	);
// }

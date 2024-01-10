import { Route, Routes } from "react-router-dom";
import ProductsTable from "./ProductsTable";
import ProductSendForm from "./ProductSendForm";
import Navbar from "../components/Navbar";

function PageIndex() {
  // const routers = useRoutes([
  //   { path: "/", element: <Navbar /> , children},
  //   { path: "/", element: <ProductsTable /> },
  //   { path: "/form", element: <ProductSendForm /> },
  // ]);
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<ProductsTable />} />
        <Route path="/form" element={<ProductSendForm />} />
      </Route>
    </Routes>
  );
}

export default PageIndex;

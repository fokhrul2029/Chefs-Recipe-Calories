import { Fragment } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import RecipeContent from "./components/RecipeContent/RecipeContent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Banner></Banner>
      <RecipeContent></RecipeContent>
      <Footer></Footer>
      <ToastContainer />
    </Fragment>
  );
}

export default App;

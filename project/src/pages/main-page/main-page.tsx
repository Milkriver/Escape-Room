import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

function MainPage(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <main className="page-content"></main>
      <Footer />
    </div>
  );
}

export default MainPage;

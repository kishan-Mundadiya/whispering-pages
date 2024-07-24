import PropTypes from "prop-types";
// import Header from "../components/Header/header";

function MainLayout({ children }) {
  return (
    <main className="main">
      {/* <Header /> */}
      {children}
    </main>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;

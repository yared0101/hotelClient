import Nav from "./Nav";

export const MainLayout = ({ children }) => {
  return (
    <div
      className="d-flex flex-column"
      style={{ height: "100vh", padding: 0, margin: 0 }}
    >
      <Nav />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;

import "antd/dist/antd.css";
import "../styles/base.css";
import "../styles/globals.css";
import { MainLayout } from "../components/MainLayout";
function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
  // const getLayout = Component.getLayout || ((page) => page);

  // return getLayout(<Component {...pageProps} />);
}

export default MyApp;

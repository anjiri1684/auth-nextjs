import Layout from "../components/layout/layout";
import "../styles/globals.css";
import { Provider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;

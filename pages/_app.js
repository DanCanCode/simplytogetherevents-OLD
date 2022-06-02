import Layout from "../components/layout";
import "../styles/globals.css";

function Website({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Website;

import Layout from "../components/layout";
import Navbar from "../components/Navbar";
import "../public/globals.css";

function Website({ Component, pageProps }) {
  return (
    <Layout>
      <Component navbar={<Navbar />} {...pageProps} />
    </Layout>
  );
}

export default Website;

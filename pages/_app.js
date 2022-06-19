import * as React from "react";
import Footer from "../components/Footer";
import Layout from "../components/layout";
import Navbar from "../components/Navbar";
import "../public/globals.css";

function Website({ Component, pageProps }) {
  // Grabs window object
  const useDeviceSize = () => {
    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(0);

    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    React.useEffect(() => {
      handleWindowResize();
      window.addEventListener("resize", handleWindowResize);

      // unsubscribe from the event on component unmount
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return [width, height];
  };

  // Grabs window width and height
  const [width, height] = useDeviceSize();

  return (
    <Layout windowSize={[width, height]}>
      <Component
        navbar={<Navbar windowSize={[width, height]} />}
        footer={<Footer windowSize={[width, height]} />}
        windowSize={[width, height]}
        {...pageProps}
      />
    </Layout>
  );
}

export default Website;


import { GoogleAnalytics } from "@next/third-parties/google";
import Meta from "@/components/Meta/Meta";
import "../styles/globals.scss";
import { GTAG } from "constants";

const App = ({ Component, pageProps }) => {
  return (
      <>
          <Meta/>
          <main className="roboto-regular">
              <Component {...pageProps} />
              <GoogleAnalytics gaId={GTAG}/>
          </main>
      </>
  );
};

export default App;

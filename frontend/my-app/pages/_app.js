import { Provider } from "@/context/store";
import Layout from "@/layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
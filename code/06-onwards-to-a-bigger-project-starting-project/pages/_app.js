import "@/styles/globals.css";
// import '../styles/globals.css'
import Layout from "../components/layout/Layout";

// function MyApp({ Component, pageProps }) {
export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

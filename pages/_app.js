import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  return (
    <ChakraProvider className="flex flex-auto">
      {getLayout(<Component className="flex flex-auto" {...pageProps} />)}
    </ChakraProvider>
  );
}

export default MyApp;

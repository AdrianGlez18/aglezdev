import { ChakraProvider } from "@chakra-ui/provider";
import Layout from "../components/layouts/main";
import Navbar from "../components/navbar";

const Web = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider>
            <Layout router={router}>
                <Component {...pageProps} key={router.route}/>
            </Layout>
        </ChakraProvider>
    );
}

export default Web;
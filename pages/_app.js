import { ChakraProvider } from "@chakra-ui/provider";
import Layout from "../components/layouts/main";
import theme from "../lib/theme";
import { AnimatePresence } from 'framer-motion'
import { initGA } from "../lib/ga";
initGA();

const Web = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    );
}

export default Web;
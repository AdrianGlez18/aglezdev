import { Box, Container, Heading, Image, HStack, VStack, Tag } from "@chakra-ui/react";
import { useColorMode } from '@chakra-ui/react'
import { WorkFeatured } from "../../components/work";
import { Section } from "../../components/customStyledComponents";
import WorkLayout from "../../components/layouts/work";
import useTranslation from 'next-translate/useTranslation'
import '../../i18n.json'

const Home = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const { t, lang } = useTranslation('pdfheaven');
    const demo = "https://pdfheaven.netlify.app/";
    const code = "https://github.com/AdrianGlez18/PDF-Heaven";
    const details = {"git" : code, "live" : demo};
    return (
        <Container>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Box bg="transparent" align="center" mt={5}>
                        <WorkLayout>
                            <Section delay={0.3}>
                                <Heading as="h3" variant="section-title" mb={8}>
                                    {t('worktitle')}
                                </Heading>
                                <WorkFeatured id="pdfheaven" title="PDF Heaven" imageSource="/pdfheaven.png" tags={['Web', 'NextJS', 'NodeJS']} size={[1920, 1080]} warning details={details}/>
                                <Heading as="h4" variant="section-title" mb={8} mt={5}>
                                    {t('sub_1')}
                                </Heading>
                                <p>{t('info_1')}</p>
                                <Heading as="h4" variant="section-title" mb={8} mt={5}>
                                    {t('sub_2')}
                                </Heading>
                                <p>{t('info_2')}</p>
                                <Box mt={3}>
                                <ul>
                                    <li>{t('info_2_1')}</li>
                                    <li>{t('info_2_2')}</li>
                                    <li>{t('info_2_3')}</li>
                                </ul>
                                </Box>
                                <Heading as="h4" variant="section-title" mb={8} mt={5}>
                                    {t('sub_3')}
                                </Heading>
                                <ul>
                                <li>{t('info_3_0')}</li>
                                    <li>{t('info_3_1')}</li>
                                    <li>{t('info_3_2')}</li>
                                    <li>{t('info_3_3')}</li>
                                </ul>
                            </Section>
                        </WorkLayout>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Home;
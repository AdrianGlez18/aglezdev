import { Box, Container, Heading, Image, HStack, VStack, Tag } from "@chakra-ui/react";
import { useColorMode } from '@chakra-ui/react'
import { WorkFeatured } from "../../components/work";
import { Section } from "../../components/customStyledComponents";
import WorkLayout from "../../components/layouts/work";
import useTranslation from 'next-translate/useTranslation'
import '../../i18n.json'

const Home = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const { t, lang } = useTranslation("jti");
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
                                <WorkFeatured id="pdfheaven" title="JTI App" imageSource="/jtiapp.jpg" tags={['Mobile', 'Flutter', 'Finished']} size={[270, 480]} />
                                <Box mt={3}>
                                    <p>https://play.google.com/store/apps/details?id=com.jti.jtiesitapp</p>
                                </Box>
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
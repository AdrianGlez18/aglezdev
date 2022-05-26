import { Box, Container, Heading, Image, HStack, VStack, Tag } from "@chakra-ui/react";
import { useColorMode } from '@chakra-ui/react'
import { WorkFeatured } from "../../components/work";
import { Section, ListElement } from "../../components/customStyledComponents";
import WorkLayout from "../../components/layouts/work";
import { projects } from "../../data/projects";
import useTranslation from 'next-translate/useTranslation'
import '../../i18n.json'

const Home = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const { t, lang } = useTranslation("reactvite");
    const code = "https://github.com/AdrianGlez18/react-vite-firebase-auth";
    const details = {"git" : code};
    const project = projects.find(p => p["id"] === "react-vite-auth");
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
                                <WorkFeatured title={project.title} imageSource={project.imageSource} tags={project.tags} size={project.size} details={details}/>
                                <Box mt={3}>
                                    <p></p>
                                </Box>
                                <Heading as="h4" variant="section-title" mb={8} mt={5}>
                                    {t('sub_1')}
                                </Heading>
                                <p>{t('info_1')}</p>
                                <Heading as="h4" variant="section-title" mb={8} mt={5}>
                                    {t('sub_2')}
                                </Heading>
                                <p>{t('info_2')}</p>
                                <Box mt={3} alignContent="left" alignItems={"left"} textAlign="left" p={2} ml={7}>
                                <ul>
                                    <ListElement>{t('info_2_1')}</ListElement>
                                    <ListElement>{t('info_2_2')}</ListElement>
                                    <ListElement>{t('info_2_3')}</ListElement>
                                    <ListElement>{t('info_2_4')}</ListElement>
                                    <ListElement>{t('info_2_5')}</ListElement>
                                    <ListElement>{t('info_2_6')}</ListElement>
                                    <ListElement>{t('info_2_7')}</ListElement>
                                </ul>
                                </Box>
                                <Heading as="h4" variant="section-title" mb={8} mt={5}>
                                    {t('sub_3')}
                                </Heading>
                            </Section>
                        </WorkLayout>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Home;
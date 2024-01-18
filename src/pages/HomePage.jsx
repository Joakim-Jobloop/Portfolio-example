import { HeroSection } from "./HomePageSections/HeroSection";
import { PageLayout } from "../components/layout/Layouts";
import { AboutSection } from "./HomePageSections/AboutSection";
import { ProjectsSection } from "./HomePageSections/ProjectsSection";
import { SkillsSection } from "./HomePageSections/SkillsSection";
import { ContactSection } from "./HomePageSections/ContactSection";

export const HomePage = () => {
  return (
    <PageLayout>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </PageLayout>
  );
};

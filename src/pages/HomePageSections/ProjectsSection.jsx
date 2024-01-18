import { ProjectCard } from "../../components/cards/ProjectCard"
import { SectionLayout } from "../../components/layout/Layouts"
import PROJECT_LIST from "../../data/projects_list"

export const ProjectsSection = () => {
    return (
        <SectionLayout id="prosjekter">
            <h2>Projects</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem,
                eligendi distinctio minima maxime nostrum blanditiis! Corporis,
                voluptatum tempore autem a eius officiis aperiam modi fuga officia
                accusamus impedit molestiae.
            </p>
            <div className="flex flex-wrap gap-12 p-16">
                {PROJECT_LIST.map((project) => <ProjectCard key={project.projectName} project={project} />)}
            </div>
        </SectionLayout>
    )
}
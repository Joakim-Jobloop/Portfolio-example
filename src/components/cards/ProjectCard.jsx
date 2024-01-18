

export const ProjectCard = ({ project }) => {
  return (
        <div className="project-card w-96 p-8 bg-orange-500 grid gap-8">
        <h3>{project.projectName}</h3>
        <figure className="h-64 w-full">
        <img src={project.src} alt="" className="object-cover border-2 object-top w-full h-full" />
        </figure>
        
        <p>{project.description}</p>
    
        <button className="h-12 rounded-xl bg-orange-200 shadow shadow-black">
        <a href={project.href} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
        </button>
        <button className="h-12 rounded-xl bg-orange-200 shadow shadow-black">
        <a href={project.hrefCode} target="_blank" rel="noopener noreferrer">
          View Code
        </a>
        </button>
      </div>    
  );
};

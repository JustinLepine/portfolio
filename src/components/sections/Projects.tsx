import data from "../index.ts"
import { RepeatSkillReel as SkillReel } from "./SkillReel"

const projects = data.projects

export default function Projects() {
  return (
    <>
      <section id="projects" className="projects">
        <h2 className="projects_title">Projects</h2>
        <div className="projects_grid">
          {projects.map((project) => (
            <div key={project.id} className="projects_card">
              <div className="projects_card_header">
                <div className="projects_card_header-left">
                  {project.logo && <img src={project.logo} alt={`${project.name} logo`} className="projects_card_logo" />}
                  <h3>{project.name}</h3>
                </div>
                <div className="projects_card_links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
                  )}
                </div>
              </div>
              <p className="projects_card_desc">{project.description}</p>
              <div className="projects_card_tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="projects_card_tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <SkillReel amount={3} />
    </>
  )
}

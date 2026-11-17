import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { solutions } from '../data/solutions'

export default function Projects() {
  return <main className="inner-page">
    <section className="page-hero"><div className="container"><div className="eyebrow"><span/> SELECTED PROJECTS</div><h1>Different challenges.<br/><em>Thoughtful solutions.</em></h1><p>A look at selected platforms and digital experiences built to support real organisations and their work.</p><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><b>Projects</b></div></div></section>
    <section className="section portfolio-page-section"><div className="container"><div className="projects-page-grid">{solutions.map((project,index)=><article key={project.slug} className="project-page-card"><Link to={`/projects/${project.slug}`} className="project-page-image"><img src={project.image} alt={project.name}/><span><ArrowUpRight size={20}/></span></Link><div className="project-meta">{project.category}<span>0{index+1}</span></div><h3>{project.name}</h3><p>{project.summary}</p><Link to={`/projects/${project.slug}`} className="underlined-link">View project <ArrowRight size={16}/></Link></article>)}</div></div></section>
  </main>
}

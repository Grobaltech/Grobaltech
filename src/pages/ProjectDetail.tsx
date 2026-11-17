import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { solutions } from '../data/solutions'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = solutions.find((item) => item.slug === slug)
  if (!project) return <main className="inner-page"><section className="section"><div className="container not-found"><h1>Project not found</h1><Link className="button" to="/projects"><ArrowLeft size={16}/> Back to projects</Link></div></section></main>
  return <main className="inner-page">
    <section className="page-hero"><div className="container"><div className="eyebrow"><span/> PROJECT / {project.category.toUpperCase()}</div><h1>{project.name}</h1><p>{project.summary}</p><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><Link to="/projects">Projects</Link><span>/</span><b>{project.name}</b></div></div></section>
    <section className="section detail-section"><div className="container detail-grid"><div className="detail-image"><img src={project.image} alt={project.name}/></div><div className="detail-content"><span className="mini-kicker">PROJECT OVERVIEW</span><h2>Designed around <em>the work.</em></h2><p>{project.description}</p><h3>Platform capabilities</h3><ul>{project.capabilities.map((item)=><li key={item}><CheckCircle2 size={18}/>{item}</li>)}</ul><p className="case-study-note">This overview describes the platform's intended scope and capabilities. Detailed client outcomes and performance figures will be added when approved for publication.</p><Link className="button" to="/contact">Discuss a project like this <ArrowUpRight size={17}/></Link></div></div></section>
  </main>
}

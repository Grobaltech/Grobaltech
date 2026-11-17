import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { services } from '../data/services'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)
  if (!service) return <main className="inner-page"><section className="section"><div className="container not-found"><h1>Service not found</h1><Link className="button" to="/services"><ArrowLeft size={16}/> Back to services</Link></div></section></main>
  return <main className="inner-page">
    <section className="page-hero"><div className="container"><div className="eyebrow"><span/> GROBALTECH SERVICES</div><h1>{service.name}</h1><p>{service.summary}</p><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><Link to="/services">Services</Link><span>/</span><b>{service.name}</b></div></div></section>
    <section className="section detail-section"><div className="container service-detail-layout"><div className="service-detail-aside"><span className="mini-kicker">HOW WE HELP</span><h2>Practical thinking.<br/><em>Thoughtful delivery.</em></h2><p>{service.description}</p><Link className="button" to="/contact">Discuss this service <ArrowUpRight size={17}/></Link></div><div className="service-deliverables"><span className="mini-kicker">POSSIBLE DELIVERABLES</span><h3>What the work can include</h3>{service.deliverables.map((item,index)=><div className="deliverable" key={item}><span>0{index+1}</span><p><CheckCircle2 size={18}/>{item}</p></div>)}</div></div></section>
  </main>
}

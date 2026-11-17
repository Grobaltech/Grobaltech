import { ArrowRight, ArrowUpRight, Code2, Smartphone, Workflow, Cloud, ShieldCheck, Database } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../data/services'

const icons = [Code2, Smartphone, Workflow, Cloud, ShieldCheck, Database]

export default function Services() {
  return <main className="inner-page">
    <section className="page-hero"><div className="container"><div className="eyebrow"><span/> OUR EXPERTISE</div><h1>Technology services<br/><em>with a purpose.</em></h1><p>We bring design, engineering and practical technology thinking together to help organisations solve real problems and move forward with confidence.</p><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><b>Services</b></div></div></section>
    <section className="section service-page-section"><div className="container"><div className="portfolio-intro"><div><span className="mini-kicker">WHAT WE CAN HELP WITH</span><h2>The right expertise<br/><em>for your next step.</em></h2></div><p>Start with one challenge or bring us a broader ambition. We can help define the scope and assemble the right approach.</p></div><div className="service-detail-grid">{services.map((service,index)=>{const Icon=icons[index];return <article key={service.slug} className="service-detail-card"><span className="service-detail-icon"><Icon size={24}/></span><small>0{index+1} / SERVICE</small><h3>{service.name}</h3><p>{service.summary}</p><Link to={`/services/${service.slug}`} className="underlined-link">Explore service <ArrowRight size={16}/></Link></article>})}</div><div className="portfolio-callout"><span className="callout-icon"><Workflow/></span><div><h3>Not sure which service fits your challenge?</h3><p>Tell us what you are trying to achieve and we can help define a suitable approach.</p></div><Link className="button" to="/contact">Talk to us <ArrowUpRight size={17}/></Link></div></div></section>
  </main>
}

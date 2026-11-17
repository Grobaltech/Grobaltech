import { ArrowUpRight, CheckCircle2, Compass, HeartHandshake, Lightbulb, Target } from 'lucide-react'
import { Link } from 'react-router-dom'

const principles = [
  { icon: Target, title: 'Start with the real need', copy: 'We look beyond the requested feature to understand the challenge it should solve.' },
  { icon: Lightbulb, title: 'Make complexity clearer', copy: 'We turn ideas and technical choices into understandable steps and usable experiences.' },
  { icon: HeartHandshake, title: 'Work as a partner', copy: 'We value communication, shared understanding and solutions that support people.' },
  { icon: Compass, title: 'Keep improving', copy: 'We build with the expectation that needs change and good systems should be able to grow.' },
]

export default function About() {
  return <main className="inner-page">
    <section className="page-hero"><div className="container"><div className="eyebrow"><span/> ABOUT GROBALTECH</div><h1>We believe technology<br/><em>should move people forward.</em></h1><p>Grobaltech Technologies brings ideas, design and engineering together to create useful digital experiences and dependable business systems.</p><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><b>About</b></div></div></section>
    <section className="section about-page-section"><div className="container about-page-grid"><div className="about-page-art"><div className="about-art-symbol">G<span>.</span></div><div className="about-art-caption">THOUGHTFUL DESIGN<br/>ENGINEERED SOLUTIONS</div></div><div><span className="mini-kicker">OUR PURPOSE</span><h2 className="about-page-heading">Useful technology.<br/><em>Meaningful progress.</em></h2><p>We work with businesses, institutions and growing ideas to make technology more practical. That may mean creating a strong digital presence, building a custom platform, connecting systems or improving how everyday work gets done.</p><p>Our approach is collaborative: understand the people and processes involved, define what success should look like, then design and build a solution that can evolve with the organisation.</p><div className="about-checks"><span><CheckCircle2/> Clear communication</span><span><CheckCircle2/> Practical delivery</span><span><CheckCircle2/> Long-term thinking</span></div><Link className="button" to="/contact">Work with us <ArrowUpRight size={17}/></Link></div></div></section>
    <section className="section principles-section"><div className="container"><div className="section-heading"><div><div className="eyebrow"><span/> WHAT GUIDES US</div><h2>Principles behind<br/><em>the work.</em></h2></div><p>Our values are reflected in the way we listen, make decisions, build and support the things we deliver.</p></div><div className="principles-grid">{principles.map(({icon:Icon,title,copy},index)=><article key={title}><span className="principle-number">0{index+1}</span><Icon size={25}/><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
  </main>
}

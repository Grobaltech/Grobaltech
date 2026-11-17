import { ArrowRight, ArrowUpRight, Layers3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { solutions } from '../data/solutions'

export default function Products() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow"><span /> OUR DIGITAL PORTFOLIO</div>
          <h1>Solutions designed<br /><em>to move work forward.</em></h1>
          <p>Explore selected digital platforms and experiences developed by Grobaltech Technologies. Each solution is shaped around the needs of the people who use it.</p>
          <div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><b>Solutions</b></div>
        </div>
      </section>
      <section className="section portfolio-page-section">
        <div className="container">
          <div className="portfolio-intro"><div><span className="mini-kicker">SELECTED PLATFORMS</span><h2>Digital work with<br /><em>a practical purpose.</em></h2></div><p>Our portfolio spans business operations, community platforms and professional services. We build with an emphasis on clarity, reliability and useful outcomes.</p></div>
          <div className="solution-list">
            {solutions.map((solution, index) => (
              <article className="solution-row" key={solution.slug}>
                <Link to={`/products/${solution.slug}`} className="solution-photo"><img src={solution.image} alt={solution.name} /><span><ArrowUpRight size={21} /></span></Link>
                <div className="solution-copy"><span className="solution-number">0{index + 1} / {solution.category}</span><h3>{solution.name}</h3><p>{solution.summary}</p><Link className="underlined-link" to={`/products/${solution.slug}`}>Explore solution <ArrowRight size={16} /></Link></div>
              </article>
            ))}
          </div>
          <div className="portfolio-callout"><span className="callout-icon"><Layers3 /></span><div><h3>Have a challenge that needs a custom solution?</h3><p>Let's discuss what your organisation needs and shape a practical way forward.</p></div><Link className="button" to="/contact">Discuss a project <ArrowUpRight size={17} /></Link></div>
        </div>
      </section>
    </main>
  )
}

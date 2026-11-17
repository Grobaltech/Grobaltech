import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { solutions } from '../data/solutions'

export default function ProductDetail() {
  const { slug } = useParams()
  const solution = solutions.find((item) => item.slug === slug)

  if (!solution) {
    return <main className="inner-page"><section className="section"><div className="container not-found"><h1>Solution not found</h1><p>The solution you are looking for may have moved.</p><Link className="button" to="/products"><ArrowLeft size={16} /> Back to solutions</Link></div></section></main>
  }

  return (
    <main className="inner-page">
      <section className="page-hero detail-hero">
        <div className="container">
          <div className="eyebrow"><span /> {solution.category.toUpperCase()}</div>
          <h1>{solution.name}</h1>
          <p>{solution.summary}</p>
          <div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><Link to="/products">Solutions</Link><span>/</span><b>{solution.name}</b></div>
        </div>
      </section>
      <section className="section detail-section">
        <div className="container detail-grid">
          <div className="detail-image"><img src={solution.image} alt={solution.name} /></div>
          <div className="detail-content"><span className="mini-kicker">OVERVIEW</span><h2>Technology shaped around <em>real needs.</em></h2><p>{solution.description}</p><h3>Key capabilities</h3><ul>{solution.capabilities.map((item) => <li key={item}><CheckCircle2 size={18} />{item}</li>)}</ul><Link className="button" to="/contact">Discuss a similar solution <ArrowUpRight size={17} /></Link></div>
        </div>
      </section>
    </main>
  )
}

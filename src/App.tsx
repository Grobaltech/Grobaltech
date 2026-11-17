import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ArrowUpRight, Menu, X, Code2, Cloud, ShieldCheck,
  Smartphone, Database, Workflow, ChevronDown, CheckCircle2,
  Mail, Phone, MapPin, Globe2, Play, Sparkles, MonitorSmartphone,
  Layers3, Zap, Send
} from 'lucide-react'

const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Our Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  { icon: Code2, no: '01', title: 'Web Design & Development', desc: 'Fast, responsive websites and web applications built around the way your organisation works.' },
  { icon: Smartphone, no: '02', title: 'Mobile Applications', desc: 'Useful Android and cross-platform experiences that bring your services closer to customers.' },
  { icon: Workflow, no: '03', title: 'Business Automation', desc: 'Connect everyday processes, reduce repetitive work and make better use of business data.' },
  { icon: Cloud, no: '04', title: 'Cloud & Infrastructure', desc: 'Reliable cloud deployments, integrations and scalable infrastructure for growing teams.' },
  { icon: ShieldCheck, no: '05', title: 'Cybersecurity', desc: 'Practical security improvements that help protect systems, accounts and business information.' },
  { icon: Database, no: '06', title: 'Data & Software Systems', desc: 'Purpose-built management systems, databases and dashboards that make operations clearer.' },
]

const projects = [
  { type: 'Business management', title: 'Assomac Business Platform', desc: 'A connected operations platform for branches, teams, stock and field activity.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85' },
  { type: 'Digital ministry', title: 'Tidori Ministries', desc: 'A digital community experience connecting members, ministry teams and services.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85' },
  { type: 'Professional services', title: 'Steadfast Consultants', desc: 'A modern digital presence with online services and integrated payment journeys.', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85' },
]

function Brand() {
  return <a href="#home" className="brand" aria-label="Grobaltech home"><span className="brand-mark">G<span>.</span></span><span className="brand-name">GROBALTECH<small>TECHNOLOGIES</small></span></a>
}

function Header() {
  const [open, setOpen] = useState(false)
  return <>
    <div className="topline"><div className="container topline-inner"><span>Technology that moves business forward.</span><div><a href="mailto:info@grobaltech.com"><Mail size={14}/> info@grobaltech.com</a><span className="topline-divider"/><a href="tel:+256"><Phone size={14}/> Talk to our team</a></div></div></div>
    <header className="site-header"><div className="container nav-inner"><Brand/><nav className={open ? 'main-nav nav-open' : 'main-nav'}>{nav.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}</nav><a className="button button-small nav-cta" href="#contact">Let's Talk <ArrowUpRight size={16}/></a><button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div></header>
  </>
}

function Footer() {
  return <footer className="footer"><div className="container footer-main"><div className="footer-brand"><Brand/><p>We turn ideas into useful digital experiences, reliable systems and technology that helps organisations move forward.</p><a className="footer-email" href="mailto:info@grobaltech.com">info@grobaltech.com <ArrowUpRight size={15}/></a></div><div><h4>Explore</h4><a href="#about">About us</a><a href="#services">Our services</a><a href="#work">Selected work</a><a href="#contact">Contact</a></div><div><h4>What we do</h4><a href="#services">Web development</a><a href="#services">Mobile applications</a><a href="#services">Cloud solutions</a><a href="#services">Business automation</a></div><div><h4>Get in touch</h4><p><MapPin size={15}/> Kampala, Uganda</p><p><Mail size={15}/> info@grobaltech.com</p><p><Globe2 size={15}/> Serving clients everywhere</p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Grobaltech Technologies. All rights reserved.</span><span>Designed with purpose. Built for progress.</span></div></footer>
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><span/>{children}</div>
}

function Home() {
  return <>
    <section className="hero" id="home"><div className="hero-grid"/><div className="container hero-layout"><div className="hero-copy"><Eyebrow>YOUR DIGITAL TRANSFORMATION PARTNER</Eyebrow><h1>Technology built<br/>around <em>your ambition.</em></h1><p className="hero-lead">We design and build digital products, intelligent business systems and technology experiences that help ambitious organisations do more.</p><div className="hero-actions"><a className="button" href="#contact">Start a conversation <ArrowUpRight size={18}/></a><a className="text-link" href="#work"><span className="play-icon"><Play size={13} fill="currentColor"/></span> Explore our work</a></div><div className="hero-proof"><div className="proof-avatars"><span>G</span><span>T</span><span>+</span></div><div><strong>Ideas made practical.</strong><small>Technology with a purpose.</small></div></div></div><div className="hero-visual"><div className="hero-image-frame"><img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=90" alt="Developer working on a digital product"/><div className="image-shade"/></div><div className="floating-card card-top"><span className="float-icon"><Sparkles size={18}/></span><div><strong>Ideas to impact</strong><small>Built around your goals</small></div></div><div className="floating-card card-bottom"><span className="float-icon green"><CheckCircle2 size={18}/></span><div><strong>Built to scale</strong><small>Ready for what's next</small></div></div><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/></div></div><div className="container hero-bottom"><span>THOUGHTFUL DESIGN</span><span className="hero-line"/><span>ENGINEERED SOLUTIONS</span><span className="hero-line"/><span>MEASURABLE PROGRESS</span></div></section>
    <section className="intro-strip"><div className="container intro-inner"><p>Technology should make the complicated feel simple.</p><span>That is where we begin <ArrowDownIcon/></span></div></section>
    <section className="section about-section" id="about"><div className="container about-grid"><div className="about-visual"><div className="about-image"><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85" alt="Team collaborating on a project"/></div><div className="about-stamp"><span>G</span><small>BUILDING<br/>WHAT'S NEXT</small></div><div className="about-note"><strong>People first.</strong><span>Technology with purpose.</span></div></div><div className="about-copy"><Eyebrow>WHO WE ARE</Eyebrow><h2>We make technology work <em>for people.</em></h2><p className="section-lead">Grobaltech Technologies is a digital solutions company focused on building practical, dependable technology for businesses, institutions and growing ideas.</p><p>From the first conversation to launch and beyond, we bring strategy, design and engineering together to solve real problems. We believe good technology should be useful, accessible and ready to grow with you.</p><div className="about-points"><div><CheckCircle2/><span><b>Purpose-led thinking</b><small>We start with the challenge, not the tool.</small></span></div><div><CheckCircle2/><span><b>Built for real operations</b><small>Solutions shaped around everyday work.</small></span></div></div><a className="underlined-link" href="#contact">More about Grobaltech <ArrowRight size={17}/></a></div></div></section>
    <section className="section services-section" id="services"><div className="container"><div className="section-heading"><div><Eyebrow>WHAT WE DO</Eyebrow><h2>Digital solutions for<br/><em>real-world progress.</em></h2></div><p>From a clear online presence to the systems behind your operations, we bring the right expertise together to move your work forward.</p></div><div className="services-grid">{services.map(({icon:Icon,no,title,desc})=><article className="service-card" key={no}><div className="service-top"><span className="service-icon"><Icon size={23}/></span><span className="service-no">{no}</span></div><h3>{title}</h3><p>{desc}</p><a href="#contact" aria-label={'Discuss '+title}><ArrowUpRight size={19}/></a></article>)}</div></div></section>
    <section className="dark-band" id="solutions"><div className="container dark-band-inner"><div><Eyebrow>THE GROBALTECH APPROACH</Eyebrow><h2>Good technology is not just what it does. <em>It is what it makes possible.</em></h2></div><div className="approach-list"><div><span>01</span><p><b>Understand</b><small>We listen, ask better questions and define the real opportunity.</small></p></div><div><span>02</span><p><b>Design</b><small>We shape an experience and solution around your people and goals.</small></p></div><div><span>03</span><p><b>Build & improve</b><small>We deliver, learn and keep making the solution better.</small></p></div></div></div></section>
    <section className="section work-section" id="work"><div className="container"><div className="section-heading"><div><Eyebrow>SELECTED WORK</Eyebrow><h2>Ideas turned into<br/><em>working solutions.</em></h2></div><p>Every project starts with a different challenge. Our focus stays the same: build something useful, thoughtful and dependable.</p></div><div className="projects-grid">{projects.map((p,i)=><article className="project-card" key={p.title}><a className="project-image" href="#contact"><img src={p.image} alt={p.title}/><span><ArrowUpRight size={20}/></span></a><div className="project-meta">{p.type}<span>0{i+1}</span></div><h3>{p.title}</h3><p>{p.desc}</p></article>)}</div><div className="work-foot"><span>More good work starts with a conversation.</span><a className="underlined-link" href="#contact">Discuss your project <ArrowRight size={17}/></a></div></div></section>
    <section className="stats-band"><div className="container stats-grid"><div><span>01</span><b>One committed partner</b><small>From discovery to delivery.</small></div><div><span>02</span><b>Connected expertise</b><small>Design, engineering and strategy.</small></div><div><span>03</span><b>Solutions that grow</b><small>Built for change and progress.</small></div><div><span>04</span><b>People at the centre</b><small>Technology that serves real needs.</small></div></div></section>
    <section className="section contact-section" id="contact"><div className="container contact-panel"><div className="contact-copy"><Eyebrow>LET'S BUILD SOMETHING</Eyebrow><h2>Your next big idea deserves <em>the right technology.</em></h2><p>Tell us what you are working towards. We would love to explore how we can help make it happen.</p><div className="contact-details"><a href="mailto:info@grobaltech.com"><Mail size={17}/> info@grobaltech.com</a><a href="tel:+256"><Phone size={17}/> Request a call back</a></div></div><ContactForm/></div></section>
  </>
}

function ArrowDownIcon() { return <ArrowRight size={16} className="rotate-down"/> }

function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({name:'',email:'',service:'',message:''})
  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm({...form,[e.target.name]:e.target.value})
  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent('Website enquiry from '+form.name)
    const body = encodeURIComponent('Name: '+form.name+'\nEmail: '+form.email+'\nService: '+form.service+'\n\n'+form.message)
    window.location.href = 'mailto:info@grobaltech.com?subject='+subject+'&body='+body
    setSent(true)
  }
  return <form className="contact-form" onSubmit={submit}><div className="form-heading"><span>01 / START HERE</span><h3>Tell us about your project</h3></div><label>Your name<input required name="name" value={form.name} onChange={update} placeholder="How should we call you?"/></label><label>Email address<input required type="email" name="email" value={form.email} onChange={update} placeholder="you@company.com"/></label><label>What do you need help with?<select required name="service" value={form.service} onChange={update}><option value="">Select a service</option>{services.map(s=><option key={s.no}>{s.title}</option>)}<option>Something else</option></select></label><label>Tell us a little about it<textarea required rows={3} name="message" value={form.message} onChange={update} placeholder="A few details about what you have in mind..."/></label><button className="button form-submit" type="submit">{sent ? 'Open your email app' : 'Send enquiry'} <Send size={16}/></button><small className="form-note">Your email app will open with your enquiry ready to send.</small></form>
}

export default function App() {
  return <><Header/><main><Home/></main><Footer/></>
}
import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Globe2, Send, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [saved, setSaved] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setSending(true)
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') || '').trim()
    const email = String(form.get('email') || '').trim()
    const service = String(form.get('service') || '')
    const message = String(form.get('message') || '').trim()

    if (supabase) {
      const { error: insertError } = await supabase.from('contact_leads').insert({ name, email, service, message })
      if (insertError) {
        setError('We could not save your enquiry just now. Please email info@grobaltech.com and we will assist.')
        setSending(false)
        return
      }
      setSaved(true)
      setSent(true)
      setSending(false)
      return
    }

    const subject = encodeURIComponent('Website enquiry from ' + name)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`)
    window.location.href = `mailto:info@grobaltech.com?subject=${subject}&body=${body}`
    setSent(true)
    setSending(false)
  }

  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow"><span /> START A CONVERSATION</div>
          <h1>Let's talk about<br /><em>what's possible.</em></h1>
          <p>Share the challenge, idea or opportunity you have in mind. We will help you explore a practical next step.</p>
          <div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><b>Contact</b></div>
        </div>
      </section>
      <section className="section contact-page-section">
        <div className="container contact-page-grid">
          <div className="contact-page-info">
            <span className="mini-kicker">GET IN TOUCH</span>
            <h2>Good projects begin with <em>a conversation.</em></h2>
            <p>Tell us a little about what you are looking to achieve. We welcome enquiries about websites, software, digital platforms, integrations and technology support.</p>
            <div className="contact-info-item"><span><Mail /></span><div><b>Email</b><a href="mailto:info@grobaltech.com">info@grobaltech.com</a></div></div>
            <div className="contact-info-item"><span><MapPin /></span><div><b>Location</b><small>Uganda</small></div></div>
            <div className="contact-info-item"><span><Globe2 /></span><div><b>Reach</b><small>Working with organisations wherever they are</small></div></div>
          </div>
          {sent ? (
            <div className="contact-success">
              <CheckCircle2 size={42} />
              <h2>{saved ? 'Thank you for reaching out.' : 'Your email draft is ready.'}</h2>
              <p>{saved ? 'Your enquiry has been received by our website.' : 'Your email application should open with the enquiry details. Please send it from there so our team can receive it.'}</p>
              <button className="underlined-link" type="button" onClick={() => { setSent(false); setSaved(false) }}>Prepare another enquiry</button>
            </div>
          ) : (
            <form className="contact-page-form" onSubmit={submit}>
              <span className="mini-kicker">PROJECT ENQUIRY</span>
              <h3>Tell us what you have in mind</h3>
              <div className="form-two">
                <label>Full name<input required name="name" placeholder="Your name" /></label>
                <label>Email address<input required type="email" name="email" placeholder="you@example.com" /></label>
              </div>
              <label>What can we help with?<select required name="service" defaultValue=""><option value="" disabled>Select an area</option><option>Website or web application</option><option>Mobile application</option><option>Business software or automation</option><option>Cloud and infrastructure</option><option>Consultation or support</option><option>Other</option></select></label>
              <label>Project details<textarea required name="message" rows={6} placeholder="A little about your goals, requirements and timeline..." /></label>
              {error && <p className="form-error" role="alert">{error}</p>}
              <button className="button form-submit" type="submit" disabled={sending}>{sending ? 'Sending enquiry…' : 'Send enquiry'} <Send size={16} /></button>
              <small className="form-note">{supabase ? 'Your enquiry will be sent securely to our website inbox.' : 'Email delivery will open your email application until the website database is connected.'}</small>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}

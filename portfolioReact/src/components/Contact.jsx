const contactLinks = [
  { href: 'mailto:rohansingh@gmail.com', label: '📧 rohansingh@gmail.com' },
  { href: 'tel:+918739284747', label: '📱 +91 8739284747' },
  { href: 'https://www.linkedin.com/in/abhiraj-rajput-31944537a', label: '💼 LinkedIn', external: true },
  { href: 'https://github.com/abhirajrajput666', label: '🐙 GitHub', external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Let&apos;s Work Together</h2>
      <p className="contact-sub">Ready for your next project? Get in touch!</p>
      <div className="contact-links">
        {contactLinks.map(({ href, label, external }) => (
          <a key={href} href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}

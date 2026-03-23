import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    const handleClick = (e) => {
      if (!e.target.closest('.menu-btn') && !e.target.closest('.mobile-menu')) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClick);
    return () => { window.removeEventListener('resize', handleResize); document.removeEventListener('click', handleClick); };
  }, []);

  const links = [['#home', 'Home'], ['#about', 'About'], ['#projects', 'Work'], ['#contact', 'Contact']];
  const mobileIcons = ['🏠', '👨‍💻', '💼', '📞'];

  return (
    <header>
      <nav>
        <div className="logo">Rohan Singh</div>
        <ul className="nav-links">
          {links.map(([href, label]) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>
        <div className="menu-btn" onClick={() => setMenuOpen(o => !o)}>
          <span /><span /><span />
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            {links.map(([href, label], i) => (
              <li key={href}>
                <a href={href} onClick={() => setMenuOpen(false)}>{mobileIcons[i]} {label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

const projects = [
  {
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=220&fit=crop',
    alt: 'E-commerce',
    title: 'E-Commerce Platform',
    desc: 'Modern shopping website built with React, Node.js & Stripe integration',
  },
  {
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=220&fit=crop',
    alt: 'Task Manager',
    title: 'Task Management App',
    desc: 'Real-time collaborative task manager with drag & drop interface',
  },
  {
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=220&fit=crop',
    alt: 'Portfolio',
    title: 'Personal Portfolio',
    desc: "This responsive portfolio website you're viewing right now",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      <div className="projects">
        {projects.map(({ img, alt, title, desc }) => (
          <div className="card" key={title}>
            <img src={img} alt={alt} />
            <div className="card-body">
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

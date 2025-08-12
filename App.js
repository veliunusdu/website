import "./App.css";

/* Accessible reusable icons */
const Icon = ({ label, children, brand }) => (
  <span
    className={`icon-wrapper ${brand || ""}`}
    aria-label={label}
    title={label}
  >
    <svg
      className={`icon ${brand ? "brand" : "neutral"}`}
      data-brand={brand || label.toLowerCase()}
      role="img"
      viewBox="0 0 24 24"
      aria-hidden={label ? "false" : "true"}
    >
      {children}
    </svg>
  </span>
);

const icons = {
  phone: (
    <Icon label="Phone">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M21 16.42v3.536a1 1 0 0 1-1.262.95A18.001 18.001 0 0 1 3.04 4.262a1 1 0 0 1 .95-1.262h3.536a1 1 0 0 1 .978.848c.207 1.114.582 2.183 1.08 3.185a1 1 0 0 1-.234 1.132l-1.32 1.32a14.002 14.002 0 0 0 6.586 6.586l1.32-1.32a1 1 0 0 1 1.132-.234c1.002.498 2.07.873 3.185 1.08a1 1 0 0 1 .848.978z" />
    </Icon>
  ),
  email: (
    <Icon label="Email">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z" />
    </Icon>
  ),
  linkedin: (
    <Icon label="LinkedIn" brand="linkedin">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.386-2.278-1.388 0-1.601 1.084-1.601 2.205v4.25H9.017V9.75h2.56v1.17h.035c.357-.676 1.227-1.387 2.524-1.387 2.7 0 3.2 1.778 3.2 4.09v4.716zM7.003 8.574a1.574 1.574 0 1 1 0-3.148 1.574 1.574 0 0 1 0 3.148zM8.336 18.34H5.67V9.75h2.666v8.59zM19.67 3H4.329C3.596 3 3 3.58 3 4.297v15.406C3 20.42 3.596 21 4.329 21h15.34C20.404 21 21 20.42 21 19.703V4.297C21 3.58 20.404 3 19.67 3z" />
    </Icon>
  ),
  github: (
    <Icon label="GitHub" brand="github">
      <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.025 2.75-1.025.55 1.375.2 2.4.1 2.65.637.7 1.025 1.6 1.025 2.688 0 3.837-2.337 4.687-4.562 4.937.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
    </Icon>
  ),
  instagram: (
    <Icon label="Instagram" brand="instagram">
      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122s-.013 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06s-3.056-.013-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12s.01-3.056.06-4.122c.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 6.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM16.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
    </Icon>
  )
};

const contact = {
  phone: "+90 531 457 44 91",
  email: "veliunusdu14@gmail.com",
  linkedin: "veli-ünüşdü",
  github: "veliunsdu",
  instagram: "veliunusdu_",
};

const contactItems = [
  { key: "phone", label: contact.phone, href: `tel:${contact.phone.replace(/\s+/g, "")}` },
  { key: "email", label: contact.email, href: `mailto:${contact.email}` },
  { key: "linkedin", label: "LinkedIn", href: `https://www.linkedin.com/in/${contact.linkedin}` },
  { key: "github", label: "GitHub", href: `https://github.com/${contact.github}` },
  { key: "instagram", label: "Instagram", href: `https://www.instagram.com/${contact.instagram}` },
  { key: "location", label: contact.location } // no link
];

const skills = {
  programming: ["Java", "Python", "HTML", "CSS", "JavaScript","React", "SQL (Basic)"],
  libraries: ["NumPy", "Pandas", "Matplotlib"],
  languages: ["English", "Turkish", "Spanish(Elemantary)"],
  concepts: ["Data Structures", "Algorithms", "Responsive Web Design"]
};

const education = {
  university: "Manisa Celal Bayar University",
  degree: "Computer Engineering",
  graduation: "Expected Graduation June 2027"
};

const coursework = [
  "Object Oriented Programming",
  "Data Structures",
  "Computing in Java",
  "Discrete Mathematics Algorithms"
];

const projects = [
  {
    title: "Data Analysis & Visualization Gallery",
    bullets: [
      "Developed a collection of Python scripts to demonstrate data analysis with Pandas and visualization with Matplotlib.",
      "Created various plots including line, bar, and pie charts for multiple scenarios.",
      "Performed grouping, aggregation, resampling on sample sales data to derive insights.",
      "Combined multiple plots into dashboard-style composite figures."
    ],
    tech: "Python, Pandas, Matplotlib"
  },
  {
    title: "Interactive To-Do List",
    bullets: [
      "React + Vite list app using hooks for add / delete / reorder with guarded indices.",
      "Whitespace-only inputs ignored for robust UX.",
      "Instant optimistic UI via local state (useState)."
    ],
    tech: "React, Vite, JavaScript"
  },
  {
    title: "Random Password Generator",
    bullets: [
      "Reusable component producing cryptographically strong mixed-character passwords.",
      "Configurable length, symbol set, and copy-to-clipboard."
    ],
    tech: "JavaScript"
  },
  {
    title: "Film Management System",
    bullets: [
      "Java app leveraging LinkedList, Queue, Stack, Hashtable, BST for film/actor CRUD.",
      "Fast lookups & updates through Hashtable + BST indexing.",
      "LinkedList for flexible actor-film relationship modifications.",
      "Queue & Stack structures for ranking workflows."
    ],
    tech: "Java, Core Data Structures"
  },
  {
    title: "Banking Application",
    bullets: [
      "Console banking system with authentication, deposits, withdrawals, balance checks, validation."
    ],
    tech: "Java"
  },
  {
    title: "Stopwatch Web Application",
    bullets: [
      "Millisecond-precision stopwatch with start / pause / reset and digital display."
    ],
    tech: "HTML, CSS, JavaScript"
  },
  {
    title: "Temperature Converter Application",
    bullets: [
      "Bi-directional °C / °F converter with real-time validation and responsive UI."
    ],
    tech: "HTML, CSS, JavaScript"
  }
];

export default function App() {
  return (
    <div className="resume-layout">
      <aside className="sidebar">
        <header className="name-block">
          <h1>VELİ ÜNÜŞDÜ</h1>
          <h3>STUDENT</h3>
        </header>

        <section className="contact">
            <h2>Contact</h2>
            {contactItems.map(item => (
              <div className="contact-item" key={item.key}>
                {icons[item.key] || null}
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  >
                    {item.label}
                  </a>
                ) : (
                  <span>{item.label}</span>
                )}
              </div>
            ))}
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <h4>Programming Languages</h4>
          <ul>{skills.programming.map(s => <li key={s}>{s}</li>)}</ul>
          <h4>Libraries / Frameworks</h4>
          <ul>{skills.libraries.map(s => <li key={s}>{s}</li>)}</ul>
            <h4>Languages</h4>
          <ul>{skills.languages.map(s => <li key={s}>{s}</li>)}</ul>
          <h4>Concepts</h4>
          <ul>{skills.concepts.map(s => <li key={s}>{s}</li>)}</ul>
        </section>

        <section className="education">
          <h2>Education</h2>
          <p>{education.university}</p>
          <p>{education.degree}</p>
          <p>{education.graduation}</p>
        </section>
      </aside>

      <main className="main">
        <section className="coursework">
          <h2>Related Coursework</h2>
          <ul className="inline-list">
            {coursework.map(c => <li key={c}>{c}</li>)}
          </ul>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          {projects.map(p => (
            <article key={p.title} className="project">
              <h3>{p.title}</h3>
              <ul>
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <p className="tech"><strong>Tech:</strong> {p.tech}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

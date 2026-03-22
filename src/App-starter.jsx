import { useState } from "react";

const members = [
  {
    id: 1,
    name: "Anis Rahman",
    role: "Lead Designer",
    bio: "I craft interfaces that feel inevitable — where every pixel has a reason. Obsessed with the space between form and function.",
    isOnline: true,
    skills: ["Figma", "Design Systems", "Motion"],
  },
  {
    id: 2,
    name: "Mehdi Bouchachi",
    role: "Frontend Engineer",
    bio: "I turn design tokens into living UIs. If it runs in a browser, I want to understand every layer of how it works.",
    isOnline: true,
    skills: ["React", "CSS", "TypeScript"],
  },
  {
    id: 3,
    name: "Nada Ashraf",
    role: "Product Strategist",
    bio: "Connecting user needs to business outcomes. I speak designer, developer, and stakeholder fluently.",
    isOnline: false,
    skills: ["Research", "Roadmapping", "Analytics"],
  },
  {
    id: 4,
    name: "Mohamed Rebbouh",
    role: "Backend Engineer",
    bio: "Databases, APIs, and distributed systems are my playground. I like things fast, reliable, and elegantly structured.",
    isOnline: true,
    skills: ["Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: 5,
    name: "Yousra El Idrissi",
    role: "Creative Director",
    bio: "Brand identity, art direction, visual storytelling. I make sure every touchpoint feels cohesive and intentional.",
    isOnline: false,
    skills: ["Branding", "Art Direction", "Illustration"],
  },
  {
    id: 6,
    name: "Takkiden Khelifat",
    role: "DevOps Engineer",
    bio: "Pipelines, containers, and zero-downtime deploys. I keep the engine running so the rest of the team can ship freely.",
    isOnline: true,
    skills: ["CI/CD", "Kubernetes", "AWS"],
  },
];

export default function App() {
  const [showBios, setShowBios] = useState(false);
  const [onlineOnly, setOnlineOnly] = useState(false);

  const visibleMembers = onlineOnly
    ? members.filter((member) => member.isOnline)
    : members;

  return (
    <div className="page">
      <header className="header">
        <div className="eyebrow">
          <span className="dot" />
          React Fundamentals · Session 02
        </div>

        <h1 className="title">
          The Workshop
          <br />
          Collective.
        </h1>

        <p className="subtitle">
          Six builders, one room, a shared obsession with craft.
        </p>
      </header>

      <div className="controls">
        <div className="btn-group">
          <button
            className={`btn ${showBios ? "active" : ""}`}
            onClick={() => setShowBios(!showBios)}
          >
            {showBios ? "Hide Bios" : "Show Bios"}
          </button>

          <button
            className={`btn ${onlineOnly ? "active" : ""}`}
            onClick={() => setOnlineOnly(!onlineOnly)}
          >
            {onlineOnly ? "All Members" : "Online Only"}
          </button>
        </div>

        <p className="count">
          {visibleMembers.length} of {members.length} members
        </p>
      </div>

      <section className="team-grid">
        {visibleMembers.map((member) => {
          const initials = member.name
            .split(" ")
            .map((word) => word[0])
            .join("");

          const hue = (member.name.charCodeAt(0) * 37) % 360;

          return (
            <article key={member.id} className="card">
              <div className="card-top">
                <div
                  className="avatar"
                  style={{
                    background: `linear-gradient(135deg, hsl(${hue}, 70%, 52%), hsl(${
                      (hue + 40) % 360
                    }, 80%, 62%))`,
                  }}
                >
                  <span className="initials">{initials}</span>
                </div>

                <div className="card-info">
                  <h2 className="name">{member.name}</h2>
                  <p className="role">{member.role}</p>
                </div>

                <span
                  className={`badge ${member.isOnline ? "online" : "offline"}`}
                >
                  <span className="pip" />
                  {member.isOnline ? "Online" : "Offline"}
                </span>
              </div>

              <div className="tags">
                {member.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>

              {showBios && <p className="bio">{member.bio}</p>}
            </article>
          );
        })}
      </section>
    </div>
  );
}
import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

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

// ─── Components ───────────────────────────────────────────────────────────────

function Header() {
  return (
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
  );
}

function Controls({
  showBios,
  onToggleBios,
  onlineOnly,
  onToggleOnline,
  count,
  total,
}) {
  return (
    <div className="controls">
      <div className="btn-group">
        <button
          className={`btn ${showBios ? "active" : ""}`}
          onClick={onToggleBios}
        >
          {showBios ? "Hide Bios" : "Show Bios"}
        </button>
        <button
          className={`btn ${onlineOnly ? "active" : ""}`}
          onClick={onToggleOnline}
        >
          {onlineOnly ? "All Members" : "Online Only"}
        </button>
      </div>
      <p className="count">
        {count} of {total} members
      </p>
    </div>
  );
}

function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");

  const hue = (name.charCodeAt(0) * 37) % 360;

  return (
    <div
      className="avatar"
      style={{
        background: `linear-gradient(135deg, hsl(${hue}, 70%, 52%), hsl(${(hue + 40) % 360}, 80%, 62%))`,
      }}
    >
      <span className="initials">{initials}</span>
    </div>
  );
}

function StatusBadge({ isOnline }) {
  return (
    <span className={`badge ${isOnline ? "online" : "offline"}`}>
      <span className="pip" />
      {isOnline ? "Online" : "Offline"}
    </span>
  );
}

function SkillTags({ skills }) {
  return (
    <div className="tags">
      {skills.map((skill) => (
        <span key={skill} className="tag">
          {skill}
        </span>
      ))}
    </div>
  );
}

function MemberCard({ member, showBio }) {
  return (
    <article className="card">
      <div className="card-top">
        <Avatar name={member.name} />
        <div className="card-info">
          <h2 className="name">{member.name}</h2>
          <p className="role">{member.role}</p>
        </div>
        <StatusBadge isOnline={member.isOnline} />
      </div>

      <SkillTags skills={member.skills} />

      {showBio && <p className="bio">{member.bio}</p>}
    </article>
  );
}

function TeamGrid({ members, showBios }) {
  return (
    <section className="team-grid">
      {members.map((member) => (
        <MemberCard key={member.id} member={member} showBio={showBios} />
      ))}
    </section>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [showBios, setShowBios] = useState(false);
  const [onlineOnly, setOnlineOnly] = useState(false);

  const visibleMembers = onlineOnly
    ? members.filter((m) => m.isOnline)
    : members;

  return (
    <div className="page">
      <Header />
      <Controls
        showBios={showBios}
        onToggleBios={() => setShowBios(!showBios)}
        onlineOnly={onlineOnly}
        onToggleOnline={() => setOnlineOnly(!onlineOnly)}
        count={visibleMembers.length}
        total={members.length}
      />
      <TeamGrid members={visibleMembers} showBios={showBios} />
    </div>
  );
}

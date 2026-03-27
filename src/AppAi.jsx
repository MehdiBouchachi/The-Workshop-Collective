import { useMemo, useState } from "react";

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

function App() {
  const [showBios, setShowBios] = useState(false);
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  const visibleMembers = useMemo(() => {
    if (!showOnlineOnly) return members;
    return members.filter((member) => member.isOnline);
  }, [showOnlineOnly]);

  const totalMembers = members.length;
  const onlineMembersCount = useMemo(
    () => members.filter((member) => member.isOnline).length,
    [],
  );

  return (
    <main className="app-shell">
      <section className="app-container">
        <Header />
        <Controls
          showBios={showBios}
          showOnlineOnly={showOnlineOnly}
          onToggleBios={() => setShowBios((current) => !current)}
          onToggleOnlineOnly={() => setShowOnlineOnly((current) => !current)}
          totalMembers={totalMembers}
          visibleMembersCount={visibleMembers.length}
          onlineMembersCount={onlineMembersCount}
        />
        <TeamGrid members={visibleMembers} showBios={showBios} />
      </section>
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <p className="eyebrow">React Fundamentals · Session 02</p>
      <h1 className="hero-title">The Workshop Collective.</h1>
      <p className="hero-subtitle">
        Six builders, one room, a shared obsession with craft.
      </p>
    </header>
  );
}

function Controls({
  showBios,
  showOnlineOnly,
  onToggleBios,
  onToggleOnlineOnly,
  totalMembers,
  visibleMembersCount,
  onlineMembersCount,
}) {
  return (
    <section className="controls">
      <div className="controls__actions">
        <button
          type="button"
          className={`control-btn ${showBios ? "control-btn--active" : ""}`}
          onClick={onToggleBios}
        >
          {showBios ? "Hide Bios" : "Show Bios"}
        </button>

        <button
          type="button"
          className={`control-btn ${
            showOnlineOnly ? "control-btn--active" : ""
          }`}
          onClick={onToggleOnlineOnly}
        >
          {showOnlineOnly ? "Show All" : "Online Only"}
        </button>
      </div>

      <div className="controls__stats">
        <Stat label="Visible" value={visibleMembersCount} />
        <Stat label="Total" value={totalMembers} />
        <Stat label="Online" value={onlineMembersCount} />
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="stat">
      <span className="stat__value">{value}</span>
      <span className="stat__label">{label}</span>
    </div>
  );
}

function TeamGrid({ members, showBios }) {
  return (
    <section className="team-grid">
      {members.map((member) => (
        <TeamMemberCard key={member.id} member={member} showBios={showBios} />
      ))}
    </section>
  );
}

function TeamMemberCard({ member, showBios }) {
  const initials = getInitials(member.name);

  return (
    <article className="member-card">
      <div className="member-card__top">
        <div className="member-card__identity">
          <Avatar name={member.name} initials={initials} />
          <Info
            name={member.name}
            role={member.role}
            isOnline={member.isOnline}
          />
        </div>

        <StatusBadge isOnline={member.isOnline} />
      </div>

      <SkillList skills={member.skills} />

      {showBios && <Bio text={member.bio} />}
    </article>
  );
}

function Avatar({ name, initials }) {
  return (
    <div className="avatar" aria-label={`${name} avatar`}>
      <span>{initials}</span>
    </div>
  );
}

function Info({ name, role }) {
  return (
    <div className="member-info">
      <h2 className="member-info__name">{name}</h2>
      <p className="member-info__role">{role}</p>
    </div>
  );
}

function StatusBadge({ isOnline }) {
  return (
    <span
      className={`status-badge ${
        isOnline ? "status-badge--online" : "status-badge--offline"
      }`}
    >
      <span className="status-badge__dot" />
      {isOnline ? "Online" : "Offline"}
    </span>
  );
}

function SkillList({ skills }) {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <li key={skill} className="skill-pill">
          {skill}
        </li>
      ))}
    </ul>
  );
}

function Bio({ text }) {
  return <p className="member-bio">{text}</p>;
}

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default App;

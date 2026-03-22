# The Workshop Collective

A small React app built for an introductory workshop on **React Fundamentals**.  
It showcases a modern team directory UI while teaching the core ideas behind React:

- Components
- JSX
- Props
- `useState`
- Rendering lists with `map()`
- Conditional rendering
- Basic event handling

This project is intentionally simple in logic, but polished in presentation.

---

## Preview

**The Workshop Collective** displays a team of members as elegant cards.  
Users can:

- toggle bios on and off
- show all members or only online members

The goal is to help beginners understand how React builds UI from data.

---

## Learning Objectives

This app is designed to teach the following React concepts:

### 1. Components

The UI is broken into reusable pieces such as:

- `Header`
- `Controls`
- `Avatar`
- `StatusBadge`
- `SkillTags`
- `MemberCard`
- `TeamGrid`

### 2. JSX

Each component returns JSX to describe what should appear on the screen.

### 3. Props

Data flows from parent components to child components using props.

Examples:

- `MemberCard` receives a `member`
- `StatusBadge` receives `isOnline`
- `SkillTags` receives `skills`

### 4. State

The app uses React state to control UI changes.

```js
const [showBios, setShowBios] = useState(false);
const [onlineOnly, setOnlineOnly] = useState(false);
```

import { useState, useEffect } from "react";
import { data as defaultData } from "../data";

const ADMIN_PASSWORD = "1234"; // change this before sharing

export default function Admin() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("portfolioData");
    return saved ? JSON.parse(saved) : defaultData;
  });

  useEffect(() => {
    localStorage.setItem("portfolioData", JSON.stringify(data));
  }, [data]);

  if (!authed) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Admin Login</h2>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={() => {
            if (password === ADMIN_PASSWORD) setAuthed(true);
            else alert("Wrong password");
          }}
          style={{ marginLeft: 10 }}
        >
          Enter
        </button>
      </div>
    );
  }

  const updateMeta = (field, value) => {
    setData({ ...data, meta: { ...data.meta, [field]: value } });
  };

  const updateResearch = (value) => {
    setData({ ...data, research: value });
  };

  const addProject = () => {
    const newProject = {
      id: Date.now(),
      title: "New Project",
      description: "",
      image: "",
      video: "",
      github: "",
      itch: "",
    };
    setData({ ...data, projects: [...data.projects, newProject] });
  };

  const updateProject = (id, field, value) => {
    const projects = data.projects.map((p) =>
      p.id === id ? { ...p, [field]: value } : p
    );
    setData({ ...data, projects });
  };

  const removeProject = (id) => {
    setData({ ...data, projects: data.projects.filter((p) => p.id !== id) });
  };

  const addSkill = () => {
    const newSkill = { id: Date.now(), name: "New Skill", level: 50 };
    setData({ ...data, skills: [...data.skills, newSkill] });
  };

  const updateSkill = (id, field, value) => {
    const skills = data.skills.map((s) =>
      s.id === id ? { ...s, [field]: value } : s
    );
    setData({ ...data, skills });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Panel</h2>

      <section style={{ marginBottom: 20 }}>
        <h3>Meta</h3>
        {["name", "tagline", "email", "github", "instagram", "linkedin", "youtube"].map(
          (f) => (
            <div key={f} style={{ marginBottom: 6 }}>
              <input
                placeholder={f}
                value={data.meta[f]}
                onChange={(e) => updateMeta(f, e.target.value)}
              />
            </div>
          )
        )}
      </section>

      <section style={{ marginBottom: 20 }}>
        <h3>Projects</h3>
        <button onClick={addProject}>Add Project</button>
        {data.projects.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",
              padding: 10,
              marginTop: 10,
              borderRadius: 6,
            }}
          >
            <input
              placeholder="Title"
              value={p.title}
              onChange={(e) => updateProject(p.id, "title", e.target.value)}
            />
            <input
              placeholder="Description"
              value={p.description}
              onChange={(e) =>
                updateProject(p.id, "description", e.target.value)
              }
            />
            <input
              placeholder="GitHub URL"
              value={p.github}
              onChange={(e) => updateProject(p.id, "github", e.target.value)}
            />
            <input
              placeholder="itch.io URL"
              value={p.itch}
              onChange={(e) => updateProject(p.id, "itch", e.target.value)}
            />
            <input
              placeholder="Image URL"
              value={p.image}
              onChange={(e) => updateProject(p.id, "image", e.target.value)}
            />
            <input
              placeholder="Video URL"
              value={p.video}
              onChange={(e) => updateProject(p.id, "video", e.target.value)}
            />
            <button
              onClick={() => removeProject(p.id)}
              style={{ marginTop: 6, color: "red" }}
            >
              Remove
            </button>
          </div>
        ))}
      </section>

      <section style={{ marginBottom: 20 }}>
        <h3>Skills</h3>
        <button onClick={addSkill}>Add Skill</button>
        {data.skills.map((s) => (
          <div key={s.id} style={{ marginTop: 10 }}>
            <input
              placeholder="Skill Name"
              value={s.name}
              onChange={(e) => updateSkill(s.id, "name", e.target.value)}
            />
            <input
              type="number"
              placeholder="Level"
              value={s.level}
              min={0}
              max={100}
              onChange={(e) => updateSkill(s.id, "level", e.target.value)}
            />
          </div>
        ))}
      </section>

      <section>
        <h3>Research</h3>
        <textarea
          rows={6}
          value={data.research}
          onChange={(e) => updateResearch(e.target.value)}
          style={{ width: "100%" }}
        />
      </section>

      <p style={{ color: "#888", marginTop: 10 }}>
        Changes are saved automatically in your browser.
      </p>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", margin: 20 }}>
      <div style={{ fontWeight: "bold" }}>O Meu Portfolio</div>
      <div style={{ display: "flex", gap: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/skills">Conhecimento</Link>
        <Link to="/research">Pesquisa</Link>
      </div>
    </nav>
  );
}

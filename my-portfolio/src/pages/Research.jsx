import { data } from "../data";
import "/src/styles/Research.css";

export default function Research() {
  return (
    <div className="research-container">
      <div className="container">
        <div className="research-header">
          <h2>Minha Pesquisa</h2>
        </div>
        
        <div className="research-content">
          <div className="research-card">
            <div className="research-icon">
              <span>📚</span>
            </div>
            <div className="research-text">
              <h3>Área de Estudo</h3>
              <p>{data.research}</p>
            </div>
          </div>
          
          <div className="research-highlights">
            <h3>Destaques da Pesquisa</h3>
            <div className="highlight-grid">
              <div className="highlight-item">
                <span className="highlight-number">01</span>
                <h4>Metodologia</h4>
                <p>Abordagem científica rigorosa com análise de dados</p>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">02</span>
                <h4>Inovação</h4>
                <p>Soluções criativas para problemas complexos</p>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">03</span>
                <h4>Aplicação</h4>
                <p>Resultados com aplicação prática no mundo real</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
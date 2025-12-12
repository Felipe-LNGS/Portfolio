import Github from '../../assets/icons/github.svg';

export default function ActivityBar() {
  return (
    <div
      className="github-panel-content"
      style={{textAlign: "center"}}
    >
      <h4  className="panel-title" style={{ borderBottom: "1px solid #444", paddingBottom: 8, textAlign:'left'}} >GitHub
      </h4>
      <a
        href="https://github.com/Felipe-LNGS"
        target="_blank"
        rel="noopener noreferrer"
        title="Lien GitHub"
        style={{
          background: "#ffffffff",
          borderRadius: "50%",
          padding: 18,
          boxShadow: "0 2px 7px #0003",
          display: "inline-block",
          transition: "background 0.22s"
        }}
        onMouseOver={e => e.currentTarget.style.background = "#3460d1"}
        onMouseOut={e => e.currentTarget.style.background = "#ffffffff"}
      >
        <img
          src={Github}
          alt="GitHub"
          style={{ width: 42, height: 42, filter: "invert(1)" }}
        />
      </a>
      <p style={{
        color: "#cfcfe0",
        fontWeight: 400,
        fontSize: 15,
        margin: "18px 0 6px 0"
      }}>
        Découvre tous mes projets<br />open source sur GitHub&nbsp;!
      </p>
      <div style={{
        display: "inline-block",
        background: "#3460d1",
        color: "#fff",
        borderRadius: "6px",
        padding: "3px 12px",
        fontSize: "0.92em",
        fontWeight: 500,
        letterSpacing: "0.01em"
      }}>
        github.com/Felipe-LNGS
      </div>
    </div>
  );
}

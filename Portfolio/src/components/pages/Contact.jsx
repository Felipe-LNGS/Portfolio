import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Remplace ces valeurs par tes propres identifiants EmailJS
    const serviceID = "service_r1m0xsh";
    const templateID = "template_i7ga7pn";
    const userID = "tQVDWhX8FGVoZHQD1";

    emailjs.send(serviceID, templateID, form, userID)
      .then(() => {
        setStatus("Envoyé ! Merci de votre message.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("Oups, une erreur est survenue, veuillez réessayer.");
      });
  };

  return (
    <div
      className="fadeInUp"
      style={{
        padding: 24,
        color: "#e7e7e7",
        background: "linear-gradient(135deg, #161616 0%, #1f1f1f 100%)",
        height: "87vh",
        boxSizing: "border-box",
        overflowY: "auto"
      }}
    >
      <header style={{ textAlign: "center", marginBottom: 32 }}>
        <h1 style={{ margin: 0, fontSize: 30 }}>📬 Contact</h1>
        <p style={{ margin: "8px 0 0", color: "#888", fontSize: 14 }}>
          N’hésite pas à m’écrire pour toute question ou projet !
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: 600,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 16
        }}
      >
        <label style={{ display: "flex", flexDirection: "column", fontSize: 14 }}>
          Nom
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{
              marginTop: 4,
              padding: "8px",
              borderRadius: 6,
              border: "1px solid #333",
              backgroundColor: "#1f1f1f",
              color: "#e7e7e7"
            }}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column", fontSize: 14 }}>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              marginTop: 4,
              padding: "8px",
              borderRadius: 6,
              border: "1px solid #333",
              backgroundColor: "#1f1f1f",
              color: "#e7e7e7"
            }}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column", fontSize: 14 }}>
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={6}
            style={{
              marginTop: 4,
              padding: "8px",
              borderRadius: 6,
              border: "1px solid #333",
              backgroundColor: "#1f1f1f",
              color: "#e7e7e7",
              resize: "vertical"
            }}
          />
        </label>

        <button
          type="submit"
          style={{
            padding: "12px 20px",
            background: "#57a6ff",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontSize: 16,
            alignSelf: "center"
          }}
        >
          Envoyer
        </button>

        {status && (
          <p style={{ color: "#57a6ff", textAlign: "center", marginTop: 8 }}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
}

export function InfoCard({ title, description, accent }) {
  return (
    <article className="info-card" style={{ '--card-accent': accent }}>
      <div className="card-icon" aria-hidden="true">
        {title.charAt(0)}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

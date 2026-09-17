export function PageHeader({ title, description }) {
  return (
    <div className="page-heading">
      <p className="eyebrow">PÁGINA</p>
      <h1>{title}</h1>
      <p className="page-description">{description}</p>
    </div>
  )
}

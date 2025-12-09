export default function CardLink({ href, title, description, gradient }) {
  return (
    <li>
      <a
        href={href}
        className={`flex items-center justify-between p-3 ${gradient} rounded-lg shadow hover:shadow-md transition-shadow`}
      >
        <span className="font-semibold text-white">{title}</span>
        <span className="text-white text-sm opacity-90">{description}</span>
      </a>
    </li>
  )
}

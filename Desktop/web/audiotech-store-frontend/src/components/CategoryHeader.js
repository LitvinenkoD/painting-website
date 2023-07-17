import '../scss/components/CategoryHeader.scss'


export default function CategoryHeader({innerText}) {

  return (
    <div className="category-header">
      <h2 className="category-header-h2 | text-H2 text-color-white">{innerText}</h2>
    </div>
  )
}

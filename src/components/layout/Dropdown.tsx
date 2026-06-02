import data from '../index.ts'

const options = data.navOptions

export function Dropdown() {
  return (
    <div id='dropdown' className="dropdown-start">
      <ul className="dropdown_list">
        {options.map((option) => { return (
          <a href={ option.path } key={ option.id }>
            <div className="dropdown_list-option" >{ option.label }</div>
          </a>
        )})}
      </ul>
    </div>
  )
}

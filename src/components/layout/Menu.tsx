import { useState } from 'react'
import { Dropdown } from './Dropdown.tsx'
import MenuImg from '../../assets/nav/menu-icon.svg'
import data from '../index.ts'

const options = data.navOptions

interface MenuT {
  mobileWidth: boolean
}

export function Menu({ mobileWidth }: MenuT) {
  const [showDropdown, setShowDropdown] = useState(true)

  const handleDropdown = () => {
    const dropdownElement = document.getElementById('dropdown')

    if (showDropdown) {
      setShowDropdown(!showDropdown)
      dropdownElement?.setAttribute('class','dropdown-in')
    } else {
      setShowDropdown(!showDropdown)
      dropdownElement?.setAttribute('class','dropdown-out')
      setTimeout(() => dropdownElement?.setAttribute('class','dropdown-start'), 450)
    }
  }

  if (mobileWidth) {
    return (
      <div className='menu'>
        <img onClick={handleDropdown} className='menu_img' src={ MenuImg } alt='menu' />
        <Dropdown />
      </div>
  )
  } else {
    return (
      <div className="menu-large">
        {options.map((option) => { return (
          <a href={ option.path } key={ option.id }>
            <div className='menu-large_option' >{ option.label }</div>
          </a>
        )})}
      </div>
    )
  }
}

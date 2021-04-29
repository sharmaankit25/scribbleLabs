import Link from 'next/link'
import MenuCss from './Menu.module.css'
const Menu = () => {
    return (
        <ul className={MenuCss.menu}>
          <li>
            <Link href="/products/[category]" as={`/products/some-product-category`}>
              <a>Some Product Category</a>
            </Link>
          </li>
        </ul>
    )
}

export default Menu

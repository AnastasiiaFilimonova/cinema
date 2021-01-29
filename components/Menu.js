import Link from 'next/link'
import {useState} from 'react'

const Menu = ()=>{
    const [show, setShow] = useState(true);
    return (
        <div>
          <button onClick={() => setShow(!show)}>меню</button>
          {
            show &&
            (<ul>
              <li>
                <Link href="/">
                  <a>Главная</a>
                </Link>
              </li>
              <li>
                <Link href="/cinema">
                  <a>Кино</a>
                </Link>
              </li>
            </ul>)
          }
        </div>
    )
}
export default Menu

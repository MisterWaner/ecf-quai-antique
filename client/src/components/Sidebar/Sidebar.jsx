import './sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <nav className='sidebar-nav'>
        <h2>Accueil</h2>
            <ul className='sidebar-nav-container'>
                <li className="sidebar-nav-item">
                    <Link>Carte</Link>
                </li>
                <li className="sidebar-nav-item">
                    <Link>Menus</Link>
                </li>
                <li className="sidebar-nav-item">
                    <Link>Horaires</Link>
                </li>
                <li className="sidebar-nav-item">
                    <Link>Réservations</Link>
                </li>
                <li className="sidebar-nav-item">
                    <Link>Photos</Link>
                </li>
                <li className="sidebar-nav-item">
                    <Link></Link>
                </li>
            </ul>
        </nav>
    </aside>
  )
}

export default Sidebar
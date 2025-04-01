import { Link } from "react-router";

function Header() {
return (
    <header className= 'header'>
        <h1>NC-NEWS</h1>
        <nav>
        <Link to='/'>Homepage</Link>
        <Link to='/articles'>View Articles</Link> 
        </nav>
    </header>
)
}

export default Header;
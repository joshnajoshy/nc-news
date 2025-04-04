import { Link } from "react-router";

function Header() {
return (
    <header className= 'header'>
        <h1>NC-NEWS</h1><p>Logged in as grumpy19</p>
        <nav>
        <Link className="link"  to='/'>Homepage</Link>
        <Link className="link" to='/articles'>View Articles</Link> 
        <Link className="link" to='/topics'>Topics</Link>
        </nav>
    </header>
)
}

export default Header;
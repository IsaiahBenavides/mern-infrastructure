import { Link } from "react-router-dom";

export default function NavBar(props) {
    return (
        <>
            <nav>
                <Link to={props.path}>{props.linkText}</Link>
            </nav>
        </>
    )
}
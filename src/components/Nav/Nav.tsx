import { NavLink } from "react-router";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <ul>
        <li>
          <NavLink to="/">Chengcheng Teng</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <a href="https://github.com/chengchengt7" target="_blank" aria-label="GitHub">
            <img src="/github-logo.png" alt="GitHub" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

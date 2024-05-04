type NavbarDropdownProps = {
  title: string;
  links: Array<{
    link: string;
    text: string;
  }>;
};

export default function NavbarDropdown({ title, links }: NavbarDropdownProps) {
  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <span className="navbar-link">{title}</span>
      <div className="navbar-dropdown">
        {links.map((link: { link: string; text: string }) => (
          <a key={link.link} className="navbar-item" href={link.link}>
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
}

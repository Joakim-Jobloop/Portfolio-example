export const NavItem = ({ href, text }) => {
  return (
    <button key={text}>
    <a className="text-white h-12 w-12" href={`${href}`}>
      {text}
    </a>
    </button>
  );
};

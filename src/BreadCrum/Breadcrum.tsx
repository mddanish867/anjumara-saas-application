import { useLocation, Link } from 'react-router-dom';

function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="text-sm text-gray-500 mb-4">
      <Link to="/" className="hover:text-[#38bdf8]">Home</Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span key={to} className="text-gray-700 ml-1">
            {' > '} {value.charAt(0).toUpperCase() + value.slice(1)}
          </span>
        ) : (
          <span key={to}>
            {' > '}
            <Link to={to} className="hover:text-[#38bdf8] ml-1">
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumb;

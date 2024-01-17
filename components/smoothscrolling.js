// components/SmoothScrollLink.js

import { Link as ScrollLink } from 'react-scroll';

const SmoothScrollLink = ({ to, children }) => (
  <ScrollLink
    to={to}
    smooth={true}
    duration={500}
    offset={-70} // Ajustez cet offset en fonction de votre mise en page (par exemple, la hauteur de votre barre de navigation)
  >
    {children}
  </ScrollLink>
);

export default SmoothScrollLink;

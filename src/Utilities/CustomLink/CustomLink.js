import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{color: match && '#D82E2F',borderBottom: match && '2px  solid #D82E2F'}}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }
export default CustomLink;
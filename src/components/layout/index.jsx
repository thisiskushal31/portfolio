import React from 'react';
import Animation from '../animation';

const classes = {
  wrapper: 'p-8 relative max-w-screen-xl xs:p-24',
  outerWrapper: 'relative',
  svg: 'hidden fixed transform right-0 top-0 z-0 xl:block',
};

const Layout = ({ children }) => {
  return (
    <div className={classes.outerWrapper}>
      <Animation type='fadeIn'>
        <svg  
          className={classes.svg}
          width="404"
          height="100%"
          fill="none"
          viewBox="0 0 404 100%"
        >
          <defs>
            <pattern
              id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
              x="0"
              y="0"
              width="28"
              height="49"
              patternUnits="userSpaceOnUse"
            >
              <path fill="#edf2f7" d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/>
            </pattern>
          </defs>
          <rect
            width="404"
            height="100%"
            fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
          />
        </svg>
      </Animation>
      <div className={classes.wrapper}>{children}</div>
    </div>
  );
};

export default Layout;

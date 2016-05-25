/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './bigredbox.svg';

function Header() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Navigation className={s.nav} />
        <Link className={s.brand} to="/">
          <img src={logoUrl} width="400" height="80" alt="Merchant's BOX" />
          <span className={s.brandTxt}></span>
        </Link>
        <div className={s.banner}>
          <h1 className={s.bannerTitle}></h1>
          <h2 className={s.bannerDesc}>Merchant partnerships made easy</h2>
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(Header);

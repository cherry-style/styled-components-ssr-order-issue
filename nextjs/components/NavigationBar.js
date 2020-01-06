import Link from 'next/link';
import React from 'react';

export const NavigationBar = () => (
  <ul>
    <li>
      <Link href="/">BasicButtonPage</Link>
    </li>
    <li>
      <Link href="/anchor-button-page">AnchorButtonPage</Link>
    </li>
  </ul>
);

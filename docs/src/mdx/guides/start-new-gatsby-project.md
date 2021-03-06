# Start new project

If you don't have any code yet, please consider checking [Gatsby Cli](https://www.gatsbyjs.org/docs/quick-start) documentation for help creating your app.
In case you want to start based on our oah-admin starter kit, please check out [Based on Starter Kit (oah-admin)](/guides/install-based-on-starter-kit) article.

<div class="note note-info">
  <div class="note-title">oah-admin custom components</div>
  <div class="note-body">
    Please note, this tutorial explains how to install OAH UI into your project
    including Theme System, Components. If you want to re-use any of oah-admin
    <strong> custom</strong> components (like Temperature Widget, Dashboard charts,
    etc) without using oah-admin itself, please follow this guide and in the end
    just copy any of oah-admin custom components you need into your project, register
    them in your modules and that's it.
  </div>
</div>

## Using Gatsby CLI

### Installation

We strongly recommend to develop React with Gatsby CLI, you can install it with the following command.

```bash
npm install -g gatsby
```

```bash
yarn global add gatsby
```

### Create a New Project

A new project can be created using Gatsby CLI tools.

```bash
gatsby new project-name https://github.com/AhmedElywa/start-gatsby-with-oah-ui
```

if you need to add to your already project

```bash
npm i oah-ui styled-components
```

or

```bash
yarn add oah-ui styled-components
```

## Layout

This example of layout component with change theme and change dirction will explain all the details in his section

```jsx
import React, { useState, useRef, Fragment } from 'react';
import { Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { themes } from 'oah-ui/theme';
import {
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  LayoutContainer,
  LayoutColumns,
  LayoutColumn,
  ButtonLink,
  Sidebar,
  SidebarBody,
  Menu,
} from 'oah-ui';

import menuItems from './menuItem';
import Header from './Header';
import SimpleLayout from './SimpleLayout';

export default function LayoutPage(props) {
  const [theme, setTheme] = useState('default');
  const [dir, setDir] = useState('ltr');
  const sidebarRef = useRef();
  const menuRef = useRef();

  // Change theme
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };
  // Change Direction from Ltr to Rtl
  const changeDir = () => {
    const newDir = dir === 'ltr' ? 'rtl' : 'ltr';
    setDir(newDir);
  };

  return (
    <ThemeProvider theme={themes(theme, { dir, fontSize: '2rem', fontMain: 'font family' })}>
      <Fragment>
        <SimpleLayout />
        <Layout dir={dir} windowMode>
          <LayoutHeader fixed>Header</LayoutHeader>
          <LayoutContainer>
            <Sidebar ref={sidebarRef} property="start" containerFixed responsive>
              <header>sidebar header</header>
              <SidebarBody>
                <Menu
                  className="sidebar-menu"
                  Link={Link}
                  ref={menuRef}
                  items={menuItems}
                  toggleSidebar={() => sidebarRef.current.hide()}
                />
              </SidebarBody>
            </Sidebar>
            <LayoutContent>
              <LayoutColumns>
                <LayoutColumn>{props.children}</LayoutColumn>
              </LayoutColumns>
              <LayoutFooter>Footer</LayoutFooter>
            </LayoutContent>
          </LayoutContainer>
        </Layout>
      </Fragment>
    </ThemeProvider>
  );
}
```

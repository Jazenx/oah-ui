# Install Based on Starter Kit

Starting OAH UI from [oah-admin](https://github.com/AhmedElywa/oah-admin) starter kit is the easiest way to run your first OAH UI application.

Please note, that **oah-admin** is just a frontend application. Backend integration can be done relatively simple, but you should be aware that all the data is mocked using JavaScript objects.
If you want the data to be dynamic, you should consider developing a backend integration by your own.
The OAH UI team doesn't consider providing generic integration layer as a part of this project because every backend API has a different structure in terms of data format and URLs.

## Install tools

To install oah-admin on your machine you need to have the following tools installed:

- Git - <https://git-scm.com>
- Node.js - <https://nodejs.org> Please note the **version** should be **>=8**
- Npm - Node.js package manager, comes with Node.js. Please make sure npm **version** is **>=5**
- You might also need some specific native packages depending on your operating system like `build-essential` on Ubuntu

<div class="note note-warning">
  <div class="note-title">Warning!</div>
  <div class="note-body">
    Please note that <strong>it is not possible</strong> to build oah-admin
    <strong> without these tools</strong> and it will not be possible because of
    the way how React is built.
  </div>
</div>

## Download the code

When you completed tools setup, you need to download the code of **oah-admin** application. The easiest way to do that is to clone GitHub repository:

```bash
git clone https://github.com/AhmedElywa/oah-admin.git
```

After clone is completed, you need to install npm modules:

```bash
cd oah-admin && npm i || yarn
```

<div class="note note-warning">
  <div class="note-title">Warning!</div>
  <div class="note-body">
    Please make sure that installation process successfully completed without
    errors.
  </div>
</div>

## Run local copy

To run a local copy in development mode, execute:

```bash
npm run dev || yarn dev
```

Go to <http://localhost:8000> in your browser.

## Production bundle

To create a bundle in production mode, execute:

```bash
npm run build || yarn build
```

This will clear up your `public` folder (where release files are located) and generate a release build.
Now you can copy the sources from the `public` folder and use it with any backend frameworks

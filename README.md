# My Docusaurus
Sandbox for Docusaurus along with notes and examples.


## Commands

Using the **repo** on desktop the 1st time requires installation:
```
npm install
```

Run locally:

```
yarn start
```

Build:
```
yarn build
```

Deploy:
```
./deploy.sh
```

Version of Docusaurus 
```
npx docusaurus --version
```

## Setup
To setup using the root vs website folder. Copy content to the *root* after *npm .. init website classic*

```
npx @docusaurus/init@latest init website classic
```

### Configuration
Changes to `docusaurus.config.js`:

- url: `https://munderseth.github.io`,
- baseUrl: `/my.docusaurus/`,
- organizationName: `munderseth`,
- projectName: `my.docusaurus`,  // same as Repo name
- editUrl: `https://github.com/munderseth/my.docusaurus/edit/main/`,
- href: `https://github.com/munderseth/my.docusaurus`,      

To change styling within **presets=>theme** - `src/css/customDefault.css`

### Doc-only mode
To use a [Docs-only mode](https://docusaurus.io/docs/docs-introduction#docs-only-mode) do the following:

- Within *presets=>docs* add `routeBasePath: '/',`
- rename `index.js` to `index.js.save`
- add `slug: /` to landing page (i.e. intro.md)

### MDX Usage

```
npm install react-player
```
Within a `mdx` file, below front matter:

```
---
title: Hello
---

import ReactPlayer from 'react-player'
```


## Deployment
When using GitHub for hosting via Pages, specific repos are reserved for *free* domains - `org/user.github.io`. For example, `munderseth.github.io` and `s2technologies.github.io`. All other repos use **subfolders** within the associated domain. Note, that GitHub pages enables *custom domains* for all repos. 

There are some constraints:

- For repos using *subfolders* can **not** set *baseUrl:* `/`. This removes the subfolder usage and Docusaurus site will **not load properly**. Few Notes:
  - If using a **custom domain** this will work
  - If running only **locally** this will work
- When setting the *baseUrl:* `/repo-name` the domain path will 1st be rendered (which is not the preferred starting page) when running locally


## Videos
Examples below.

### mp4

```
<ReactPlayer playing controls muted={true} url='/blog/video.mp4' />
```

### youtube

```
<ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
```

### GIF

```
![Gif](./file.gif "Git Here")
```

## References

- https://docusaurus.io/docs/markdown-features/react
- https://www.npmjs.com/package/react-player


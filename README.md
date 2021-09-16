# my.docusaurus
Sandbox for Docusaurus.


Using the **repo** on desktop the 1st time requires installation:
```
cd website
npm install
```

## Run

```
cd website
yarn start
```

Deploy to pages:
```
cd website
./doploy-it.sh
```

## Initial Setup
Setup

```
npx @docusaurus/init@latest init website classic
```

```
cd website
npm install react-player
```
Within a `mdx` file, below front matter:

```
---
title: Hello
---

import ReactPlayer from 'react-player'
```

### Configuration
The `docusaurus.config.js` updates required for GH Pages:

```
url: 'https://munderseth.github.io',
baseUrl: '/my.docusaurus.new/',
organizationName: 'munderseth', 
projectName: 'my.docusaurus.new', 
..
presets: [] //require updates to repo name
```

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

### Commands

Version of Docusaurus 
```
npx docusaurus --version
```

`package.json`: (always use same version #)
```
"dependencies": {
  "@docusaurus/core": "^2.0.0-beta.0",
  "@docusaurus/preset-classic": "^2.0.0-beta.0",
  // ...
}
```
To re-install:
```
cd website
npm install
```

### Articles
- https://docusaurus.io/docs/markdown-features/react
- https://www.npmjs.com/package/react-player
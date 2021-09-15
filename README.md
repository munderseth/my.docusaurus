# my.docusaurus.video
Sandbox for mp4 video

## Run

```
cd website
yarn start
```

Deploy to pages:
```
cd website
yarn deploy
```

First time setup:
```
cd website
npm install
```

## Setup

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
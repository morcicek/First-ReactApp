# First React App

This is an application that the first time I use React.js

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### Screenshot

![](./screenShot-1.png)
![](./screenShot-2.png)

### Links

- Live Site URL: [Add live site URL here](https://morcicek-first-react-app.netlify.app)

## My process

### Built with

- CSS custom properties
- Flexbox
- Sass-CSS preprocessor
- Responsive Design
- React.js Basics

### What I learned

I learned essential parts of responsive design at this challenge.Also I reinrorced some konowledge I have about CSS.

To see how you can add code snippets, see below:

```html
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
```

```Sass
@import './reset', './variables';

body {
  background-color: $backgrounColor;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    }
```

```React-JSX
function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const handleNext = () => {
    hasNext && setIndex(index + 1);
  };
  return (
    <div className="container">
      <h2>
        {sculpture.name} by {sculpture.artist}
      </h2>
      <div className="buttons">
        <button onClick={handlePrev} className="btn btn-secondary">
          Prev
        </button>
    </div>
```

### Continued development

- Responsive Design
- Sass
- React

### Useful resources

- [React Documentation](https://react.dev/)
- [Sass Basics](https://sass-lang.com/guide/)

## Author

- Github - [morcicek](https://github.com/morcicek)
- Linkedin - [Mehmet Cevat Morcicek](linkedin.com/in/mehmet-cevat-morcicek-b50a29178)
- Twitter - [@morcicek_m](https://twitter.com/morcicek_m)

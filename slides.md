# React Router

---

# Routing in SPA

![inline](https://cdn-images-1.medium.com/max/1600/1*zJN2OfpGAOArRI6TA87HDA.png)

---

# React Router

React Router is a collection of navigational components that compose declaratively with your application.

```javascript
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
```

---

# Installation

```bash
npm install react-router-dom --save
```

---

# The Router

It's a high order component that wraps the whole application.

```html
<Router>
// your stuff here.
</Router>
```

---

# Linking

You will not use `<a>` links for internal navigation anymore, you have to use `Link`.

```html
<Link to="/">Home</Link>
```

---

# Routes

The best way to declaratively show your components is with the `Route` component that will show the components if the conditions meet.

```html
<Route path="/" exact component={Index} />
```

---

# Let's Build Something

![inline](https://amp.thisisinsider.com/images/5c59e77ceb3ce80d46564023-750-563.jpg)

---

# FIN

# Framer Sites Figma Plugin 

Build figma plugin with low code using framer sites

![screen](screenshot.png)

# Framer Sites

Duplicate [this framer site](https://sites.framer.com/projects/new?duplicate=sUTqiLD13aV9nhuIt1gz)

# Figma Plugin

clone [figma plugin examples](https://github.com/figma/plugin-samples/tree/master/webpack-react): `webpack-react`

install framer-sites-figma-plugin

```
yarn add framer-sites-figma-plugin
```

`ui.tsx`

```typescript
import useFramerMessage from "framer-sites-figma-plugin";

const App = () => {
  useFramerMessage();
  return (
    <iframe
      src="https://figmaplugin.framer.website/" // your framer sites url
      loading="lazy"
      style={{ width: "100%", height: "100%", border: "none" }}
    ></iframe>
  );
};
```

`code.tsx`

```typescript
import framerOnMessage from "framer-sites-figma-plugin/lib/api";

figma.ui.onmessage = (msg) => {
  framerOnMessage(msg);
};
```
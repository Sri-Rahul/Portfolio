/* Precompile the JSX sources to plain JS using the same Babel engine the
   browser used to use (@babel/standalone, classic React runtime). Run this
   after editing app.jsx or tweaks-panel.jsx:

     npm install --no-save @babel/standalone
     node build.js
*/
const fs = require("fs");
const Babel = require("@babel/standalone");

const FILES = ["tweaks-panel", "app"];
for (const name of FILES) {
  const src = fs.readFileSync(name + ".jsx", "utf8");
  const { code } = Babel.transform(src, {
    presets: [["react", { runtime: "classic" }]],
    // No preset-env: target is modern browsers, same as the in-browser setup.
    comments: true,
    compact: false,
  });
  const banner = "/* AUTO-GENERATED from " + name + ".jsx by build.js — do not edit directly. */\n";
  fs.writeFileSync(name + ".js", banner + code + "\n");
  console.log(name + ".jsx -> " + name + ".js (" + code.length + " bytes)");
}

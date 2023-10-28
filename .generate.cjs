const fs = require("fs");

fs.readdir("./src/components", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(
      "./src/lib-entry.tsx",
      "//! 此文件构建时自动生成，请勿直接修改!!!\n" +
        files
          .map(
            (item) =>
              `export { default as ${item} } from './components/${item}'`
          )
          .join(";\n"),
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  }
});

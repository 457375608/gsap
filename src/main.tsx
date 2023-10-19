import ReactDOM from "react-dom/client";
import App from "./lib.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <App
    size={[400, 400]}
    position={[121.506379, 31.245414]}
    info={{
      title: "东方明珠广播电视塔",
      address: "地址：上海市浦东新区世纪大道1号",
      width: 240,
    }}
  />
);

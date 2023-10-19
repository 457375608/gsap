import { j as c } from "./node_modules/react/jsx-runtime.mjs";
import { useId as w, useEffect as l } from "react";
function f({ id: a, position: i, info: n }) {
  if (typeof window.BMapGL > "u") {
    console.error(
      '请先加载JavaScript API GL，如：<script type="text/javascript" src="https://api.map.baidu.com/api?v=1.0&type=webgl&ak=您的密钥"><\/script>'
    );
    return;
  }
  window.addEventListener("load", () => {
    const e = window.BMapGL, t = new e.Map(a), [r, p] = i, o = new e.Point(r, p);
    t.centerAndZoom(o, 15), t.enableScrollWheelZoom(!0);
    const s = new e.Marker(o);
    if (t.addOverlay(s), n) {
      const d = new e.InfoWindow(n.address || "", n);
      t.openInfoWindow(d, o), s.addEventListener("click", () => {
        t.openInfoWindow(d, o);
      });
    }
  });
}
const v = ({ size: a, position: i, info: n }) => {
  const e = w(), [t, r] = a;
  return l(() => {
  }, [
    f({
      id: e,
      position: i,
      info: n
    })
  ]), /* @__PURE__ */ c.jsx("div", { id: e, style: { width: t, height: r } });
};
export {
  v as default
};

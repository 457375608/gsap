import { useEffect, useId } from "react";

interface Info {
  /**
   * 信息窗口宽度
   */
  width?: number | string;
  /**
   * 信息窗口高度
   */
  height?: number | string;
  /**
   * 信息标题
   */
  title?: string;
  /**
   * 信息地址
   */
  address?: string;
}

interface CreateMap {
  id: string;
  position: [number, number];
  info?: Info;
}

interface BitzMap {
  /**
   * 地图大小
   */
  size: [number, number] | [string, string];
  /**
   * 位置：[经度，维度]
   */
  position: [number, number];
  /**
   * ### 信息窗口
   * - width:窗口宽度
   * - height:窗口高度
   * - title:标题信息
   * - address:地址信息
   */
  info?: Info;
}

function createMap({ id, position, info }: CreateMap) {
  if (typeof (window as any).BMapGL === "undefined") {
    console.error(
      `请先加载JavaScript API GL，如：<script type="text/javascript" src="https://api.map.baidu.com/api?v=1.0&type=webgl&ak=您的密钥"></script>`
    );
    return;
  }
  window.addEventListener("load", () => {
    const BMapGL = (window as any).BMapGL;
    const map = new BMapGL.Map(id);
    const [lng, lat] = position;
    const point = new BMapGL.Point(lng, lat);
    map.centerAndZoom(point, 15);
    map.enableScrollWheelZoom(true);
    const marker = new BMapGL.Marker(point);
    map.addOverlay(marker);
    if (info) {
      const infoWindow = new BMapGL.InfoWindow(info.address || "", info);
      map.openInfoWindow(infoWindow, point);
      marker.addEventListener("click", () => {
        map.openInfoWindow(infoWindow, point);
      });
    }
  });
}

const BitzMap = ({ size, position, info }: BitzMap) => {
  const id = useId();
  const [width, height] = size;
  useEffect(() => {}, [
    createMap({
      id,
      position,
      info,
    }),
  ]);
  return <div id={id} style={{ width, height }}></div>;
};

export default BitzMap;

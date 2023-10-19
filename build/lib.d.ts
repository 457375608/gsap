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
declare const BitzMap: ({ size, position, info }: BitzMap) => import("react/jsx-runtime").JSX.Element;
export default BitzMap;

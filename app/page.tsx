// 根路径用带时间戳的 iframe 加载静态单文件作品集 public/index.html。
// 时间戳强制每次都拉取最新内容，避免静态文件被浏览器强缓存导致预览不刷新。
// 交付形态仍为单文件 index.html，可独立下载 / 双击本地打开。
export const dynamic = "force-dynamic"

export default function Page() {
  const src = `/index.html?t=${Date.now()}`
  return (
    <iframe
      src={src}
      title="申雨茜 · 个人作品集"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
      }}
    />
  )
}

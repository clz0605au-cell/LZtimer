# LZtimer

完整静态网站源码，无需构建或 API 密钥。

本地运行：解压后在此文件夹执行 `python3 -m http.server 8765`，打开 http://localhost:8765/ 。不要直接双击 HTML。

公共部署：将所有网页文件上传到静态托管服务根目录。入口 index.html，比赛页面 competition.html。若需要 /competition 路径，请设置该路径映射到 competition.html。

成绩和设置保存在各自浏览器 localStorage，不会跨域名或跨设备同步。迁移前请导出成绩，再到新网站导入。此包不包含个人成绩、访问凭据或 Sites 项目标识。

运行时需要联网加载 CDN 上的图表、图标、样式及 cubing 打乱和预览依赖，并非完全离线版。AI 导入使用浏览器本地 LanguageModel 能力，不可用时回退到格式解析。

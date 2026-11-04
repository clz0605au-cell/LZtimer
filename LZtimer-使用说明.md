# LZtimer 本地源码与公共部署包

此包包含当前版本的网站全部 HTML、CSS、JavaScript 源码，无需构建，无需 API 密钥或后端服务。

## 本地运行

1. 解压本文件。
2. 在解压后的文件夹打开终端，运行：

   python3 -m http.server 8765

3. 浏览器访问 http://localhost:8765/ 。比赛页面为 http://localhost:8765/competition.html 。

请通过 HTTP 服务打开，避免直接双击 HTML 时浏览器对模块加载的限制。

## 作为公共网站发布

将此文件夹中的网页文件上传到任意静态网站托管服务的站点根目录，入口文件为 index.html。无需构建步骤。可按托管服务的设置绑定自己的域名并启用 HTTPS。

导航已使用 competition.html，因此不依赖 /competition 的无扩展名路由。如果希望同时使用 /competition，可在托管平台配置该路径映射到 /competition.html。

## 文件

- index.html：练习页面、计时与训练分析
- competition.html / competition.mjs / competition.css：比赛模拟页面
- competition-engine.mjs：比赛计时规则与统计逻辑
- settings-core.js / settings.js / settings.css：共享设置、多语言、手动输入
- data-export.js：成绩导出

## 数据及联网说明

- 成绩、分组、设置保存在访问者当前浏览器的 localStorage 中；发布到新域名不会自动迁移旧域名的数据。迁移前请在旧网站导出，再在新网站导入。
- 目前没有账户、服务端数据库或跨设备同步；各访问者数据相互独立。
- 图表、图标、样式辅助库和 WCA 打乱/预览模块通过外部 CDN 加载，运行时需要联网；本包不是完全离线版本。
- AI 导入使用浏览器可用的本地 LanguageModel 能力，不可用时回退到格式解析，无需填写 AI API 密钥。
- 包中不包含旧 Sites 项目标识、Git 历史、访问凭据或你的个人成绩数据。

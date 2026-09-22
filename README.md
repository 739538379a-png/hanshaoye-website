# 汉少爷手作饭团官网

**版本：V1.0.0**

汉少爷品牌官网，展示品牌故事、产品体系、门店布局、合作共创、品牌动态与合作咨询入口。

当前项目为 Next.js 前端项目。合作咨询接口目前为本地模拟实现；真实后端接入时，可按既有接口契约替换服务实现，并保持前端交互不变。

## 技术栈

| 分类 | 技术 | 说明 |
| --- | --- | --- |
| 框架 | Next.js 16.3 | App Router、服务端渲染与 Route Handler |
| 语言 | TypeScript | 已开启严格模式 |
| UI | React 19.3 | 页面与局部客户端交互 |
| 样式 | CSS、Tailwind CSS 4 | 全局设计变量与响应式布局 |
| 动效 | Motion 13 | 导航菜单与局部过渡效果 |
| 图标 | Phosphor Icons | 统一图标库 |
| 图片 | Next/Image、Sharp | 图片优化与 WebP、AVIF 输出 |
| 表单接口 | Next.js Route Handler | `POST /api/cooperation-leads` |
| 代码检查 | ESLint 9 | `npm run lint` |
| 构建 | Next.js Build | `npm run build` |

## 页面与路由

| 路由 | 页面 |
| --- | --- |
| `/` | 首页 |
| `/about` | 关于我们 |
| `/products` | 关于产品，饭团与饮品分类图集 |
| `/stores` | 门店布局 |
| `/cooperation` | 合作共创 |
| `/news` | 品牌动态 |
| `/contact` | 联系我们 |
| `/api/cooperation-leads` | 合作咨询提交接口 |

## 本地运行

### 环境要求

- Node.js 20 或更高版本
- npm

### 安装依赖

```bash
npm install
```

### Windows 开发预览

推荐在项目根目录执行：

```powershell
.\start-dev.bat
```

或使用 Next.js 开发服务：

```bash
npm run dev
```

访问 `http://localhost:3000`。

### 生产构建预览

```bash
npm run lint
npm run build
npm start
```

## 项目结构

```text
src/
├─ app/
│  ├─ about/                 # 关于我们
│  ├─ products/              # 产品展示页
│  ├─ stores/                # 门店布局
│  ├─ cooperation/           # 合作共创
│  ├─ news/                  # 品牌动态
│  ├─ contact/               # 联系我们
│  ├─ api/
│  │  └─ cooperation-leads/  # 合作咨询接口
│  ├─ globals.css            # 全局样式与响应式规则
│  └─ page.tsx               # 首页
├─ components/               # 可复用组件
└─ content/                  # 页面文案与导航数据

public/
├─ brand/                    # 品牌 Logo
└─ media/                    # 页面图片、视频与产品素材

docs/
├─ 前后端接口契约.md
├─ 项目交接说明.md
├─ 开发协作与Git规范.md
└─ 变更记录.md
```

## 合作咨询接口

### 当前接口

```text
POST /api/cooperation-leads
```

当前接口仅完成参数校验与模拟响应，不保存数据，也不向 CRM 或第三方系统外发数据。

### 请求体

```json
{
  "name": "陈先生",
  "phone": "13800138000",
  "city": "杭州",
  "budget": "待沟通",
  "privacyConsent": true,
  "source": "homepage"
}
```

### 字段规则

| 字段 | 类型 | 必填 | 当前校验 |
| --- | --- | --- | --- |
| `name` | string | 是 | 去除首尾空格后 2 至 40 个字符 |
| `phone` | string | 是 | 中国大陆 11 位手机号 |
| `city` | string | 是 | 去除首尾空格后 2 至 50 个字符 |
| `budget` | string | 否 | 当前仅透传 |
| `privacyConsent` | boolean | 是 | 必须为 `true` |
| `source` | string | 否 | 用于记录提交来源 |

### 响应格式

成功时返回 HTTP `200`：

```json
{
  "ok": true,
  "message": "我们会根据您填写的信息与您联系。"
}
```

参数不合法时返回 HTTP `400`：

```json
{
  "ok": false,
  "message": "请填写正确的手机号。"
}
```

设置 `MOCK_LEAD_ERROR=1` 时，接口返回 HTTP `503`，用于前端提交失败状态测试。

## 后端接入说明

真实后端接入时，请保持以下约定：

- 保持 `POST /api/cooperation-leads` 的路径、请求字段和 `ok`、`message` 响应字段。
- 后端负责鉴权、限流、字段清洗、隐私合规、持久化与 CRM 转发。
- CRM 密钥、数据库凭据及第三方服务密钥只能保存在服务端环境变量中。
- 如需扩展响应内容，请保留 `ok` 和 `message`，避免破坏当前前端提交状态。
- 详细契约见 [`docs/前后端接口契约.md`](docs/前后端接口契约.md)。

## 环境变量

复制 `.env.example` 为 `.env.local`：

```bash
MOCK_LEAD_ERROR=0
```

| 变量 | 说明 |
| --- | --- |
| `MOCK_LEAD_ERROR` | 设置为 `1` 时模拟合作咨询接口失败；默认 `0` |

## 验证命令

```bash
npm run lint
npm run build
```

## 当前边界

- 未接入 CMS、CRM、地图、统计服务或线上部署。
- 产品与品牌内容目前由本地代码和 `public/media` 素材维护。
- 合作咨询接口为本地模拟实现，待后端替换为真实服务。

## 协作资料

- [`docs/项目交接说明.md`](docs/项目交接说明.md)
- [`docs/前后端接口契约.md`](docs/前后端接口契约.md)
- [`docs/开发协作与Git规范.md`](docs/开发协作与Git规范.md)
- [`docs/变更记录.md`](docs/变更记录.md)

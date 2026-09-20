<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## 长期交付与本机预览规则

用户于 2026-09-18 明确要求：每次任务收尾均遵守以下规则。

- 不得使用代理沙箱、容器或其他代理测试环境内的 `curl localhost:3000`、HTTP 状态码或页面截图，证明用户电脑上的本地预览成功。此类检查只能说明实际执行检查的环境，并必须如实标注环境与验证范围。
- 不得使用“已刷新并返回 HTTP 200”“您本机已经可以直接访问”等措辞，把代理环境的检查结果表述为用户本机可访问的证据。用户是否能访问，未经用户确认不得宣称已验证。
- 每次任务小结必须提供用户在自己终端执行的完整命令，包括真实项目路径、适用的 shell、必要的依赖安装步骤及启动命令。命令必须匹配实际交付状态：只有已推送的改动才能让用户通过 `git pull` 获取；不得暗示未提交或未推送的改动已经在远端。
- Windows 默认提供可逐行执行的 PowerShell 命令，避免依赖旧版 PowerShell 不支持的 `&&`。本项目路径为 `C:\Users\AllenChen\Desktop\汉少爷饭团官网_网站项目`，开发启动命令为 `npm run dev`。根据实际需要提供 `git pull --ff-only`、`npm install`，并清楚说明运行环境中的已知必要设置。
- 每次任务小结明确列出本次新增、删除或更新的依赖与环境变量，可提供 diff 或清单；没有变更时明确写“依赖无变更；环境变量无变更”。不得输出环境变量的秘密值。
- 构建、类型检查、自动化测试与截图验证可以继续使用，但报告时应分别说明验证结果与局限，不替代用户在自己终端启动项目的步骤。
- 修复任务完成后，不得再使用 headless 浏览器截图、`dump-dom` 或同类自动化浏览器工具作为“页面已修复”的自证；这台机器上的此类工具存在尺寸、锚点和 DOM 导出不稳定问题。收尾只做三件事：用一两句话说明改动与原因、给出用户可在真实浏览器执行的明确验证路径、重启对应本机服务。
- 同一种验证工具连续失败两次，必须立即停止继续尝试；改用不同的诊断方式，或在无法安全判断时直接向用户说明并请求其协助验证。不得围绕同一失败工具反复重试。

这些规则属于用户长期要求，应保留在 Next.js 自动生成区块之外；更新或重新生成框架说明时不得覆盖。

## 本机运行可靠性

- 本项目默认且唯一允许的本机启动方式为 `start-dev.bat`。除非用户在当次任务中明确重新授权，否则不得启动、重载或恢复 PM2，也不得使用 `start-service.bat`。启动前先确认本机 3000 端口没有残留监听进程；需要重启时只重启 `start-dev.bat` 对应的开发服务器。
- 任何因 Next.js 遥测配置写入导致的 Windows 跨设备错误，均通过持久用户环境变量 `NEXT_TELEMETRY_DISABLED=1` 和 PM2 服务环境变量处理，不能只在一次性的 PowerShell 会话里设置。
- 在把项目移动到其他磁盘或文件夹前，检查 Windows 已知文件夹注册表；如果桌面路径位于 OneDrive，应将项目迁至非同步目录并重新验证 Git 远端与启动脚本。

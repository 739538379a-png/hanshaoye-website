# 前后端协作与 Git 规范

## 分工

### 前端负责

- 页面结构、视觉、响应式、动画和可访问性
- `src/content/site-content.ts` 中的展示配置
- 表单交互、加载状态、成功状态和错误提示
- 接口契约变更前与后端确认，并同步更新文档

### 后端负责

- 真实合作线索接口、鉴权、限流和数据校验
- CRM、数据库、消息通知、日志和监控
- 隐私合规、数据保存周期和权限控制
- 生产环境配置、部署和回滚

## 每次改动必须留下历史记录

1. 开始前确认当前分支和工作区状态：`git status`。
2. 每次完成一个可说明的改动后运行相关检查。
3. 使用清晰的提交说明，例如：

```text
生成初版
修复移动端导航抽屉
接入合作线索接口
补充后端交接文档
```

4. 一个提交尽量只对应一个主题，避免把无关格式化混入功能提交。
5. 不提交 `.env.local`、密钥、数据库备份、内部参考资料和运行日志。
6. 后端接手前先阅读本目录 `docs/`，再基于最新提交创建分支开发。

## 本地与 GitHub 同步规则

当前远端：`https://github.com/739538379a-png/hanshaoye-website.git`

当前主分支：`main`，本地 `main` 跟踪远端 `origin/main`。

正常开发流程：

```bash
git pull --rebase origin main
git add .
git commit -m "说明本次改动"
git push origin main
```

回退已提交内容时，优先使用可追溯的反向提交：

```bash
git revert <要回退的提交编号>
git push origin main
```

这样本地和 GitHub 都保留完整历史。除非明确确认远端分支状态，否则不要使用 `git reset --hard`、`git push --force` 或覆盖远端历史的操作；确需重写历史时，只能先确认双方状态，再使用 `--force-with-lease`。

每次关键操作后的验收：

```bash
git status
git log --oneline -5
git fetch origin
git diff main origin/main
```

最后一条没有输出时，表示本地 `main` 与远端 `origin/main` 内容一致。

## 交接检查

- `npm run lint` 通过
- `npm run build` 通过
- 首页可访问，表单成功/失败状态可演示
- 接口契约与实际请求一致
- Git 工作区无未说明的改动

# yanzhoutang.com

Yanzhou (Enzo) Tang 的个人学术主页。模板是 [luost26/academic-homepage](https://github.com/luost26/academic-homepage)（Jekyll + Bootstrap 4），托管在 GitHub Pages，域名 `yanzhoutang.com`。

本文件只给自己看（已在 `_config.yml` 里排除，不会出现在网站上）。

---

## 一、部署情况（已完成，留作记录）

- 仓库：[YanzhouTang/yanzhoutang.github.io](https://github.com/YanzhouTang/yanzhoutang.github.io)，GitHub Pages 从 `main` 分支根目录构建（Settings → Pages → Deploy from a branch）。
- 自定义域名：`yanzhoutang.com`（仓库根目录的 `CNAME` 文件，不要删）。域名已在 GitHub 账号 Settings → Pages 里做所有权验证。
- Northwest DNS 里**新增**的记录（原有的邮件相关记录 MX/SPF/DKIM/DMARC、`psrp` CNAME、`*` 通配 A 记录都保持不动）：

  | 类型 | 主机 | 值 |
  |------|------|----|
  | A    | `@`   | `185.199.108.153` / `185.199.109.153` / `185.199.110.153` / `185.199.111.153` |
  | AAAA | `@`   | `2606:50c0:8000::153` / `2606:50c0:8001::153` / `2606:50c0:8002::153` / `2606:50c0:8003::153` |
  | CNAME | `www` | `yanzhoutang.github.io` |
  | TXT  | `_github-pages-challenge-YanzhouTang` | GitHub 给的验证码 |

- HTTPS：DNS 检查通过后在 Settings → Pages 勾选 **Enforce HTTPS**。
- 自查：`dig yanzhoutang.com +short` 应返回 4 个 `185.199.x.153`。

> 页面上如果出现黄色的 “Warning / Action required” 提示框，是模板自带的自检（仓库名或 `baseurl` 不对时才会出现）；用 yanzhoutang.com 访问时不会出现。

### 在本地改网站（可选）

```bash
git clone https://github.com/YanzhouTang/yanzhoutang.github.io.git
cd yanzhoutang.github.io
# 改完后
git add -A && git commit -m "update" && git push
```

---

## 二、日常更新

改完 `git add -A && git commit -m "..." && git push`，1–2 分钟后生效。也可以直接在 github.com 网页上点铅笔图标编辑。

文件里的 `TODO` 是待你补充的地方；`#` 开头的行是注释（不生效），去掉 `#` 就启用。

| 想改什么 | 改哪个文件 |
|---|---|
| 名字、职位、邮箱、Scholar / GitHub / LinkedIn 等图标链接、CV 链接 | `_data/profile.yml` |
| About Me 正文 | `_data/profile.yml` 的 `short_bio`（HTML） |
| 头像 | 替换 `assets/images/photos/portrait.png`（同名覆盖；换成 .jpg 的话把 `portrait_url` 一起改掉） |
| Education / Experience / Honors & Awards | `_data/profile.yml` 下半部分（`logo` 可选，学校 logo 放 `assets/images/badges/`） |
| News | `_news/` 下每条一个 `.md` 文件（见下方示例） |
| 论文 | `_publications/` 下每篇一个 `.md` 文件（见下方示例） |
| 作者名加粗 / 加链接 | `_data/authors.yml` |
| 首页显示哪些卡片、News 显示几条、页脚文字 | `_data/display.yml` |
| 顶部导航栏 | `_data/navigation.yml` |
| CV PDF | 放到 `assets/files/cv.pdf`，再把 `profile.yml` 里 `cv_link` 那行取消注释 |

### 添加一条 News

新建 `_news/2026-11-15-some-news.md`：

```markdown
---
title: 'Our paper was accepted to <strong>MICRO 2026</strong>!'
date: 2026-11-15 12:00:00 -0500
---
```

### 添加一篇论文

新建 `_publications/2026/2026-short-name.md`（年份文件夹只是为了整齐，可随意）：

```markdown
---
title:     "Paper Title"
date:      2026-10-01 00:00:00 -0400   # 用于排序和按年份分组
selected:  true                         # true = 同时出现在首页 "Selected Publications"
pub:       "International Symposium on Computer Architecture (ISCA)"
pub_date:  "2026"
# pub_pre:  "Submitted to "             # 显示在会议名前，例如投稿中
# pub_post: " Under review."
# pub_last: ' <span class="badge badge-pill badge-publication badge-success">Best Paper</span>'
# semantic_scholar_id: xxxxxxxx          # 填了会自动显示引用数
abstract: >-
  一两句话的 TL;DR（不建议放完整摘要）。
cover:     /assets/images/covers/my-paper.png   # 配图，放 assets/images/covers/；不填会自动生成彩色泡泡图
authors:
  - Yanzhou Tang          # 与 _data/authors.yml 里的名字一致才会加粗
  - Coauthor A*           # 末尾 * = 共同一作，# = 通讯作者
  - Coauthor B
links:
  Paper: https://arxiv.org/abs/xxxx.xxxxx
  Code: https://github.com/...
  Slides: /assets/files/slides.pdf
---
```

### 想加 Blog

在 `_posts/` 里写 `YYYY-MM-DD-title.md` 格式的文章，然后把 `_data/navigation.yml` 里 Blog 那两行取消注释。

---

## 三、本地预览（可选）

需要 Ruby + Bundler：

```bash
bundle install
bundle exec jekyll serve
# 打开 http://localhost:4000
```

---

模板作者：[Shitong Luo (luost26)](https://github.com/luost26/academic-homepage)，MIT License（见 `LICENSE`）。页脚保留了指向模板的链接。

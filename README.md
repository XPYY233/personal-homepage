# 个人主页

这是范君然的静态单页个人主页，用来展示个人介绍、经历成就、爱好标签和联系方式，也适合作为可以直接转发的社交名片。

页面现在是“可上线占位版”：姓名、邮箱、微信已保留，经历和成就使用结构化占位。之后只需要修改 `script.js` 顶部的 `profile` 对象，就能替换成真实内容。

## 快速预览

直接双击打开 `index.html` 即可预览。

如果想用本地服务预览，可以在当前目录运行：

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

然后访问：

```text
http://127.0.0.1:4173/index.html
```

## 替换顺序

建议按这个顺序换真实信息：

1. 先替换 `tagline`、`summary`、`tags`，让首屏像你本人。
2. 再替换 `bio`，写 2-4 句真实介绍。
3. 然后替换 `achievements`，每张卡片写一个真实项目、课程、竞赛、社团、实习或研究经历。
4. 接着替换 `timeline`，展示你的成长路径。
5. 最后部署 GitHub Pages，并把公网地址填入 `profile.share.url`。

## 字段说明

打开 `script.js`，找到最顶部的：

```js
const profile = {
  // 所有页面内容都在这里
};
```

常用字段如下：

- `name`：展示姓名，建议 2-8 个字。
- `tagline`：首屏一句话介绍，建议 18-32 个字。
- `summary`：首屏补充说明，建议 40-80 个字。
- `quickLabel`：右侧作品集卡片上的快速标签，建议 3 个关键词。
- `tags`：首屏快速标签，建议 4 个。
- `stats`：亮点概览，建议保留 3 条。
- `bio`：关于我，建议 2-4 句。
- `achievements`：成就精选卡片，建议 3 张起。
- `timeline`：经历时间线，建议 3-5 条。
- `hobbies`：爱好标签，可保留生活感。
- `contacts`：邮箱、微信或其他联系方式。
- `share`：互联网分享标题、描述、主页链接和短版介绍。

## 首屏信息模板

把这些字段替换成你的真实表达：

```js
tagline: "一句话说清楚你是谁、你关注什么",
summary: "用 1-2 句补充你的状态、方向、优势或想让别人记住的点。",
quickLabel: "关键词一、关键词二、关键词三",
tags: ["标签一", "标签二", "标签三", "标签四"],
```

示例：

```js
tagline: "关注智能系统、产品体验与长期学习的探索者",
summary: "我喜欢把复杂问题拆成清晰路径，也喜欢把阶段性学习沉淀成可以被分享的作品。",
quickLabel: "技术实践、产品思维、持续输出",
tags: ["技术探索", "产品思维", "学习沉淀", "开放交流"],
```

## 关于我模板

`bio` 是数组，每一句会显示成一张卡片：

```js
bio: [
  "第一句：你现在的身份和主要方向。",
  "第二句：你做事的特点、擅长的问题或关注的领域。",
  "第三句：你希望别人通过这个主页了解你什么。"
],
```

## 成就卡片模板

`achievements` 中每一项是一张成就卡：

```js
{
  category: "Project",
  title: "项目或经历名称",
  period: "2025-2026",
  description: "说明这个经历是什么、你做了什么、结果或收获是什么。建议 40-90 个字。",
  highlights: ["关键词一", "关键词二", "关键词三"]
}
```

可用分类示例：

- `Project`：课程项目、个人项目、开发实践
- `Learning`：课程学习、技能训练、阅读输出
- `Research`：研究训练、论文阅读、实验工作
- `Competition`：竞赛、奖项、挑战赛
- `Collaboration`：社团、团队协作、学生工作

## 时间线模板

`timeline` 中每一项是一条经历：

```js
{
  time: "2026",
  title: "经历标题",
  description: "一句话说明这个阶段发生了什么，以及它为什么重要。"
}
```

建议时间线可以这样组织：

- `现在`：当前身份、方向或正在做的事情
- `近期`：最近完成或正在沉淀的项目
- `下一步`：准备补充、发布或推进的方向

## 分享配置

`share` 控制分享面板、复制介绍和名片图内容：

```js
share: {
  title: "范君然 | 个人主页",
  description: "范君然的个人展示入口，记录技术探索、学习沉淀、经历成就与联系方式。",
  url: "",
  image: "./share-card.png",
  shortIntro: "用于复制给别人的短版自我介绍。"
}
```

部署前，`url` 可以留空，页面会复制当前打开地址。

部署到 GitHub Pages 后，把它改成你的公网链接，例如：

```js
url: "https://你的用户名.github.io/personal-homepage/",
```

## GitHub Pages 发布步骤

先在 GitHub 网页端新建一个仓库，建议仓库名：

```text
personal-homepage
```

然后在当前目录执行：

```bash
git init
git branch -M main
git add .
git commit -m "Create personal homepage"
git remote add origin https://github.com/你的用户名/personal-homepage.git
git push -u origin main
```

接着到 GitHub 仓库页面：

1. 打开 `Settings`。
2. 找到 `Pages`。
3. `Source` 选择 `Deploy from a branch`。
4. `Branch` 选择 `main`，目录选择 `/root`。
5. 保存后等待 GitHub 生成网站链接。

发布完成后，通常链接类似：

```text
https://你的用户名.github.io/personal-homepage/
```

把这个链接填回 `script.js` 的：

```js
profile.share.url
```

## 分享功能

页面首屏有“打开分享面板”按钮，可以：

- 复制主页链接
- 复制短版个人介绍
- 复制联系方式
- 生成一张适合聊天或朋友圈分享的个人名片图

生成名片图后，可以点击“保存名片图”下载图片。

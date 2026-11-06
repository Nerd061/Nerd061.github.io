---
title: 如何发布笔记和附件
description: 从一篇 Markdown 笔记开始，再添加图片、PDF 和其他可下载的文件。
---

## 发布第一篇 Markdown 笔记

1. 在 [GitHub 仓库](https://github.com/Nerd061/Nerd061.github.io) 的根目录，选择 **Add file → Create new file**。
2. 文件名输入 `_notes/学习笔记/signal-basics.md`。也可以在本地用 VS Code 创建同一路径，再提交文件。
3. 在文件第一行写 `---`，用两行 `---` 包住标题等信息，下面写正文。

```markdown
---
title: 信号与系统入门
description: 记录连续时间信号的基本概念。
---

## 连续时间信号

连续时间信号可以表示为时间的函数。
```

保存为 UTF-8 后，点击 **Commit changes** 并提交到 `master`。部署完成后，新文章会出现在「学习笔记」下。继续添加子文件夹，左侧目录也会跟着更新，例如 `_notes/学习笔记/无线通信/信道.md`。

## 添加图片、PDF 和其他附件

把附件放在仓库根目录下的 `assets/notes/`，可以按文章建子文件夹，例如 `assets/notes/signal-basics/`。在 GitHub 网页上传时，可在仓库根目录选择 **Add file → Upload files**，拖入本地准备好的 `assets` 文件夹并核对上传路径。附件和引用它的笔记都需要提交。

| 文件类型 | 在文章里的用法 |
| --- | --- |
| PNG、JPG、SVG 等图片 | 用 Markdown 图片语法直接展示。 |
| PDF | 添加链接，读者可以打开或下载。 |
| DOCX、PPTX、XLSX、CSV、ZIP 等文件 | 添加下载链接。 |
| MP4 等视频 | 用链接提供下载，或用 HTML 的 `<video>` 控件播放浏览器支持的格式。 |

下面是正文里可以使用的写法。把文件名换成实际上传的名称，链接开头保留 `/assets/`。

```markdown
![信号示意图](/assets/notes/signal-basics/waveform.png)

[查看讲义 PDF](/assets/notes/signal-basics/handout.pdf)

[下载实验数据](/assets/notes/signal-basics/data.csv)

<video controls src="/assets/notes/signal-basics/demo.mp4"></video>
```

文件名的大小写要和仓库一致。通过 GitHub 网页上传，单个文件上限为 25 MiB。通过 Git 命令行提交，普通文件的上限为 100 MiB。更大的文件可以放到允许公开分享的存储服务，再在文章里加入链接。 [GitHub 文件上传说明](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)

## 用本地 Git 发布

在仓库的终端中执行下面的命令。如果有附件，在提交前也用 `git add` 加入实际的附件路径。

```powershell
git add -- "_notes/学习笔记/signal-basics.md"
git status --short
git commit -m "添加信号与系统笔记"
git push origin master
```

推送后，在 [GitHub Actions](https://github.com/Nerd061/Nerd061.github.io/actions) 查看部署结果。成功后，打开 [学习笔记](https://nerd061.github.io/notes/)，点开新文章，并试一下图片、PDF 和下载链接。仓库与站点都是公开的，只提交可以公开分享的内容。

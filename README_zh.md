<h1 align="center">MiroTalk P2P</h1>

<br />

<div align="center">

<a href="https://www.linkedin.com/in/miroslav-pejic-976a07101/">![作者](https://img.shields.io/badge/Author-Miroslav_Pejic-brightgreen.svg)</a>
<a href="https://choosealicense.com/licenses/agpl-3.0/">![许可证: AGPLv3](https://img.shields.io/badge/License-AGPLv3_Open_Surce-blue.svg)</a>
<a href="https://codecanyon.net/item/mirotalk-p2p-webrtc-realtime-video-conferences/38376661">![许可证: 通常](https://img.shields.io/badge/License-Regular_Private_Use-lightblue.svg)</a>
<a href="https://codecanyon.net/item/mirotalk-p2p-webrtc-realtime-video-conferences/38376661">![许可证: 扩展](https://img.shields.io/badge/License-Extended_Commercial_Use-darkgreen.svg)</a>
<a href="https://discord.gg/rgGYfeYW3N">![社区](https://img.shields.io/badge/Community-forum-pink.svg)</a>

</div>

<p align="center">免费的 WebRTC - P2P - 简单、安全、快速的实时视频会议，支持高达8k分辨率和60fps。它与所有主要浏览器和平台兼容。</p>

<hr />

<p align="center">
    <a href="https://p2p.mirotalk.com">探索 MiroTalk P2P</a>
</p>

<hr />

<p align="center">
    <a href="https://p2p.mirotalk.com"><img src="public/images/mirotalk-header.gif"></a>
</p>

<hr />

<strong>
    <p align="center">
        加入我们的社区，获取问题解答、帮助和支持，参与讨论和创意分享于<a href='https://discord.gg/rgGYfeYW3N'>Discord</a>
    </p>
</strong>

<hr />

<details>
<summary>特性</summary>

<br/>

- 完全免费 (`100% Free`) - 开源（AGPLv3）- 自托管，并且支持PWA（渐进式网络应用）！
- 不需要下载、插件或登录，完全基于浏览器。
- 无限制会议房间，没有时间限制。
- 支持133种语言翻译。
- 支持OpenID Connect（OIDC）认证层。
- 提供主机保护，防止未经授权的访问。
- 用户身份验证以防止未经授权的访问。
- 房间密码保护。
- 使用JWT.io安全地管理和用户认证主机配置，增强了安全性并简化了流程。
- 兼容桌面和移动设备。
- 优化的移动端会议室网址共享。
- 支持前后摄像头的手机视频流。
- 高清音频流，带有语音检测和音量指示器。
- 支持屏幕共享演示文稿。
- 支持文件拖放上传。
- 可选择音频输入、输出和视频来源。
- 支持高达8K分辨率和60FPS的视频质量。
- 支持先进的视频/文档画中画（PiP），提供更流畅和灵活的观看体验。
- 支持录制屏幕、音频和视频。
- 可截取视频帧并保存为PNG图像。
- 支持表情符号选择器发送私人消息、Markdown支持和聊天记录保存的聊天。
- 支持ChatGPT（由OpenAI提供），用于回答问题、提供信息和连接用户到相关资源。
- 支持语音识别发送语音消息。
- 类似于对讲机的Push-to-talk功能。
- 支持教师使用的高级协作白板。
- 实时共享YouTube嵌入视频、音视频文件（MP4, WebM, OGG）。
- 全屏模式，一键放大视频元素，并支持固定/取消固定功能。
- 自定义UI主题。
- 右键单击视频元素以获得更多控制选项。
- 支持直接的P2P连接，通过WebRTC实现低延迟的通信。
- 支持[REST API](app/api/README.md)（应用程序编程接口）。
- 集成Mattermost以增强交流功能。
- 支持Slack以增强交流功能。
- 使用Sentry进行错误报告。
- 以及更多……

</details>

<details>
<summary>关于</summary>

<br>

- [演示](https://www.canva.com/design/DAE693uLOIU/view)
- [视频概览](https://www.youtube.com/watch?v=_IVn2aINYww)

</details>

<details>
<summary>开始视频会议</summary>

<br/>

1. `打开` [MiroTalk P2P](https://p2p.mirotalk.com/newcall) 或 [备用链接](https://mirotalk.up.railway.app/newcall).
2. `选择` 房间名称并点击 **加入房间**。
3. 授予摄像头和麦克风访问权限。
4. 分享房间网址并等待参与者加入会议。

</details>

<details>
<summary>直接加入房间</summary>

<br/>

- 您可以使用如下链接 `直接加入房间`：
- https://p2p.mirotalk.com/join?room=test&name=mirotalk&avatar=0&audio=0&video=0&screen=0&hide=0&notify=0
- https://mirotalk.up.railway.app/join?room=test&name=mirotalk&avatar=0&audio=0&video=0&screen=0&hide=0&notify=0

    | 参数     | 类型   | 描述           |
    | -------- | ------ | -------------- |
    | room     | string | 房间ID         |
    | name     | string | 用户名         |
    | avatar   | Mixed  | 用户头像       |
    | audio    | boolean| 音频流         |
    | video    | boolean| 视频流         |
    | screen   | boolean| 屏幕共享        |
    | hide     | boolean| 隐藏自己       |
    | notify   | boolean| 欢迎信息       |
    | token    | string | jwt令牌        |

> **注意**
>
> `token` 参数在 `.env` 文件中设置为 `HOST_PROTECTED` 或者 `HOST_USER_AUTH` 时可选。有效的用户列表定义在 `HOST_USERS` 配置中。

</details>

<details>
<summary>主机保护配置</summary>

<br/>

当启用[主机保护](https://docs.mirotalk.com/mirotalk-p2p/host-protection/)或主机用户认证时，主机/用户必须提供在 `.env` 文件中指定的有效用户名和密码。

| 参数             | 值                                                                              | 描述                                                                              |
| ----------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `HOST_PROTECTED`  | 如果启用保护则为 `true`，否则为 `false`（默认为 `false`）                     | 在房间初始化时要求主机提供有效的用户名和密码。                                     |
| `HOST_USER_AUTH`  | 如果需要用户认证则为 `true`，否则为 `false`（默认为 `false`）。               | 决定是否需要主机认证。                                                             |
| `HOST_USERS`      | 包含用户对象的JSON数组：`{"username": "用户名", "password": "密码"}`           | 列出有效的主机用户及其凭据。                                                       |

</details>

<details open>
<summary>快速开始</summary>

![nodejs](public/images/nodejs.png)

- 在运行 MiroTalk P2P 之前，请确保已安装 `Node.js` [下载地址](https://nodejs.org/en/download)。

```bash
# 克隆此仓库
$ git clone https://github.com/miroslavpejic85/mirotalk.git
# 进入 mirotalk 目录
$ cd mirotalk
# 复制 .env.template 文件为 .env 并根据需要进行编辑
$ cp .env.template .env
# 复制 app/src/config.template.js 文件为 app/src/config.js 并根据需要进行编辑
$ cp app/src/config.template.js app/src/config.js
# 安装依赖项
$ npm install
# 启动服务器
$ npm start
```

- 在浏览器中打开 [http://localhost:3000](http://localhost:3000)。

</details>

<details open>
<summary>Docker 部署</summary>

<br/>

![docker](public/images/docker.png)

- 仓库地址 [docker hub](https://hub.docker.com/r/mirotalk/p2p)
- 安装 [docker engine](https://docs.docker.com/engine/install/) 和 [docker compose](https://docs.docker.com/compose/install/)

```bash
# 克隆此仓库
$ git clone https://github.com/miroslavpejic85/mirotalk.git
# 进入 mirotalk 目录
$ cd mirotalk
# 复制 .env.template 文件为 .env 并根据需要进行编辑
$ cp .env.template .env
# 复制 app/src/config.template.js 文件为 app/src/config.js 并根据需要进行编辑
$ cp app/src/config.template.js app/src/config.js
# 复制 docker-compose.template.yml 文件为 docker-compose.yml 并根据需要进行编辑
$ cp docker-compose.template.yml docker-compose.yml
# 从 Docker Hub 获取官方镜像
$ docker pull mirotalk/p2p:latest
# 创建并启动容器
$ docker-compose up # -d
# 停止并移除资源
$ docker-compose down
```

- 在浏览器中打开 [http://localhost:3000](http://localhost:3000)。

</details>

<details open>
<summary>嵌入会议</summary>

<br/>

![iframe](public/images/iframe.png)

要通过 iframe 在您的服务或应用中嵌入会议，请使用以下代码：

```html
<iframe
    allow="camera; microphone; display-capture; fullscreen; clipboard-read; clipboard-write; web-share; autoplay"
    src="https://p2p.mirotalk.com/newcall"
    style="height: 100vh; width: 100vw; border: 0px;"
></iframe>
```

</details>

<details>
<summary>文档</summary>

<br>

- `Ngrok/HTTPS:` 您可以按照[这些说明](docs/ngrok.md)从本地电脑直接启动视频会议，并通过 Ngrok 或 HTTPS 让其对外部网络可见，或按照[此说明](app/ssl/README.md)暴露在 HTTPS。
- `Stun/Turn:` 按照[此说明](./docs/coturn.md)安装自己的 [Stun & Turn](https://docs.mirotalk.com/coturn/stun-turn/)。
- `自托管:` 有关在您的专用服务器上`自托管 MiroTalk P2P`的详细指南，请参阅[此完整文档](docs/self-hosting.md)，它将提供所有必要的说明以帮助您顺利部署。
- `REST API:` [API 文档](https://docs.mirotalk.com/mirotalk-p2p/api/)使用 Swagger，地址为 http://localhost:3000/api/v1/docs。您也可以在这里查看[实时文档](https://p2p.mirotalk.com/api/v1/docs)。

### 1. 统计信息端点（获取服务器统计）

```bash
curl -X GET "http://localhost:3000/api/v1/stats" -H "authorization: mirotalkp2p_default_secret" -H "Content-Type: application/json"
curl -X GET "https://p2p.mirotalk.com/api/v1/stats" -H "authorization: mirotalkp2p_default_secret" -H "Content-Type: application/json"
curl -X GET "https://mirotalk.up.railway.app/api/v1/stats" -H "authorization: mirotalkp2p_default_secret" -H "Content-Type: application/json"
```

### 2. 活动会议端点（获取活动会议）

```bash
curl -X GET "http://localhost:3000/api/v1/meetings" -H "authorization: mirotalkp2p_default_secret" -H "Content-Type: application/json"
curl -X GET "https://p2p.mirotalk.com/api/v1/meetings" -H "authorization: mirotalkp2p_default_secret" -H "Content-Type: application/json"
curl -X GET "https://mirotalk.up.railway.app/api/v1/meetings" -H "authorization: mirotalkp2p_default_secret" -H "Content-Type: application/json"
```

### 3. 创建会议

```bash
curl -X POST "http://localhost:3000/api/v1/meeting" -H "authorization: mirotalkp2p_default_secret" -H "Content-Type: application/json"
curl -X POST "https://p2p.mirotalk.com/api/v1/meeting" -H "authorization: mirotalkp2p_default_secret" -H "Content-Type: application/json"
curl -X POST "https://mirotalk.up.railway.app/api/v1/meeting" -H "authorization: mirotalkp2p_default_secret" -H "Content-Type: application/json"
```

### 4. 加入会议（基础）

```bash
curl -X POST "http://localhost:3000/api/v1/join" -H "authorization: mirotalkp2p_default_secret" -H "Content-Type: application/json" --data '{"room":"test","name":"mirotalk","avatar":false,"audio":true,"video":true,"screen":false,"hide":false,"notify":true}'
curl -X POST "https://p2p.mirotalk.com/api/v1/join" -H "authorization: mirotalkp2p_default_secret" -H "Content-Type: application/json" --data '{"room":"test","name":"mirotalk","avatar":false,"audio":true,"video":true,"screen":false,"hide":false,"notify":true}'
curl -X POST "https://mirotalk.up.railway.app/api/v1/join" -H "authorization: mirotalkp2p_default_secret" -H "Content-Type: application/json" --data '{"room":"test","name":"mirotalk","avatar":false,"audio":true,"video":true,"screen":false,"hide":false,"notify":true}'
```

### 5. 使用令牌加入会议

```bash
curl -X POST "http://localhost:3000/api/v1/join" -H "authorization: mirotalkp2p_default_secret" -H "Content-Type: application/json" --data '{"room":"test","name":"mirotalk","audio":true,"video":true,"screen":false,"hide":false,"notify":true,"token":{"username":"用户名","password":"密码","presenter":true,"expire":"1h"}}'
curl -X POST "https://p2p.mirotalk.com/api/v1/join" -H "authorization: mirotalkp2p_default_secret" -H "Content-Type: application/json" --data '{"room":"test","name":"mirotalk","audio":true,"video":true,"screen":false,"hide":false,"notify":true,"token":{"username":"用户名","password":"密码","presenter":true,"expire":"1h"}}'
curl -X POST "https://mirotalk.up.railway.app/api/v1/join" -H "authorization: mirotalkp2p_default_secret" -H "Content-Type: application/json" --data '{"room":"test","name":"mirotalk","audio":true,"video":true,"screen":false,"hide":false,"notify":true,"token":{"username":"用户名","password":"密码","presenter":true,"expire":"1h"}}'
```

### 6. 生产令牌

```bash
curl -X POST "http://localhost:3000/api/v1/token" -H "authorization: mirotalkp2p_default_secret" -H "Content-Type: application/json" --data '{"username":"用户名","password":"密码","presenter":true,"expire":"1h"}'
curl -X POST "https://p2p.mirotalk.com/api/v1/token" -H "authorization: mirotalkp2p_default_secret" -H "Content-Type: application/json" --data '{"username":"用户名","password":"密码","presenter":true,"expire":"1h"}'
curl -X POST "https://mirotalk.up.railway.app/api/v1/token" -H "authorization: mirotalkp2p_default_secret" -H "Content-Type: application/json" --data '{"username":"用户名","password":"密码","presenter":true,"expire":"1h"}'
```

这些命令现在应该可以与 MiroTalk P2P 一起正常工作。

</details>

<details open>
<summary>Hetzner, Hostinger & Contabo</summary>

<br/>

[![Hetzner](public/sponsors/Hetzner.png)](https://hetzner.cloud/?ref=XdRifCzCK3bn)

此应用程序正在 Hetzner 运行，Hetzner 是 `最佳的` [云服务](https://www.hetzner.com/cloud) 和[专用根服务器](https://www.hetzner.com/dedicated-rootserver) 提供商之一。

---

使用 [我的个人链接](https://hetzner.cloud/?ref=XdRifCzCK3bn) 获得 `€20 云信用额度`。

---

[![Hostinger](public/advertisers/HostingerLogo.png)](https://hostinger.com/?REFERRALCODE=MIROTALK)

高速可靠的主机服务，提供24/7支持和卓越性能。立即着手吧！[点击这里](https://hostinger.com/?REFERRALCODE=MIROTALK)

---

[![Contabo](public/advertisers/ContaboLogo.png)](https://www.dpbolvw.net/click-101027391-14462707)

体验顶级的德国主机服务——专用服务器、VPS 和网络主机，价格超值。[立即探索](https://www.dpbolvw.net/click-101027391-14462707)

---

要为您自己的专用云服务器部署 `MiroTalk P2P` 的实例，请参考我们的详细 [自托管文档](https://docs.mirotalk.com/mirotalk-p2p/self-hosting/)。本指南将逐步引导您完成整个过程，确保顺利部署。

</details>

<details>
<summary>在线演示</summary>

<br/>

<a target="_blank" href="https://p2p.mirotalk.com"><img src="public/sponsors/Hetzner.png" style="width: 220px;"></a>

https://p2p.mirotalk.com

[![hetzner-qr](public/images/mirotalk-hetzner-qr.png)](https://p2p.mirotalk.com)

<br>

<a target="_blank" href="https://railway.app/new/template/mirotalk?referralCode=mirotalk"><img src="https://railway.app/button.svg" style="width: 220px;"></a>

https://mirotalk.up.railway.app

[![railway-qr](public/images/mirotalk-railway-qr.png)](https://mirotalk.up.railway.app)

</details>

<details>
<summary>安全</summary>

<br/>

有关安全性问题，请参考[此文档](./SECURITY.md)。

</details>

<details>
<summary>鸣谢</summary>

<br/>

- ianramzy (html [模板](https://cruip.com/demos/neon/))
- vasanthv (webrtc 逻辑)
- fabric.js（白板）

</details>

<details>
<summary>贡献</summary>

<br/>

- 欢迎贡献，您的支持非常宝贵！
- 在运行 `npm run lint` 之前，请先检查。

</details>

<details>
<summary>许可证</summary>

<br/>

[![AGPLv3](public/images/AGPLv3.png)](LICENSE)

MiroTalk P2P 是根据 AGPLv3（GNU 通用公共许可证 v3.0）条款进行免费且开源的。请尊重许可证条件，尤其是需要保持修改后的版本也是自由的，并公开提供给公众。您可以从[选择开源许可证](https://choosealicense.com/licenses/agpl-3.0/)快速了解该许可。

要购买 MiroTalk P2P 的许可证（条款与 AGPLv3 不同），可以在 [CodeCanyon](https://codecanyon.net/item/mirotalk-p2p-webrtc-realtime-video-conferences/38376661) 网站进行购买。这将使您能够按照具体需求调整许可条件。

</details>

<details open>
<summary>支持该项目</summary>

<br/>

您认为 MiroTalk P2P 对您的需求不可或缺吗？加入我们，通过 [成为支持者或赞助商](https://github.com/sponsors/miroslavpejic85) 支持这一变革性项目。这样做不仅可以让您的标志在这里显著展示，还可以促进 MiroTalk P2P 的增长和可持续性。您的支持对于确保这一有价值的平台继续繁荣并保持对所有人开放至关重要。立即行动——今天支持 MiroTalk P2P，成为这一激动人心的旅程的一部分！

|                                                                                                       |                                                                                        |
| ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [![BroadcastX](public/sponsors/BroadcastX.png)](https://broadcastx.de/)                                 | [![Hetzner](public/sponsors/HetznerLogo.png)](https://hetzner.cloud/?ref=XdRifCzCK3bn) |
| [![LuvLounge](public/sponsors/LuvLounge.png)](https://luvlounge.ca)                                     | [![QuestionPro](public/sponsors/QuestionPro.png)](https://www.questionpro.com)         |
| [![BrowserStack](public/sponsors/BrowserStack.png)](https://www.browserstack.com)                         | [![CrystalSound](public/sponsors/CrystalSound.png)](https://crystalsound.ai)           |
| [![Cloudron](public/sponsors/Cloudron.png)](https://cloudron.io)                                        | [![Kiquix](public/sponsors/KiquixLogo.png)](https://kiquix.com)                        |
| [![LambdaTest](public/sponsors/LambdaTest.png)](https://lambdatest.com/pricing?coupon=QURFODlQUk9NT1RFUg==&refid=1149848) |
|                                                                                                       |

</details>

<details open>
<summary>广告商</summary>

---

|                                                                                                |                                                                                                |
| ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------
[![Hostinger](public/advertisers/Hostinger.png)](https://hostinger.com/?REFERRALCODE=MIROTALK) | [![Contabo](public/advertisers/Contabo.png)](https://www.dpbolvw.net/click-101027391-14462707) |

---

</details>

## 探索更多 MiroTalk 项目：

<details>
<summary>MiroTalk SFU</summary>

<br>

也尝试一下 [MiroTalk SFU](https://github.com/miroslavpejic85/mirotalksfu) `选择性转发单元` 实时视频会议，针对大型团体进行了优化。无限时间、无限制并发房间，每个房间可容纳多达8+参与者，单个CPU支持最大约100人。

</details>

<details>
<summary>MiroTalk C2C</summary>

<br>

也尝试一下 [MiroTalk C2C](https://github.com/miroslavpejic85/mirotalkc2c) `点对点` 实时视频会议，针对摄像头到摄像头交流进行了优化。无限时间、无限制并发房间，每个房间最多为2个参与者。

</details>

<details>
<summary>MiroTalk BRO</summary>

<br>

也尝试一下 [MiroTalk BRO](https://github.com/miroslavpejic85/mirotalkbro) `实时广播` （点对点） 视频、音频和屏幕流直播给所有连接的用户（观众）。无限时间、无限制并发房间，每个房间有广播和多个观众。

</details>

<details>
<summary>MiroTalk WEB</summary>

<br>

也尝试一下 [MiroTalk WEB](https://github.com/miroslavpejic85/mirotalkwebrtc) 平台，它允许管理一个 `无限数量的用户`。每个用户必须注册他们的电子邮件、用户名和密码，然后才能访问其 `个人仪表板`。在仪表板中，用户可以 `管理房间并安排会议` 使用指定日期和时间的 MiroTalk 的所需版本。邀请可以发送通过电子邮件、共享网络浏览器或短信。

</details>

---

此项目已在 [BrowserStack](https://www.browserstack.com) 上进行了测试。

---
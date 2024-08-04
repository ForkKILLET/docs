import{_ as k,k as o,f as e,A as i,m as n,l as s,D as a,C as l,j as d}from"./chunks/framework.MHei6uDm.js";const M=JSON.parse('{"title":"Espace de travail","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/guide/develop/workspace.md","filePath":"fr-FR/guide/develop/workspace.md"}'),r={name:"fr-FR/guide/develop/workspace.md"},c=n('<h1 id="espace-de-travail" tabindex="-1">Espace de travail <a class="header-anchor" href="#espace-de-travail" aria-label="Permalink to &quot;Espace de travail&quot;">​</a></h1><p>Koishi 的核心是插件系统，绝大部分 Koishi 功能都可以通过插件实现。本章节将介绍如何使用模板项目开发和构建自己的 Koishi 插件。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>本节中介绍的命令行都需要在 <a href="./config.html#应用目录">应用目录</a> 下运行。</p></div><h2 id="创建新插件" tabindex="-1">创建新插件 <a class="header-anchor" href="#创建新插件" aria-label="Permalink to &quot;创建新插件&quot;">​</a></h2><p>在应用目录运行下面的命令以创建一个新的插件工作区：</p>',5),g=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," setup"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," [name] -- [-c] [-m] [-G]")])])])],-1),y=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," setup"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," [name] [-c] [-m] [-G]")])])])],-1),u=n(`<ul><li><strong>name:</strong> 插件的包名，缺省时将进行提问</li><li><strong>-c, --console:</strong> 创建一个带控制台扩展的插件</li><li><strong>-m, --monorepo:</strong> 创建 monorepo 的插件</li><li><strong>-G, --no-git:</strong> 跳过 git 初始化</li></ul><p>我们假设你创建了一个叫 <code>example</code> 的插件。那么，你将看到下面的目录结构：</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">root</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">├── external</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│   └── example</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       ├── src</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       │   └── index.ts</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">│       └── package.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">├── koishi.yml</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">└── package.json</span></span></code></pre></div><p>打开 <code>index.ts</code> 文件，并修改其中的代码：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Context</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;koishi&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;example&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> apply</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">ctx</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Context</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 如果收到“天王盖地虎”，就回应“宝塔镇河妖”</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">  ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;message&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">content</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;天王盖地虎&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">      session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">send</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;宝塔镇河妖&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>以 <a href="./script.html#开发模式">开发模式</a> 重新运行你的项目，点击右上角的「添加插件」按钮，选择你刚才创建的插件名称，你会立即在网页控制台的配置界面中看到 <code>example</code> 插件。只需点击启用，你就可以实现与机器人的对话了：</p>`,6),_=s("h3",{id:"创建私域插件",tabindex:"-1"},[a("创建私域插件 "),s("a",{class:"header-anchor",href:"#创建私域插件","aria-label":'Permalink to "创建私域插件"'},"​")],-1),C=s("p",null,[a("如果你发现想要创建的插件名称已经被占用了，除了重新想名字或在后面加上数字之外，你还可以改为创建私域插件。私域插件使用你自己的 "),s("a",{href:"./setup.html#注册-npm"},"npm 用户名"),a(" 作为包名前缀，因此不用担心与其他人的插件冲突。")],-1),F=s("p",null,[a("假设你的 npm 用户名是 "),s("code",null,"alice"),a("，那么你可以使用下面的命令创建一个私域插件工作区：")],-1),B=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," setup"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," @alice/example")])])])],-1),m=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," setup"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," @alice/example")])])])],-1),b=n(`<p>此外，你还需要额外修改 <code>tsconfig.json</code> 文件。打开这个文件，你将看到下面的内容：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;extends&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;./tsconfig.base&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;compilerOptions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;baseUrl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;paths&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">      // &quot;@scope/koishi-plugin-*&quot;: [&quot;external/*/src&quot;],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">      &quot;@alice/koishi-plugin-*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;external/*/src&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>找到高亮的一行代码，将其复制一份，并将 <code>@scope</code> 替换为你的 npm 用户名，然后将复制的这一行代码前面的注释符号去掉。</p><h2 id="构建源代码" tabindex="-1">构建源代码 <a class="header-anchor" href="#构建源代码" aria-label="Permalink to &quot;构建源代码&quot;">​</a></h2><p>上面的插件暂时还只能在开发模式下运行。如果想要在生产模式下使用或发布到插件市场，你需要构建你的源代码。在应用目录运行下面的命令：</p>`,5),A=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," build"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," [...name]")])])])],-1),E=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," build"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," [...name]")])])])],-1),v=n('<ul><li><strong>name:</strong> 要构建的插件列表，缺省时表示全部插件</li></ul><p>还是以上面的插件 <code>example</code> 为例：</p><ul><li>后端代码将输出到 <code>external/example/lib</code> 目录</li><li>前端代码将输出到 <code>external/example/dist</code> 目录 (如果存在)</li></ul><h2 id="添加依赖" tabindex="-1">添加依赖 <a class="header-anchor" href="#添加依赖" aria-label="Permalink to &quot;添加依赖&quot;">​</a></h2><p>插件创建时，<code>package.json</code> 中已经包含了一些必要的依赖。如果你需要添加其他依赖，可以使用下面的命令：</p>',5),f=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," install"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," [...deps] -w koishi-plugin-[name]")])])])],-1),x=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," workspace"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," koishi-plugin-[name]"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," add"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," [...deps]")])])])],-1),D=n('<ul><li><strong>name:</strong> 你的插件名称</li><li><strong>deps:</strong> 要添加的依赖列表</li></ul><p>如果要添加的是 <code>devDependencies</code> 或者 <code>peerDependencies</code>，你也需要在命令后面加上 <code>-D</code> 或 <code>-P</code> 参数。关于服务类插件的依赖声明，请参考 <a href="./../plugin/service.html#关于-peerdependencies">后续章节</a>。</p><h2 id="更新依赖版本" tabindex="-1">更新依赖版本 <a class="header-anchor" href="#更新依赖版本" aria-label="Permalink to &quot;更新依赖版本&quot;">​</a></h2><p>尽管 npm 和 yarn 等包管理器都提供了依赖更新功能，但它们对工作区开发的支持都不是很好。因此，我们也提供了一个简单的命令用于批量更新依赖版本。</p>',4),T=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," dep")])])])],-1),q=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," dep")])])])],-1),P=n('<p>这将按照每个 <code>package.json</code> 中声明的依赖版本进行更新。举个例子，如果某个依赖的版本是 <code>^1.1.4</code>，而这个依赖之后发布了新版本 <code>1.2.3</code> 和 <code>2.3.3</code>，那么运行该指令后，依赖的版本将会被更新为 <code>^1.2.3</code>。</p><h2 id="二次开发" tabindex="-1">二次开发 <a class="header-anchor" href="#二次开发" aria-label="Permalink to &quot;二次开发&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>阅读本节前请确保你已经完成 <a href="./setup.html#版本控制">版本控制</a> 中的全部准备工作。</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果你想要贡献原始仓库，在开始执行下面的操作之前，请确保你对要开发的仓库有写入权限。如果没有，你应当先创建属于自己的 fork，然后将下面的仓库名称替换为你的 fork 仓库名称。举个例子，假如你的 GitHub 用户名是 <code>alice</code>，那么下面你使用的仓库名称应当是 <code>alice/koishi-plugin-forward</code> 而不是 <code>koishijs/koishi-plugin-forward</code>。</p></div><p>二次开发是指调试或修改其他仓库中的插件。这种情况下，你需要先将对应的仓库克隆到本地，然后在本地进行调试和修改。</p><h3 id="开发插件" tabindex="-1">开发插件 <a class="header-anchor" href="#开发插件" aria-label="Permalink to &quot;开发插件&quot;">​</a></h3><p>其他人创建的工作区插件可以直接克隆到你的 <code>external</code> 目录下。例如，你可以使用下面的命令将 <code>koishi-plugin-forward</code> 插件克隆到本地：</p>',7),S=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," clone"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," koishijs/koishi-plugin-forward")])])])],-1),V=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," clone"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," koishijs/koishi-plugin-forward")])])])],-1),j=s("h3",{id:"开发-koishi",tabindex:"-1"},[a("开发 Koishi "),s("a",{class:"header-anchor",href:"#开发-koishi","aria-label":'Permalink to "开发 Koishi"'},"​")],-1),I=s("p",null,"工作区不仅可以用于插件的二次开发，还可以用于开发 Koishi 本身。只需使用下面的命令将 Koishi 仓库克隆到本地，并完成构建：",-1),w=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," clone"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," koishijs/koishi")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," build"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -w"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," @root/koishi")])])])],-1),N=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," clone"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," koishijs/koishi")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," workspace"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," @root/koishi"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," build")])])])],-1),K=s("p",null,[a("通常来说，非插件仓库在克隆下来之后还需经过路径配置才可以正常使用。不过不同担心，模板项目支持已经内置了 Koishi 生态中的几个核心仓库 ("),s("a",{href:"https://github.com/koishijs/koishi",target:"_blank",rel:"noreferrer"},"koishi"),a(", "),s("a",{href:"https://github.com/satorijs/satori",target:"_blank",rel:"noreferrer"},"satori"),a(", "),s("a",{href:"https://github.com/shigma/minato",target:"_blank",rel:"noreferrer"},"minato"),a(") 的路径配置。")],-1),R=s("p",null,[a("完成上述操作后，现在你的 "),s("code",null,"yarn dev"),a(" 已经能直接使用 Koishi 的 TypeScript 源码了！")],-1);function G($,O,H,J,U,z){const t=l("tab-select"),h=l("chat-message"),p=l("chat-panel");return d(),o("div",null,[c,e(t,{class:"code"},{"tab-npm":i(()=>[g]),"tab-yarn":i(()=>[y]),_:1}),u,e(p,null,{default:i(()=>[e(h,{nickname:"Alice"},{default:i(()=>[a("Sésame, ouvre-toi")]),_:1}),e(h,{nickname:"Koishi"},{default:i(()=>[a("Ali Baba")]),_:1})]),_:1}),_,C,F,e(t,{class:"code"},{"tab-npm":i(()=>[B]),"tab-yarn":i(()=>[m]),_:1}),b,e(t,{class:"code"},{"tab-npm":i(()=>[A]),"tab-yarn":i(()=>[E]),_:1}),v,e(t,{class:"code"},{"tab-npm":i(()=>[f]),"tab-yarn":i(()=>[x]),_:1}),D,e(t,{class:"code"},{"tab-npm":i(()=>[T]),"tab-yarn":i(()=>[q]),_:1}),P,e(t,{class:"code"},{"tab-npm":i(()=>[S]),"tab-yarn":i(()=>[V]),_:1}),j,I,e(t,{class:"code"},{"tab-npm":i(()=>[w]),"tab-yarn":i(()=>[N]),_:1}),K,R])}const Q=k(r,[["render",G]]);export{M as __pageData,Q as default};

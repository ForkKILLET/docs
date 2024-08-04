import{_ as e,k as l,l as s,D as i,f as n,A as h,m as a,C as o,j as d}from"./chunks/framework.MHei6uDm.js";const A=JSON.parse('{"title":"标准元素","description":"","frontmatter":{},"headers":[],"relativePath":"de-DE/api/message/elements.md","filePath":"de-DE/api/message/elements.md"}'),r={name:"de-DE/api/message/elements.md"},p=a(`<h1 id="标准元素" tabindex="-1">标准元素 <a class="header-anchor" href="#标准元素" aria-label="Permalink to &quot;标准元素&quot;">​</a></h1><p>这里列出了应该由各适配器实现的标准消息元素。各适配器由于平台的限制可能表现出一定的行为差异，但应尽可能贴近标准规定的语义。</p><div class="tip custom-block"><p class="custom-block-title">与 HTML 的区别</p><p>为了方便记忆，我们使用了许多 HTML 中出现的标签来表达类似的语义，如 <code>&lt;p&gt;</code>, <code>&lt;em&gt;</code> 等。但需要指出的是，这并不意味着这些同名的标签就有着相同的语义。这里举出几个例子：</p><ul><li>HTML 中标签 <code>&lt;u&gt;</code> 的定义是「表意不清标注元素」，而 Koishi 这里只使用了下划线的功能</li><li>HTML 中图像对应 <code>&lt;img&gt;</code> 标签，而 Koishi 中则是 <code>&lt;image&gt;</code>，并且语法也不相同</li></ul></div><h2 id="基础元素" tabindex="-1">基础元素 <a class="header-anchor" href="#基础元素" aria-label="Permalink to &quot;基础元素&quot;">​</a></h2><p>基础元素是最常见的消息元素，它们能够在大多数平台上正常显示，是组成消息的基本单位。</p><h3 id="纯文本" tabindex="-1">纯文本 (text) <a class="header-anchor" href="#纯文本" aria-label="Permalink to &quot;纯文本 (text)&quot;">​</a></h3><ul><li><strong>content:</strong> <code>string</code> 文本内容</li></ul><p>这是一个特殊的消息元素。它等价于一段纯文本，并且在序列化时也不会带两侧的标签。</p><h3 id="提及用户" tabindex="-1">提及用户 (at) <a class="header-anchor" href="#提及用户" aria-label="Permalink to &quot;提及用户 (at)&quot;">​</a></h3><ul><li><strong>id:</strong> <code>string</code> 目标用户的 ID</li><li><strong>name:</strong> <code>string</code> 目标用户的名称</li><li><strong>role:</strong> <code>string</code> 目标角色</li><li><strong>type:</strong> <code>string</code> 特殊操作，例如 all 表示 @全体成员，here 表示 @在线成员</li></ul><p><code>&lt;at&gt;</code> 元素用于提及某个或某些用户。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>由于上述几个属性的语义是互斥的，发送时使用 <code>id</code>, <code>role</code>, <code>type</code> 其一即可。</p></div><h3 id="提及频道" tabindex="-1">提及频道 (sharp) <a class="header-anchor" href="#提及频道" aria-label="Permalink to &quot;提及频道 (sharp)&quot;">​</a></h3><ul><li><strong>id:</strong> <code>string</code> 目标频道的 ID</li><li><strong>name:</strong> <code>string</code> 目标频道的名称</li></ul><p><code>&lt;sharp&gt;</code> 元素用于提及某个频道。</p><h3 id="链接" tabindex="-1">链接 (a) <a class="header-anchor" href="#链接" aria-label="Permalink to &quot;链接 (a)&quot;">​</a></h3><ul><li><strong>href:</strong> <code>string</code> 链接的 URL</li></ul><p><code>&lt;a&gt;</code> 元素用于显示一个链接。当平台不支持链接时，建议显示为 <code>content (href)</code> 的形式。</p><h2 id="资源元素" tabindex="-1">资源元素 <a class="header-anchor" href="#资源元素" aria-label="Permalink to &quot;资源元素&quot;">​</a></h2><p>资源消息元素表示文本中存在的资源文件。不同的平台对资源文件的支持存在较大的差异。发送时只需提供 <code>url</code>。如果某个平台不支持特定的资源类型，适配器应该用 <code>url</code> 代替。如果某个平台不支持将资源消息元素和其他消息元素同时发送，适配器应该分多条发送，并返回最后一条消息的 ID。</p><ul><li><strong>url:</strong> <code>string</code> 资源的 URL</li><li><strong>cache:</strong> <code>boolean</code> 是否使用已缓存的文件</li><li><strong>timeout:</strong> <code>string</code> 下载文件的最长时间</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>非网络资源的 URL 写法</strong></p><ul><li>本地文件请使用 <code>file:</code> 协议</li><li>二进制数据请使用 <code>data:</code> 协议</li></ul><p>关于它们的最佳实践，可以参考 <a href="./../../guide/basic/element.html#嵌入图片和其他资源">嵌入图片和其他资源</a>。</p></div><h3 id="图片" tabindex="-1">图片 (image) <a class="header-anchor" href="#图片" aria-label="Permalink to &quot;图片 (image)&quot;">​</a></h3><p>除了上述通用属性外，还支持下面的属性：</p><ul><li><strong>type:</strong> 特殊类型，例如 <code>flash</code> 表示闪照</li></ul><p><code>&lt;image&gt;</code> 元素用于表示图片。</p><h3 id="语音" tabindex="-1">语音 (audio) <a class="header-anchor" href="#语音" aria-label="Permalink to &quot;语音 (audio)&quot;">​</a></h3><p>参见上述通用属性。</p><p><code>&lt;audio&gt;</code> 元素用于表示语音。</p><h3 id="视频" tabindex="-1">视频 (video) <a class="header-anchor" href="#视频" aria-label="Permalink to &quot;视频 (video)&quot;">​</a></h3><p>参见上述通用属性。</p><p><code>&lt;video&gt;</code> 元素用于表示视频。</p><h3 id="文件" tabindex="-1">文件 (file) <a class="header-anchor" href="#文件" aria-label="Permalink to &quot;文件 (file)&quot;">​</a></h3><p>参见上述通用属性。</p><p><code>&lt;file&gt;</code> 元素用于表示文件。</p><h2 id="修饰元素" tabindex="-1">修饰元素 <a class="header-anchor" href="#修饰元素" aria-label="Permalink to &quot;修饰元素&quot;">​</a></h2><p>修饰元素用于修饰其中的内容。如果对应的平台不支持对应的元素，可以忽略这个元素本身，正常渲染其中的子元素。</p><h3 id="粗体" tabindex="-1">粗体 (b, strong) <a class="header-anchor" href="#粗体" aria-label="Permalink to &quot;粗体 (b, strong)&quot;">​</a></h3><p><code>&lt;b&gt;</code> 或 <code>&lt;strong&gt;</code> 元素用于将其中的内容以粗体显示。</p><h3 id="斜体" tabindex="-1">斜体 (i, em) <a class="header-anchor" href="#斜体" aria-label="Permalink to &quot;斜体 (i, em)&quot;">​</a></h3><p><code>&lt;i&gt;</code> 或 <code>&lt;em&gt;</code> 元素用于将其中的内容以斜体显示。</p><h3 id="下划线" tabindex="-1">下划线 (u, ins) <a class="header-anchor" href="#下划线" aria-label="Permalink to &quot;下划线 (u, ins)&quot;">​</a></h3><p><code>&lt;u&gt;</code> 或 <code>&lt;ins&gt;</code> 元素用于为其中的内容附加下划线。</p><h3 id="删除线" tabindex="-1">删除线 (s, del) <a class="header-anchor" href="#删除线" aria-label="Permalink to &quot;删除线 (s, del)&quot;">​</a></h3><p><code>&lt;s&gt;</code> 或 <code>&lt;del&gt;</code> 元素用于为其中的内容附加删除线。</p><h3 id="剧透" tabindex="-1">剧透 (spl) <a class="header-anchor" href="#剧透" aria-label="Permalink to &quot;剧透 (spl)&quot;">​</a></h3><p><code>&lt;spl&gt;</code> 元素用于将其中的内容标记为剧透 (默认会被隐藏，点击后才显示)。</p><h3 id="代码" tabindex="-1">代码 (code) <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码 (code)&quot;">​</a></h3><p><code>&lt;code&gt;</code> 元素用于将其中的内容以等宽字体显示 (通常还会有特定的背景色)。</p><h3 id="上标" tabindex="-1">上标 (sup) <a class="header-anchor" href="#上标" aria-label="Permalink to &quot;上标 (sup)&quot;">​</a></h3><p><code>&lt;sup&gt;</code> 元素用于将其中的内容以上标显示。</p><h3 id="下标" tabindex="-1">下标 (sub) <a class="header-anchor" href="#下标" aria-label="Permalink to &quot;下标 (sub)&quot;">​</a></h3><p><code>&lt;sub&gt;</code> 元素用于将其中的内容以下标显示。</p><h2 id="排版元素" tabindex="-1">排版元素 <a class="header-anchor" href="#排版元素" aria-label="Permalink to &quot;排版元素&quot;">​</a></h2><h3 id="换行" tabindex="-1">换行 (br) <a class="header-anchor" href="#换行" aria-label="Permalink to &quot;换行 (br)&quot;">​</a></h3><p><code>&lt;br&gt;</code> 元素表示一个独立的换行。</p><h3 id="段落" tabindex="-1">段落 (p) <a class="header-anchor" href="#段落" aria-label="Permalink to &quot;段落 (p)&quot;">​</a></h3><p><code>&lt;p&gt;</code> 元素表示一个段落。在渲染时，它与相邻的元素之间会确保有一个换行。</p><h3 id="消息" tabindex="-1">消息 (message) <a class="header-anchor" href="#消息" aria-label="Permalink to &quot;消息 (message)&quot;">​</a></h3><ul><li><strong>id:</strong> <code>string</code> 消息 ID</li><li><strong>forward:</strong> <code>boolean</code> 是否为转发消息</li></ul><p><code>&lt;message&gt;</code> 元素的基本用法是表示一条消息。子元素对应于消息的内容。如果其没有子元素，则消息不会被发送。</p><p>当出现 <code>&lt;message&gt;</code> 元素时，之前的元素会被立即视为一条消息被发送。因此下面的两种写法是等价的：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">&lt;!-- 第一种写法：发送两条消息 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">message</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;hello&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">message</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">message</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;world&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">message</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">&lt;!-- 第二种写法：用一条空消息隔开两段文本，实际上仍然会发送两条消息 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">hello&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">message</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/&gt;world</span></span></code></pre></div><p>部分平台允许你模拟其他用户发送消息：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">message</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">author</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;123123123&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Alice&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> avatar</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  hello world</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">message</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>在支持转发的平台上，你可以使用 <code>forward</code> 配合 <code>id</code> 属性来转发一条消息：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">message</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;123456789&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> forward</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/&gt;</span></span></code></pre></div><p>在支持合并转发的平台上，你可以使用带有 <code>forward</code> 属性的 <code>&lt;message&gt;</code> 元素嵌套其他 <code>&lt;message&gt;</code> 元素来实现合并转发：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">message</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> forward</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">message</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;123456789&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">message</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;987654321&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  &lt;!-- 合并转发里也可以嵌套模拟其他用户发送的消息 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">message</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">author</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;123123123&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Alice&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> avatar</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    hello world</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">message</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">message</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h2 id="元信息元素" tabindex="-1">元信息元素 <a class="header-anchor" href="#元信息元素" aria-label="Permalink to &quot;元信息元素&quot;">​</a></h2><p>元信息元素通常不会被渲染，但会影响到消息的发送行为。</p><h3 id="引用" tabindex="-1">引用 (quote) <a class="header-anchor" href="#引用" aria-label="Permalink to &quot;引用 (quote)&quot;">​</a></h3><p><code>&lt;quote&gt;</code> 元素用于表示对消息引用。它的子元素会被渲染为引用的内容。理论上所有 <code>&lt;message&gt;</code> 元素的特性也可以用于 <code>&lt;quote&gt;</code> 元素，包括子元素 (构造引用消息) 和 <code>forward</code> 属性 (引用合并转发)。然而目前似乎并没有平台提供了这样的支持。</p><h3 id="作者" tabindex="-1">作者 (author) <a class="header-anchor" href="#作者" aria-label="Permalink to &quot;作者 (author)&quot;">​</a></h3><ul><li><strong>id:</strong> <code>string</code> 用户 ID</li><li><strong>name:</strong> <code>string</code> 昵称</li><li><strong>avatar:</strong> <code>string</code> 头像 URL</li></ul><p><code>&lt;author&gt;</code> 元素用于表示消息的作者。它的子元素会被渲染为作者的名字。</p><h2 id="交互元素" tabindex="-1">交互元素 <a class="header-anchor" href="#交互元素" aria-label="Permalink to &quot;交互元素&quot;">​</a></h2><p>交互元素用于显然消息中的可交互性内容。如果平台不支持此类元素且难以提供回退，可以直接忽略整个元素。实现侧应当根据平台特性，针对性地返回带有交互和不带有交互的消息。</p>`,78),k={id:"按钮",tabindex:"-1"},c=s("a",{class:"header-anchor",href:"#按钮","aria-label":'Permalink to "按钮 (button) <badge type="warning">实验性</badge>"'},"​",-1),g=a("<ul><li><strong>id:</strong> <code>string</code> 按钮的 ID</li><li><strong>type:</strong> <code>string</code> 按钮的类型</li><li><strong>href:</strong> <code>string</code> 按钮的链接</li><li><strong>text:</strong> <code>string</code> 待输入文本</li><li><strong>theme:</strong> <code>string</code> 按钮的风格</li></ul><p><code>&lt;button&gt;</code> 元素用于表示一个按钮。它的子元素会被渲染为按钮的文本。</p><p>按钮目前支持三种不同的类型：</p><ul><li>点击 <code>action</code> 类型的按钮时会触发一个 <code>interaction/button</code> 事件，该事件的 <code>button</code> 资源会包含上述 <code>id</code></li><li>点击 <code>link</code> 类型的按钮时会打开一个链接，该链接的地址为上述 <code>href</code></li><li>点击 <code>input</code> 类型的按钮时会在用户的输入框中填充上述 <code>text</code></li></ul><p><code>theme</code> 仅建议使用下列值：</p><ul><li>primary</li><li>secondary</li><li>success</li><li>warning</li><li>danger</li><li>info</li></ul>",6);function u(B,y,m,b,f,q){const t=o("badge");return d(),l("div",null,[p,s("h3",k,[i("按钮 (button) "),n(t,{type:"warning"},{default:h(()=>[i("实验性")]),_:1}),i(),c]),g])}const F=e(r,[["render",u]]);export{A as __pageData,F as default};

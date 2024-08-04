import{_ as n,k as o,l as a,D as e,f as s,A as i,m as l,C as r,j as d}from"./chunks/framework.MHei6uDm.js";const F=JSON.parse('{"title":"适配器 (Adapter)","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/api/core/adapter.md","filePath":"fr-FR/api/core/adapter.md"}'),c={name:"fr-FR/api/core/adapter.md"},p=l('<h1 id="适配器" tabindex="-1">适配器 (Adapter) <a class="header-anchor" href="#适配器" aria-label="Permalink to &quot;适配器 (Adapter)&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>参见：<a href="./../../guide/adapter/adapter.html">开发 &gt; 跨平台 &gt; 实现适配器</a></p></div><p>本章将介绍与适配器相关的内容，这是一个相当底层的概念，因此如果你并不打算编写一个平台实现，你完全可以跳过本章节。</p>',3),h=l('<h2 id="类-adapter" tabindex="-1">类：Adapter <a class="header-anchor" href="#类-adapter" aria-label="Permalink to &quot;类：Adapter&quot;">​</a></h2><p>适配器基类。</p><h3 id="new-adapter" tabindex="-1">new Adapter() <a class="header-anchor" href="#new-adapter" aria-label="Permalink to &quot;new Adapter()&quot;">​</a></h3><p>构造一个适配器实例。</p><h3 id="adapter-bots" tabindex="-1">adapter.bots <a class="header-anchor" href="#adapter-bots" aria-label="Permalink to &quot;adapter.bots&quot;">​</a></h3><ul><li>类型: <code>Bot[]</code></li></ul><p>当前适配器下的全部机器人实例。</p>',7),_={id:"adapter-connect",tabindex:"-1"},k=a("a",{class:"header-anchor",href:"#adapter-connect","aria-label":'Permalink to "adapter.connect(bot) <badge>抽象</badge>"'},"​",-1),b=a("ul",null,[a("li",null,[a("strong",null,"bot:"),e(),a("code",null,"Bot"),e(" 机器人实例")]),a("li",null,[e("返回值: "),a("code",null,"Promise<void>")])],-1),u=a("p",null,[e("连接 Bot 所需的操作，将在 "),a("code",null,"bot.start()"),e(" 中被调用。")],-1),g={id:"adapter-disconnect",tabindex:"-1"},C=a("a",{class:"header-anchor",href:"#adapter-disconnect","aria-label":'Permalink to "adapter.disconnect(bot) <badge>抽象</badge>"'},"​",-1),m=l(`<ul><li><strong>bot:</strong> <code>Bot</code> 机器人实例</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>停止连接 Bot 所需的操作，将在 <code>bot.stop()</code> 中被调用。</p><h2 id="类-adapter-wsclient" tabindex="-1">类：Adapter.WsClient <a class="header-anchor" href="#类-adapter-wsclient" aria-label="Permalink to &quot;类：Adapter.WsClient&quot;">​</a></h2><p>一个用于 WebSocket 通信方式的实用适配器基类。其中的机器人需要接受以下配置项：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> WsClientConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  retryLazy</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  retryTimes</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  retryInterval</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="new-wsclient" tabindex="-1">new WsClient(ctx, bot) <a class="header-anchor" href="#new-wsclient" aria-label="Permalink to &quot;new WsClient(ctx, bot)&quot;">​</a></h3><ul><li><strong>ctx:</strong> <code>Context</code> 上下文</li><li><strong>bot:</strong> <code>Bot</code> 机器人实例</li></ul><p>创建一个 WsClient 适配器实例。</p><h3 id="client-bot" tabindex="-1">client.bot <a class="header-anchor" href="#client-bot" aria-label="Permalink to &quot;client.bot&quot;">​</a></h3><ul><li>类型: <code>Bot</code></li></ul><p>当前适配器下的机器人实例。</p><h3 id="client-socket" tabindex="-1">client.socket <a class="header-anchor" href="#client-socket" aria-label="Permalink to &quot;client.socket&quot;">​</a></h3><ul><li>类型: <code>WebSocket</code></li></ul><p>当前适配器下的 WebSocket 实例。</p>`,14),f={id:"client-prepare",tabindex:"-1"},A=a("a",{class:"header-anchor",href:"#client-prepare","aria-label":'Permalink to "client.prepare() <badge>抽象</badge>"'},"​",-1),B=a("ul",null,[a("li",null,[e("返回值: "),a("code",null,"WebSocket | Promise<WebSocket>")])],-1),P=a("p",null,"根据机器人实例生成一个 WebSocket 对象。",-1),x={id:"client-accept",tabindex:"-1"},y=a("a",{class:"header-anchor",href:"#client-accept","aria-label":'Permalink to "client.accept() <badge>抽象</badge>"'},"​",-1),D=a("p",null,[e("WebSocket 连接成功建立后的回调函数。你需要实现这个方法，并在其中手动调用 "),a("code",null,"bot.resolve()"),e(" 回调函数表示已经连接成功。")],-1);function T(S,q,E,v,w,W){const t=r("badge");return d(),o("div",null,[p,a("p",null,[e("标有 "),s(t,null,{default:i(()=>[e("抽象")]),_:1}),e(" 的方法需要由适配器插件自行实现。")]),h,a("h3",_,[e("adapter.connect(bot) "),s(t,null,{default:i(()=>[e("抽象")]),_:1}),e(),k]),b,u,a("h3",g,[e("adapter.disconnect(bot) "),s(t,null,{default:i(()=>[e("抽象")]),_:1}),e(),C]),m,a("h3",f,[e("client.prepare() "),s(t,null,{default:i(()=>[e("抽象")]),_:1}),e(),A]),B,P,a("h3",x,[e("client.accept() "),s(t,null,{default:i(()=>[e("抽象")]),_:1}),e(),y]),D])}const I=n(c,[["render",T]]);export{F as __pageData,I as default};

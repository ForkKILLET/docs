import{_ as l,k as o,l as s,D as e,f as t,A as i,m as n,C as d,j as r}from"./chunks/framework.MHei6uDm.js";const F=JSON.parse('{"title":"消息 (Message)","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/api/resources/message.md","filePath":"ja-JP/api/resources/message.md"}'),h={name:"ja-JP/api/resources/message.md"},c=n(`<h1 id="消息" tabindex="-1">消息 (Message) <a class="header-anchor" href="#消息" aria-label="Permalink to &quot;消息 (Message)&quot;">​</a></h1><h2 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Message</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  id</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  channel</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Channel</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  user</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> User</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  member</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Member</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  quote</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Message</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  content</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  createdAt</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  updatedAt</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2>`,4),g={id:"bot-sendmessage",tabindex:"-1"},p=s("a",{class:"header-anchor",href:"#bot-sendmessage","aria-label":'Permalink to "bot.sendMessage(channelId, content) <badge>内置</badge>"'},"​",-1),k=n('<ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>content:</strong> <code>Fragment</code> 要发送的内容</li><li>返回值: <code>Promise&lt;string[]&gt;</code> 发送的消息 ID</li></ul><p>向特定频道发送消息。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>只要你能够获取到会话对象，你就不应使用此 API，而应该使用 <a href="./../core/session.html#session-send"><code>session.send()</code></a>。一些平台会将主动发送的消息同被动接收后回复的消息区分开来，甚至可能限制主动消息的发送，因此使用 <a href="./../core/session.html#session-send"><code>session.send()</code></a> 总是有更好的可靠性。</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>bot.sendMessage()</code> 既可以发送群聊消息，也可以发送私聊消息。当发送私聊消息时，其与 <code>bot.sendPrivateMessage()</code> 的区别在于前者传入的是频道 ID，而后者传入的是用户 ID。</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>大多数情况下应当使用 <a href="./../message/encoder.html"><code>MessageEncoder</code></a> 实现消息发送功能，而不是直接实现此方法。</p></div>',5),m={id:"bot-sendprivatemessage",tabindex:"-1"},b=s("a",{class:"header-anchor",href:"#bot-sendprivatemessage","aria-label":'Permalink to "bot.sendPrivateMessage(userId, content, guildId?) <badge>内置</badge>"'},"​",-1),_=n('<ul><li><strong>userId:</strong> <code>string</code> 对方 ID</li><li><strong>content:</strong> <code>Fragment</code> 要发送的内容</li><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li>返回值: <code>Promise&lt;string[]&gt;</code> 发送的消息 ID</li></ul><p>向特定用户发送私聊消息。</p><h3 id="bot-getmessage" tabindex="-1">bot.getMessage(channelId, messageId) <a class="header-anchor" href="#bot-getmessage" aria-label="Permalink to &quot;bot.getMessage(channelId, messageId)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>messageId:</strong> <code>string</code> 消息 ID</li><li>返回值: <code>Promise&lt;Message&gt;</code></li></ul><p>获取特定消息。</p><h3 id="bot-deletemessage" tabindex="-1">bot.deleteMessage(channelId, messageId) <a class="header-anchor" href="#bot-deletemessage" aria-label="Permalink to &quot;bot.deleteMessage(channelId, messageId)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>messageId:</strong> <code>string</code> 消息 ID</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>撤回特定消息。</p><h3 id="bot-editmessage" tabindex="-1">bot.editMessage(channelId, messageId, content) <a class="header-anchor" href="#bot-editmessage" aria-label="Permalink to &quot;bot.editMessage(channelId, messageId, content)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>messageId:</strong> <code>string</code> 消息 ID</li><li><strong>content:</strong> <code>Fragment</code> 要发送的内容</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>修改特定消息。</p><h3 id="bot-getmessagelist" tabindex="-1">bot.getMessageList(channelId, next?) <a class="header-anchor" href="#bot-getmessagelist" aria-label="Permalink to &quot;bot.getMessageList(channelId, next?)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>next:</strong> <code>string</code> 分页令牌</li><li>返回值: <code>Promise&lt;List&lt;Message&gt;&gt;</code> 消息列表</li></ul><p>获取频道消息列表。</p>',14),u={id:"bot-getmessageiter",tabindex:"-1"},I=s("a",{class:"header-anchor",href:"#bot-getmessageiter","aria-label":'Permalink to "bot.getMessageIter(channelId) <badge>内置</badge>"'},"​",-1),C=s("ul",null,[s("li",null,[s("strong",null,"channelId:"),e(),s("code",null,"string"),e(" 频道 ID")]),s("li",null,[e("返回值: "),s("code",null,"AsyncIterable<Message>"),e(" 异步迭代器")])],-1),D=s("p",null,"获取频道消息的异步迭代器。",-1),A={id:"bot-broadcast",tabindex:"-1"},P=s("a",{class:"header-anchor",href:"#bot-broadcast","aria-label":'Permalink to "bot.broadcast(channels, content, delay?) <badge>内置</badge>"'},"​",-1),y=n('<ul><li><strong>channels:</strong> <code>string[]</code> 频道列表</li><li><strong>content:</strong> <code>string</code> 要发送的内容</li><li><strong>delay:</strong> <code>number</code> 发送消息间的延迟，默认值为 <a href="./../core/app.html#options-delay"><code>config.delay.broadcast</code></a></li><li>返回值: <code>Promise&lt;string[]&gt;</code> 成功发送的消息 ID 列表</li></ul><p>向多个频道广播消息。如有失败不会抛出错误。</p><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><h3 id="message-created" tabindex="-1">message-created <a class="header-anchor" href="#message-created" aria-label="Permalink to &quot;message-created&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>触发方式: emit</li><li>别名: <code>message</code></li></ul><p>收到消息时触发。</p><h3 id="message-updated" tabindex="-1">message-updated <a class="header-anchor" href="#message-updated" aria-label="Permalink to &quot;message-updated&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>触发方式: emit</li></ul><p>消息被修改时触发。</p><h3 id="message-deleted" tabindex="-1">message-deleted <a class="header-anchor" href="#message-deleted" aria-label="Permalink to &quot;message-deleted&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>触发方式: emit</li></ul><p>消息被撤回时触发。</p>',12);function B(f,E,T,M,x,q){const a=d("badge");return r(),o("div",null,[c,s("h3",g,[e("bot.sendMessage(channelId, content) "),t(a,null,{default:i(()=>[e("内置")]),_:1}),e(),p]),k,s("h3",m,[e("bot.sendPrivateMessage(userId, content, guildId?) "),t(a,null,{default:i(()=>[e("内置")]),_:1}),e(),b]),_,s("h3",u,[e("bot.getMessageIter(channelId) "),t(a,null,{default:i(()=>[e("内置")]),_:1}),e(),I]),C,D,s("h3",A,[e("bot.broadcast(channels, content, delay?) "),t(a,null,{default:i(()=>[e("内置")]),_:1}),e(),P]),y])}const S=l(h,[["render",B]]);export{F as __pageData,S as default};

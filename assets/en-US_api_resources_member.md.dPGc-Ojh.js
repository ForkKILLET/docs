import{_ as d,k as r,l as i,D as e,f as t,A as l,m as s,C as o,j as n}from"./chunks/framework.MHei6uDm.js";const B=JSON.parse('{"title":"群组成员 (GuildMember)","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/api/resources/member.md","filePath":"en-US/api/resources/member.md"}'),u={name:"en-US/api/resources/member.md"},g=s(`<h1 id="群组成员" tabindex="-1">群组成员 (GuildMember) <a class="header-anchor" href="#群组成员" aria-label="Permalink to &quot;群组成员 (GuildMember)&quot;">​</a></h1><h2 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> GuildMember</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  user</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> User</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  name</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  avatar</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  joinedAt</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="bot-getguildmember" tabindex="-1">bot.getGuildMember(guildId, userId) <a class="header-anchor" href="#bot-getguildmember" aria-label="Permalink to &quot;bot.getGuildMember(guildId, userId)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>userId:</strong> <code>string</code> 用户 ID</li><li>返回值: <code>Promise&lt;GuildMember&gt;</code> 群成员信息</li></ul><p>获取群成员信息。</p><h3 id="bot-getguildmemberlist" tabindex="-1">bot.getGuildMemberList(guildId, next?) <a class="header-anchor" href="#bot-getguildmemberlist" aria-label="Permalink to &quot;bot.getGuildMemberList(guildId, next?)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>next:</strong> <code>string</code> 分页令牌</li><li>返回值: <code>Promise&lt;List&lt;GuildMember&gt;&gt;</code> 群成员列表</li></ul><p>获取群成员列表。</p>`,10),h={id:"bot-getguildmemberiter",tabindex:"-1"},m=i("a",{class:"header-anchor",href:"#bot-getguildmemberiter","aria-label":'Permalink to "bot.getGuildMemberIter(guildId) <badge>内置</badge>"'},"​",-1),c=s('<ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li>返回值: <code>AsyncIterable&lt;GuildMember&gt;</code> 异步迭代器</li></ul><p>获取群成员列表的异步迭代器。</p><h3 id="bot-kickguildmember" tabindex="-1">bot.kickGuildMember(guildId, userId, permanent?) <a class="header-anchor" href="#bot-kickguildmember" aria-label="Permalink to &quot;bot.kickGuildMember(guildId, userId, permanent?)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>userId:</strong> <code>string</code> 用户 ID</li><li><strong>permanent:</strong> <code>boolean</code> 是否永久踢出 (用户无法再次加入群组)</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>将某个用户踢出群组。</p>',5),b={id:"bot-muteguildmember",tabindex:"-1"},p=i("a",{class:"header-anchor",href:"#bot-muteguildmember","aria-label":'Permalink to "bot.muteGuildMember(guildId, userId, duration?, reason?) <badge type="warning">实验性</badge>"'},"​",-1),k=s('<ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>userId:</strong> <code>string</code> 用户 ID</li><li><strong>duration:</strong> <code>number</code> 禁言时长 (毫秒)</li><li><strong>reason:</strong> <code>string</code> 禁言说明</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>将某个用户禁言。如果传入的禁言时长为 <code>0</code> 则表示解除禁言。</p><h3 id="bot-handleguildmemberrequest" tabindex="-1">bot.handleGuildMemberRequest(messageId, approve, comment?) <a class="header-anchor" href="#bot-handleguildmemberrequest" aria-label="Permalink to &quot;bot.handleGuildMemberRequest(messageId, approve, comment?)&quot;">​</a></h3><ul><li><strong>messageId:</strong> <code>string</code> 请求 ID</li><li><strong>approve:</strong> <code>boolean</code> 是否通过请求</li><li><strong>comment:</strong> <code>string</code> 备注信息</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>处理加群请求。</p><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><h3 id="guild-member-added" tabindex="-1">guild-member-added <a class="header-anchor" href="#guild-member-added" aria-label="Permalink to &quot;guild-member-added&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>触发方式: emit</li></ul><p>新成员加入群组时触发。</p><h3 id="guild-member-updated" tabindex="-1">guild-member-updated <a class="header-anchor" href="#guild-member-updated" aria-label="Permalink to &quot;guild-member-updated&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>触发方式: emit</li></ul><p>群组成员信息更新时触发。</p><h3 id="guild-member-removed" tabindex="-1">guild-member-removed <a class="header-anchor" href="#guild-member-removed" aria-label="Permalink to &quot;guild-member-removed&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>触发方式: emit</li></ul><p>群组成员退出群组时触发。</p><h3 id="guild-member-request" tabindex="-1">guild-member-request <a class="header-anchor" href="#guild-member-request" aria-label="Permalink to &quot;guild-member-request&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>触发方式: emit</li></ul><p>接收到新的加群请求时触发。</p>',18);function _(I,q,C,D,P,A){const a=o("badge");return n(),r("div",null,[g,i("h3",h,[e("bot.getGuildMemberIter(guildId) "),t(a,null,{default:l(()=>[e("内置")]),_:1}),e(),m]),c,i("h3",b,[e("bot.muteGuildMember(guildId, userId, duration?, reason?) "),t(a,{type:"warning"},{default:l(()=>[e("实验性")]),_:1}),e(),p]),k])}const y=d(u,[["render",_]]);export{B as __pageData,y as default};

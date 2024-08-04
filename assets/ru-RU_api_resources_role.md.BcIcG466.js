import{_ as o,k as d,l,D as e,f as a,A as r,m as i,C as s,j as n}from"./chunks/framework.MHei6uDm.js";const f=JSON.parse('{"title":"群组角色 (GuildRole)","description":"","frontmatter":{},"headers":[],"relativePath":"ru-RU/api/resources/role.md","filePath":"ru-RU/api/resources/role.md"}'),u={name:"ru-RU/api/resources/role.md"},g=i(`<h1 id="群组角色" tabindex="-1">群组角色 (GuildRole) <a class="header-anchor" href="#群组角色" aria-label="Permalink to &quot;群组角色 (GuildRole)&quot;">​</a></h1><h2 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> GuildRole</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  id</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  name</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="bot-setguildmemberrole" tabindex="-1">bot.setGuildMemberRole(guildId, userId, roleId) <a class="header-anchor" href="#bot-setguildmemberrole" aria-label="Permalink to &quot;bot.setGuildMemberRole(guildId, userId, roleId)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>userId:</strong> <code>string</code> 用户 ID</li><li><strong>roleId:</strong> <code>string</code> 角色 ID</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>设置群组内用户的角色。</p><h3 id="bot-unsetguildmemberrole" tabindex="-1">bot.unsetGuildMemberRole(guildId, userId, roleId) <a class="header-anchor" href="#bot-unsetguildmemberrole" aria-label="Permalink to &quot;bot.unsetGuildMemberRole(guildId, userId, roleId)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>userId:</strong> <code>string</code> 用户 ID</li><li><strong>roleId:</strong> <code>string</code> 角色 ID</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>取消群组内用户的角色。</p><h3 id="bot-getguildrolelist" tabindex="-1">bot.getGuildRoleList(guildId, next?) <a class="header-anchor" href="#bot-getguildrolelist" aria-label="Permalink to &quot;bot.getGuildRoleList(guildId, next?)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>next:</strong> <code>string</code> 分页令牌</li><li>返回值: <code>Promise&lt;List&lt;GuildRole&gt;&gt;</code> 角色列表</li></ul><p>获取群组角色列表。</p>`,13),c={id:"bot-getguildroleiter",tabindex:"-1"},h=l("a",{class:"header-anchor",href:"#bot-getguildroleiter","aria-label":'Permalink to "bot.getGuildRoleIter(guildId) <badge>内置</badge>"'},"​",-1),p=i('<ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li>返回值: <code>AsyncIterable&lt;GuildRole&gt;</code> 异步迭代器</li></ul><p>获取群组角色列表的异步迭代器。</p><h3 id="bot-createguildrole" tabindex="-1">bot.createGuildRole(guildId, data) <a class="header-anchor" href="#bot-createguildrole" aria-label="Permalink to &quot;bot.createGuildRole(guildId, data)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>data:</strong> <code>Partial&lt;GuildRole&gt;</code> 角色信息</li><li>返回值: <code>Promise&lt;GuildRole&gt;</code></li></ul><p>创建群组角色。</p><h3 id="bot-updateguildrole" tabindex="-1">bot.updateGuildRole(guildId, roleId, data) <a class="header-anchor" href="#bot-updateguildrole" aria-label="Permalink to &quot;bot.updateGuildRole(guildId, roleId, data)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>roleId:</strong> <code>string</code> 角色 ID</li><li><strong>data:</strong> <code>Partial&lt;GuildRole&gt;</code> 角色信息</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>修改群组角色。</p><h3 id="bot-deleteguildrole" tabindex="-1">bot.deleteGuildRole(guildId, roleId) <a class="header-anchor" href="#bot-deleteguildrole" aria-label="Permalink to &quot;bot.deleteGuildRole(guildId, roleId)&quot;">​</a></h3><ul><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li><strong>roleId:</strong> <code>string</code> 角色 ID</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>删除群组角色。</p><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><h3 id="guild-role-created" tabindex="-1">guild-role-created <a class="header-anchor" href="#guild-role-created" aria-label="Permalink to &quot;guild-role-created&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>触发方式: emit</li></ul><p>创建群组角色时触发。</p><h3 id="guild-role-updated" tabindex="-1">guild-role-updated <a class="header-anchor" href="#guild-role-updated" aria-label="Permalink to &quot;guild-role-updated&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>触发方式: emit</li></ul><p>群组角色信息更新时触发。</p><h3 id="guild-role-deleted" tabindex="-1">guild-role-deleted <a class="header-anchor" href="#guild-role-deleted" aria-label="Permalink to &quot;guild-role-deleted&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>触发方式: emit</li></ul><p>删除群组角色时触发。</p>',21);function b(I,k,m,_,P,R){const t=s("badge");return n(),d("div",null,[g,l("h3",c,[e("bot.getGuildRoleIter(guildId) "),a(t,null,{default:r(()=>[e("内置")]),_:1}),e(),h]),p])}const D=o(u,[["render",b]]);export{f as __pageData,D as default};

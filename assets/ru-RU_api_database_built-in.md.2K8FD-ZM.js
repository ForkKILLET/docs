import{_ as o,k as s,l as a,D as e,f as l,A as r,m as t,C as d,j as n}from"./chunks/framework.MHei6uDm.js";const k=JSON.parse('{"title":"内置数据结构","description":"","frontmatter":{},"headers":[],"relativePath":"ru-RU/api/database/built-in.md","filePath":"ru-RU/api/database/built-in.md"}'),c={name:"ru-RU/api/database/built-in.md"},g=t('<h1 id="内置数据结构" tabindex="-1">内置数据结构 <a class="header-anchor" href="#内置数据结构" aria-label="Permalink to &quot;内置数据结构&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>参见：<a href="./../../guide/database/builtin.html">开发 &gt; 数据库 &gt; 内置数据结构</a></p></div><p>Koishi 的数据库 API 实际上分为两部分：</p><ul><li>Minato 定义的通用数据库接口，由数据库插件实现</li><li>Koishi 内置数据结构相关的方法，由 Koishi 提供实现</li></ul><p>这一页中将仅展示第二部分的内容。另一部分的内容请参见 <a href="./database.html">数据库操作</a>。</p><h2 id="内置表" tabindex="-1">内置表 <a class="header-anchor" href="#内置表" aria-label="Permalink to &quot;内置表&quot;">​</a></h2><h3 id="user" tabindex="-1">User <a class="header-anchor" href="#user" aria-label="Permalink to &quot;User&quot;">​</a></h3><ul><li><strong>id:</strong> <code>id</code> 用户 ID</li><li><strong>name:</strong> <code>string</code> 用户昵称</li><li><strong>authority:</strong> <code>number</code> <a href="./../../guide/database/permission.html">权限等级</a></li><li><strong>permissions:</strong> <code>string[]</code> <a href="./../../guide/database/permission.html">权限列表</a></li><li><strong>locales:</strong> <code>string[]</code> 语言列表</li></ul><h3 id="binding" tabindex="-1">Binding <a class="header-anchor" href="#binding" aria-label="Permalink to &quot;Binding&quot;">​</a></h3><ul><li><strong>aid:</strong> <code>id</code> 用户 ID</li><li><strong>platform:</strong> <code>string</code> 平台名</li><li><strong>pid:</strong> <code>string</code> 平台账号</li></ul><h3 id="channel" tabindex="-1">Channel <a class="header-anchor" href="#channel" aria-label="Permalink to &quot;Channel&quot;">​</a></h3><ul><li><strong>platform:</strong> <code>string</code> 平台名</li><li><strong>id:</strong> <code>string</code> 平台账号</li><li><strong>assignee:</strong> <code>string</code> <a href="./../../manual/usage/customize.html#受理人机制">受理人</a></li><li><strong>permissions:</strong> <code>string[]</code> <a href="./../../guide/database/permission.html">权限列表</a></li><li><strong>locales:</strong> <code>string[]</code> 语言列表</li></ul><h2 id="内置实例方法" tabindex="-1">内置实例方法 <a class="header-anchor" href="#内置实例方法" aria-label="Permalink to &quot;内置实例方法&quot;">​</a></h2><p>下列实例方法直接由 @koishijs/core 提供实现。</p><h3 id="ctx-database-getuser" tabindex="-1">ctx.database.getUser(platform, id, modifier?) <a class="header-anchor" href="#ctx-database-getuser" aria-label="Permalink to &quot;ctx.database.getUser(platform, id, modifier?)&quot;">​</a></h3><ul><li><strong>platform:</strong> <code>string</code> 平台名</li><li><strong>id:</strong> <code>string</code> 用户标识符</li><li><strong>modifier:</strong> <code>QueryModifier&lt;User.Field&gt;</code> 请求修饰符</li><li>返回值: <code>Promise&lt;User&gt;</code> 用户数据</li></ul><p>向数据库请求用户数据。</p><h3 id="ctx-database-setuser" tabindex="-1">ctx.database.setUser(platform, id, data) <a class="header-anchor" href="#ctx-database-setuser" aria-label="Permalink to &quot;ctx.database.setUser(platform, id, data)&quot;">​</a></h3><ul><li><strong>platform:</strong> <code>string</code> 平台名</li><li><strong>id:</strong> <code>string</code> 用户标识符</li><li><strong>data:</strong> <code>User</code> 要修改 / 添加的数据</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>向数据库修改或添加用户数据。</p><h3 id="ctx-database-getchannel" tabindex="-1">ctx.database.getChannel(platform, id, fields?) <a class="header-anchor" href="#ctx-database-getchannel" aria-label="Permalink to &quot;ctx.database.getChannel(platform, id, fields?)&quot;">​</a></h3><ul><li><strong>platform:</strong> <code>string</code> 平台名</li><li><strong>id:</strong> <code>string</code> 频道标识符</li><li><strong>fields:</strong> <code>QueryModifier&lt;User.Field&gt;</code> 请求修饰符</li><li>返回值: <code>Promise&lt;Channel&gt;</code> 频道数据</li></ul><p>向数据库请求频道数据。</p>',23),h={id:"ctx-database-getassignedchannels",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#ctx-database-getassignedchannels","aria-label":'Permalink to "ctx.database.getAssignedChannels(fields?, platform?, assignees?) <badge type="danger">废弃</badge>"'},"​",-1),m=t('<ul><li><strong>fields:</strong> <code>ChannelField[]</code> 请求的字段，默认为全部字段</li><li><strong>platform:</strong> <code>string</code> 平台名，默认为全平台</li><li><strong>assignees:</strong> <code>string[]</code> 代理者列表，默认为当前运行的全部机器人</li><li>返回值: <code>Promise&lt;Channel[]&gt;</code> 频道数据列表</li></ul><p>向数据库请求被特定机器人管理的所有频道数据。这里的两个参数可以写任意一个，都可以识别。</p><h3 id="ctx-database-setchannel" tabindex="-1">ctx.database.setChannel(platform, id, data) <a class="header-anchor" href="#ctx-database-setchannel" aria-label="Permalink to &quot;ctx.database.setChannel(platform, id, data)&quot;">​</a></h3><ul><li><strong>platform:</strong> <code>string</code> 平台名</li><li><strong>id:</strong> <code>number</code> 频道标识符</li><li><strong>data:</strong> <code>Channel</code> 要修改 / 添加的数据</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>向数据库修改或添加频道数据。</p>',5);function b(p,f,_,x,P,q){const i=d("badge");return n(),s("div",null,[g,a("h3",h,[e("ctx.database.getAssignedChannels(fields?, platform?, assignees?) "),l(i,{type:"danger"},{default:r(()=>[e("废弃")]),_:1}),e(),u]),m])}const T=o(c,[["render",b]]);export{k as __pageData,T as default};

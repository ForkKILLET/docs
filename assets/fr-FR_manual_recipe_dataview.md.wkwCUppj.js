import{_ as a,a as e}from"./chunks/database.dark.DrdhuidD.js";import{_ as t,k as o,j as s,m as c}from"./chunks/framework.MHei6uDm.js";const v=JSON.parse('{"title":"访问数据库","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/manual/recipe/dataview.md","filePath":"fr-FR/manual/recipe/dataview.md"}'),r={name:"fr-FR/manual/recipe/dataview.md"},i=c('<h1 id="访问数据库" tabindex="-1">访问数据库 <a class="header-anchor" href="#访问数据库" aria-label="Permalink to &quot;访问数据库&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>直接对数据库进行操作时需要小心谨慎哦~</p></div><p>控制台左侧的数据库选项提供了一个数据库面板，你可以在这里对 Koishi 的数据库进行查看、新增、修改或是删除。通常这里包含了各用户和频道的信息，以及 bot 在各频道发送消息的频率记录。</p><p class="light-only"><img src="'+a+'" alt="database"></p><p class="dark-only"><img src="'+e+'" alt="database"></p><p>有时你可能希望或需要手动对数据库进行操作，比如使用 <code>Admin</code> 插件中的 <code>authorize</code> 指令为用户设定权限时，操作者默认必须拥有 4 级以上的权限。</p><p>这时我们可以进入控制台的 <code>数据库</code> 页面中，在 <code>user</code> 表中的对应平台（如 onebot）列下方，找到你自己的账号（需要先在平台至少向 Bot 发送一条消息），然后将其对应的 authority 从 1 修改为 大于等于 4 的数值。这样这个账号就拥有更高的权限啦，现在试试使用 authorize 指令为好友提升权限吧~</p>',7),d=[i];function p(_,l,n,m,h,u){return s(),o("div",null,d)}const k=t(r,[["render",p]]);export{v as __pageData,k as default};

import{_ as e,k as o,j as a,m as i}from"./chunks/framework.MHei6uDm.js";const _=JSON.parse('{"title":"@koishijs/plugin-hmr","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/plugins/develop/hmr.md","filePath":"en-US/plugins/develop/hmr.md"}'),r={name:"en-US/plugins/develop/hmr.md"},t=i('<h1 id="koishijs-plugin-hmr" tabindex="-1">@koishijs/plugin-hmr <a class="header-anchor" href="#koishijs-plugin-hmr" aria-label="Permalink to &quot;@koishijs/plugin-hmr&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>使用方法请参见 <a href="./../../guide/develop/script.html#模块热替换">开发 &gt; 开发起步 &gt; 启动脚本</a> 章节。</p></div><h2 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h2><h3 id="base" tabindex="-1">base <a class="header-anchor" href="#base" aria-label="Permalink to &quot;base&quot;">​</a></h3><ul><li>类型：<code>string</code></li><li>默认值：<code>process.cwd()</code></li></ul><p>用于监听和显示的基础目录。检测到的文件路径会被转换为相对 <code>base</code> 的路径输出。</p><h3 id="root" tabindex="-1">root <a class="header-anchor" href="#root" aria-label="Permalink to &quot;root&quot;">​</a></h3><ul><li>类型：<code>string | string[]</code></li><li>默认值：<code>[&#39;.&#39;]</code></li></ul><p>用于监听的文件或目录列表。支持填写绝对路径或是相对 <code>base</code> 的路径。</p><h3 id="ignore" tabindex="-1">ignore <a class="header-anchor" href="#ignore" aria-label="Permalink to &quot;ignore&quot;">​</a></h3><ul><li>类型：<code>string | string[]</code></li><li>默认值：<code>[&#39;**/node_modules/**&#39;, &#39;**/.git/**&#39;, &#39;**/logs/**&#39;]</code></li></ul><p>要忽略的文件或目录。支持 <a href="https://github.com/micromatch/micromatch" target="_blank" rel="noreferrer">Glob Patterns</a> 语法。</p><h3 id="debounce" tabindex="-1">debounce <a class="header-anchor" href="#debounce" aria-label="Permalink to &quot;debounce&quot;">​</a></h3><ul><li>类型：<code>number</code></li><li>默认值：<code>100</code></li></ul><p>延迟触发更新的等待时间。</p>',15),l=[t];function s(c,d,n,h,u,p){return a(),o("div",null,l)}const b=e(r,[["render",s]]);export{_ as __pageData,b as default};

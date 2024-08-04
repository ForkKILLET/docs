import{_ as i,k as a,j as e,m as o}from"./chunks/framework.MHei6uDm.js";const b=JSON.parse('{"title":"可逆的 Koishi","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/cookbook/design/reversible.md","filePath":"fr-FR/cookbook/design/reversible.md"}'),l={name:"fr-FR/cookbook/design/reversible.md"},t=o('<h1 id="可逆的-koishi" tabindex="-1">可逆的 Koishi <a class="header-anchor" href="#可逆的-koishi" aria-label="Permalink to &quot;可逆的 Koishi&quot;">​</a></h1><p>可逆化是 Koishi 的核心设计理念。</p><h2 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h2><p>可逆的 Koishi 是指，对于任何一个 Koishi 实例，任意进行加载和卸载插件操作后，实例行为仅与最终启用的插件相关；与中间是否重复加载过插件、插件之间的加载或卸载顺序都无关。你也可以简单理解为「路径无关」。这里的相关和无关具体包括：</p><ul><li>多次加载并卸载一个插件后，内存占用不会增加</li><li>加载并卸载任何插件不会残留对其他插件的影响</li><li>如果插件之间有依赖关系，依赖的插件会自动在被依赖的插件之后加载，并自动在被依赖的插件之前卸载，即确保插件的生命周期由依赖关系而非加载顺序决定</li></ul><h2 id="设计动机" tabindex="-1">设计动机 <a class="header-anchor" href="#设计动机" aria-label="Permalink to &quot;设计动机&quot;">​</a></h2><p>实现了「可逆的 Koishi」的项目将会获得以下优点。</p><h3 id="rechargement-a-l-execution" tabindex="-1">Rechargement à l&#39;exécution <a class="header-anchor" href="#rechargement-a-l-execution" aria-label="Permalink to &quot;Rechargement à l&#39;exécution&quot;">​</a></h3><p>由于插件的副作用会在卸载时回收，Koishi 的所有插件都将可以在运行时加载、卸载和重载。这显著降低了用户的开发和更新成本，并大幅提高了 Koishi 应用的 SLA。</p><h3 id="异步加载" tabindex="-1">异步加载 <a class="header-anchor" href="#异步加载" aria-label="Permalink to &quot;异步加载&quot;">​</a></h3><p>由于插件的加载顺序由依赖关系决定，因此插件的代码可以被异步地加载，而不需要担心加载顺序对可用性的影响。这将显著提高 Koishi 的启动速度。</p><h3 id="可追踪" tabindex="-1">可追踪 <a class="header-anchor" href="#可追踪" aria-label="Permalink to &quot;可追踪&quot;">​</a></h3><p>可逆性意味着由 Koishi 插件注册的指令和中间件、监听的事件、提供的本地化、扩展的页面、抛出的错误都可以被明确地追踪来源。这有利于在大型项目中快速定位问题。</p><h2 id="生态现状" tabindex="-1">生态现状 <a class="header-anchor" href="#生态现状" aria-label="Permalink to &quot;生态现状&quot;">​</a></h2><p>目前的 Koishi 生态普遍依赖此模式。</p><h3 id="依赖服务的插件" tabindex="-1">依赖服务的插件 <a class="header-anchor" href="#依赖服务的插件" aria-label="Permalink to &quot;依赖服务的插件&quot;">​</a></h3><p>Koishi 存在大量依赖服务的插件。任何插件可以声明自身依赖某些服务，由 Koishi 确保插件只在服务加载完成后加载，并在卸载开始前卸载。</p><h3 id="koishijs-plugin-config" tabindex="-1">@koishijs/plugin-config <a class="header-anchor" href="#koishijs-plugin-config" aria-label="Permalink to &quot;@koishijs/plugin-config&quot;">​</a></h3><p>@koishijs/plugin-config 提供了「插件管理」页面，允许用户在运行时启用、停用、修改插件配置，而不用重启 Koishi。这些功能直接与 Cordis 的底层 API 交互，确保了所有操作的可逆性。</p><h3 id="koishijs-plugin-hmr" tabindex="-1">@koishijs/plugin-hmr <a class="header-anchor" href="#koishijs-plugin-hmr" aria-label="Permalink to &quot;@koishijs/plugin-hmr&quot;">​</a></h3><p>@koishijs/plugin-hmr 允许用户在开发过程中直接通过保存源文件来按需重载插件源码和配置。这是非常少见的后端 HMR (Hot Module Replacement，模块热替换) 实现。</p><h3 id="koishijs-client" tabindex="-1">@koishijs/client <a class="header-anchor" href="#koishijs-client" aria-label="Permalink to &quot;@koishijs/client&quot;">​</a></h3><p>Koishi 的控制台前端由 @koishijs/client 提供，这个包同样依赖了 Cordis。这意味着 Koishi 的前端插件也是可重载的。此两者共同确保了 Koishi 控制台插件的可逆性。</p><h2 id="实现原理" tabindex="-1">实现原理 <a class="header-anchor" href="#实现原理" aria-label="Permalink to &quot;实现原理&quot;">​</a></h2><h3 id="基本概念" tabindex="-1">基本概念 <a class="header-anchor" href="#基本概念" aria-label="Permalink to &quot;基本概念&quot;">​</a></h3><p>可逆 Koishi 的实现依赖于两个基本概念。</p><ul><li>称一个代码片段是 <strong>可回收 (disposable)</strong> 的，如果其提供一个回收函数，执行该函数会清除代码的副作用 (包括注册的行为、占用的内存、依赖该代码片段的其他代码片段的加载)。</li><li>称一个函数是 <strong>自回收 (self-disposable)</strong> 的，如果其包含的代码片段是可回收的，并且回收函数会在这个函数所在的代码片段被回收时调用。</li></ul><p>在这个定义下，Koishi 是可逆的可以被等价地表达为「所有的 Koishi 插件都是可回收的」。</p><h3 id="插件实现" tabindex="-1">插件实现 <a class="header-anchor" href="#插件实现" aria-label="Permalink to &quot;插件实现&quot;">​</a></h3><p>要实现一个代码片段的可回收需要确保代码片段中的每一条语句都满足以下三个性质之一：</p><ul><li>无副作用 (含副作用可以被运行时 GC 的情况)</li><li>有副作用，但是副作用被其他语句手动回收</li><li>是自回收的函数的调用</li></ul><p>目前绝大部分 Koishi 提供的 API 均实现了无副作用或者自回收：</p><ul><li>无副作用： <ul><li>ctx.any()</li><li>ctx.database.get()：可能会创建一个连接，但连接有超时机制，因此可以视为无副作用</li></ul></li><li>自回收： <ul><li>ctx.command()：含链式调用中的 .option() 等，会创建多个回收函数</li><li>ctx.on()</li><li>ctx.middleware()</li><li>ctx.plugin()：如果插件是可回收的，那么它就是自回收的</li><li>ctx.i18n.define()</li><li>ctx.component()</li><li>ctx.setInterval()</li><li>ctx.router.get()：通过修改了 Koa Router 的行为实现</li></ul></li><li>有副作用且不自回收： <ul><li>ctx.model.extend()：尽管有副作用，但认为影响不大，且保留此副作用有利于优化，故不进行回收</li></ul></li></ul><p>所以对于插件开发者来说，只需要通过 dispose 事件处理非 Koishi 官方 API 并且有副作用的例子即可，因此并没有明显的额外心智负担。</p><h3 id="服务实现" tabindex="-1">服务实现 <a class="header-anchor" href="#服务实现" aria-label="Permalink to &quot;服务实现&quot;">​</a></h3><p>服务方法的副作用通常需要服务自己进行回收，也就是说需要设计为自回收的。需要通过 <code>ctx.scope.collect()</code> 进行实现，目前普遍使用的服务均支持此功能，但由于此部分没有收入官方文档，社区中的服务开发者可能并未熟知相关的技术。</p>',36),h=[t];function s(r,n,c,d,u,p){return e(),a("div",null,h)}const m=i(l,[["render",s]]);export{b as __pageData,m as default};

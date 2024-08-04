import{_ as e,k as a,j as t,m as r}from"./chunks/framework.MHei6uDm.js";const f=JSON.parse('{"title":"v4.1 版本介紹","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/about/releases/v4.1.md","filePath":"zh-TW/about/releases/v4.1.md"}'),o={name:"zh-TW/about/releases/v4.1.md"},i=r('<h1 id="v4-1-版本介紹" tabindex="-1">v4.1 版本介紹 <a class="header-anchor" href="#v4-1-版本介紹" aria-label="Permalink to &quot;v4.1 版本介紹&quot;">​</a></h1><ul><li><a href="https://github.com/koishijs/koishi/issues/472" target="_blank" rel="noreferrer">Roadmap</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.0.1" target="_blank" rel="noreferrer">v4.0.1</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.1.0" target="_blank" rel="noreferrer">v4.1.0</a></li></ul><h2 id="插件與熱重載優化" tabindex="-1">插件與熱重載優化 <a class="header-anchor" href="#插件與熱重載優化" aria-label="Permalink to &quot;插件與熱重載優化&quot;">​</a></h2><p>在這個版本中我們優化了插件的加載方式。一方面我們緩解了 service 監聽器數量很容易超過限製導致內存泄漏警告的問題，另一方面熱重載導致的內存泄漏和加載錯誤的問題也得到了修復。</p><p>除此以外，我們還要隆重介紹 Koishi v4 的熱重載功能。它將擁有許多全新的特性：</p><h3 id="細粒度的模塊依賴分析" tabindex="-1">細粒度的模塊依賴分析 <a class="header-anchor" href="#細粒度的模塊依賴分析" aria-label="Permalink to &quot;細粒度的模塊依賴分析&quot;">​</a></h3><p>過去的熱重載功能會將任何文件變動都擴展到根插件 (即配置文件中聲明的插件)，並重載擴散路徑上的每一個文件。而新的依賴分析工具能夠將文件變動引發的副作用具體計算到每一個模塊，因此部分變動在到達某個子插件時就會停止擴散，從而在大型插件中獲得更好的開發體驗。</p><p>為了實現這種優化，我們假設每個插件模塊的導出都是原子的。換言之，如果一個模塊的導出恰好是正在運行的插件，那麽這個插件將是模塊導出的唯一用途，在插件被加載以外的任何地方不會用到這個模塊的導出。對於正確使用模塊化進行開發的項目，達成這個約定並不困難。事實上，插件如果有任何其他需要提供的功能，也都可以通過 Service API 實現。</p><p>如果某些插件實在難以滿足這個約定，我們也提供了額外的方案。開發者要麽不將插件作為模塊的導出 (比如作為導出的一部分)，要麽在插件中手動聲明 <code>sideEffect</code>。兩種方法都能規避依賴分析工具的優化，從而實行保守的熱重載策略。</p><h3 id="熱重載與配置管理的聯動" tabindex="-1">熱重載與配置管理的聯動 <a class="header-anchor" href="#熱重載與配置管理的聯動" aria-label="Permalink to &quot;熱重載與配置管理的聯動&quot;">​</a></h3><p>在過去，插件熱重載與插件管理 (@koishijs/plugin-manager) 是作為獨立的功能開發的。當它們同時啟用時可能會遇到一些問題。當插件管理器修改了靜態的配置文件 (例如 koishi.config.yml) 時，熱重載機製可能檢測不到變動；但當我們將靜態配置文件納入依賴分析，又會導致配置管理器明明只修改了一個插件的配置，卻會導致整個應用被重新啟動 (因為配置文件的依賴優先級是最高的)。</p><p>這次更新我們針對這個問題提供了統一的解決方案。首先插件管理器將只針對靜態配置文件的場景生效，其次當啟用了熱重載功能時，一旦需要修改配置文件，插件管理器將不再觸發插件變動，交由依賴分析工具處理改動過的配置文件。開發者得以同時使用插件管理器和熱重載功能，獲得更好的開發體驗。</p><h3 id="更多細節優化" tabindex="-1">更多細節優化 <a class="header-anchor" href="#更多細節優化" aria-label="Permalink to &quot;更多細節優化&quot;">​</a></h3><p>新版本中我们还支持了新的配置项 <code>config.watch.debounce</code>，用于控制热重载的触发频率。默认情况下文件变动 100ms 之后才会触发热重载，解决了强迫症程序员频繁保存带来的高频率热重载问题。以及我们还加入了对 json 配置文件的写入支持 (不过有了 yaml 真的会有人用 json 吗)。</p>',14),s=[i];function h(l,n,c,d,p,_){return t(),a("div",null,s)}const m=e(o,[["render",h]]);export{f as __pageData,m as default};

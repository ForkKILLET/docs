import{_ as e,k as a,j as r,m as i}from"./chunks/framework.MHei6uDm.js";const p=JSON.parse('{"title":"v4.10 版本介紹","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/about/releases/v4.10.md","filePath":"zh-TW/about/releases/v4.10.md"}'),t={name:"zh-TW/about/releases/v4.10.md"},o=i('<h1 id="v4-10-版本介紹" tabindex="-1">v4.10 版本介紹 <a class="header-anchor" href="#v4-10-版本介紹" aria-label="Permalink to &quot;v4.10 版本介紹&quot;">​</a></h1><ul><li><a href="https://github.com/koishijs/koishi/issues/839" target="_blank" rel="noreferrer">Roadmap</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.10.0" target="_blank" rel="noreferrer">v4.10.0</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.10.1" target="_blank" rel="noreferrer">v4.10.1</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.10.2" target="_blank" rel="noreferrer">v4.10.2</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.10.3" target="_blank" rel="noreferrer">v4.10.3</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.10.4" target="_blank" rel="noreferrer">v4.10.4</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.10.5" target="_blank" rel="noreferrer">v4.10.5</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.10.6" target="_blank" rel="noreferrer">v4.10.6</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.10.7" target="_blank" rel="noreferrer">v4.10.7</a></li></ul><h2 id="orm-更新" tabindex="-1">ORM 更新 <a class="header-anchor" href="#orm-更新" aria-label="Permalink to &quot;ORM 更新&quot;">​</a></h2><p>此版本中，我們對 Koishi 背後的 ORM 框架進行了最佳化，極大地擴充套件了資料庫 API 的表達能力：</p><ul><li>使用 WASM 重新實現了 @koishijs/plugin-database-sqlite，從而規避了使用者安裝失敗的問題</li><li>支援了所有資料庫統一的 <code>autoInc</code> 行為</li><li><code>sel.orderBy()</code> 和 <code>sel.project()</code> 支援了傳入表示式</li><li>全面支援了 <code>sel.groupBy()</code> 的使用以及上述語法的多次鏈式呼叫</li></ul><h2 id="訊息元件" tabindex="-1">訊息元件 <a class="header-anchor" href="#訊息元件" aria-label="Permalink to &quot;訊息元件&quot;">​</a></h2><p>本次更新我們為訊息元素加入了更多特性，包括元件、插值、註釋、模板元素、JSX 支援等，同時也支援了訊息元件在會話和本地化檔案中的使用。這意味著使用者可以直接在外掛中編寫 JSX 來發送訊息，而不再需要使用 XML 字串了。</p><h2 id="飛書介面卡" tabindex="-1">飛書介面卡 <a class="header-anchor" href="#飛書介面卡" aria-label="Permalink to &quot;飛書介面卡&quot;">​</a></h2><p>經過了長達 7 個月的努力，我們終於完成了飛書介面卡，讓我們感謝 <a href="https://github.com/maikotan" target="_blank" rel="noreferrer">@MaikoTan</a>！</p><h2 id="本地化編輯" tabindex="-1">本地化編輯 <a class="header-anchor" href="#本地化編輯" aria-label="Permalink to &quot;本地化編輯&quot;">​</a></h2><p>釋出了全新的 @koishijs/plugin-locales 外掛，它提供了一個控制檯頁面，允許使用者線上編輯任意本地化文字。</p><h2 id="配置檔案插值" tabindex="-1">配置檔案插值 <a class="header-anchor" href="#配置檔案插值" aria-label="Permalink to &quot;配置檔案插值&quot;">​</a></h2><div><p>在這個版本中，我們還支援了使用插值語法配置非字串的配置項。這允許你更好地利用環境變數進行配置，比如將 <code>port</code> 設定為 <code>${{ +env.BASE_PORT }}</code> 等等。這也意味著你現在甚至可以在配置檔案中使用函數了！</p></div>',13),s=[o];function l(h,n,c,d,k,u){return r(),a("div",null,s)}const b=e(t,[["render",l]]);export{p as __pageData,b as default};

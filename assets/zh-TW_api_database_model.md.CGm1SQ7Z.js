import{_ as i,k as d,l as t,D as e,f as n,A as s,m as l,C as r,j as c}from"./chunks/framework.MHei6uDm.js";const V=JSON.parse('{"title":"資料模型 (Model)","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/api/database/model.md","filePath":"zh-TW/api/database/model.md"}'),o={name:"zh-TW/api/database/model.md"},h=l(`<h1 id="資料模型" tabindex="-1">資料模型 (Model) <a class="header-anchor" href="#資料模型" aria-label="Permalink to &quot;資料模型 (Model)&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>参见：<a href="./../../guide/database/model.html">开发 &gt; 数据库 &gt; 数据模型</a></p></div><p><code>ctx.model</code> 是 Koishi 的内置服务。其上的方法可以用于定义或扩展数据表及其字段。</p><h2 id="資料型別" tabindex="-1">資料型別 <a class="header-anchor" href="#資料型別" aria-label="Permalink to &quot;資料型別&quot;">​</a></h2><p>数据类型会被用于 <a href="#model-extend"><code>model.extend()</code></a> 方法中，其定义如下：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Field</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  type</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  length</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  nullable</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> boolean</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  initial</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> T</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  comment</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  legacy</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="數值型別" tabindex="-1">數值型別 <a class="header-anchor" href="#數值型別" aria-label="Permalink to &quot;數值型別&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">名稱</th><th style="text-align:center;">TS 型別</th><th style="text-align:center;">預設長度</th><th style="text-align:center;">預設初始值</th><th style="text-align:center;">說明</th></tr></thead><tbody><tr><td style="text-align:center;">integer</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">10</td><td style="text-align:center;"><code>0</code></td><td style="text-align:center;">有符號整型數，長度決定了資料的範圍</td></tr><tr><td style="text-align:center;">unsigned</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">10</td><td style="text-align:center;"><code>0</code></td><td style="text-align:center;">無符號整型數，長度決定了資料的範圍</td></tr><tr><td style="text-align:center;">float</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">固定長度</td><td style="text-align:center;"><code>0</code></td><td style="text-align:center;">單精度浮點數</td></tr><tr><td style="text-align:center;">double</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">固定長度</td><td style="text-align:center;"><code>0</code></td><td style="text-align:center;">雙精度浮點數</td></tr></tbody></table><h3 id="字串型別" tabindex="-1">字串型別 <a class="header-anchor" href="#字串型別" aria-label="Permalink to &quot;字串型別&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">名稱</th><th style="text-align:center;">TS 型別</th><th style="text-align:center;">預設長度</th><th style="text-align:center;">預設初始值</th><th style="text-align:center;">說明</th></tr></thead><tbody><tr><td style="text-align:center;">char</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">64</td><td style="text-align:center;"><code>&#39;&#39;</code></td><td style="text-align:center;">定長的字串</td></tr><tr><td style="text-align:center;">string</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">255</td><td style="text-align:center;"><code>&#39;&#39;</code></td><td style="text-align:center;">變長的字串</td></tr><tr><td style="text-align:center;">text</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">65535</td><td style="text-align:center;"><code>&#39;&#39;</code></td><td style="text-align:center;">變長的字串</td></tr></tbody></table><h3 id="時間型別" tabindex="-1">時間型別 <a class="header-anchor" href="#時間型別" aria-label="Permalink to &quot;時間型別&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">名稱</th><th style="text-align:center;">TS 型別</th><th style="text-align:center;">預設長度</th><th style="text-align:center;">預設初始值</th><th style="text-align:center;">說明</th></tr></thead><tbody><tr><td style="text-align:center;">date</td><td style="text-align:center;"><code>Date</code></td><td style="text-align:center;">固定長度</td><td style="text-align:center;"><code>null</code></td><td style="text-align:center;">日期值</td></tr><tr><td style="text-align:center;">time</td><td style="text-align:center;"><code>Date</code></td><td style="text-align:center;">固定長度</td><td style="text-align:center;"><code>null</code></td><td style="text-align:center;">時間值</td></tr><tr><td style="text-align:center;">timestamp</td><td style="text-align:center;"><code>Date</code></td><td style="text-align:center;">固定長度</td><td style="text-align:center;"><code>null</code></td><td style="text-align:center;">時間戳</td></tr></tbody></table><h3 id="其他型別" tabindex="-1">其他型別 <a class="header-anchor" href="#其他型別" aria-label="Permalink to &quot;其他型別&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">名稱</th><th style="text-align:center;">TS 型別</th><th style="text-align:center;">預設長度</th><th style="text-align:center;">預設初始值</th><th style="text-align:center;">說明</th></tr></thead><tbody><tr><td style="text-align:center;">json</td><td style="text-align:center;"><code>object</code></td><td style="text-align:center;">65535</td><td style="text-align:center;"><code>null</code></td><td style="text-align:center;">可被序列化為 json 的結構化資料</td></tr><tr><td style="text-align:center;">list</td><td style="text-align:center;"><code>string[]</code></td><td style="text-align:center;">65535</td><td style="text-align:center;"><code>[]</code></td><td style="text-align:center;">字串構成的列表，序列化時以逗號分隔</td></tr></tbody></table><h2 id="實體方法" tabindex="-1">實體方法 <a class="header-anchor" href="#實體方法" aria-label="Permalink to &quot;實體方法&quot;">​</a></h2><h3 id="ctx-model-extend" tabindex="-1">ctx.model.extend(name, fields, config?) <a class="header-anchor" href="#ctx-model-extend" aria-label="Permalink to &quot;ctx.model.extend(name, fields, config?)&quot;">​</a></h3>`,16),g=t("li",null,[t("strong",null,"name:"),e(),t("code",null,"string"),e(" 資料表名")],-1),y=t("li",null,[t("strong",null,"fields:"),e(),t("code",null,"Field.Config"),e(" 欄位資訊")],-1),p=t("strong",null,"config:",-1),x=t("code",null,"Table.Meta",-1),k=t("li",null,[t("strong",null,"config.primary:"),e(),t("code",null,"string | string[]"),e(" 主鍵名，預設為 "),t("code",null,"'id'")],-1),_=t("li",null,[t("strong",null,"config.unique:"),e(),t("code",null,"(string | string[])[]"),e(" 值唯一的鍵名串列")],-1),u=t("strong",null,"config.foreign:",-1),m=t("code",null,"Dict<[string, string]>",-1),b=t("li",null,[t("strong",null,"config.autoInc:"),e(),t("code",null,"boolean"),e(" 是否使用自增主鍵")],-1),C=l('<p>擴展一個新的資料表。</p><h3 id="ctx-model-create" tabindex="-1">ctx.model.create(name, data) <a class="header-anchor" href="#ctx-model-create" aria-label="Permalink to &quot;ctx.model.create(name, data)&quot;">​</a></h3><ul><li><strong>name:</strong> <code>string</code> 資料表名</li><li><strong>data:</strong> <code>any</code> 数据</li></ul><p>创建一条新的数据，折叠嵌套属性，并填充必要的默认值。</p>',4),f={id:"ctx-model-migrate",tabindex:"-1"},B=t("a",{class:"header-anchor",href:"#ctx-model-migrate","aria-label":'Permalink to "ctx.model.migrate(name, fields, callback) <badge type="warning">实验性</badge>"'},"​",-1),D=l('<ul><li><strong>name:</strong> <code>string</code> 資料表名</li><li><strong>fields:</strong> <code>Field.Config</code> 要迁移的字段信息</li><li><strong>callback:</strong> <code>(db: Database) =&gt; Promise&lt;void&gt;</code> 迁移的回调函数</li></ul><p>设置 <a href="./../../guide/database/model.html#整表迁移">整表迁移</a> 的操作。</p>',2);function A(T,E,P,q,F,S){const a=r("badge");return c(),d("div",null,[h,t("ul",null,[g,y,t("li",null,[p,e(),x,e(" 表的基本配置 "),t("ul",null,[k,_,t("li",null,[u,e(),m,e(" 外键列表 "),n(a,{type:"warning"},{default:s(()=>[e("实验性")]),_:1})]),b])])]),C,t("h3",f,[e("ctx.model.migrate(name, fields, callback) "),n(a,{type:"warning"},{default:s(()=>[e("实验性")]),_:1}),e(),B]),D])}const I=i(o,[["render",A]]);export{V as __pageData,I as default};

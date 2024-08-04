import{_ as a,k as i,j as s,m as l}from"./chunks/framework.MHei6uDm.js";const u=JSON.parse('{"title":"Eval","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/api/database/evaluation.md","filePath":"en-US/api/database/evaluation.md"}'),e={name:"en-US/api/database/evaluation.md"},t=l(`<h1 id="eval" tabindex="-1">Eval <a class="header-anchor" href="#eval" aria-label="Permalink to &quot;Eval&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>参见：<a href="./../../guide/database/selection.html">开发 &gt; 数据库 &gt; 进阶查询技巧</a></p></div><p>求值表达式是一组静态 API，主要在 <a href="./selection.html"><code>Selection</code></a> 中使用。你可以从 Koishi 中直接导入：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Eval</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;koishi&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 或者使用更短的别名</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;koishi&#39;</span></span></code></pre></div><h2 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h2><h3 id="type" tabindex="-1">{Type} <a class="header-anchor" href="#type" aria-label="Permalink to &quot;\\{Type\\}&quot;">​</a></h3><p>本节中使用的 <code>Number</code>, <code>String</code>, <code>Boolean</code>, <code>Any</code> 并非 JavaScript 中的内置函数，而是对应于 <code>number</code>, <code>string</code>, <code>boolean</code>, <code>any</code> 类型的求值表达式。例如，当一个表的 <code>foo</code> 字段有数值类型时，求值表达式 <code>$.gt(row.x, 1)</code> 是合法的，并且返回值的类型是 <code>Boolean</code>。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> $Date</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Date</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> $RegExp</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> RegExp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Eval</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Number</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> EvalExpr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> EvalExpr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Boolean</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> boolean</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> EvalExpr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Date</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> $Date</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> EvalExpr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">$Date</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> RegExp</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> $RegExp</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> EvalExpr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">$RegExp</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Any</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> boolean</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> $Date</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> $RegExp</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> EvalExpr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="evalexpr" tabindex="-1">EvalExpr <a class="header-anchor" href="#evalexpr" aria-label="Permalink to &quot;EvalExpr&quot;">​</a></h3><p>本节中任意求值表达式的返回值。</p><h2 id="数值运算" tabindex="-1">数值运算 <a class="header-anchor" href="#数值运算" aria-label="Permalink to &quot;数值运算&quot;">​</a></h2><h3 id="add" tabindex="-1">$.add(...values) <a class="header-anchor" href="#add" aria-label="Permalink to &quot;$.add(...values)&quot;">​</a></h3><ul><li><strong>values:</strong> <code>Number[]</code> 待相加的值</li><li>返回值: <code>EvalExpr&lt;number&gt;</code></li></ul><p>将一组值相加。</p><h3 id="subtract" tabindex="-1">$.subtract(x, y) <a class="header-anchor" href="#subtract" aria-label="Permalink to &quot;$.subtract(x, y)&quot;">​</a></h3><ul><li><strong>x:</strong> <code>Number</code> 被减数</li><li><strong>y:</strong> <code>Number</code> 减数</li><li>返回值: <code>EvalExpr&lt;number&gt;</code></li></ul><p>将两个值相减。</p><h3 id="multiply" tabindex="-1">$.multiply(...values) <a class="header-anchor" href="#multiply" aria-label="Permalink to &quot;$.multiply(...values)&quot;">​</a></h3><ul><li><strong>values:</strong> <code>Number[]</code> 待相乘的值</li><li>返回值: <code>EvalExpr&lt;number&gt;</code></li></ul><p>将一组值相乘。</p><h3 id="divide" tabindex="-1">$.divide(x, y) <a class="header-anchor" href="#divide" aria-label="Permalink to &quot;$.divide(x, y)&quot;">​</a></h3><ul><li><strong>x:</strong> <code>Number</code> 被除数</li><li><strong>y:</strong> <code>Number</code> 除数</li><li>返回值: <code>EvalExpr&lt;number&gt;</code></li></ul><p>将两个值相除。</p><h2 id="比较运算" tabindex="-1">比较运算 <a class="header-anchor" href="#比较运算" aria-label="Permalink to &quot;比较运算&quot;">​</a></h2><h3 id="eq" tabindex="-1">$.eq(...values) <a class="header-anchor" href="#eq" aria-label="Permalink to &quot;$.eq(...values)&quot;">​</a></h3><ul><li><strong>values:</strong> <code>Any[]</code> 待比较的值</li><li>返回值: <code>EvalExpr&lt;boolean&gt;</code></li></ul><p>判断一组值是否相等。</p><h3 id="ne" tabindex="-1">$.ne(x, y) <a class="header-anchor" href="#ne" aria-label="Permalink to &quot;$.ne(x, y)&quot;">​</a></h3><ul><li><strong>x:</strong> <code>Any</code> 待比较的值</li><li><strong>y:</strong> <code>Any</code> 待比较的值</li><li>返回值: <code>EvalExpr&lt;boolean&gt;</code></li></ul><p>判断 <code>x != y</code>。</p><h3 id="gt" tabindex="-1">$.gt(x, y) <a class="header-anchor" href="#gt" aria-label="Permalink to &quot;$.gt(x, y)&quot;">​</a></h3><ul><li><strong>x:</strong> <code>Number</code> 待比较的值</li><li><strong>y:</strong> <code>Number</code> 待比较的值</li><li>返回值: <code>EvalExpr&lt;boolean&gt;</code></li></ul><p>判断 <code>x &gt; y</code>。</p><h3 id="gte" tabindex="-1">$.gte(x, y) <a class="header-anchor" href="#gte" aria-label="Permalink to &quot;$.gte(x, y)&quot;">​</a></h3><ul><li><strong>x:</strong> <code>Number</code> 待比较的值</li><li><strong>y:</strong> <code>Number</code> 待比较的值</li><li>返回值: <code>EvalExpr&lt;boolean&gt;</code></li></ul><p>判断 <code>x &gt;= y</code>。</p><h3 id="lt" tabindex="-1">$.lt(x, y) <a class="header-anchor" href="#lt" aria-label="Permalink to &quot;$.lt(x, y)&quot;">​</a></h3><ul><li><strong>x:</strong> <code>Number</code> 待比较的值</li><li><strong>y:</strong> <code>Number</code> 待比较的值</li><li>返回值: <code>EvalExpr&lt;boolean&gt;</code></li></ul><p>判断 <code>x &lt; y</code>。</p><h3 id="lte" tabindex="-1">$.lte(x, y) <a class="header-anchor" href="#lte" aria-label="Permalink to &quot;$.lte(x, y)&quot;">​</a></h3><ul><li><strong>x:</strong> <code>Number</code> 待比较的值</li><li><strong>y:</strong> <code>Number</code> 待比较的值</li><li>返回值: <code>EvalExpr&lt;boolean&gt;</code></li></ul><p>判断 <code>x &lt;= y</code>。</p><h2 id="字符串运算" tabindex="-1">字符串运算 <a class="header-anchor" href="#字符串运算" aria-label="Permalink to &quot;字符串运算&quot;">​</a></h2><h3 id="concat" tabindex="-1">$.concat(...values) <a class="header-anchor" href="#concat" aria-label="Permalink to &quot;$.concat(...values)&quot;">​</a></h3><ul><li><strong>values:</strong> <code>String[]</code> 待连接的值</li><li>返回值: <code>EvalExpr&lt;string&gt;</code></li></ul><p>连接一组字符串。</p><h2 id="布尔运算" tabindex="-1">布尔运算 <a class="header-anchor" href="#布尔运算" aria-label="Permalink to &quot;布尔运算&quot;">​</a></h2><h3 id="and" tabindex="-1">$.and(...values) <a class="header-anchor" href="#and" aria-label="Permalink to &quot;$.and(...values)&quot;">​</a></h3><ul><li><strong>values:</strong> <code>Boolean[]</code> 待计算的值</li><li>返回值: <code>EvalExpr&lt;boolean&gt;</code></li></ul><p>将一组布尔值做与运算。</p><h3 id="or" tabindex="-1">$.or(...values) <a class="header-anchor" href="#or" aria-label="Permalink to &quot;$.or(...values)&quot;">​</a></h3><ul><li><strong>values:</strong> <code>Boolean[]</code> 待计算的值</li><li>返回值: <code>EvalExpr&lt;boolean&gt;</code></li></ul><p>将一组布尔值做或运算。</p><h3 id="not" tabindex="-1">$.not(values) <a class="header-anchor" href="#not" aria-label="Permalink to &quot;$.not(values)&quot;">​</a></h3><ul><li><strong>values:</strong> <code>Boolean</code> 待计算的值</li><li>返回值: <code>EvalExpr&lt;boolean&gt;</code></li></ul><p>将一个布尔值取反。</p><h2 id="聚合运算" tabindex="-1">聚合运算 <a class="header-anchor" href="#聚合运算" aria-label="Permalink to &quot;聚合运算&quot;">​</a></h2><h3 id="sum" tabindex="-1">$.sum(x) <a class="header-anchor" href="#sum" aria-label="Permalink to &quot;$.sum(x)&quot;">​</a></h3><ul><li><strong>x:</strong> <code>Number</code> 数值表达式</li><li>返回值: <code>EvalExpr&lt;number&gt;</code></li></ul><p>累加一组值。</p><h3 id="avg" tabindex="-1">$.avg(x) <a class="header-anchor" href="#avg" aria-label="Permalink to &quot;$.avg(x)&quot;">​</a></h3><ul><li><strong>x:</strong> <code>Number</code> 数值表达式</li><li>返回值: <code>EvalExpr&lt;number&gt;</code></li></ul><p>计算一组值的平均值。</p><h3 id="min" tabindex="-1">$.min(x) <a class="header-anchor" href="#min" aria-label="Permalink to &quot;$.min(x)&quot;">​</a></h3><ul><li><strong>x:</strong> <code>Number</code> 数值表达式</li><li>返回值: <code>EvalExpr&lt;number&gt;</code></li></ul><p>计算一组值的最小值。</p><h3 id="max" tabindex="-1">$.max(x) <a class="header-anchor" href="#max" aria-label="Permalink to &quot;$.max(x)&quot;">​</a></h3><ul><li><strong>x:</strong> <code>Number</code> 数值表达式</li><li>返回值: <code>EvalExpr&lt;number&gt;</code></li></ul><p>计算一组值的最大值。</p><h3 id="count" tabindex="-1">$.count(x) <a class="header-anchor" href="#count" aria-label="Permalink to &quot;$.count(x)&quot;">​</a></h3><ul><li><strong>x:</strong> <code>Any</code> 任意表达式</li><li>返回值: <code>EvalExpr&lt;number&gt;</code></li></ul><p>统计不同元素的数量。</p>`,72),n=[t];function h(o,r,d,p,k,c){return s(),i("div",null,n)}const y=a(e,[["render",h]]);export{u as __pageData,y as default};

import{_ as s,k as i,j as a,m as e}from"./chunks/framework.MHei6uDm.js";const g=JSON.parse(`{"title":"Exigence et optant","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\nfoo: Schema.boolean().description('这是一个可选属性。'),\\nbar: Schema.string().required().description('这是一个必需属性。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"fr-FR/schema/meta/required.md","filePath":"fr-FR/schema/meta/required.md"}`),t={name:"fr-FR/schema/meta/required.md"},n=e(`<h1 id="exigence-et-optant" tabindex="-1">Exigence et optant <a class="header-anchor" href="#exigence-et-optant" aria-label="Permalink to &quot;Exigence et optant&quot;">​</a></h1><p>默认情况下，所有配置项都是可选的。你可以通过 <code>.required()</code> 来声明一个必需的配置项。未配置的必需配置项的左侧会出现红色的提示线。</p><p>请注意：对于字符串等原始类型，空串和未配置是两个不同的概念。你可以通过控件中央的水平线来进行区分。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">object</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  foo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  bar</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">required</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div>`,4),h=[n];function p(l,r,k,d,o,c){return a(),i("div",null,h)}const E=s(t,[["render",p]]);export{g as __pageData,E as default};

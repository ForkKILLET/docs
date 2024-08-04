import{_ as a,a as s,b as l,c as i,d as e,e as t,f as o,g as p,h as r,i as c,j as n,k as h}from"./chunks/dependencies.dark.4RfMpj-m.js";import{_ as m,k as d,j as u,m as _}from"./chunks/framework.MHei6uDm.js";const I=JSON.parse('{"title":"安裝和配置外掛","description":"","frontmatter":{"prev":{"text":"選擇安裝方式","link":"/zh-TW/manual/starter/"}},"headers":[],"relativePath":"zh-TW/manual/usage/market.md","filePath":"zh-TW/manual/usage/market.md"}'),g={name:"zh-TW/manual/usage/market.md"},k=_('<h1 id="安裝和配置外掛" tabindex="-1">安裝和配置外掛 <a class="header-anchor" href="#安裝和配置外掛" aria-label="Permalink to &quot;安裝和配置外掛&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>本节将介绍「插件市场」「插件配置」和「依赖管理」页面的使用方法。</p></div><p>Koishi 的一個核心特性是強大的控制檯。控制台是一个对用户友好的图形界面，封装了 Koishi 的绝大多数功能：</p><ul><li>安裝、解除安裝和更新外掛</li><li>启用、停用和配置插件</li><li>管理指令、資料庫、輸出文字</li><li>在模拟和真实环境下聊天</li><li>狀態監控、資料統計</li><li>檢視日誌</li></ul><p>本节中我们将以 <a href="./../../plugins/common/echo.html">echo</a> 插件为例来演示插件的安装与配置。echo 插件注册了一个名为 <code>echo</code> 的指令，调用此指令可以将输入原样输出给用户。</p><h2 id="認識控制檯" tabindex="-1">認識控制檯 <a class="header-anchor" href="#認識控制檯" aria-label="Permalink to &quot;認識控制檯&quot;">​</a></h2><p>在你成功安装了模板项目或启动器后，控制台将自动打开。</p><p>控制檯的介面主要分為兩部分，左側是活動欄，用來切換右邊的介面，右邊預設開啟的是儀表盤頁面。在寬屏裝置的下方還有一個狀態列，主要用來顯示機器人的執行狀態。</p><p class="light-only"><img src="'+a+'" alt="home"></p><p class="dark-only"><img src="'+s+'" alt="home"></p><p>在之后的几节里，我们会逐一介绍各界面的功能和使用。</p><h2 id="安裝外掛" tabindex="-1">安裝外掛 <a class="header-anchor" href="#安裝外掛" aria-label="Permalink to &quot;安裝外掛&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Koishi 不对非官方插件的安全性做任何保证。請不要隨意下載來源不明的外掛，因為它們可能導致 Koishi 無法執行，甚至更嚴重的後果。如果你下載外掛後遇到了問題，可以前往使用者群或論壇進行反饋。此外，部分外掛帶有「不安全」標識，安裝此類外掛將不會受到官方群內的支援。</p></div><p>前往「外掛市場」頁面，你將在這裡看到所有可下載的外掛。在搜索框中输入 <code>echo</code>，找到我们想要的插件，点击「添加」按钮，然后在弹出的对话框中点击「安装」。等待片刻，外掛就已經安裝成功了。</p><p class="light-only"><img src="'+l+'" alt="select-version"></p><p class="dark-only"><img src="'+i+'" alt="select-version"></p><h2 id="啟用和停用外掛" tabindex="-1">啟用和停用外掛 <a class="header-anchor" href="#啟用和停用外掛" aria-label="Permalink to &quot;啟用和停用外掛&quot;">​</a></h2><p>Koishi 不會自動啟用剛剛安裝的外掛，你需要手動配置並啟用。前往「外掛配置」頁面，左側欄中列出了已配置的各種外掛。其中<span class="light-only">黑色</span><span class="dark-only">白色</span>字型顯示的是正在執行的外掛，而灰色字型則對應尚未執行的外掛。</p><p class="light-only"><img src="'+e+'" alt="plugins"></p><p class="dark-only"><img src="'+t+'" alt="plugins"></p><p>我們可以看到此時 echo 外掛的名字是灰色的，這表明它並未處於執行狀態。echo 外掛沒有可配置的專案，因此右側的詳情頁是空白的。我們可以直接點選右上角的「啟用外掛」按鈕，看到「啟用成功」的提示資訊，這表明 echo 外掛就已經處於執行狀態了。</p><p>要停用 echo 外掛同樣很簡單。點選右上角的「停用外掛」按鈕，外掛便會停止執行。停用外掛既不會刪除外掛的程式碼，也不會刪除外掛的配置，你可以隨時重新啟用它。</p><h2 id="配置外掛" tabindex="-1">配置外掛 <a class="header-anchor" href="#配置外掛" aria-label="Permalink to &quot;配置外掛&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>在配置插件的过程中，请大家记住这个原则：<strong>如无必要，勿动配置</strong>。Koishi 在設計上兼顧了擴充套件性和實用性，許多基礎功能是以預裝外掛的形式提供的。前面我們已經用到的「外掛市場」和「外掛配置」頁面本身就分別由預裝的 market 外掛和 config 外掛提供。正是因為所有的預裝外掛均已配置完善，通常情況下你不需要修改預裝外掛的配置。隨意改動外掛配置、刪除預裝外掛都可能導致 Koishi 無法正常執行。</p></div><p>雖然 echo 外掛沒有需要配置的地方，但更復雜的外掛則通常會提供各種配置項，允許使用者控制外掛的行為。下圖展示了 novelai 外掛的配置介面。</p><p class="light-only"><img src="'+o+'" alt="settings"></p><p class="dark-only"><img src="'+p+'" alt="settings"></p><p>在這個介面中，我們可以看到許多配置項。其中你需要注意：</p><ul><li>必選但尚未填入的配置項會在左側呈現 <span style="font-weight:bold;color:var(--vp-c-red-1);">紅色</span> 的提示條，只有正確填寫配置才能啟動外掛。</li><li>已修改但未儲存的配置項會在左側呈現 <span style="font-weight:bold;color:var(--vp-c-indigo-1);">紫色</span> 的提示條，點選「啟用外掛」或「儲存配置」按鈕後會儲存配置；如果你想撤銷這些改動，可以在配置名稱旁的小三角處撥出選單，選擇「撤銷更改」使該配置恢復到上次儲存時的狀態。</li></ul><h2 id="管理外掛" tabindex="-1">管理外掛 <a class="header-anchor" href="#管理外掛" aria-label="Permalink to &quot;管理外掛&quot;">​</a></h2><h3 id="分組管理" tabindex="-1">分組管理 <a class="header-anchor" href="#分組管理" aria-label="Permalink to &quot;分組管理&quot;">​</a></h3><p>Koishi 提供了外掛分組的機制，分組內可以新增外掛，方便同時管理多個外掛。</p><p>Koishi 在安裝時預先配置了一些分組，而新安裝的外掛會放置在外掛列表的底部，這表明它不屬於任何分組。外掛和分組都可以透過點選並拖拽的方式改變排列順序或在分組之間移動。相信你也發現了，分組是可以巢狀的。</p><p>建立新的分組同樣很簡單。點選「全域性配置」或任意分組名後，點選右上角的「建立分組」按鈕可以在此建立一個新的外掛分組。新分組的名字是隨機生成的，但你可以點選名字修改成你喜歡的名字。分組可以在左側欄中點選小三角來控制展開和收起。</p><p>此外，<a href="./../usage/customize.html#过滤器">过滤器</a> 机制也可用于分组，便于控制一系列插件的行为。</p><h3 id="新增更多外掛" tabindex="-1">新增更多外掛 <a class="header-anchor" href="#新增更多外掛" aria-label="Permalink to &quot;新增更多外掛&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>通常情况下，一个插件只能同时运行一份配置。请参考 <a href="./../recipe/multiple.html">维护多份配置</a> 章节。</p></div><p>如果某個已安裝的外掛並未顯示在外掛列表中，你也可以手動新增它。在「全域性配置」或任意分組介面中，點選右上角的「新增外掛」將會彈出對話方塊。在對話方塊中點選要新增的外掛，即可建立一份未啟用的外掛配置。</p><p class="light-only"><img src="'+r+'" alt="select-plugin"></p><p class="dark-only"><img src="'+c+'" alt="select-plugin"></p><h3 id="刪除外掛或分組" tabindex="-1">刪除外掛或分組 <a class="header-anchor" href="#刪除外掛或分組" aria-label="Permalink to &quot;刪除外掛或分組&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>注意：此操作无法被撤销，如果你想要恢复之前的配置，只能再次手动添加。請謹慎操作。</p></div><p>在任何外掛的配置介面點選右上角的「刪除外掛」可刪除這份配置。與之類似，在分組的配置介面點選右上角的「刪除分組」可刪除這個分組。刪除分組時，分組內的所有外掛也會一併刪除。</p><h2 id="更新和解除安裝外掛" tabindex="-1">更新和解除安裝外掛 <a class="header-anchor" href="#更新和解除安裝外掛" aria-label="Permalink to &quot;更新和解除安裝外掛&quot;">​</a></h2><p>前往「依賴管理」頁面，你可以在這裡看到依賴列表。依賴可能包括 Koishi 本體，各種外掛，以及支援外掛執行的軟體包等。</p><p>當依賴的狀態顯示為「可更新」時，點選其右側的「修改」按鈕，在彈出的視窗左上角選擇你需要的版本，點選右下角的「更新」按鈕即可完成更新。</p><p>你也可以批次更新多個外掛，透過依賴名右側的下拉選單選擇好所需更改的版本，點選右上角的「應用更改」按鈕即可。此外，右上角的「全部更新」按鈕可以一鍵更新所有依賴。</p><p class="light-only"><img src="'+n+'" alt="dependencies"></p><p class="dark-only"><img src="'+h+'" alt="dependencies"></p>',49),b=[k];function f(q,v,y,P,x,T){return u(),d("div",null,b)}const W=m(g,[["render",f]]);export{I as __pageData,W as default};

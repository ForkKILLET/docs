import{_ as i,k as d,f as o,A as a,l as e,D as l,m as c,C as n,j as h}from"./chunks/framework.MHei6uDm.js";const se=JSON.parse('{"title":"指令系統","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/manual/usage/command.md","filePath":"zh-TW/manual/usage/command.md"}'),_={name:"zh-TW/manual/usage/command.md"},p=e("h1",{id:"指令系統",tabindex:"-1"},[l("指令系統 "),e("a",{class:"header-anchor",href:"#指令系統","aria-label":'Permalink to "指令系統"'},"​")],-1),u=e("p",null,"在瞭解了控制檯的基本用法後，我們終於可以開始介紹如何與機器人對話了！讓我們從上一節中看到的例子開始：",-1),r=e("p",null,"當前可用的指令有：",-1),m=e("p",{class:"indent-1"},"echo 傳送訊息",-1),k=e("p",{class:"indent-1"},"help 顯示幫助資訊",-1),f=e("p",null,"輸入“幫助 指令名”檢視特定指令的語法和使用示例。",-1),g=c("",5),T=e("p",null,"指令：echo <message...>",-1),A=e("p",null,"發送消息",-1),b=e("p",null,"可用的選項有：",-1),x=e("p",{class:"indent-1"},"-e, --escape 傳送轉義訊息",-1),C=e("p",{class:"indent-1"},"-E, --unescape 傳送反轉義訊息",-1),P=e("p",null,"那麼細心的小夥伴可能會發現，既然 help 本身也是一個指令，那我能不能用來檢視 help 自己的幫助資訊呢？答案是肯定的：",-1),S=e("p",null,"指令：help [command]",-1),q=e("p",null,"顯示幫助信息",-1),K=e("p",null,"可用的選項有：",-1),E=e("p",{class:"indent-1"},"-a, --authority 顯示許可權設定",-1),F=e("p",{class:"indent-1"},"-H, --show-hidden 檢視隱藏的選項和指令",-1),V=c("",4),y=e("p",null,"請輸入要發送的文本。",-1),v=e("p",null,[l("選項同樣可以控制指令的行為。它通常以 "),e("code",null,"-"),l(" 或 "),e("code",null,"--"),l(" 开头，后面不带空格地跟着一个固定的单词，称为选项名称。選項之間沒有順序要求，但通常建議將選項放在引數之前。讓我們試試看：")],-1),I=e("img",{src:"https://koishi.chat/logo.png",width:"100"},null,-1),N=e("p",null,[l("在上面的例子中，我们使用了 "),e("code",null,"-E"),l(" 选项，成功改变了输出的内容。關於這具體是怎麼做到的，我們會在後續的章節中進行介紹。")],-1),z=e("p",null,[l("引數除了可以分為必選和可選外，還可以分為定長和變長。定長引數的中不能出現空白字元，而變長引數則可以。变长参数通过参数名前后的 "),e("code",null,"..."),l(" 来指示，例如 "),e("code",null,"echo"),l(" 指令的参数就是一个变长参数。如果要為定長引數傳入帶有空白字元的內容，可以使用引號將其包裹起來，例如：")],-1),D=e("p",null,"此外，部分選項也可以接受引數。例如，當你安裝了翻譯外掛，你將會獲得如下的幫助資訊：",-1),R=e("p",null,"指令：translate <text...>",-1),$=e("p",null,"文本翻譯",-1),j=e("p",null,"可用的選項有：",-1),w=e("p",{class:"indent-1"},"-s, --source <lang> 源語言 (預設為自動匹配)",-1),B=e("p",{class:"indent-1"},"-t, --target <lang> 目標語言 (預設為中文)",-1),W=c("",10),G=e("p",null,"指令：user",-1),O=e("p",null,"使用者管理",-1),H=e("p",null,"可用的子指令有：",-1),J=e("p",{class:"indent-1"},"authorize 許可權管理",-1),U=e("p",{class:"indent-1"},"user.locale 語言偏好",-1),L=c("",2),M=e("p",null,[l("如果父指令本身没有功能，那么 "),e("code",null,"user"),l(" 和 "),e("code",null,"user -h"),l(" 的效果是一样的。此時，我們也可以使用空格代替小數點進行派生式子指令的呼叫：")],-1),Q=c("",14);function X(Y,Z,ee,oe,ae,le){const t=n("chat-message"),s=n("chat-panel");return h(),d("div",null,[p,u,o(s,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l("help")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[r,m,k,f]),_:1})]),_:1}),g,o(s,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l("help echo")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[T,A,b,x,C]),_:1})]),_:1}),P,o(s,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l("help help")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[S,q,K,E,F]),_:1})]),_:1}),V,o(s,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l("echo")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[y]),_:1})]),_:1}),v,o(s,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l('echo <image url="https://koishi.chat/logo.png"/>')]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[l('<image url="https://koishi.chat/logo.png"/>')]),_:1}),o(t,{nickname:"Alice"},{default:a(()=>[l('echo -E <image url="https://koishi.chat/logo.png"/>')]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[I]),_:1})]),_:1}),N,z,o(s,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l('help "foo bar"')]),_:1})]),_:1}),D,o(s,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l("help translate")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[R,$,j,w,B]),_:1}),o(t,{nickname:"Alice"},{default:a(()=>[l("translate -t ja 你好，世界")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[l("こんにちは世界")]),_:1})]),_:1}),W,o(s,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l("user")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[G,O,H,J,U]),_:1})]),_:1}),L,o(s,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l("user.locale en")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[l("User data updated.")]),_:1})]),_:1}),M,o(s,null,{default:a(()=>[o(t,{nickname:"Alice"},{default:a(()=>[l("user locale zh ")]),_:1}),o(t,{nickname:"Koishi"},{default:a(()=>[l("使用者數據已修改。")]),_:1})]),_:1}),Q])}const ce=i(_,[["render",X]]);export{se as __pageData,ce as default};

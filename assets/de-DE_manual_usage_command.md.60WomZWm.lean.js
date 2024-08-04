import{_ as i,k as d,f as o,A as a,l as e,D as t,m as n,C as c,j as h}from"./chunks/framework.MHei6uDm.js";const se=JSON.parse('{"title":"Befehlssystem","description":"","frontmatter":{},"headers":[],"relativePath":"de-DE/manual/usage/command.md","filePath":"de-DE/manual/usage/command.md"}'),_={name:"de-DE/manual/usage/command.md"},p=e("h1",{id:"befehlssystem",tabindex:"-1"},[t("Befehlssystem "),e("a",{class:"header-anchor",href:"#befehlssystem","aria-label":'Permalink to "Befehlssystem"'},"​")],-1),u=e("p",null,"在了解了控制台的基本用法后，我们终于可以开始介绍如何与机器人对话了！让我们从上一节中看到的例子开始：",-1),r=e("p",null,"当前可用的指令有：",-1),m=e("p",{class:"indent-1"},"echo 发送消息",-1),k=e("p",{class:"indent-1"},"help 显示帮助信息",-1),f=e("p",null,"输入“帮助 指令名”查看特定指令的语法和使用示例。",-1),g=n("",5),b=e("p",null,"指令：echo <message...>",-1),T=e("p",null,"发送消息",-1),A=e("p",null,"可用的选项有：",-1),x=e("p",{class:"indent-1"},"-e, --escape 发送转义消息",-1),C=e("p",{class:"indent-1"},"-E, --unescape 发送反转义消息",-1),P=e("p",null,"那么细心的小伙伴可能会发现，既然 help 本身也是一个指令，那我能不能用来查看 help 自己的帮助信息呢？答案是肯定的：",-1),y=e("p",null,"指令：help [command]",-1),v=e("p",null,"显示帮助信息",-1),E=e("p",null,"可用的选项有：",-1),S=e("p",{class:"indent-1"},"-a, --authority 显示权限设置",-1),q=e("p",{class:"indent-1"},"-H, --show-hidden 查看隐藏的选项和指令",-1),K=n("",4),F=e("p",null,"请输入要发送的文本。",-1),V=e("p",null,[t("选项同样可以控制指令的行为。它通常以 "),e("code",null,"-"),t(" 或 "),e("code",null,"--"),t(" 开头，后面不带空格地跟着一个固定的单词，称为选项名称。选项之间没有顺序要求，但通常建议将选项放在参数之前。让我们试试看：")],-1),I=e("img",{src:"https://koishi.chat/logo.png",width:"100"},null,-1),D=e("p",null,[t("在上面的例子中，我们使用了 "),e("code",null,"-E"),t(" 选项，成功改变了输出的内容。关于这具体是怎么做到的，我们会在后续的章节中进行介绍。")],-1),B=e("p",null,[t("参数除了可以分为必选和可选外，还可以分为定长和变长。定长参数的中不能出现空白字符，而变长参数则可以。变长参数通过参数名前后的 "),e("code",null,"..."),t(" 来指示，例如 "),e("code",null,"echo"),t(" 指令的参数就是一个变长参数。如果要为定长参数传入带有空白字符的内容，可以使用引号将其包裹起来，例如：")],-1),N=e("p",null,"此外，部分选项也可以接受参数。例如，当你安装了翻译插件，你将会获得如下的帮助信息：",-1),w=e("p",null,"指令：translate <text...>",-1),z=e("p",null,"文本翻译",-1),R=e("p",null,"可用的选项有：",-1),$=e("p",{class:"indent-1"},"-s, --source <lang> 源语言 (默认为自动匹配)",-1),j=e("p",{class:"indent-1"},"-t, --target <lang> 目标语言 (默认为中文)",-1),G=n("",10),O=e("p",null,"指令：user",-1),H=e("p",null,"Benutzerverwaltung",-1),J=e("p",null,"可用的子指令有：",-1),U=e("p",{class:"indent-1"},"authorize 权限管理",-1),L=e("p",{class:"indent-1"},"user.locale 语言偏好",-1),M=n("",2),Q=e("p",null,[t("如果父指令本身没有功能，那么 "),e("code",null,"user"),t(" 和 "),e("code",null,"user -h"),t(" 的效果是一样的。此时，我们也可以使用空格代替小数点进行派生式子指令的调用：")],-1),W=n("",14);function X(Y,Z,ee,oe,ae,te){const l=c("chat-message"),s=c("chat-panel");return h(),d("div",null,[p,u,o(s,null,{default:a(()=>[o(l,{nickname:"Alice"},{default:a(()=>[t("help")]),_:1}),o(l,{nickname:"Koishi"},{default:a(()=>[r,m,k,f]),_:1})]),_:1}),g,o(s,null,{default:a(()=>[o(l,{nickname:"Alice"},{default:a(()=>[t("help echo")]),_:1}),o(l,{nickname:"Koishi"},{default:a(()=>[b,T,A,x,C]),_:1})]),_:1}),P,o(s,null,{default:a(()=>[o(l,{nickname:"Alice"},{default:a(()=>[t("help help")]),_:1}),o(l,{nickname:"Koishi"},{default:a(()=>[y,v,E,S,q]),_:1})]),_:1}),K,o(s,null,{default:a(()=>[o(l,{nickname:"Alice"},{default:a(()=>[t("echo")]),_:1}),o(l,{nickname:"Koishi"},{default:a(()=>[F]),_:1})]),_:1}),V,o(s,null,{default:a(()=>[o(l,{nickname:"Alice"},{default:a(()=>[t('echo <image url="https://koishi.chat/logo.png"/>')]),_:1}),o(l,{nickname:"Koishi"},{default:a(()=>[t('<image url="https://koishi.chat/logo.png"/>')]),_:1}),o(l,{nickname:"Alice"},{default:a(()=>[t('echo -E <image url="https://koishi.chat/logo.png"/>')]),_:1}),o(l,{nickname:"Koishi"},{default:a(()=>[I]),_:1})]),_:1}),D,B,o(s,null,{default:a(()=>[o(l,{nickname:"Alice"},{default:a(()=>[t('help "foo bar"')]),_:1})]),_:1}),N,o(s,null,{default:a(()=>[o(l,{nickname:"Alice"},{default:a(()=>[t("help translate")]),_:1}),o(l,{nickname:"Koishi"},{default:a(()=>[w,z,R,$,j]),_:1}),o(l,{nickname:"Alice"},{default:a(()=>[t("translate -t ja 你好，世界")]),_:1}),o(l,{nickname:"Koishi"},{default:a(()=>[t("こんにちは世界")]),_:1})]),_:1}),G,o(s,null,{default:a(()=>[o(l,{nickname:"Alice"},{default:a(()=>[t("user")]),_:1}),o(l,{nickname:"Koishi"},{default:a(()=>[O,H,J,U,L]),_:1})]),_:1}),M,o(s,null,{default:a(()=>[o(l,{nickname:"Alice"},{default:a(()=>[t("user.locale en")]),_:1}),o(l,{nickname:"Koishi"},{default:a(()=>[t("User data updated.")]),_:1})]),_:1}),Q,o(s,null,{default:a(()=>[o(l,{nickname:"Alice"},{default:a(()=>[t("user locale zh ")]),_:1}),o(l,{nickname:"Koishi"},{default:a(()=>[t("Die Benutzerdaten wurden geändert.")]),_:1})]),_:1}),W])}const ne=i(_,[["render",X]]);export{se as __pageData,ne as default};

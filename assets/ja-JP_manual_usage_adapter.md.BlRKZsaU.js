import{_ as a,a as e}from"./chunks/sandbox.dark.Ddk9PuDw.js";import{_ as l,k as i,j as t,m as r}from"./chunks/framework.MHei6uDm.js";const k=JSON.parse('{"title":"第一次对话","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/manual/usage/adapter.md","filePath":"ja-JP/manual/usage/adapter.md"}'),p={name:"ja-JP/manual/usage/adapter.md"},h=r('<h1 id="第一次对话" tabindex="-1">第一次对话 <a class="header-anchor" href="#第一次对话" aria-label="Permalink to &quot;第一次对话&quot;">​</a></h1><p>安装完了 Koishi 并体验了插件市场，想必你已经等不及体验 Koishi 的功能了。现在就让我们立即开始与机器人的第一次对话吧！</p><h2 id="在沙盒中模拟对话" tabindex="-1">在沙盒中模拟对话 <a class="header-anchor" href="#在沙盒中模拟对话" aria-label="Permalink to &quot;在沙盒中模拟对话&quot;">​</a></h2><p>在控制台中前往「沙盒」页面，在这里我们可以模拟与机器人的对话。</p><p>首先点击屏幕左上角的「添加用户」来创建一个虚拟用户 (通常第一位虚拟用户的名字会是 Alice)，此时屏幕右侧会出现空白的聊天界面。点击屏幕下方的对话框，输入「help」，并按回车键发送。你会立即在聊天界面中看到机器人的回复，列出了包括 <code>echo</code> 和 <code>help</code> 在内的所有可用的指令，这便是 <code>help</code> 这个内置指令的功能。</p><p>可以看到，这里的 <code>echo</code> 就是我们刚刚安装的插件，它的功能是将用户的输入原样返回。让我们现在尝试一下：输入「echo 你好」，并按回车键发送。你会看到机器人的回复是「你好」。</p><p class="light-only"><img src="'+a+'" alt="sandbox"></p><p class="dark-only"><img src="'+e+'" alt="sandbox"></p><p>如果想要模拟群聊，我们可以创建更多的用户，并在聊天界面顶部点击切换到「群聊模式」。这样，你就可以通过在左侧栏切换并控制多个虚拟用户与机器人聊天了。如果你要体验的是下棋一类的多人交互插件，这会非常有用。</p><p>除此以外，如果某些指令需要一定的 <a href="./../usage/customize.html#权限管理">权限等级</a>，你也可以切换到「用户设置」中进行调整。</p><h2 id="接入真实聊天平台" tabindex="-1">接入真实聊天平台 <a class="header-anchor" href="#接入真实聊天平台" aria-label="Permalink to &quot;接入真实聊天平台&quot;">​</a></h2><p>仅仅是在沙盒中对话是远远不够的。我们需要将机器人接入到真实的聊天平台中，才能让它真正地为我们服务。Koishiは、様々なチャットアプリをサポートするためにアダプタープラグインを使用します。下面是官方维护的适配器列表：</p><ul><li><a href="./../../plugins/adapter/dingtalk.html">钉钉</a></li><li><a href="./../../plugins/adapter/discord.html">Discord</a></li><li><a href="./../../plugins/adapter/kook.html">KOOK</a></li><li><a href="./../../plugins/adapter/lark.html">Lark</a></li><li><a href="./../../plugins/adapter/line.html">LINE</a></li><li><a href="./../../plugins/adapter/mail.html">邮件</a></li><li><a href="./../../plugins/adapter/matrix.html">Matrix</a></li><li><a href="./../../plugins/adapter/qq.html">QQ</a></li><li><a href="./../../plugins/adapter/slack.html">Slack</a></li><li><a href="./../../plugins/adapter/telegram.html">Telegram</a></li><li><a href="./../../plugins/adapter/wechat-official.html">微信公众号</a></li><li><a href="./../../plugins/adapter/wecom.html">企业微信</a></li><li><a href="./../../plugins/adapter/whatsapp.html">WhatsApp</a></li></ul><p>其中，常用的适配器插件已经预装在了 Koishi 中，你可以在插件配置中的 adapter 分组中找到它们。如果没有看到你想要的平台，你也可以在插件市场中搜索并安装更多适配器插件。</p><p>Koishiアプリは、様々なチャットアプリにまたがる複数のアカウントに同時に接続できます。各アカウントは、自身のプラグイン設定のを持つ、新しいプラグイン設定を追加するには、<a href="./market.html#添加更多插件">プラグインの追加</a>のメソッドを参照します。同じチャットアプリでアクセスされた複数のボットは、同じユーザーデータを共有しますから。複数のボットを簡単に切り替えて負荷分散を行うことができます。</p><p>不同平台的接入方式与难度存在较大的差异。様々なチャットアプリが違えば、それに応じた準備が必要だ。这些工作可能包括在平台内注册开发者账号、准备一台部署到公网的服务器等等。你可以在各个适配器插件的文档中找到详细的指引。</p><p>好消息是，Koishi 的大部分功能都不依赖特定的聊天平台。因此在进行准备工作的同时，你完全可以阅读本文档的后续部分，并在沙盒中体验并学习 Koishi 的功能。</p><h2 id="对比沙盒与真实环境" tabindex="-1">对比沙盒与真实环境 <a class="header-anchor" href="#对比沙盒与真实环境" aria-label="Permalink to &quot;对比沙盒与真实环境&quot;">​</a></h2><p>事实上，大多数机器人框架都没有提供沙盒功能，或是倾向于用户在真实环境中进行体验。你可能会有疑惑：为什么 Koishi 要推荐使用沙盒功能呢？因此我们列出了沙盒的几点优势。</p><p>首先，沙盒可以让你快速地了解插件的效果，而不需要在真实环境中进行大量的测试。想象一下，你刚刚安装了一个陌生的插件，你并不知道应该如何使用它，也不知道它的效果是什么。最糟糕的情况下，一旦插件的某些功能触发了机器人的敏感行为，你的真实账号还存在被封禁的风险。而沙盒则可以让你在不用担心这些问题的情况下，快速地了解插件的功能。</p><p>其次，如果你是插件的开发者而非使用者，沙盒功能的意义则更大了：得益于 Koishi 的热重载机制，每次修改插件源码后，你只需要按下保存，即可立即在沙盒中体验修改后的效果。这允许你在任何设备上进行快速的迭代开发，而根本不需要准备真实环境的账号。</p><p>当然，沙盒并不能代替真实的聊天环境，有些插件的效果可能无法在沙盒中体验。因此，我们推荐你在沙盒中体验插件的基础功能，而在真实环境中进行更加深入的测试。</p>',22),s=[h];function o(d,n,c,m,u,_){return t(),i("div",null,s)}const x=l(p,[["render",o]]);export{k as __pageData,x as default};

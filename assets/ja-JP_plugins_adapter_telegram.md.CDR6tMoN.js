import{_ as e,k as r,j as t,m as a}from"./chunks/framework.MHei6uDm.js";const f=JSON.parse('{"title":"@koishijs/plugin-adapter-telegram","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/plugins/adapter/telegram.md","filePath":"ja-JP/plugins/adapter/telegram.md"}'),o={name:"ja-JP/plugins/adapter/telegram.md"},l=a('<h1 id="koishijs-plugin-adapter-telegram" tabindex="-1">@koishijs/plugin-adapter-telegram <a class="header-anchor" href="#koishijs-plugin-adapter-telegram" aria-label="Permalink to &quot;@koishijs/plugin-adapter-telegram&quot;">​</a></h1><h2 id="接入方法" tabindex="-1">接入方法 <a class="header-anchor" href="#接入方法" aria-label="Permalink to &quot;接入方法&quot;">​</a></h2><ol><li>搜索 @botfather（有个官方认证的符号）并进入聊天界面</li><li>输入 <code>/start</code> 后，会出现一个使用菜单，你可以使用这里指令对你的机器人进行配置</li><li>要创建一个机器人，请点击 <code>/newbot</code>，并根据系统提示完成创建流程</li><li>使用 <code>/setprivacy</code> 关闭 Privacy Mode（设置为 DISABLED，不然机器人只能收到特定消息）</li><li>创建完毕后，你会获得一个 token（请注意不要泄露），将其作为机器人配置项即可使用</li></ol><p>参考文档：<a href="https://core.telegram.org/bots" target="_blank" rel="noreferrer">https://core.telegram.org/bots</a></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果启动机器人后发现收不到不带 <code>/</code> 的消息，这很可能是由于 Privacy Mode 未开启。如果开启后仍然收不到消息，请尝试将机器人从群组中移除后重新加入。</p></div><h2 id="机器人选项" tabindex="-1">机器人选项 <a class="header-anchor" href="#机器人选项" aria-label="Permalink to &quot;机器人选项&quot;">​</a></h2><h3 id="options-protocol" tabindex="-1">options.protocol <a class="header-anchor" href="#options-protocol" aria-label="Permalink to &quot;options.protocol&quot;">​</a></h3><ul><li>可选值: server, polling</li></ul><p>要使用的协议类型。</p><h3 id="options-token" tabindex="-1">options.token <a class="header-anchor" href="#options-token" aria-label="Permalink to &quot;options.token&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>机器人账户的令牌。</p><h3 id="options-endpoint" tabindex="-1">options.endpoint <a class="header-anchor" href="#options-endpoint" aria-label="Permalink to &quot;options.endpoint&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&#39;https://api.telegram.org&#39;</code></li></ul><p>要连接的服务器地址。</p><h3 id="options-proxyagent" tabindex="-1">options.proxyAgent <a class="header-anchor" href="#options-proxyagent" aria-label="Permalink to &quot;options.proxyAgent&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>默认值: <a href="./../../api/core/app.html#options-request-proxyagent"><code>app.config.request.proxyAgent</code></a></li></ul><p>请求时默认使用的网络代理。</p><h3 id="options-files-endpoint" tabindex="-1">options.files.endpoint <a class="header-anchor" href="#options-files-endpoint" aria-label="Permalink to &quot;options.files.endpoint&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>默认值: <a href="#options-bots-endpoint"><code>options.endpoint</code></a></li></ul><p>文件请求的终结点。</p><h3 id="options-files-local" tabindex="-1">options.files.local <a class="header-anchor" href="#options-files-local" aria-label="Permalink to &quot;options.files.local&quot;">​</a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否启用 <a href="https://github.com/tdlib/telegram-bot-api" target="_blank" rel="noreferrer">Telegram Bot API</a> 本地模式。</p><h2 id="适配器选项" tabindex="-1">适配器选项 <a class="header-anchor" href="#适配器选项" aria-label="Permalink to &quot;适配器选项&quot;">​</a></h2><h3 id="options-path" tabindex="-1">options.path <a class="header-anchor" href="#options-path" aria-label="Permalink to &quot;options.path&quot;">​</a></h3><ul><li>类型：<code>string</code></li><li>默认值：<code>&#39;/telegram&#39;</code></li></ul><p>服务器监听的路径。</p><h3 id="options-selfurl" tabindex="-1">options.selfUrl <a class="header-anchor" href="#options-selfurl" aria-label="Permalink to &quot;options.selfUrl&quot;">​</a></h3><ul><li>类型：<code>string</code></li></ul><p>Koishi 服务暴露在公网的地址，会覆盖 <a href="./../../api/core/app.html#options-selfurl"><code>app.config.selfUrl</code></a> 的值。</p><h2 id="内部-api" tabindex="-1">内部 API <a class="header-anchor" href="#内部-api" aria-label="Permalink to &quot;内部 API&quot;">​</a></h2><ul><li><a href="https://core.telegram.org/bots/api#addstickertoset" target="_blank" rel="noreferrer"><code>internal.addStickerToSet()</code></a></li><li><a href="https://core.telegram.org/bots/api#answercallbackquery" target="_blank" rel="noreferrer"><code>internal.answerCallbackQuery()</code></a></li><li><a href="https://core.telegram.org/bots/api#answerinlinequery" target="_blank" rel="noreferrer"><code>internal.answerInlineQuery()</code></a></li><li><a href="https://core.telegram.org/bots/api#answerprecheckoutquery" target="_blank" rel="noreferrer"><code>internal.answerPreCheckoutQuery()</code></a></li><li><a href="https://core.telegram.org/bots/api#answershippingquery" target="_blank" rel="noreferrer"><code>internal.answerShippingQuery()</code></a></li><li><a href="https://core.telegram.org/bots/api#answerwebappquery" target="_blank" rel="noreferrer"><code>internal.answerWebAppQuery()</code></a></li><li><a href="https://core.telegram.org/bots/api#approvechatjoinrequest" target="_blank" rel="noreferrer"><code>internal.approveChatJoinRequest()</code></a></li><li><a href="https://core.telegram.org/bots/api#banchatmember" target="_blank" rel="noreferrer"><code>internal.banChatMember()</code></a></li><li><a href="https://core.telegram.org/bots/api#banchatsenderchat" target="_blank" rel="noreferrer"><code>internal.banChatSenderChat()</code></a></li><li><a href="https://core.telegram.org/bots/api#close" target="_blank" rel="noreferrer"><code>internal.close()</code></a></li><li><a href="https://core.telegram.org/bots/api#closeforumtopic" target="_blank" rel="noreferrer"><code>internal.closeForumTopic()</code></a></li><li><a href="https://core.telegram.org/bots/api#closegeneralforumtopic" target="_blank" rel="noreferrer"><code>internal.closeGeneralForumTopic()</code></a></li><li><a href="https://core.telegram.org/bots/api#copymessage" target="_blank" rel="noreferrer"><code>internal.copyMessage()</code></a></li><li><a href="https://core.telegram.org/bots/api#createchatinvitelink" target="_blank" rel="noreferrer"><code>internal.createChatInviteLink()</code></a></li><li><a href="https://core.telegram.org/bots/api#createforumtopic" target="_blank" rel="noreferrer"><code>internal.createForumTopic()</code></a></li><li><a href="https://core.telegram.org/bots/api#createinvoicelink" target="_blank" rel="noreferrer"><code>internal.createInvoiceLink()</code></a></li><li><a href="https://core.telegram.org/bots/api#createnewstickerset" target="_blank" rel="noreferrer"><code>internal.createNewStickerSet()</code></a></li><li><a href="https://core.telegram.org/bots/api#declinechatjoinrequest" target="_blank" rel="noreferrer"><code>internal.declineChatJoinRequest()</code></a></li><li><a href="https://core.telegram.org/bots/api#deletechatphoto" target="_blank" rel="noreferrer"><code>internal.deleteChatPhoto()</code></a></li><li><a href="https://core.telegram.org/bots/api#deletechatstickerset" target="_blank" rel="noreferrer"><code>internal.deleteChatStickerSet()</code></a></li><li><a href="https://core.telegram.org/bots/api#deleteforumtopic" target="_blank" rel="noreferrer"><code>internal.deleteForumTopic()</code></a></li><li><a href="https://core.telegram.org/bots/api#deletemessage" target="_blank" rel="noreferrer"><code>internal.deleteMessage()</code></a></li><li><a href="https://core.telegram.org/bots/api#deletemycommands" target="_blank" rel="noreferrer"><code>internal.deleteMyCommands()</code></a></li><li><a href="https://core.telegram.org/bots/api#deletestickerfromset" target="_blank" rel="noreferrer"><code>internal.deleteStickerFromSet()</code></a></li><li><a href="https://core.telegram.org/bots/api#deletewebhook" target="_blank" rel="noreferrer"><code>internal.deleteWebhook()</code></a></li><li><a href="https://core.telegram.org/bots/api#editchatinvitelink" target="_blank" rel="noreferrer"><code>internal.editChatInviteLink()</code></a></li><li><a href="https://core.telegram.org/bots/api#editforumtopic" target="_blank" rel="noreferrer"><code>internal.editForumTopic()</code></a></li><li><a href="https://core.telegram.org/bots/api#editgeneralforumtopic" target="_blank" rel="noreferrer"><code>internal.editGeneralForumTopic()</code></a></li><li><a href="https://core.telegram.org/bots/api#editmessagecaption" target="_blank" rel="noreferrer"><code>internal.editMessageCaption()</code></a></li><li><a href="https://core.telegram.org/bots/api#editmessagelivelocation" target="_blank" rel="noreferrer"><code>internal.editMessageLiveLocation()</code></a></li><li><a href="https://core.telegram.org/bots/api#editmessagemedia" target="_blank" rel="noreferrer"><code>internal.editMessageMedia()</code></a></li><li><a href="https://core.telegram.org/bots/api#editmessagereplymarkup" target="_blank" rel="noreferrer"><code>internal.editMessageReplyMarkup()</code></a></li><li><a href="https://core.telegram.org/bots/api#editmessagetext" target="_blank" rel="noreferrer"><code>internal.editMessageText()</code></a></li><li><a href="https://core.telegram.org/bots/api#exportchatinvitelink" target="_blank" rel="noreferrer"><code>internal.exportChatInviteLink()</code></a></li><li><a href="https://core.telegram.org/bots/api#forwardmessage" target="_blank" rel="noreferrer"><code>internal.forwardMessage()</code></a></li><li><a href="https://core.telegram.org/bots/api#getchat" target="_blank" rel="noreferrer"><code>internal.getChat()</code></a></li><li><a href="https://core.telegram.org/bots/api#getchatadministrators" target="_blank" rel="noreferrer"><code>internal.getChatAdministrators()</code></a></li><li><a href="https://core.telegram.org/bots/api#getchatmember" target="_blank" rel="noreferrer"><code>internal.getChatMember()</code></a></li><li><a href="https://core.telegram.org/bots/api#getchatmembercount" target="_blank" rel="noreferrer"><code>internal.getChatMemberCount()</code></a></li><li><a href="https://core.telegram.org/bots/api#getchatmenubutton" target="_blank" rel="noreferrer"><code>internal.getChatMenuButton()</code></a></li><li><a href="https://core.telegram.org/bots/api#getcustomemojistickers" target="_blank" rel="noreferrer"><code>internal.getCustomEmojiStickers()</code></a></li><li><a href="https://core.telegram.org/bots/api#getfile" target="_blank" rel="noreferrer"><code>internal.getFile()</code></a></li><li><a href="https://core.telegram.org/bots/api#getforumtopiciconstickers" target="_blank" rel="noreferrer"><code>internal.getForumTopicIconStickers()</code></a></li><li><a href="https://core.telegram.org/bots/api#getgamehighscores" target="_blank" rel="noreferrer"><code>internal.getGameHighScores()</code></a></li><li><a href="https://core.telegram.org/bots/api#getme" target="_blank" rel="noreferrer"><code>internal.getMe()</code></a></li><li><a href="https://core.telegram.org/bots/api#getmycommands" target="_blank" rel="noreferrer"><code>internal.getMyCommands()</code></a></li><li><a href="https://core.telegram.org/bots/api#getmydefaultadministratorrights" target="_blank" rel="noreferrer"><code>internal.getMyDefaultAdministratorRights()</code></a></li><li><a href="https://core.telegram.org/bots/api#getstickerset" target="_blank" rel="noreferrer"><code>internal.getStickerSet()</code></a></li><li><a href="https://core.telegram.org/bots/api#getupdates" target="_blank" rel="noreferrer"><code>internal.getUpdates()</code></a></li><li><a href="https://core.telegram.org/bots/api#getuserprofilephotos" target="_blank" rel="noreferrer"><code>internal.getUserProfilePhotos()</code></a></li><li><a href="https://core.telegram.org/bots/api#getwebhookinfo" target="_blank" rel="noreferrer"><code>internal.getWebhookInfo()</code></a></li><li><a href="https://core.telegram.org/bots/api#hidegeneralforumtopic" target="_blank" rel="noreferrer"><code>internal.hideGeneralForumTopic()</code></a></li><li><a href="https://core.telegram.org/bots/api#leavechat" target="_blank" rel="noreferrer"><code>internal.leaveChat()</code></a></li><li><a href="https://core.telegram.org/bots/api#logout" target="_blank" rel="noreferrer"><code>internal.logOut()</code></a></li><li><a href="https://core.telegram.org/bots/api#pinchatmessage" target="_blank" rel="noreferrer"><code>internal.pinChatMessage()</code></a></li><li><a href="https://core.telegram.org/bots/api#promotechatmember" target="_blank" rel="noreferrer"><code>internal.promoteChatMember()</code></a></li><li><a href="https://core.telegram.org/bots/api#reopenforumtopic" target="_blank" rel="noreferrer"><code>internal.reopenForumTopic()</code></a></li><li><a href="https://core.telegram.org/bots/api#reopengeneralforumtopic" target="_blank" rel="noreferrer"><code>internal.reopenGeneralForumTopic()</code></a></li><li><a href="https://core.telegram.org/bots/api#restrictchatmember" target="_blank" rel="noreferrer"><code>internal.restrictChatMember()</code></a></li><li><a href="https://core.telegram.org/bots/api#revokechatinvitelink" target="_blank" rel="noreferrer"><code>internal.revokeChatInviteLink()</code></a></li><li><a href="https://core.telegram.org/bots/api#sendanimation" target="_blank" rel="noreferrer"><code>internal.sendAnimation()</code></a></li><li><a href="https://core.telegram.org/bots/api#sendaudio" target="_blank" rel="noreferrer"><code>internal.sendAudio()</code></a></li><li><a href="https://core.telegram.org/bots/api#sendchataction" target="_blank" rel="noreferrer"><code>internal.sendChatAction()</code></a></li><li><a href="https://core.telegram.org/bots/api#sendcontact" target="_blank" rel="noreferrer"><code>internal.sendContact()</code></a></li><li><a href="https://core.telegram.org/bots/api#senddice" target="_blank" rel="noreferrer"><code>internal.sendDice()</code></a></li><li><a href="https://core.telegram.org/bots/api#senddocument" target="_blank" rel="noreferrer"><code>internal.sendDocument()</code></a></li><li><a href="https://core.telegram.org/bots/api#sendgame" target="_blank" rel="noreferrer"><code>internal.sendGame()</code></a></li><li><a href="https://core.telegram.org/bots/api#sendinvoice" target="_blank" rel="noreferrer"><code>internal.sendInvoice()</code></a></li><li><a href="https://core.telegram.org/bots/api#sendlocation" target="_blank" rel="noreferrer"><code>internal.sendLocation()</code></a></li><li><a href="https://core.telegram.org/bots/api#sendmediagroup" target="_blank" rel="noreferrer"><code>internal.sendMediaGroup()</code></a></li><li><a href="https://core.telegram.org/bots/api#sendmessage" target="_blank" rel="noreferrer"><code>internal.sendMessage()</code></a></li><li><a href="https://core.telegram.org/bots/api#sendphoto" target="_blank" rel="noreferrer"><code>internal.sendPhoto()</code></a></li><li><a href="https://core.telegram.org/bots/api#sendpoll" target="_blank" rel="noreferrer"><code>internal.sendPoll()</code></a></li><li><a href="https://core.telegram.org/bots/api#sendsticker" target="_blank" rel="noreferrer"><code>internal.sendSticker()</code></a></li><li><a href="https://core.telegram.org/bots/api#sendvenue" target="_blank" rel="noreferrer"><code>internal.sendVenue()</code></a></li><li><a href="https://core.telegram.org/bots/api#sendvideo" target="_blank" rel="noreferrer"><code>internal.sendVideo()</code></a></li><li><a href="https://core.telegram.org/bots/api#sendvideonote" target="_blank" rel="noreferrer"><code>internal.sendVideoNote()</code></a></li><li><a href="https://core.telegram.org/bots/api#sendvoice" target="_blank" rel="noreferrer"><code>internal.sendVoice()</code></a></li><li><a href="https://core.telegram.org/bots/api#setchatadministratorcustomtitle" target="_blank" rel="noreferrer"><code>internal.setChatAdministratorCustomTitle()</code></a></li><li><a href="https://core.telegram.org/bots/api#setchatdescription" target="_blank" rel="noreferrer"><code>internal.setChatDescription()</code></a></li><li><a href="https://core.telegram.org/bots/api#setchatmenubutton" target="_blank" rel="noreferrer"><code>internal.setChatMenuButton()</code></a></li><li><a href="https://core.telegram.org/bots/api#setchatpermissions" target="_blank" rel="noreferrer"><code>internal.setChatPermissions()</code></a></li><li><a href="https://core.telegram.org/bots/api#setchatphoto" target="_blank" rel="noreferrer"><code>internal.setChatPhoto()</code></a></li><li><a href="https://core.telegram.org/bots/api#setchatstickerset" target="_blank" rel="noreferrer"><code>internal.setChatStickerSet()</code></a></li><li><a href="https://core.telegram.org/bots/api#setchattitle" target="_blank" rel="noreferrer"><code>internal.setChatTitle()</code></a></li><li><a href="https://core.telegram.org/bots/api#setgamescore" target="_blank" rel="noreferrer"><code>internal.setGameScore()</code></a></li><li><a href="https://core.telegram.org/bots/api#setmycommands" target="_blank" rel="noreferrer"><code>internal.setMyCommands()</code></a></li><li><a href="https://core.telegram.org/bots/api#setmydefaultadministratorrights" target="_blank" rel="noreferrer"><code>internal.setMyDefaultAdministratorRights()</code></a></li><li><a href="https://core.telegram.org/bots/api#setpassportdataerrors" target="_blank" rel="noreferrer"><code>internal.setPassportDataErrors()</code></a></li><li><a href="https://core.telegram.org/bots/api#setstickerpositioninset" target="_blank" rel="noreferrer"><code>internal.setStickerPositionInSet()</code></a></li><li><a href="https://core.telegram.org/bots/api#setstickersetthumb" target="_blank" rel="noreferrer"><code>internal.setStickerSetThumb()</code></a></li><li><a href="https://core.telegram.org/bots/api#setwebhook" target="_blank" rel="noreferrer"><code>internal.setWebhook()</code></a></li><li><a href="https://core.telegram.org/bots/api#stopmessagelivelocation" target="_blank" rel="noreferrer"><code>internal.stopMessageLiveLocation()</code></a></li><li><a href="https://core.telegram.org/bots/api#stoppoll" target="_blank" rel="noreferrer"><code>internal.stopPoll()</code></a></li><li><a href="https://core.telegram.org/bots/api#unbanchatmember" target="_blank" rel="noreferrer"><code>internal.unbanChatMember()</code></a></li><li><a href="https://core.telegram.org/bots/api#unbanchatsenderchat" target="_blank" rel="noreferrer"><code>internal.unbanChatSenderChat()</code></a></li><li><a href="https://core.telegram.org/bots/api#unhidegeneralforumtopic" target="_blank" rel="noreferrer"><code>internal.unhideGeneralForumTopic()</code></a></li><li><a href="https://core.telegram.org/bots/api#unpinallchatmessages" target="_blank" rel="noreferrer"><code>internal.unpinAllChatMessages()</code></a></li><li><a href="https://core.telegram.org/bots/api#unpinallforumtopicmessages" target="_blank" rel="noreferrer"><code>internal.unpinAllForumTopicMessages()</code></a></li><li><a href="https://core.telegram.org/bots/api#unpinchatmessage" target="_blank" rel="noreferrer"><code>internal.unpinChatMessage()</code></a></li><li><a href="https://core.telegram.org/bots/api#uploadstickerfile" target="_blank" rel="noreferrer"><code>internal.uploadStickerFile()</code></a></li></ul><h2 id="内部事件" tabindex="-1">内部事件 <a class="header-anchor" href="#内部事件" aria-label="Permalink to &quot;内部事件&quot;">​</a></h2><ul><li><a href="https://core.telegram.org/bots/api#update" target="_blank" rel="noreferrer"><code>telegram/callback-query</code></a></li><li><a href="https://core.telegram.org/bots/api#update" target="_blank" rel="noreferrer"><code>telegram/channel-post</code></a></li><li><a href="https://core.telegram.org/bots/api#update" target="_blank" rel="noreferrer"><code>telegram/chat-join-request</code></a></li><li><a href="https://core.telegram.org/bots/api#update" target="_blank" rel="noreferrer"><code>telegram/chat-member</code></a></li><li><a href="https://core.telegram.org/bots/api#update" target="_blank" rel="noreferrer"><code>telegram/chosen-inline-result</code></a></li><li><a href="https://core.telegram.org/bots/api#update" target="_blank" rel="noreferrer"><code>telegram/edited-channel-post</code></a></li><li><a href="https://core.telegram.org/bots/api#update" target="_blank" rel="noreferrer"><code>telegram/edited-message</code></a></li><li><a href="https://core.telegram.org/bots/api#update" target="_blank" rel="noreferrer"><code>telegram/inline-query</code></a></li><li><a href="https://core.telegram.org/bots/api#update" target="_blank" rel="noreferrer"><code>telegram/message</code></a></li><li><a href="https://core.telegram.org/bots/api#update" target="_blank" rel="noreferrer"><code>telegram/my-chat-member</code></a></li><li><a href="https://core.telegram.org/bots/api#update" target="_blank" rel="noreferrer"><code>telegram/poll-answer</code></a></li><li><a href="https://core.telegram.org/bots/api#update" target="_blank" rel="noreferrer"><code>telegram/poll</code></a></li><li><a href="https://core.telegram.org/bots/api#update" target="_blank" rel="noreferrer"><code>telegram/pre-checkout-query</code></a></li><li><a href="https://core.telegram.org/bots/api#update" target="_blank" rel="noreferrer"><code>telegram/shipping-query</code></a></li></ul>',35),i=[l];function n(s,c,g,d,p,h){return t(),r("div",null,i)}const m=e(o,[["render",n]]);export{f as __pageData,m as default};

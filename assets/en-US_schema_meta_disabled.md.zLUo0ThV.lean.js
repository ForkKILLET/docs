import{_ as s,k as i,j as a,m as n}from"./chunks/framework.MHei6uDm.js";const E=JSON.parse(`{"title":"Disable and Hide","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\nfoo: Schema.number().disabled().description('这是一个禁用配置项。'),\\nbar: Schema.number().hidden().description('这是一个隐藏配置项。'),\\nbaz: Schema.string().deprecated().description('这是一个已废弃配置项。'),\\nqux: Schema.string().experimental().description('这是一个实验性配置项。'),\\nchoice: Schema.union([\\nSchema.const('foo').disabled(),\\nSchema.const('bar').hidden(),\\nSchema.const('baz').deprecated(),\\nSchema.const('qux').experimental(),\\n]).description('这些功能在 select 中也可以使用。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"en-US/schema/meta/disabled.md","filePath":"en-US/schema/meta/disabled.md"}`),h={name:"en-US/schema/meta/disabled.md"},e=n("",5),t=[e];function k(p,l,d,r,B,c){return a(),i("div",null,t)}const g=s(h,[["render",k]]);export{E as __pageData,g as default};

"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=l(n),d=a,v=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(v,s(s({ref:t},p),{},{components:n})):r.createElement(v,s({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[c]="string"==typeof e?e:a,s[1]=u;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},s=void 0,u={unversionedId:"vue/vuex",id:"vue/vuex",title:"vuex",description:"\u5b98\u65b9\u8d44\u6599",source:"@site/docs/vue/vuex.md",sourceDirName:"vue",slug:"/vue/vuex",permalink:"/docs/vue/vuex",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"vuejs",permalink:"/docs/vue/vuejs"},next:{title:"vue-cli",permalink:"/docs/vue/vue-cli"}},i={},l=[{value:"\u5b98\u65b9\u8d44\u6599",id:"\u5b98\u65b9\u8d44\u6599",level:3},{value:"\u5b66\u4e60\u89c6\u5c4f",id:"\u5b66\u4e60\u89c6\u5c4f",level:3},{value:"\u5b66\u4e60\u8bb0\u5f55",id:"\u5b66\u4e60\u8bb0\u5f55",level:3},{value:"1. \u4e0b\u8f7d\u5230\u672c\u5730\u6216\u76f4\u63a5CDN\u5f15\u7528",id:"1-\u4e0b\u8f7d\u5230\u672c\u5730\u6216\u76f4\u63a5cdn\u5f15\u7528",level:6},{value:"2. npm/yarn\u5b89\u88c5",id:"2-npmyarn\u5b89\u88c5",level:6},{value:"3. \u4f7f\u7528",id:"3-\u4f7f\u7528",level:6},{value:"\u9047\u5230\u95ee\u9898",id:"\u9047\u5230\u95ee\u9898",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3}],p={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u5b98\u65b9\u8d44\u6599"},"\u5b98\u65b9\u8d44\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6587\u6863\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://vuex.vuejs.org/zh/"},"https://vuex.vuejs.org/zh/")),(0,a.kt)("li",{parentName:"ul"},"\u89c6\u5c4f(\u82f1\u6587)\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://scrimba.com/learn/vuex"},"https://scrimba.com/learn/vuex"))),(0,a.kt)("h3",{id:"\u5b66\u4e60\u89c6\u5c4f"},"\u5b66\u4e60\u89c6\u5c4f"),(0,a.kt)("h3",{id:"\u5b66\u4e60\u8bb0\u5f55"},"\u5b66\u4e60\u8bb0\u5f55"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6700\u65b0\u7248\u672c\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"Vuex@4.1.0")),(0,a.kt)("li",{parentName:"ul"},"\u89e3\u51b3\u7ec4\u4ef6\u4e4b\u95f4\u7684\u4f20\u503c\u3001\u6570\u636e\u5171\u4eab\uff0c\u5c31\u662f\u7ba1\u7406\u6570\u636e\uff0c\u6570\u636e\u90fd\u662f\u54cd\u5e94\u5f0f\u7684\uff0c\u80fd\u4fdd\u6301\u7ec4\u4ef6\u5185\u5bb9\u540c\u6b65"),(0,a.kt)("li",{parentName:"ul"},"mutations\u4e2d\u66f4\u6539state\u7684\u503c ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"vuex \u4f7f\u7528  ")),(0,a.kt)("h6",{id:"1-\u4e0b\u8f7d\u5230\u672c\u5730\u6216\u76f4\u63a5cdn\u5f15\u7528"},"1. \u4e0b\u8f7d\u5230\u672c\u5730\u6216\u76f4\u63a5CDN\u5f15\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'<script src="https://unpkg.com/vuex"><\/script>  // \u6307\u5411\u6700\u65b0\u7248\n<script src="https://unpkg.com/vuex@2.0.0"><\/script> // \u6307\u5b9a\u7248\u672c\n')),(0,a.kt)("h6",{id:"2-npmyarn\u5b89\u88c5"},"2. npm/yarn\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install vuex --save\n\nyarn add vuex\n")),(0,a.kt)("h6",{id:"3-\u4f7f\u7528"},"3. \u4f7f\u7528"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"(\u7b80\u5355\u7248)\uff0c\u65b0\u5efa",(0,a.kt)("inlineCode",{parentName:"li"},"store/index.js"),"\u6587\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import Vue from 'vue'\nimport Vuex from 'vuex'\n\nVue.use(Vuex)\n\nconst store = new Vuex.Store({\n    state: {\n        count:0,\n        user:{\n            name:'',\n            age:18\n        }\n    },\n    getters: {\n        getCount(state){\n            return state.count;\n        },\n        getUser(state){\n            return state.user;\n        }\n    },\n    mutations: {\n        mUpdateCount(state,count){\n            state.count = count;\n        },\n        mUpdateUser(state,user){\n            state.user = user;\n        }\n    },\n    actions: {\n        updateCount(context,count){\n            context.commit(\"mUpdateCount\",count)\n        },\n        updateUser(context,user){\n            context.commit(\"mUpdateUser\",user)\n        }\n    }\n});\nexport default store;\n\n/*\n    state \u6570\u636e\u90fd\u662f\u54cd\u5e94\u5f0f\u7684\uff0c\n    getters \u7c7b\u4f3c\u8ba1\u7b97\u5c5e\u6027\uff0c\u5bf9state\u6570\u636e\u8fdb\u884c\u5305\u88c5\n    mutations \u53ef\u4ee5\u4fee\u6539state\u503c\u7684\u65b9\u6cd5\uff0c\u662f\u540c\u6b65\u7684 commit\uff0c\u53ef\u4ee5\u8ffd\u9010\u6bcf\u6b21\u4fee\u6539\u7684\u6570\u636e\n    actions \u5f02\u6b65,\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539state\u7684\u503c\uff0c\u4f46\u662f\u8ffd\u8e2a\u4e0d\u5230\u6570\u636e\u7684\u6539\u53d8\n*/\n\n// \u6ce8\u610f\uff1a\u7ec4\u4ef6\u591a\u6570\u636e\u591a\uff0c\u8fd9\u79cd\u65b9\u5f0f\u4f1a\u9020\u6210\u6570\u636e\u590d\u6742\uff0c\u5e94\u8be5\u4f7f\u7528\u6a21\u5757\u5316\uff0c\u6539\u8fdb\u5982\u4e0b\n// user.js\nconst user = {\n    state: () => ({ ... }),\n    getters:{},\n    mutations:{},\n    actions\uff1b{}\n}\nexport default user\n\n// product.js\nexport default {\n    product:{  \n        namespaced:true,\n        state: () => ({\n            list:['1','2']\n\n        }),\n        getters:{},\n        mutations:{\n            add(state,value){\n                state.list.push(value)\n            }\n        },\n        actions\uff1b{\n            addAsync(context,value){\n                context.commit('add',value)\n            }\n        }\n    }\n}\n\n// \u5728store/index.js \u5f15\u5165\nimport Vue from 'vue'\nimport Vuex from 'vuex'\nimport user from 'user.js'\nimport product from 'product.js'\n\nVue.use(Vuex)\n\nconst store = new Vuex.Store({\n    modules:{\n        user,\n        product,\n    }\n});\nexport default store;\n")),(0,a.kt)("p",null,"2.\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"main.js"),"\u5f15\u5165*.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import store from './store'\n// Vue.prototype.$store = store  //\u8fd9\u53e5\u8bdd\u4e0d\u5199\u4e5f\u80fd\u7528$store\n\nconst app = new Vue({\n    ...App,\n    store\n})\napp.$mount()\n\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'\n\ncomputed\uff1a{\n        \n    // \u7b2c\u4e00\u79cd\n    // ...mapState(['count'])  \n\n    // \u7b2c\u4e8c\u79cd\uff0c\u53ef\u4ee5\u8d77\u4e2a\u540d\u5b57  \n    ...mapState({\n        c:'count'\n    }),\n    ...mapState('product',['list'])\n    ...mapGetters([''])\n},\n// \u6ce8\u610f\uff1a\u540c\u4e00\u4e2astate \u4e0d\u80fd\u540c\u65f6 mapSate getters\nmethods:{\n        ...mapMutations('product',['add']),\n        ...mapActions('product',['addAsyns'])\n\n}\n\n\n// \u65b9\u5f0f\u4e00\nthis.$store.state.count; // \u83b7\u53d6\u503c\nthis.$store.getters.getCount  // \u83b7\u53d6\u503c\nthis.$store.getters.getUser.name // \u83b7\u53d6\u503c\nthis.$store.dispatch('updateCount'.3); // \u6539\u53d8\u503c dispatch \u662f\u8bf7\u6c42actions \nthis.$store.commit('addAsyns')  // commit \u662f\u8bf7\u6c42mutations\u7684\n\n")),(0,a.kt)("h3",{id:"\u9047\u5230\u95ee\u9898"},"\u9047\u5230\u95ee\u9898"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6570\u636e\u6301\u4e45\u5316"),(0,a.kt)("p",{parentName:"li"},"  localStorage"))),(0,a.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"))}m.isMDXComponent=!0}}]);
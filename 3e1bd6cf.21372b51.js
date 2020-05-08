(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{215:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(1),i=t(9),a=(t(0),t(419)),s={},o={id:"version-3.8.2/\u7cfb\u7edf\u6269\u5c55\u6307\u5357/\u6d41\u7a0b\u540e\u51fd\u6570\u6269\u5c55\u5f00\u53d1",title:"\u6d41\u7a0b\u540e\u51fd\u6570\u6269\u5c55\u5f00\u53d1",description:"## \u5f00\u53d1\u6b65\u9aa4",source:"@site/versioned_docs/version-3.8.2/\u7cfb\u7edf\u6269\u5c55\u6307\u5357/\u6d41\u7a0b\u540e\u51fd\u6570\u6269\u5c55\u5f00\u53d1.md",permalink:"/imgenius-docs/docs/\u7cfb\u7edf\u6269\u5c55\u6307\u5357/\u6d41\u7a0b\u540e\u51fd\u6570\u6269\u5c55\u5f00\u53d1",editUrl:"https://github.com/iDongMobility/imgenius-docs/edit/master/versioned_docs/version-3.8.2/\u7cfb\u7edf\u6269\u5c55\u6307\u5357/\u6d41\u7a0b\u540e\u51fd\u6570\u6269\u5c55\u5f00\u53d1.md",version:"3.8.2",lastUpdatedBy:"\u6d2a\u5fd7\u5175",lastUpdatedAt:1588922969,sidebar:"version-3.8.2/someSidebar",previous:{title:"\u4e3b\u9875\u5b9a\u5236\u6269\u5c55\u5f00\u53d1",permalink:"/imgenius-docs/docs/\u7cfb\u7edf\u6269\u5c55\u6307\u5357/\u4e3b\u9875\u5b9a\u5236\u6269\u5c55\u5f00\u53d1"},next:{title:"\u62a5\u8868\u6269\u5c55\u5f00\u53d1",permalink:"/imgenius-docs/docs/\u7cfb\u7edf\u6269\u5c55\u6307\u5357/\u62a5\u8868\u6269\u5c55\u5f00\u53d1"}},c=[{value:"\u5f00\u53d1\u6b65\u9aa4",id:"\u5f00\u53d1\u6b65\u9aa4",children:[]},{value:"\u8c03\u7528\u65b9\u6cd5",id:"\u8c03\u7528\u65b9\u6cd5",children:[]}],p={rightToc:c};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u5f00\u53d1\u6b65\u9aa4"},"\u5f00\u53d1\u6b65\u9aa4"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u65b0\u5efa\u9879\u76ee",Object(a.b)("inlineCode",{parentName:"p"},"ProcessFunc"),"(\u540d\u79f0\u53ef\u4fee\u6539)\uff0c\u9009\u62e9",Object(a.b)("inlineCode",{parentName:"p"},"\u7c7b\u5e93(.NET Framework)"),",",Object(a.b)("inlineCode",{parentName:"p"},"\u6846\u67b6"),"\u9009\u62e9",Object(a.b)("inlineCode",{parentName:"p"},".NET Framework 4.6.1")),Object(a.b)("p",{parentName:"li"},"  ",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/static/docimg/%E6%B5%81%E7%A8%8B%E5%90%8E%E5%87%BD%E6%95%B01.png",alt:"create"})))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u6309\u9700\u6dfb\u52a0\u5f15\u7528"),Object(a.b)("p",{parentName:"li"},"  ",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/static/docimg/%E6%B5%81%E7%A8%8B%E5%90%8E%E5%87%BD%E6%95%B02.png",alt:"create"})))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u7f16\u8f91",Object(a.b)("inlineCode",{parentName:"p"},"Class1.cs"),"(\u540d\u79f0\u53ef\u4fee\u6539)\n\u793a\u4f8b\u4ee3\u7801"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-C#"}),'using iDong.imgenius.Business;\nusing iDong.imgenius.Entities;\nusing iDong.imgenius.Utilities;\nusing System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace ProcessFunc\n{\n    public class Class1\n    {\n        /// <summary>\u5c06\u4f5c\u4e1a\u7ec4\u5c5e\u6027\u503c\u5199\u5230\u65e5\u5fd7\u4e2d</summary>\n        /// <param name="_businessProcessID"></param>\n        /// <param name="_taskgroupEntityID"></param>\n        /// <param name="_expression"></param>\n        /// <param name="_isTry"></param>\n        /// <returns></returns>\n        public string WriteLog(Guid _businessProcessID, Guid _taskgroupEntityID, string _expression, bool _isTry, TaskGroupEntity _taskGroup, Guid _sessionID)\n        {\n            if (_isTry)\n                return string.Empty;\n            if (_businessProcessID.Equals(Guid.Empty) || _taskgroupEntityID.Equals(Guid.Empty) || string.IsNullOrEmpty(_expression))\n                return "\u53c2\u6570\u4e0d\u80fd\u4e3a\u7a7a";\n            else\n            {\n                string name = _expression.Trim().Replace("\\"", "").Replace("\'", "");\n                BTaskGroupEntity bTaskGroupEntity = new BTaskGroupEntity(_sessionID);\n                TaskGroupProperty property = bTaskGroupEntity.GetPropertyByName(_taskgroupEntityID, name);\n                if (property == null)\n                    return string.Format("\u4f5c\u4e1a\u7ec4\u5c5e\u6027\u201c{0}\u201d\u4e0d\u5b58\u5728", name);\n\n                imLogWriter.WriteWarning(string.Format("\u4f5c\u4e1a\u7ec4\u5c5e\u6027\u201c{0}\u201d\u7684\u503c\u662f\u201c{1}\u201d", name, property.Value));\n                return string.Empty;\n            }\n        }\n    }\n}\n'))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u751f\u6210\u89e3\u51b3\u65b9\u6848\n\u5c06\u8f93\u51fa\u76ee\u5f55\u4e2d\u7684",Object(a.b)("inlineCode",{parentName:"p"},"ProcessFunc.dll"),"\u590d\u5236\u5230",Object(a.b)("inlineCode",{parentName:"p"},"[iDong\u5b89\u88c5\u76ee\u5f55]/imgenius"),"\u4e0b"))),Object(a.b)("h2",{id:"\u8c03\u7528\u65b9\u6cd5"},"\u8c03\u7528\u65b9\u6cd5"),Object(a.b)("p",null,"\u5728\u4e1a\u52a1\u6d41\u7a0b\u7684\u6d3b\u52a8\u4e0a\u914d\u7f6e",Object(a.b)("inlineCode",{parentName:"p"},"\u6d3b\u52a8\u7ed3\u675f\u4e8b\u4ef6"),"\n\u683c\u5f0f\uff1a",Object(a.b)("inlineCode",{parentName:"p"},'ProcessFunc!ProcessFunc.Class1!WriteLog("\u5de5\u5355\u53f7")')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ProcessFunc"),"\uff0c\u6587\u4ef6\u540d;"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ProcessFunc.Class1"),"\uff0c\u547d\u540d\u7a7a\u95f4.\u7c7b\u540d\uff1b"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},'WriteLog("\u5de5\u5355\u53f7")'),"\uff0c\u51fd\u6570\u540d\u548c\u53c2\u6570")))}u.isMDXComponent=!0},419:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),u=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},l=function(e){var n=u(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(t),b=r,d=l["".concat(s,".").concat(b)]||l[b]||m[b]||a;return t?i.a.createElement(d,o({ref:n},p,{components:t})):i.a.createElement(d,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=b;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<a;p++)s[p]=t[p];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ac92e85"],{"11e2":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._m(0),o("Navbar")],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"home-header",attrs:{id:"home-header"}},[n("div",{staticClass:"home-header__title"},[n("div",{staticClass:"home-header__title-logo"},[n("img",{attrs:{src:o("9d64"),alt:"Adele Angel"}})]),n("div",{staticClass:"home-header__title-intro"},[n("h2",[e._v(" Hello, my name is "),n("span",[e._v("Adele")])])]),n("div",{staticClass:"home-header__title-content"},[n("h1",[e._v(" And I'm a "),n("span",[e._v("Full Stack Developer")])])])]),n("div",{staticClass:"smoothscroll"},[n("a",{attrs:{href:"#projects"}},[n("div",{staticClass:"scroll-down"})])])])}],c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"navbar"},[o("nav",[o("ul",[o("li",[o("router-link",{attrs:{to:""},nativeOn:{click:function(t){return e.moveToSection("about")}}},[e._v("About")])],1),o("li",[o("router-link",{attrs:{to:""},nativeOn:{click:function(t){return e.moveToSection("skills")}}},[e._v("Skills & Services")])],1),o("li",[o("router-link",{attrs:{to:""},nativeOn:{click:function(t){return e.moveToSection("projects")}}},[e._v("Projects")])],1),o("li",[o("router-link",{attrs:{to:""},nativeOn:{click:function(t){return e.moveToSection("articles")}}},[e._v("Articles")])],1),o("li",[o("router-link",{attrs:{to:""},nativeOn:{click:function(t){return e.moveToSection("contact")}}},[e._v("Contact")])],1)])])])},l=[],i={name:"Navbar",created:function(){window.addEventListener("scroll",(function(){window.scrollY>500?(document.querySelector("nav").style.backgroundColor="#f44030",document.querySelector("nav").classList.add("sticky")):(document.querySelector("nav").classList.remove("sticky"),document.querySelector("nav").style.backgroundColor="#ffffff")}))},destroyed:function(){window.removeEventListener("scroll")},methods:{moveToSection:function(e){var t=document.querySelector(".home-header").clientHeight,o=document.querySelector("#about").clientHeight,n=document.querySelector("#skills").clientHeight,r=document.querySelector("#projects").clientHeight,c=document.querySelector("#articles").clientHeight,l=0;"about"===e&&(l=t),"skills"===e&&(l=o+t),"projects"===e&&(l=t+o+n),"articles"===e&&(l=t+o+n+r),"contact"===e&&(l=t+o+n+r+c),window.scroll({top:l,left:0,behavior:"smooth"})}}},a=i,s=o("2877"),u=Object(s["a"])(a,c,l,!1,null,null,null),d=u.exports,v={name:"HomeHeader",components:{Navbar:d}},m=v,h=Object(s["a"])(m,n,r,!1,null,null,null);t["default"]=h.exports},"9d64":function(e,t,o){e.exports=o.p+"img/logo.82ea8e41.png"}}]);
//# sourceMappingURL=chunk-1ac92e85.2084ab6f.js.map
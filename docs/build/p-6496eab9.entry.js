import{r as s,g as t}from"./p-69e58d9c.js";import{u as n,a as i}from"./p-5fc67a42.js";import"./p-aea24d64.js";const h='<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 640 480">\n  <path fill="#ffce00" d="M0 320h640v160H0z"/>\n  <path d="M0 0h640v160H0z"/>\n  <path fill="#d00" d="M0 160h640v160H0z"/>\n</svg>\n',a='<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512">\n  <path fill="#ffce00" d="M0 341.3h512V512H0z"/>\n  <path d="M0 0h512v170.7H0z"/>\n  <path fill="#d00" d="M0 170.7h512v170.6H0z"/>\n</svg>\n',o=class{constructor(t){s(this,t),this.square=!1,this.round=!1}onSquare(s){this.el.innerHTML=s?a:h}onRound(s){n(this.el,s)}componentWillLoad(){this.el.innerHTML=this.square?a:h,i(this.el),n(this.el,this.round)}get el(){return t(this)}static get watchers(){return{square:["onSquare"],round:["onRound"]}}};export{o as uni_flag_de}
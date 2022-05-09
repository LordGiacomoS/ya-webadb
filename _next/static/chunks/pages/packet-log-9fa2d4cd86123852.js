(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[267],{3979:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/packet-log",function(){return r(2155)}])},2155:function(e,n,r){"use strict";r.a(e,(async function(e,t){try{r.r(n);var o,a=r(9837),c=r(1710),l=r(6671),i=r(6339),s=r(857),d=r(7374),u=r(323),g=r(2828),m=r(5320),f=r(6174),w=r(6606),h=r(9545),p=r(3519),v=e([w,p]);function O(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function k(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function P(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function S(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){P(e,n,r[n])}))}return e}function I(e,n){if(null==e)return{};var r,t,o=q(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function q(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}[w,p]=v.then?(await v)():v;var x=(P(o={},u.wj.Auth,"AUTH"),P(o,u.wj.Close,"CLSE"),P(o,u.wj.Connect,"CNXN"),P(o,u.wj.OK,"OKAY"),P(o,u.wj.Open,"OPEN"),P(o,u.wj.Write,"WRTE"),o),b=new(function(){function e(){var n=this;O(this,e),this.selectedPacket=void 0,(0,g.ky)(this,{selectedPacket:g.LO.ref}),(0,g.EH)((function(){0===h.q.logs.length&&(n.selectedPacket=void 0)}))}var n,r,t;return n=e,(r=[{key:"commandBarItems",get:function(){return[{key:"clear",disabled:!h.q.device,iconProps:{iconName:p.PJ.Delete},text:"Clear",onClick:function(){return h.q.clearLog()}}]}}])&&k(n.prototype,r),t&&k(n,t),e}()),y=(0,i.Z)({grow:{height:0},grid:{height:"100%"},header:{textAlign:"center",lineHeight:"".concat(32,"px")},row:{"&:hover":{backgroundColor:"#f3f2f1"}},selected:{backgroundColor:"#edebe9"},code:S({fontFamily:"monospace",textOverflow:"ellipsis",whiteSpace:"nowrap",lineHeight:"32px",cursor:"default"},s.q5.overflow("hidden")),hexViewer:S({},s.q5.padding("12px"),s.q5.borderTop("1px","solid","rgb(243, 242, 241)"))}),N=[{title:"Direction",width:100,CellComponent:(0,p.$g)("Direction")((function(e){var n=e.className,r=e.rowIndex,t=I(e,["className","rowIndex"]),o=h.q.logs[r],c=y();return(0,a.jsx)("div",S({className:(0,d.z)(n,c.code)},t,{children:o.direction}))}))},{title:"Command",width:100,CellComponent:(0,p.$g)("Command")((function(e){var n,r=e.className,t=e.rowIndex,o=I(e,["className","rowIndex"]),c=h.q.logs[t];c.commandString||(c.commandString=null!==(n=x[c.command])&&void 0!==n?n:(0,u.FO)(new Uint32Array([c.command])));var l=y();return(0,a.jsx)("div",S({className:(0,d.z)(r,l.code)},o,{children:c.commandString}))}))},{title:"Arg0",width:100,CellComponent:(0,p.$g)("Command")((function(e){var n=e.className,r=e.rowIndex,t=I(e,["className","rowIndex"]),o=h.q.logs[r];o.arg0String||(o.arg0String=o.arg0.toString(16).padStart(8,"0"));var c=y();return(0,a.jsx)("div",S({className:(0,d.z)(n,c.code)},t,{children:o.arg0String}))}))},{title:"Arg1",width:100,CellComponent:(0,p.$g)("Command")((function(e){var n=e.className,r=e.rowIndex,t=I(e,["className","rowIndex"]),o=h.q.logs[r];o.arg1String||(o.arg1String=o.arg1.toString(16).padStart(8,"0"));var c=y();return(0,a.jsx)("div",S({className:(0,d.z)(n,c.code)},t,{children:o.arg1String}))}))},{title:"Payload",width:200,flexGrow:1,CellComponent:(0,p.$g)("Command")((function(e){var n=e.className,r=e.rowIndex,t=I(e,["className","rowIndex"]),o=h.q.logs[r];o.payloadString||(o.payloadString=(0,w.lr)(o.payload.subarray(0,100)));var c=y();return(0,a.jsx)("div",S({className:(0,d.z)(n,c.code)},t,{children:o.payloadString}))}))}],j=(0,p.$g)("Header")((function(e){var n=e.className,r=e.columnIndex,t=I(e,["className","columnIndex"]),o=y();return(0,a.jsx)("div",S({className:(0,d.z)(n,o.header)},t,{children:N[r].title}))})),C=(0,m.Pi)((function(e){var n=e.className,r=e.rowIndex,t=I(e,["className","rowIndex"]),o=y(),c=(0,p.W6)((function(){(0,g.z)((function(){b.selectedPacket=h.q.logs[r]}))}));return(0,a.jsx)("div",S({className:(0,d.z)(n,o.row,b.selectedPacket===h.q.logs[r]&&o.selected),onClick:c},t))}));n.default=(0,m.Pi)((function(){var e=y();return(0,a.jsxs)(c.K,S({},p.LE,{tokens:{},children:[(0,a.jsx)(f.default,{children:(0,a.jsx)("title",{children:"Packet Log - Android Web Toolbox"})}),(0,a.jsx)(w.X3,{items:b.commandBarItems}),(0,a.jsx)(l.v,{className:e.grow,grow:!0,children:(0,a.jsx)(w.rj,{className:e.grid,rowCount:h.q.logs.length,rowHeight:32,columns:N,HeaderComponent:j,RowComponent:C})}),b.selectedPacket&&b.selectedPacket.payload.length>0&&(0,a.jsx)(l.v,{className:e.grow,grow:!0,children:(0,a.jsx)(w.Kb,{className:e.hexViewer,data:b.selectedPacket.payload})})]}))})),t()}catch(O){t(O)}}))}},function(e){e.O(0,[774,888,179],(function(){return n=3979,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
//# sourceMappingURL=packet-log-9fa2d4cd86123852.js.map
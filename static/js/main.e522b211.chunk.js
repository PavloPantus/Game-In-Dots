(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(30)},25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),s=n.n(o),c=n(1),u=(n(25),Object(c.b)(function(e){return{}},{})(function(e){var t=e.leader;return a.a.createElement("div",{className:"leader"},a.a.createElement("span",{className:"leader__name"},t.winner),a.a.createElement("span",{className:"leader__date"},t.date))})),l=(n(26),n(4)),d=n.n(l),i="https://starnavi-frontend-test-task.herokuapp.com",f=function(e){var t,n;return d.a.async(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d.a.awrap(fetch("".concat(i,"/").concat(e)));case 2:return t=r.sent,r.next=5,d.a.awrap(t.json());case 5:return n=r.sent,r.abrupt("return",n);case 7:case"end":return r.stop()}})},E=function(e){return e.leaders},p=function(){return function(e){f("winners").then(function(t){e({type:"UPDATE_LEADERS",payload:t})}).catch().finally()}},m={loadLeaders:p},h=Object(c.b)(function(e){return{leaders:E(e)}},m)(function(e){var t=e.leaders,n=e.loadLeaders;return Object(r.useEffect)(function(){n()},[n]),a.a.createElement("section",{className:"leaders-bord"},a.a.createElement("h2",{className:"leaders-bord__heading"},"Leader Bord"),t.slice(-15).map(function(e){return a.a.createElement(u,{key:e.id,leader:e})}))}),g=function(e){return e.presets},v=(n(28),n(13)),_=n.n(v),y=function(e){return e.gameStarted},S=function(e){return{type:"SET_GAME_STARTED",payload:e}},R=function(e){return e.notUsedIndexes},U=function(e){return e.activeRandomSquare},T=n(7),N=function(e){return e.userWonIndexes},w=function(e){return{type:"CLEAR_USER_WON_INDEXES",payload:e}},I=function(e){return e.userLostIndexes},O=function(e){return{type:"CLEAR_USER_LOST_INDEXES",payload:e}},x=function(e){return e.currentGameMode},A=function(e){return e.showResults},D=function(e){return{type:"SET_SHOW_RESULTS",payload:e}},L=function(e){return e.winner},b=function(e){return e.currentPlayer},P={setGameStarted:S,updateNotUsedIndexes:function(e){return{type:"UPDATE_NOT_USED_INDEXES",payload:e}},setActiveRandomSquare:function(e){return{type:"SET_RANDOM_SQUARE",payload:e}},updateUserWonIndexes:function(e){return{type:"UPDATE_USER_WON_INDEXES",payload:e}},updateUserLostIndexes:function(e){return{type:"UPDATE_USER_LOST_INDEXES",payload:e}},clearUserWonIndexes:w,clearUserLostIndexes:O,setShowResults:D,setWinner:function(e){return{type:"SET_WINNER",payload:e}},sendWinnerInfoToServer:function(e){return function(t){return function(e){var t,n;return d.a.async(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d.a.awrap(fetch("".concat(i,"/winners"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}));case 3:return t=r.sent,r.next=6,d.a.awrap(t.json());case 6:return n=r.sent,console.log("\u0423\u0441\u043f\u0435\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440"),r.abrupt("return",n);case 11:r.prev=11,r.t0=r.catch(0),console.error("\u041e\u0448\u0438\u0431\u043a\u0430:",r.t0);case 14:case"end":return r.stop()}},null,null,[[0,11]])}(e)}},loadLeadrs:p},M=Object(c.b)(function(e){return{gameStarted:y(e),notUsedIndexes:R(e),activeRandomSquare:U(e),userWonIndexes:N(e),userLostIndexes:I(e),currentGameMode:x(e),presets:g(e),currentPlayer:b(e)}},P)(function(e){var t=e.currentGameMode,n=e.gameStarted,o=e.setGameStarted,s=e.notUsedIndexes,c=e.updateNotUsedIndexes,u=e.setActiveRandomSquare,l=e.activeRandomSquare,d=e.updateUserWonIndexes,i=e.userWonIndexes,f=e.updateUserLostIndexes,E=e.userLostIndexes,p=e.presets,m=e.clearUserWonIndexes,h=e.clearUserLostIndexes,g=e.setShowResults,v=e.setWinner,y=e.currentPlayer,S=e.sendWinnerInfoToServer,R=e.loadLeadrs,U=Object(r.useMemo)(function(){console.log("counting");for(var e=[],n=0;n<Math.pow(t?p[t].field:5,2);n++)e.push(n);return e},[t,p]);Object(r.useEffect)(function(){for(var e=[],n=0;n<Math.pow(t?p[t].field:5,2);n++)e.push(n);c(e)},[t,p,c]);var T=function(e){return Math.floor(Math.random()*e)};return Object(r.useEffect)(function(){var e;if(console.log("length of not used",s.length),n){if(E.length>s.length/2||i.length>s.length/2){v(i.length>E.length?y:"Computer"),m(),h(),g(!0),o(!1);var r=(new Date).toLocaleString();S({winner:i.length>E.length?y:"Computer",date:r}).then(function(){R()})}var a=s.filter(function(e){return-1===i.indexOf(e)&&-1===E.indexOf(e)}),c=T(a.length);u(a[c]),e=setInterval(function(){f(a[c]),console.log("userLOOOOST",E),console.log("filtering");var e=s.filter(function(e){return-1===i.indexOf(e)&&-1===E.indexOf(e)});console.log("fileterd items length =",e.length);var t=T(e.length);console.log("random index",t),u(e[t]),console.log("game is going",i)},t?p[t].delay:2e3)}return function(){clearInterval(e)}},[n,i,E,s,u,t,p,v,y,m,h,g,o,S,R,f]),a.a.createElement("section",{style:{gridGap:"0",gridTemplateColumns:"repeat(".concat(t?p[t].field:5,", 30px)")},className:"game-board"},U.map(function(e,t){return a.a.createElement("div",{key:e,className:_()("game-board__square",{"active-random":t===l,"user-won-square":i.includes(t),"user-lost-square":E.includes(t)}),onClick:function(){console.log("user click",i),t===l&&d(t)}})}))});var W={loadPresets:function(){return function(e){f("game-settings").then(function(t){e({type:"SET_PRESETS",payload:t})}).catch().finally()}},setCurrentGameMode:function(e){return{type:"UPDATE_CURRENT_GAME_MODE",payload:e}},setCurrentPlayer:function(e){return{type:"UPDATE_CURRENT_PLAYER",payload:e}},setGameStarted:S,setShowResults:D,clearUserWonIndexes:w,clearUserLostIndexes:O},j=Object(c.b)(function(e){return{presets:g(e),currentGameMode:x(e),currentPlayer:b(e),showResults:A(e),winner:L(e)}},W)(function(e){var t=e.loadPresets,n=e.presets,o=e.currentGameMode,s=e.setCurrentGameMode,c=e.currentPlayer,u=e.setCurrentPlayer,l=e.setGameStarted,d=e.setShowResults,i=e.showResults,f=e.winner,E=e.clearUserWonIndexes,p=e.clearUserLostIndexes;Object(r.useEffect)(function(){t()},[t]);var m=Object(r.useRef)(null),g=Object(r.useRef)(null);return a.a.createElement("div",{className:"App"},a.a.createElement("section",{className:"game-section"},a.a.createElement("div",{className:"game-section__select-game-parameters"},a.a.createElement("select",{ref:m,onChange:function(e){l(!1),E(),p(),console.log(e.target.value),s(e.target.value)},value:o,className:"game-section__select-game-mode",required:!0},a.a.createElement("option",{value:""},"Pick game mode"),Object.keys(n).map(function(e){return a.a.createElement("option",{value:e},{easyMode:"Easy Mode",normalMode:"Normal Mode",hardMode:"Hard Mode"}[e])})),a.a.createElement("input",{ref:g,className:"game-section__input-player-name",type:"text",placeholder:"Enter your name",value:c,onChange:function(e){u(e.target.value)}}),a.a.createElement("button",{className:"game-section__play-button",onClick:function(e){d(!1),E(),p(),""!==o?""!==c?l(!0):g.current.focus():m.current.focus()}},f?"PLAY AGAIN":"PLAY"),i&&a.a.createElement("div",{className:"game-section__results"},f," ","won!")),a.a.createElement(M,null)),a.a.createElement(h,null))}),C=n(5),G=n(14),k=Object(C.c)({leaders:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_LEADERS":return t.payload;default:return e}},presets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PRESETS":return t.payload;default:return e}},currentGameMode:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CURRENT_GAME_MODE":return t.payload;default:return e}},currentPlayer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CURRENT_PLAYER":return t.payload;default:return e}},userWonIndexes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_USER_WON_INDEXES":return[].concat(Object(T.a)(e),[t.payload]);case"CLEAR_USER_WON_INDEXES":return[];default:return e}},userLostIndexes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_USER_LOST_INDEXES":return[].concat(Object(T.a)(e),[t.payload]);case"CLEAR_USER_LOST_INDEXES":return[];default:return e}},gameStarted:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GAME_STARTED":return t.payload;default:return e}},activeRandomSquare:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_RANDOM_SQUARE":return t.payload;default:return e}},notUsedIndexes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_NOT_USED_INDEXES":return t.payload;default:return e}},showResults:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SHOW_RESULTS":return t.payload;default:return e}},winner:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WINNER":return t.payload;default:return e}}}),q=Object(C.d)(k,Object(C.a)(G.a));n(29);s.a.render(a.a.createElement(c.a,{store:q},a.a.createElement(j,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e522b211.chunk.js.map
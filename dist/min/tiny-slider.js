var tns=function(){var t=window,Hi=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window,Oi=e.cancelAnimationFrame||e.mozCancelAnimationFrame||function(t){clearTimeout(t)};function Di(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function ki(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function Ri(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function Pi(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function Ii(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function zi(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function Wi(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function qi(t){return("insertRule"in t?t.cssRules:t.rules).length}function Fi(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var i="classList"in document.createElement("_"),ji=i?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},Vi=i?function(t,e){ji(t,e)||t.classList.add(e)}:function(t,e){ji(t,e)||(t.className+=" "+e)},Gi=i?function(t,e){ji(t,e)&&t.classList.remove(e)}:function(t,e){ji(t,e)&&(t.className=t.className.replace(e,""))};function Qi(t,e){return t.hasAttribute(e)}function Xi(t,e){return t.getAttribute(e)}function r(t){return void 0!==t.item}function Yi(t,e){if(t=r(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function Ki(t,e){t=r(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function Ji(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function Ui(t,e){"none"!==t.style.display&&(t.style.display="none")}function _i(t,e){"none"===t.style.display&&(t.style.display="")}function Zi(t){return"none"!==window.getComputedStyle(t).display}function $i(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),a=(e.length,0);a<e.length;a++){var r=e[a];if(void 0!==t.style[r])return r}return!1}function ta(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var a=!1;try{var o=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,o)}catch(t){}var u=!!a&&{passive:!0};function ea(t,e,n){for(var i in e){var a=0<=["touchstart","touchmove"].indexOf(i)&&!n&&u;t.addEventListener(i,e[i],a)}}function na(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&u;t.removeEventListener(n,e[n],i)}}function ia(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(e,n){n.type=e,this.topics[e]&&this.topics[e].forEach(function(t){t(n,e)})}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var aa=function(H){H=Di({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0},H||{});var O=document,m=window,a={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},e={},n=H.useLocalStorage;if(n){var t=navigator.userAgent,i=new Date;try{(e=m.localStorage)?(e.setItem(i,i),n=e.getItem(i)==i,e.removeItem(i)):n=!1,n||(e={})}catch(t){n=!1}n&&(e.tnsApp&&e.tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){e.removeItem(t)}),localStorage.tnsApp=t)}var r,o,u,l,s,c,f,y=e.tC?ki(e.tC):Ri(e,"tC",function(){var t=document,e=Pi(),n=Ii(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",u=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],l=0;l<3;l++)if(r=u[l],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?zi(e,n):i.remove(),a}(),n),g=e.tPL?ki(e.tPL):Ri(e,"tPL",function(){var t,e=document,n=Pi(),i=Ii(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var u=0;u<70;u++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?zi(n,i):a.remove(),t}(),n),D=e.tMQ?ki(e.tMQ):Ri(e,"tMQ",(o=document,u=Pi(),l=Ii(u),s=o.createElement("div"),c=o.createElement("style"),f="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",c.type="text/css",s.className="tns-mq-test",u.appendChild(c),u.appendChild(s),c.styleSheet?c.styleSheet.cssText=f:c.appendChild(o.createTextNode(f)),r=window.getComputedStyle?window.getComputedStyle(s).position:s.currentStyle.position,u.fake?zi(u,l):s.remove(),"absolute"===r),n),d=e.tTf?ki(e.tTf):Ri(e,"tTf",$i("transform"),n),v=e.t3D?ki(e.t3D):Ri(e,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=Pi(),a=Ii(i),r=n.createElement("p"),o=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?zi(i,a):r.remove(),void 0!==e&&0<e.length&&"none"!==e}(d),n),x=e.tTDu?ki(e.tTDu):Ri(e,"tTDu",$i("transitionDuration"),n),p=e.tTDe?ki(e.tTDe):Ri(e,"tTDe",$i("transitionDelay"),n),b=e.tADu?ki(e.tADu):Ri(e,"tADu",$i("animationDuration"),n),h=e.tADe?ki(e.tADe):Ri(e,"tADe",$i("animationDelay"),n),C=e.tTE?ki(e.tTE):Ri(e,"tTE",ta(x,"Transition"),n),w=e.tAE?ki(e.tAE):Ri(e,"tAE",ta(b,"Animation"),n),M=m.console&&"function"==typeof m.console.warn,T=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],E={};if(T.forEach(function(t){if("string"==typeof H[t]){var e=H[t],n=O.querySelector(e);if(E[t]=e,!n||!n.nodeName)return void(M&&console.warn("Can't find",H[t]));H[t]=n}}),!(H.container.children.length<1)){var k=H.responsive,R=H.nested,P="carousel"===H.mode;if(k){0 in k&&(H=Di(H,k[0]),delete k[0]);var A={};for(var N in k){var L=k[N];L="number"==typeof L?{items:L}:L,A[N]=L}k=A,A=null}if(P||function t(e){for(var n in e)P||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(H),!P){H.axis="horizontal",H.slideBy="page",H.edgePadding=!1;var I=H.animateIn,z=H.animateOut,S=H.animateDelay,W=H.animateNormal}var B,q,F="horizontal"===H.axis,j=O.createElement("div"),V=O.createElement("div"),G=H.container,Q=G.parentNode,X=G.outerHTML,Y=G.children,K=Y.length,J=cn(),U=!1;k&&Bn(),P&&(G.className+=" tns-vpfix");var _,Z,$,tt,et,nt,it,at,rt=H.autoWidth,ot=pn("fixedWidth"),ut=pn("edgePadding"),lt=pn("gutter"),st=dn(),ct=pn("center"),ft=rt?1:Math.floor(pn("items")),dt=pn("slideBy"),vt=H.viewportMax||H.fixedWidthViewportWidth,pt=pn("arrowKeys"),ht=pn("speed"),mt=H.rewind,yt=!mt&&H.loop,gt=pn("autoHeight"),xt=pn("controls"),bt=pn("controlsText"),Ct=pn("nav"),wt=pn("touch"),Mt=pn("mouseDrag"),Tt=pn("autoplay"),Et=pn("autoplayTimeout"),At=pn("autoplayText"),Nt=pn("autoplayHoverPause"),Lt=pn("autoplayResetOnVisibility"),St=(at=document.createElement("style"),it&&at.setAttribute("media",it),document.querySelector("head").appendChild(at),at.sheet?at.sheet:at.styleSheet),Bt=H.lazyload,Ht=H.lazyloadSelector,Ot=[],Dt=yt?(et=function(){{if(rt||ot&&!vt)return K-1;var t=ot?"fixedWidth":"items",e=[];if((ot||H[t]<K)&&e.push(H[t]),k)for(var n in k){var i=k[n][t];i&&(ot||i<K)&&e.push(i)}return e.length||e.push(0),Math.ceil(ot?vt/Math.min.apply(null,e):Math.max.apply(null,e))}}(),nt=P?Math.ceil((5*et-K)/2):4*et-K,nt=Math.max(et,nt),vn("edgePadding")?nt+1:nt):0,kt=P?K+2*Dt:K+Dt,Rt=!(!ot&&!rt||yt),Pt=ot?ni():null,It=!P||!yt,zt=F?"left":"top",Wt="",qt="",Ft=ot?function(){return ct&&!yt?K-1:Math.ceil(-Pt/(ot+lt))}:rt?function(){for(var t=kt;t--;)if(_[t]>=-Pt)return t}:function(){return ct&&P&&!yt?K-1:yt||P?Math.max(0,kt-Math.ceil(ft)):kt-1},jt=un(pn("startIndex")),Vt=jt,Gt=(on(),0),Qt=rt?null:Ft(),Xt=H.preventActionWhenRunning,Yt=H.swipeAngle,Kt=!Yt||"?",Jt=!1,Ut=H.onInit,_t=new ia,Zt=" tns-slider tns-"+H.mode,$t=G.id||(tt=window.tnsId,window.tnsId=tt?tt+1:1,"tns"+window.tnsId),te=pn("disable"),ee=!1,ne=H.freezable,ie=!(!ne||rt)&&Sn(),ae=!1,re={click:fi,keydown:function(t){t=xi(t);var e=[a.LEFT,a.RIGHT].indexOf(t.keyCode);0<=e&&(0===e?Ae.disabled||fi(t,-1):Ne.disabled||fi(t,1))}},oe={click:function(t){if(Jt){if(Xt)return;si()}var e=bi(t=xi(t));for(;e!==He&&!Qi(e,"data-nav");)e=e.parentNode;if(Qi(e,"data-nav")){var n=Re=Number(Xi(e,"data-nav")),i=ot||rt?n*K/De:n*ft,a=pe?n:Math.min(Math.ceil(i),K-1);ci(a,t),Pe===n&&(je&&mi(),Re=-1)}},keydown:function(t){t=xi(t);var e=O.activeElement;if(!Qi(e,"data-nav"))return;var n=[a.LEFT,a.RIGHT,a.ENTER,a.SPACE].indexOf(t.keyCode),i=Number(Xi(e,"data-nav"));0<=n&&(0===n?0<i&&gi(Be[i-1]):1===n?i<De-1&&gi(Be[i+1]):ci(Re=i,t))}},ue={mouseover:function(){je&&(vi(),Ve=!0)},mouseout:function(){Ve&&(di(),Ve=!1)}},le={visibilitychange:function(){O.hidden?je&&(vi(),Qe=!0):Qe&&(di(),Qe=!1)}},se={keydown:function(t){t=xi(t);var e=[a.LEFT,a.RIGHT].indexOf(t.keyCode);0<=e&&fi(t,0===e?-1:1)}},ce={touchstart:Ti,touchmove:Ei,touchend:Ai,touchcancel:Ai},fe={mousedown:Ti,mousemove:Ei,mouseup:Ai,mouseleave:Ai},de=vn("controls"),ve=vn("nav"),pe=!!rt||H.navAsThumbnails,he=vn("autoplay"),me=vn("touch"),ye=vn("mouseDrag"),ge="tns-slide-active",xe="tns-complete",be={load:function(t){Wn(bi(t))},error:function(t){e=bi(t),Vi(e,"failed"),qn(e);var e}},Ce="force"===H.preventScrollOnTouch;if(de)var we,Me,Te=H.controlsContainer,Ee=H.controlsContainer?H.controlsContainer.outerHTML:"",Ae=H.prevButton,Ne=H.nextButton,Le=H.prevButton?H.prevButton.outerHTML:"",Se=H.nextButton?H.nextButton.outerHTML:"";if(ve)var Be,He=H.navContainer,Oe=H.navContainer?H.navContainer.outerHTML:"",De=rt?K:Li(),ke=0,Re=-1,Pe=sn(),Ie=Pe,ze="tns-nav-active",We="Carousel Page ",qe=" (Current Slide)";if(he)var Fe,je,Ve,Ge,Qe,Xe="forward"===H.autoplayDirection?1:-1,Ye=H.autoplayButton,Ke=H.autoplayButton?H.autoplayButton.outerHTML:"",Je=["<span class='tns-visually-hidden'>"," animation</span>"];if(me||ye)var Ue,_e,Ze={},$e={},tn=!1,en=F?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};rt||rn(te||ie),d&&(zt=d,Wt="translate",v?(Wt+=F?"3d(":"3d(0px, ",qt=F?", 0px, 0px)":", 0px)"):(Wt+=F?"X(":"Y(",qt=")")),P&&(G.className=G.className.replace("tns-vpfix","")),function(){vn("gutter");j.className="tns-outer",V.className="tns-inner",j.id=$t+"-ow",V.id=$t+"-iw",""===G.id&&(G.id=$t);Zt+=g||rt?" tns-subpixel":" tns-no-subpixel",Zt+=y?" tns-calc":" tns-no-calc",rt&&(Zt+=" tns-autowidth");Zt+=" tns-"+H.axis,G.className+=Zt,P?((B=O.createElement("div")).id=$t+"-mw",B.className="tns-ovh",j.appendChild(B),B.appendChild(V)):j.appendChild(V);if(gt){var t=B||V;t.className+=" tns-ah"}if(Q.insertBefore(j,G),V.appendChild(G),Fi(Y,function(t,e){Vi(t,"tns-item"),t.id||(t.id=$t+"-item"+e),!P&&W&&Vi(t,W),Yi(t,{"aria-hidden":"true",tabindex:"-1"})}),Dt){for(var e=O.createDocumentFragment(),n=O.createDocumentFragment(),i=Dt;i--;){var a=i%K,r=Y[a].cloneNode(!0);if(Ki(r,"id"),n.insertBefore(r,n.firstChild),P){var o=Y[K-1-a].cloneNode(!0);Ki(o,"id"),e.appendChild(o)}}G.insertBefore(e,G.firstChild),G.appendChild(n),Y=G.children}}(),function(){if(!P)for(var t=jt,e=jt+Math.min(K,ft);t<e;t++){var n=Y[t];n.style.left=100*(t-jt)/ft+"%",Vi(n,I),Gi(n,W)}F&&(g||rt?(Wi(St,"#"+$t+" > .tns-item","font-size:"+m.getComputedStyle(Y[0]).fontSize+";",qi(St)),Wi(St,"#"+$t,"font-size:0;",qi(St))):P&&Fi(Y,function(t,e){var n;t.style.marginLeft=(n=e,y?y+"("+100*n+"% / "+kt+")":100*n/kt+"%")}));if(D){if(x){var i=B&&H.autoHeight?bn(H.speed):"";Wi(St,"#"+$t+"-mw",i,qi(St))}i=hn(H.edgePadding,H.gutter,H.fixedWidth,H.speed,H.autoHeight),Wi(St,"#"+$t+"-iw",i,qi(St)),P&&(i=F&&!rt?"width:"+mn(H.fixedWidth,H.gutter,H.items)+";":"",x&&(i+=bn(ht)),Wi(St,"#"+$t,i,qi(St))),i=F&&!rt?yn(H.fixedWidth,H.gutter,H.items):"",H.gutter&&(i+=gn(H.gutter)),P||(x&&(i+=bn(ht)),b&&(i+=Cn(ht))),i&&Wi(St,"#"+$t+" > .tns-item",i,qi(St))}else{P&&gt&&(B.style[x]=ht/1e3+"s"),V.style.cssText=hn(ut,lt,ot,gt),P&&F&&!rt&&(G.style.width=mn(ot,lt,ft));var i=F&&!rt?yn(ot,lt,ft):"";lt&&(i+=gn(lt)),i&&Wi(St,"#"+$t+" > .tns-item",i,qi(St))}if(k&&D)for(var a in k){a=parseInt(a);var r=k[a],i="",o="",u="",l="",s="",c=rt?null:pn("items",a),f=pn("fixedWidth",a),d=pn("speed",a),v=pn("edgePadding",a),p=pn("autoHeight",a),h=pn("gutter",a);x&&B&&pn("autoHeight",a)&&"speed"in r&&(o="#"+$t+"-mw{"+bn(d)+"}"),("edgePadding"in r||"gutter"in r)&&(u="#"+$t+"-iw{"+hn(v,h,f,d,p)+"}"),P&&F&&!rt&&("fixedWidth"in r||"items"in r||ot&&"gutter"in r)&&(l="width:"+mn(f,h,c)+";"),x&&"speed"in r&&(l+=bn(d)),l&&(l="#"+$t+"{"+l+"}"),("fixedWidth"in r||ot&&"gutter"in r||!P&&"items"in r)&&(s+=yn(f,h,c)),"gutter"in r&&(s+=gn(h)),!P&&"speed"in r&&(x&&(s+=bn(d)),b&&(s+=Cn(d))),s&&(s="#"+$t+" > .tns-item{"+s+"}"),(i=o+u+l+s)&&St.insertRule("@media (min-width: "+a/16+"em) {"+i+"}",St.cssRules.length)}}(),wn();var nn=yt?P?function(){var t=Gt,e=Qt;t+=dt,e-=dt,ut?(t+=1,e-=1):ot&&(st+lt)%(ot+lt)&&(e-=1),Dt&&(e<jt?jt-=K:jt<t&&(jt+=K))}:function(){if(Qt<jt)for(;Gt+K<=jt;)jt-=K;else if(jt<Gt)for(;jt<=Qt-K;)jt+=K}:function(){jt=Math.max(Gt,Math.min(Qt,jt))},an=P?function(){var e,n,i,a,t,r,o,u,l,s,c;ti(G,""),x||!ht?(ri(),ht&&Zi(G)||si()):(e=G,n=zt,i=Wt,a=qt,t=ii(),r=ht,o=si,u=Math.min(r,10),l=0<=t.indexOf("%")?"%":"px",t=t.replace(l,""),s=Number(e.style[n].replace(i,"").replace(a,"").replace(l,"")),c=(t-s)/r*u,setTimeout(function t(){r-=u,s+=c,e.style[n]=i+s+l+a,0<r?setTimeout(t,u):o()},u)),F||Ni()}:function(){Ot=[];var t={};t[C]=t[w]=si,na(Y[Vt],t),ea(Y[jt],t),oi(Vt,I,z,!0),oi(jt,W,I),C&&w&&ht&&Zi(G)||si()};return{version:"2.9.2",getInfo:Bi,events:_t,goTo:ci,play:function(){Tt&&!je&&(hi(),Ge=!1)},pause:function(){je&&(mi(),Ge=!0)},isOn:U,updateSliderHeight:Xn,refresh:wn,destroy:function(){if(St.disabled=!0,St.ownerNode&&St.ownerNode.remove(),na(m,{resize:Nn}),pt&&na(O,se),Te&&na(Te,re),He&&na(He,oe),na(G,ue),na(G,le),Ye&&na(Ye,{click:yi}),Tt&&clearInterval(Fe),P&&C){var t={};t[C]=si,na(G,t)}wt&&na(G,ce),Mt&&na(G,fe);var r=[X,Ee,Le,Se,Oe,Ke];for(var e in T.forEach(function(t,e){var n="container"===t?j:H[t];if("object"==typeof n&&n){var i=!!n.previousElementSibling&&n.previousElementSibling,a=n.parentNode;n.outerHTML=r[e],H[t]=i?i.nextElementSibling:a.firstElementChild}}),T=I=z=S=W=F=j=V=G=Q=X=Y=K=q=J=rt=ot=ut=lt=st=ft=dt=vt=pt=ht=mt=yt=gt=St=Bt=_=Ot=Dt=kt=Rt=Pt=It=zt=Wt=qt=Ft=jt=Vt=Gt=Qt=Yt=Kt=Jt=Ut=_t=Zt=$t=te=ee=ne=ie=ae=re=oe=ue=le=se=ce=fe=de=ve=pe=he=me=ye=ge=xe=be=Z=xt=bt=Te=Ee=Ae=Ne=we=Me=Ct=He=Oe=Be=De=ke=Re=Pe=Ie=ze=We=qe=Tt=Et=Xe=At=Nt=Ye=Ke=Lt=Je=Fe=je=Ve=Ge=Qe=Ze=$e=Ue=tn=_e=en=wt=Mt=null,this)"rebuild"!==e&&(this[e]=null);U=!1},rebuild:function(){return aa(Di(H,E))}}}function rn(t){t&&(xt=Ct=wt=Mt=pt=Tt=Nt=Lt=!1)}function on(){for(var t=P?jt-Dt:jt;t<0;)t+=K;return t%K+1}function un(t){return t=t?Math.max(0,Math.min(yt?K-1:K-ft,t)):0,P?t+Dt:t}function ln(t){for(null==t&&(t=jt),P&&(t-=Dt);t<0;)t+=K;return Math.floor(t%K)}function sn(){var t,e=ln();return t=pe?e:ot||rt?Math.ceil((e+1)*De/K-1):Math.floor(e/ft),!yt&&P&&jt===Qt&&(t=De-1),t}function cn(){return m.innerWidth||O.documentElement.clientWidth||O.body.clientWidth}function fn(t){return"top"===t?"afterbegin":"beforeend"}function dn(){var t=ut?2*ut-lt:0;return function t(e){if(null!=e){var n,i,a=O.createElement("div");return e.appendChild(a),i=(n=a.getBoundingClientRect()).right-n.left,a.remove(),i||t(e.parentNode)}}(Q)-t}function vn(t){if(H[t])return!0;if(k)for(var e in k)if(k[e][t])return!0;return!1}function pn(t,e){if(null==e&&(e=J),"items"===t&&ot)return Math.floor((st+lt)/(ot+lt))||1;var n=H[t];if(k)for(var i in k)e>=parseInt(i)&&t in k[i]&&(n=k[i][t]);return"slideBy"===t&&"page"===n&&(n=pn("items")),P||"slideBy"!==t&&"items"!==t||(n=Math.floor(n)),n}function hn(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=F?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var u="-"+e+"px";r="margin: 0 "+(F?u+" 0 0":"0 "+u+" 0")+";"}return!P&&a&&x&&i&&(r+=bn(i)),r}function mn(t,e,n){return t?(t+e)*kt+"px":y?y+"("+100*kt+"% / "+n+")":100*kt/n+"%"}function yn(t,e,n){var i;if(t)i=t+e+"px";else{P||(n=Math.floor(n));var a=P?kt:n;i=y?y+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==R?i+";":i+" !important;"}function gn(t){var e="";!1!==t&&(e=(F?"padding-":"margin-")+(F?"right":"bottom")+": "+t+"px;");return e}function xn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function bn(t){return xn(x,18)+"transition-duration:"+t/1e3+"s;"}function Cn(t){return xn(b,17)+"animation-duration:"+t/1e3+"s;"}function wn(){if(vn("autoHeight")||rt||!F){var t=G.querySelectorAll("img");Fi(t,function(t){var e=t.src;Bt||(e&&e.indexOf("data:image")<0?(t.src="",ea(t,be),Vi(t,"loading"),t.src=e):Wn(t))}),Hi(function(){Vn(Ji(t),function(){Z=!0})}),vn("autoHeight")&&(t=Fn(jt,Math.min(jt+ft-1,kt-1))),Bt?Mn():Hi(function(){Vn(Ji(t),Mn)})}else P&&ai(),En(),An()}function Mn(){if(rt){var i=yt?jt:K-1;!function t(){var e=Y[i].getBoundingClientRect().left,n=Y[i-1].getBoundingClientRect().right;Math.abs(e-n)<=1?Tn():setTimeout(function(){t()},16)}()}else Tn()}function Tn(){F&&!rt||(Yn(),rt?(Pt=ni(),ne&&(ie=Sn()),Qt=Ft(),rn(te||ie)):Ni()),P&&ai(),En(),An()}function En(){if(Kn(),j.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+Pn()+"</span>  of "+K+"</div>"),$=j.querySelector(".tns-liveregion .current"),he){var t=Tt?"stop":"start";Ye?Yi(Ye,{"data-action":t}):H.autoplayButtonOutput&&(j.insertAdjacentHTML(fn(H.autoplayPosition),'<button type="button" data-action="'+t+'">'+Je[0]+t+Je[1]+At[0]+"</button>"),Ye=j.querySelector("[data-action]")),Ye&&ea(Ye,{click:yi}),Tt&&(hi(),Nt&&ea(G,ue),Lt&&ea(G,le))}if(ve){if(He)Yi(He,{"aria-label":"Carousel Pagination"}),Fi(Be=He.children,function(t,e){Yi(t,{"data-nav":e,tabindex:"-1","aria-label":We+(e+1),"aria-controls":$t})});else{for(var e="",n=pe?"":'style="display:none"',i=0;i<K;i++)e+='<button type="button" data-nav="'+i+'" tabindex="-1" aria-controls="'+$t+'" '+n+' aria-label="'+We+(i+1)+'"></button>';e='<div class="tns-nav" aria-label="Carousel Pagination">'+e+"</div>",j.insertAdjacentHTML(fn(H.navPosition),e),He=j.querySelector(".tns-nav"),Be=He.children}if(Si(),x){var a=x.substring(0,x.length-18).toLowerCase(),r="transition: all "+ht/1e3+"s";a&&(r="-"+a+"-"+r),Wi(St,"[aria-controls^="+$t+"-item]",r,qi(St))}Yi(Be[Pe],{"aria-label":We+(Pe+1)+qe}),Ki(Be[Pe],"tabindex"),Vi(Be[Pe],ze),ea(He,oe)}de&&(Te||Ae&&Ne||(j.insertAdjacentHTML(fn(H.controlsPosition),'<div class="tns-controls" aria-label="Slide Navigation" tabindex="-1"><button type="button" data-controls="prev" aria-label="Previous Slide" tabindex="0" aria-controls="'+$t+'">'+bt[0]+'</button><button type="button" data-controls="next" aria-label="Next Slide" tabindex="0" aria-controls="'+$t+'">'+bt[1]+"</button></div>"),Te=j.querySelector(".tns-controls")),Ae&&Ne||(Ae=Te.children[0],Ne=Te.children[1]),H.controlsContainer,H.controlsContainer||H.prevButton&&H.nextButton,(H.controlsContainer||H.prevButton&&H.nextButton)&&(Yi(Ae,{"data-controls":"prev"}),Yi(Ne,{"data-controls":"next"}),Yi(Ae,{"aria-label":"previous"}),Yi(Ne,{"aria-label":"next"})),we=Un(Ae),Me=Un(Ne),$n(),Te?ea(Te,re):(ea(Ae,re),ea(Ne,re))),Hn()}function An(){if(P&&C){var t={};t[C]=si,ea(G,t)}wt&&ea(G,ce,H.preventScrollOnTouch),Mt&&ea(G,fe),pt&&ea(O,se),"inner"===R?_t.on("outerResized",function(){Ln(),_t.emit("innerLoaded",Bi())}):(k||ot||rt||gt||!F)&&ea(m,{resize:Nn}),gt&&("outer"===R?_t.on("innerLoaded",jn):te||jn()),zn(),te?kn():ie&&Dn(),_t.on("indexChanged",Gn),"inner"===R&&_t.emit("innerLoaded",Bi()),"function"==typeof Ut&&Ut(Bi()),U=!0}function Nn(t){Hi(function(){Ln(xi(t))})}function Ln(t){if(U){"outer"===R&&_t.emit("outerResized",Bi(t)),J=cn();var e,n=q,i=!1;k&&(Bn(),(e=n!==q)&&_t.emit("newBreakpointStart",Bi(t)));var a,r,o,u,l=ft,s=te,c=ie,f=pt,d=xt,v=Ct,p=wt,h=Mt,m=Tt,y=Nt,g=Lt,x=jt;if(e){var b=ot,C=gt,w=bt,M=ct,T=At;if(!D)var E=lt,A=ut}if(pt=pn("arrowKeys"),xt=pn("controls"),Ct=pn("nav"),wt=pn("touch"),ct=pn("center"),Mt=pn("mouseDrag"),Tt=pn("autoplay"),Nt=pn("autoplayHoverPause"),Lt=pn("autoplayResetOnVisibility"),e&&(te=pn("disable"),ot=pn("fixedWidth"),ht=pn("speed"),gt=pn("autoHeight"),bt=pn("controlsText"),At=pn("autoplayText"),Et=pn("autoplayTimeout"),D||(ut=pn("edgePadding"),lt=pn("gutter"))),rn(te),st=dn(),F&&!rt||te||(Yn(),F||(Ni(),i=!0)),(ot||rt)&&(Pt=ni(),Qt=Ft()),(e||ot)&&(ft=pn("items"),dt=pn("slideBy"),(r=ft!==l)&&(ot||rt||(Qt=Ft()),nn())),e&&te!==s&&(te?kn():function(){if(!ee)return;if(St.disabled=!1,G.className+=Zt,ai(),yt)for(var t=Dt;t--;)P&&_i(Y[t]),_i(Y[kt-t-1]);if(!P)for(var e=jt,n=jt+K;e<n;e++){var i=Y[e],a=e<jt+ft?I:W;i.style.left=100*(e-jt)/ft+"%",Vi(i,a)}On(),ee=!1}()),ne&&(e||ot||rt)&&(ie=Sn())!==c&&(ie?(ri(ii(un(0))),Dn()):(!function(){if(!ae)return;ut&&D&&(V.style.margin="");if(Dt)for(var t="tns-transparent",e=Dt;e--;)P&&Gi(Y[e],t),Gi(Y[kt-e-1],t);On(),ae=!1}(),i=!0)),rn(te||ie),Tt||(Nt=Lt=!1),pt!==f&&(pt?ea(O,se):na(O,se)),xt!==d&&(xt?Te?_i(Te):(Ae&&_i(Ae),Ne&&_i(Ne)):Te?Ui(Te):(Ae&&Ui(Ae),Ne&&Ui(Ne))),Ct!==v&&(Ct?_i(He):Ui(He)),wt!==p&&(wt?ea(G,ce,H.preventScrollOnTouch):na(G,ce)),Mt!==h&&(Mt?ea(G,fe):na(G,fe)),Tt!==m&&(Tt?(Ye&&_i(Ye),je||Ge||hi()):(Ye&&Ui(Ye),je&&mi())),Nt!==y&&(Nt?ea(G,ue):na(G,ue)),Lt!==g&&(Lt?ea(O,le):na(O,le)),e){if(ot===b&&ct===M||(i=!0),gt!==C&&(gt||(V.style.height="")),xt&&bt!==w&&(Ae.innerHTML=bt[0],Ne.innerHTML=bt[1]),Ye&&At!==T){var N=Tt?1:0,L=Ye.innerHTML,S=L.length-T[N].length;L.substring(S)===T[N]&&(Ye.innerHTML=L.substring(0,S)+At[N])}}else ct&&(ot||rt)&&(i=!0);if((r||ot&&!rt)&&(De=Li(),Si()),(a=jt!==x)?(_t.emit("indexChanged",Bi()),i=!0):r?a||Gn():(ot||rt)&&(zn(),Kn(),Rn()),r&&!P&&function(){for(var t=jt+Math.min(K,ft),e=kt;e--;){var n=Y[e];jt<=e&&e<t?(Vi(n,"tns-moving"),n.style.left=100*(e-jt)/ft+"%",Vi(n,I),Gi(n,W)):n.style.left&&(n.style.left="",Vi(n,W),Gi(n,I)),Gi(n,z)}setTimeout(function(){Fi(Y,function(t){Gi(t,"tns-moving")})},300)}(),!te&&!ie){if(e&&!D&&(ut===A&&lt===E||(V.style.cssText=hn(ut,lt,ot,ht,gt)),F)){P&&(G.style.width=mn(ot,lt,ft));var B=yn(ot,lt,ft)+gn(lt);u=qi(o=St)-1,"deleteRule"in o?o.deleteRule(u):o.removeRule(u),Wi(St,"#"+$t+" > .tns-item",B,qi(St))}gt&&jn(),i&&(ai(),Vt=jt)}e&&_t.emit("newBreakpointEnd",Bi(t))}}function Sn(){if(!ot&&!rt)return K<=(ct?ft-(ft-1)/2:ft);var t=ot?(ot+lt)*K:_[K],e=ut?st+2*ut:st+lt;return ct&&(e-=ot?(st-ot)/2:(st-(_[jt+1]-_[jt]-lt))/2),t<=e}function Bn(){for(var t in q=0,k)(t=parseInt(t))<=J&&(q=t)}function Hn(){!Tt&&Ye&&Ui(Ye),!Ct&&He&&Ui(He),xt||(Te?Ui(Te):(Ae&&Ui(Ae),Ne&&Ui(Ne)))}function On(){Tt&&Ye&&_i(Ye),Ct&&He&&_i(He),xt&&(Te?_i(Te):(Ae&&_i(Ae),Ne&&_i(Ne)))}function Dn(){if(!ae){if(ut&&(V.style.margin="0px"),Dt)for(var t="tns-transparent",e=Dt;e--;)P&&Vi(Y[e],t),Vi(Y[kt-e-1],t);Hn(),ae=!0}}function kn(){if(!ee){if(St.disabled=!0,G.className=G.className.replace(Zt.substring(1),""),Ki(G,["style"]),yt)for(var t=Dt;t--;)P&&Ui(Y[t]),Ui(Y[kt-t-1]);if(F&&P||Ki(V,["style"]),!P)for(var e=jt,n=jt+K;e<n;e++){var i=Y[e];Ki(i,["style"]),Gi(i,I),Gi(i,W)}Hn(),ee=!0}}function Rn(){var t=Pn();$.innerHTML!==t&&($.innerHTML=t)}function Pn(){var t=In(),e=t[0]-(Dt||0),n=t[1]-(Dt||0);return e=e<0?e+K:K<=e?e-K:e,n=n<0?n+K:K<=n?n-K:n,(e+=1)===(n+=1)?e+"":e+" to "+n}function In(t){null==t&&(t=ii());var n,i,a,r=jt;if(ct||ut?(rt||ot)&&(i=-(parseFloat(t)+ut),a=i+st+2*ut):rt&&(i=_[jt],a=i+st),rt)_.forEach(function(t,e){e<kt&&((ct||ut)&&t<=i+.5&&(r=e),.5<=a-t&&(n=e))});else{if(ot){var e=ot+lt;ct||ut?(r=Math.floor(i/e),n=Math.ceil(a/e-1)):n=r+Math.ceil(st/e)-1}else if(ct||ut){var o=ft-1;if(ct?(r-=o/2,n=jt+o/2):n=jt+o,ut){var u=ut*ft/st;r-=u,n+=u}r=Math.floor(r),n=Math.ceil(n)}else n=r+ft-1;r=Math.max(r,0),n=Math.min(n,kt-1)}return[r,n]}function zn(){if(Bt&&!te){var t=In();t.push(Ht),Fn.apply(null,t).forEach(function(t){if(!ji(t,xe)){var e={};e[C]=function(t){t.stopPropagation()},ea(t,e),ea(t,be),t.src=Xi(t,"data-src");var n=Xi(t,"data-srcset");n&&(t.srcset=n),Vi(t,"loading")}})}}function Wn(t){Vi(t,"loaded"),qn(t)}function qn(t){Vi(t,xe),Gi(t,"loading"),na(t,be)}function Fn(t,e,n){var i=[];for(n||(n="img");t<=e;)Fi(Y[t].querySelectorAll(n),function(t){i.push(t)}),t++;return i}function jn(){var t=Fn.apply(null,In());Hi(function(){Vn(t,Xn)})}function Vn(n,t){return Z?t():(n.forEach(function(t,e){!Bt&&t.complete&&qn(t),ji(t,xe)&&n.splice(e,1)}),n.length?void Hi(function(){Vn(n,t)}):t())}function Gn(){zn(),Kn(),Rn(),$n(),function(){if(Ct&&(Pe=0<=Re?Re:sn(),Re=-1,Pe!==Ie)){var t=Be[Ie],e=Be[Pe];Yi(t,{tabindex:"-1","aria-label":We+(Ie+1)}),Gi(t,ze),Yi(e,{"aria-label":We+(Pe+1)+qe}),Ki(e,"tabindex"),Vi(e,ze),Ie=Pe}}()}function Qn(t,e){for(var n=[],i=t,a=Math.min(t+e,kt);i<a;i++)n.push(Y[i].offsetHeight);return Math.max.apply(null,n)}function Xn(){var t=gt?Qn(jt,ft):Qn(Dt,K),e=B||V;e.style.height!==t&&(e.style.height=t+"px")}function Yn(){_=[0];var n=F?"left":"top",i=F?"right":"bottom",a=Y[0].getBoundingClientRect()[n];Fi(Y,function(t,e){e&&_.push(t.getBoundingClientRect()[n]-a),e===kt-1&&_.push(t.getBoundingClientRect()[i]-a)})}function Kn(){var t=In(),n=t[0],i=t[1];Fi(Y,function(t,e){n<=e&&e<=i?Qi(t,"aria-hidden")&&(Ki(t,["aria-hidden"]),Yi(t,{tabindex:"0"}),Vi(t,ge)):Qi(t,"aria-hidden")||(Yi(t,{"aria-hidden":"true",tabindex:"-1"}),Gi(t,ge))})}function Jn(t){return t.nodeName.toLowerCase()}function Un(t){return"button"===Jn(t)}function _n(t){return"true"===t.getAttribute("aria-disabled")}function Zn(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function $n(){if(xt&&!mt&&!yt){var t=we?Ae.disabled:_n(Ae),e=Me?Ne.disabled:_n(Ne),n=jt<=Gt,i=!mt&&Qt<=jt;n&&!t&&Zn(we,Ae,!0),!n&&t&&Zn(we,Ae,!1),i&&!e&&Zn(Me,Ne,!0),!i&&e&&Zn(Me,Ne,!1)}}function ti(t,e){x&&(t.style[x]=e)}function ei(t){return null==t&&(t=jt),rt?(st-(ut?lt:0)-(_[t+1]-_[t]-lt))/2:ot?(st-ot)/2:(ft-1)/2}function ni(){var t=st+(ut?lt:0)-(ot?(ot+lt)*kt:_[kt]);return ct&&!yt&&(t=ot?-(ot+lt)*(kt-1)-ei():ei(kt-1)-_[kt-1]),0<t&&(t=0),t}function ii(t){var e;if(null==t&&(t=jt),F&&!rt)if(ot)e=-(ot+lt)*t,ct&&(e+=ei());else{var n=d?kt:ft;ct&&(t-=ei()),e=100*-t/n}else e=-_[t],ct&&rt&&(e+=ei());return Rt&&(e=Math.max(e,Pt)),e+=!F||rt||ot?"px":"%"}function ai(t){ti(G,"0s"),ri(t)}function ri(t){null==t&&(t=ii()),G.style[zt]=Wt+t+qt}function oi(t,e,n,i){var a=t+ft;yt||(a=Math.min(a,kt));for(var r=t;r<a;r++){var o=Y[r];i||(o.style.left=100*(r-jt)/ft+"%"),S&&p&&(o.style[p]=o.style[h]=S*(r-t)/1e3+"s"),Gi(o,e),Vi(o,n),i&&Ot.push(o)}}function ui(t,e){It&&nn(),(jt!==Vt||e)&&(_t.emit("indexChanged",Bi()),_t.emit("transitionStart",Bi()),gt&&jn(),je&&t&&0<=["click","keydown"].indexOf(t.type)&&mi(),Jt=!0,an())}function li(t){return t.toLowerCase().replace(/-/g,"")}function si(t){if(P||Jt){if(_t.emit("transitionEnd",Bi(t)),!P&&0<Ot.length)for(var e=0;e<Ot.length;e++){var n=Ot[e];n.style.left="",h&&p&&(n.style[h]="",n.style[p]=""),Gi(n,z),Vi(n,W)}if(!t||!P&&t.target.parentNode===G||t.target===G&&li(t.propertyName)===li(zt)){if(!It){var i=jt;nn(),jt!==i&&(_t.emit("indexChanged",Bi()),ai())}"inner"===R&&_t.emit("innerLoaded",Bi()),Jt=!1,Vt=jt}}}function ci(t,e){if(!ie)if("prev"===t)fi(e,-1);else if("next"===t)fi(e,1);else{if(Jt){if(Xt)return;si()}var n=ln(),i=0;if("first"===t?i=-n:"last"===t?i=P?K-ft-n:K-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(K-1,t))),i=t-n)),!P&&i&&Math.abs(i)<ft){var a=0<i?1:-1;i+=Gt<=jt+i-K?K*a:2*K*a*-1}jt+=i,P&&yt&&(jt<Gt&&(jt+=K),Qt<jt&&(jt-=K)),ln(jt)!==ln(Vt)&&ui(e)}}function fi(t,e){if(Jt){if(Xt)return;si()}var n;if(!e){for(var i=bi(t=xi(t));i!==Te&&[Ae,Ne].indexOf(i)<0;)i=i.parentNode;var a=[Ae,Ne].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(mt){if(jt===Gt&&-1===e)return void ci("last",t);if(jt===Qt&&1===e)return void ci("first",t)}e&&(jt+=dt*e,rt&&(jt=Math.floor(jt)),ui(n||t&&"keydown"===t.type?t:null))}function di(){Fe=setInterval(function(){fi(null,Xe)},Et),je=!0}function vi(){clearInterval(Fe),je=!1}function pi(t,e){Yi(Ye,{"data-action":t}),Ye.innerHTML=Je[0]+t+Je[1]+e}function hi(){di(),Ye&&pi("stop",At[1])}function mi(){vi(),Ye&&pi("start",At[0])}function yi(){je?(mi(),Ge=!0):(hi(),Ge=!1)}function gi(t){t.focus()}function xi(t){return Ci(t=t||m.event)?t.changedTouches[0]:t}function bi(t){return t.target||m.event.srcElement}function Ci(t){return 0<=t.type.indexOf("touch")}function wi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Mi(){return a=$e.y-Ze.y,r=$e.x-Ze.x,t=Math.atan2(a,r)*(180/Math.PI),e=Yt,n=!1,i=Math.abs(90-Math.abs(t)),90-e<=i?n="horizontal":i<=e&&(n="vertical"),n===H.axis;var t,e,n,i,a,r}function Ti(t){if(Jt){if(Xt)return;si()}Tt&&je&&vi(),tn=!0,_e&&(Oi(_e),_e=null);var e=xi(t);_t.emit(Ci(t)?"touchStart":"dragStart",Bi(t)),!Ci(t)&&0<=["img","a"].indexOf(Jn(bi(t)))&&wi(t),$e.x=Ze.x=e.clientX,$e.y=Ze.y=e.clientY,P&&(Ue=parseFloat(G.style[zt].replace(Wt,"")),ti(G,"0s"))}function Ei(t){if(tn){var e=xi(t);$e.x=e.clientX,$e.y=e.clientY,P?_e||(_e=Hi(function(){!function t(e){if(!Kt)return void(tn=!1);Oi(_e);tn&&(_e=Hi(function(){t(e)}));"?"===Kt&&(Kt=Mi());if(Kt){!Ce&&Ci(e)&&(Ce=!0);try{e.type&&_t.emit(Ci(e)?"touchMove":"dragMove",Bi(e))}catch(t){}var n=Ue,i=en($e,Ze);if(!F||ot||rt)n+=i,n+="px";else{var a=d?i*ft*100/((st+lt)*kt):100*i/(st+lt);n+=a,n+="%"}G.style[zt]=Wt+n+qt}}(t)})):("?"===Kt&&(Kt=Mi()),Kt&&(Ce=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&Ce&&t.preventDefault()}}function Ai(i){if(tn){_e&&(Oi(_e),_e=null),P&&ti(G,""),tn=!1;var t=xi(i);$e.x=t.clientX,$e.y=t.clientY;var a=en($e,Ze);if(Math.abs(a)){if(!Ci(i)){var n=bi(i);ea(n,{click:function t(e){wi(e),na(n,{click:t})}})}P?_e=Hi(function(){if(F&&!rt){var t=-a*ft/(st+lt);t=0<a?Math.floor(t):Math.ceil(t),jt+=t}else{var e=-(Ue+a);if(e<=0)jt=Gt;else if(e>=_[kt-1])jt=Qt;else for(var n=0;n<kt&&e>=_[n];)e>_[jt=n]&&a<0&&(jt+=1),n++}ui(i,a),_t.emit(Ci(i)?"touchEnd":"dragEnd",Bi(i))}):Kt&&fi(i,0<a?-1:1)}}"auto"===H.preventScrollOnTouch&&(Ce=!1),Yt&&(Kt="?"),Tt&&!je&&di()}function Ni(){(B||V).style.height=_[jt+ft]-_[jt]+"px"}function Li(){var t=ot?(ot+lt)*K/st:K/ft;return Math.min(Math.ceil(t),K)}function Si(){if(Ct&&!pe&&De!==ke){var t=ke,e=De,n=_i;for(De<ke&&(t=De,e=ke,n=Ui);t<e;)n(Be[t]),t++;ke=De}}function Bi(t){return{container:G,slideItems:Y,navContainer:He,navItems:Be,controlsContainer:Te,hasControls:de,prevButton:Ae,nextButton:Ne,items:ft,slideBy:dt,cloneCount:Dt,slideCount:K,slideCountNew:kt,index:jt,indexCached:Vt,displayIndex:on(),navCurrentIndex:Pe,navCurrentIndexCached:Ie,pages:De,pagesCached:ke,sheet:St,isOn:U,event:t||{}}}M&&console.warn("No slides found in",H.container)};return aa}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map

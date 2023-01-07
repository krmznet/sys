/*! Theia Sticky Sidebar | v1.5.0 - https://github.com/WeCodePixels/theia-sticky-sidebar */
!function(i){i.fn.theiaStickySidebar=function(t){var e,o,a,s,n;function d(t,e){return!0===t.initialized||!(i("body").width()<t.minWidth)&&(function(t,e){t.initialized=!0,0===i("#theia-sticky-sidebar-stylesheet-"+t.namespace).length&&i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-'+t.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),e.each(function(){var e={};if(e.sidebar=i(this),e.options=t||{},e.container=i(e.options.containerSelector),0==e.container.length&&(e.container=e.sidebar.parent()),e.sidebar.parent().css("-webkit-transform","none"),e.sidebar.css({position:e.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),e.stickySidebar=e.sidebar.find(".theiaStickySidebar"),0==e.stickySidebar.length){var o=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;e.sidebar.find("script").filter(function(i,t){return 0===t.type.length||t.type.match(o)}).remove(),e.stickySidebar=i("<div>").addClass("theiaStickySidebar").append(e.sidebar.children()),e.sidebar.append(e.stickySidebar)}e.marginBottom=parseInt(e.sidebar.css("margin-bottom")),e.paddingTop=parseInt(e.sidebar.css("padding-top")),e.paddingBottom=parseInt(e.sidebar.css("padding-bottom"));var a,s,n,d=e.stickySidebar.offset().top,c=e.stickySidebar.outerHeight();function p(){e.fixedScrollTop=0,e.sidebar.css({"min-height":"1px"}),e.stickySidebar.css({position:"static",width:"",transform:"none"})}e.stickySidebar.css("padding-top",1),e.stickySidebar.css("padding-bottom",1),d-=e.stickySidebar.offset().top,c=e.stickySidebar.outerHeight()-c-d,0==d?(e.stickySidebar.css("padding-top",0),e.stickySidebarPaddingTop=0):e.stickySidebarPaddingTop=1,0==c?(e.stickySidebar.css("padding-bottom",0),e.stickySidebarPaddingBottom=0):e.stickySidebarPaddingBottom=1,e.previousScrollTop=null,e.fixedScrollTop=0,p(),e.onScroll=function(e){if(e.stickySidebar.is(":visible"))if(i("body").width()<e.options.minWidth)p();else{if(e.options.disableOnResponsiveLayouts)if(e.sidebar.outerWidth("none"==e.sidebar.css("float"))+50>e.container.width())return void p();var o,a,s=i(document).scrollTop(),n="static";if(s>=e.sidebar.offset().top+(e.paddingTop-e.options.additionalMarginTop)){var d,c=e.paddingTop+t.additionalMarginTop,b=e.paddingBottom+e.marginBottom+t.additionalMarginBottom,l=e.sidebar.offset().top,h=e.sidebar.offset().top+(o=e.container,a=o.height(),o.children().each(function(){a=Math.max(a,i(this).height())}),a),f=0+t.additionalMarginTop;d=e.stickySidebar.outerHeight()+c+b<i(window).height()?f+e.stickySidebar.outerHeight():i(window).height()-e.marginBottom-e.paddingBottom-t.additionalMarginBottom;var g=l-s+e.paddingTop,S=h-s-e.paddingBottom-e.marginBottom,m=e.stickySidebar.offset().top-s,y=e.previousScrollTop-s;"fixed"==e.stickySidebar.css("position")&&"modern"==e.options.sidebarBehavior&&(m+=y),"stick-to-top"==e.options.sidebarBehavior&&(m=t.additionalMarginTop),"stick-to-bottom"==e.options.sidebarBehavior&&(m=d-e.stickySidebar.outerHeight()),m=0<y?Math.min(m,f):Math.max(m,d-e.stickySidebar.outerHeight()),m=Math.max(m,g),m=Math.min(m,S-e.stickySidebar.outerHeight());var u=e.container.height()==e.stickySidebar.outerHeight();n=!u&&m==f||!u&&m==d-e.stickySidebar.outerHeight()?"fixed":s+m-e.sidebar.offset().top-e.paddingTop<=t.additionalMarginTop?"static":"absolute"}if("fixed"==n){var k=i(document).scrollLeft();e.stickySidebar.css({position:"fixed",width:r(e.stickySidebar)+"px",transform:"translateY("+m+"px)",left:e.sidebar.offset().left+parseInt(e.sidebar.css("padding-left"))-k+"px",top:"0px"})}else if("absolute"==n){var v={};"absolute"!=e.stickySidebar.css("position")&&(v.position="absolute",v.transform="translateY("+(s+m-e.sidebar.offset().top-e.stickySidebarPaddingTop-e.stickySidebarPaddingBottom)+"px)",v.top="0px"),v.width=r(e.stickySidebar)+"px",v.left="",e.stickySidebar.css(v)}else"static"==n&&p();"static"!=n&&1==e.options.updateSidebarHeight&&e.sidebar.css({"min-height":e.stickySidebar.outerHeight()+e.stickySidebar.offset().top-e.sidebar.offset().top+e.paddingBottom}),e.previousScrollTop=s}},e.onScroll(e),i(document).on("scroll."+e.options.namespace,(a=e,function(){a.onScroll(a)})),i(window).on("resize."+e.options.namespace,(s=e,function(){s.stickySidebar.css({position:"static"}),s.onScroll(s)})),"undefined"!=typeof ResizeSensor&&new ResizeSensor(e.stickySidebar[0],(n=e,function(){n.onScroll(n)}))})}(t,e),!0)}function r(i){var t;try{t=i[0].getBoundingClientRect().width}catch(i){}return void 0===t&&(t=i.width()),t}return(t=i.extend({containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"},t)).additionalMarginTop=parseInt(t.additionalMarginTop)||0,t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,d(e=t,this)||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),i(document).on("scroll."+e.namespace,(s=e,n=this,function(t){d(s,n)&&i(this).unbind(t)})),i(window).on("resize."+e.namespace,(o=e,a=this,function(t){d(o,a)&&i(this).unbind(t)}))),this}}(jQuery);

/*! Menu */
! function(a) {
    a.fn.zeroMenu = function() {
        return this.each(function() {
            var $t = a(this),
                b = $t.find('.LinkList ul > li').children('a'),
                c = b.length;
            for (var i = 0; i < c; i++) {
                var d = b.eq(i),
                    h = d.text();
                if (h.charAt(0) !== '_') {
                    var e = b.eq(i + 1),
                        j = e.text();
                    if (j.charAt(0) === '_') {
                        var m = d.parent();
                        m.append('<ul class="sub-menu m-sub"/>');
                    }
                }
                if (h.charAt(0) === '_') {
                    d.text(h.replace('_', ''));
                    d.parent().appendTo(m.children('.sub-menu'));
                }
            }
            for (var i = 0; i < c; i++) {
                var f = b.eq(i),
                    k = f.text();
                if (k.charAt(0) !== '_') {
                    var g = b.eq(i + 1),
                        l = g.text();
                    if (l.charAt(0) === '_') {
                        var n = f.parent();
                        n.append('<ul class="sub-menu2 m-sub"/>');
                    }
                }
                if (k.charAt(0) === '_') {
                    f.text(k.replace('_', ''));
                    f.parent().appendTo(n.children('.sub-menu2'));
                }
            }
            $t.find('.LinkList ul li ul').parent('li').addClass('has-sub');
        });
    }
}(jQuery);

/*! Thumb */
! function(o) {
    o.fn.zeroThumb = function(n) {
        return n = o.extend({
            onScroll: !0
        }, n), this.each(function(t, c, e) {
            var r = o(this),
                l = o(window),
                a = r.data("image"),
                h = "w" + Math.round(r.width() + r.width() / 10) + "-h" + Math.round(r.height() + r.height() / 10) + "-p-k-no-nu";

            function s() {
                var o = new Image;
                o.onload = function() {
                    r.attr("style", "background-image:url(" + this.src + ")").addClass("zero-lazy")
                }, o.src = t
            }
            a.match("resources.blogblog.com") && (a = "undefined" != typeof noThumbnail ? noThumbnail : "//1.bp.blogspot.com/-rI4UCIrwEI4/YN3nGkf0nCI/AAAAAAAAAD0/DQ6fW7eCps8NL7S0oh374KFg1MsWUf2GQCLcBGAsYHQ/s72-c/ptb-nth.png"), a.match("blogger.googleusercontent.com") && a.match("=") && (e = a.split("="), a = e[1] && "" != e[1].trim() ? e[0] + "=w72-h72-p-k-no-nu" : a), a.match("blogger.googleusercontent.com") && !a.match("=") && (a += "=w72-h72-p-k-no-nu"), t = a.match("/s72-c") ? a.replace("/s72-c", "/" + h) : a.match("/w72-h") ? a.replace("/w72-h72-p-k-no-nu", "/" + h) : a.match("=w72-h") ? a.replace("=w72-h72-p-k-no-nu", "=" + h) : a, 1 == n.onScroll ? l.on("load resize scroll", function o() {
                l.scrollTop() + l.height() >= r.offset().top && (l.off("load resize scroll", o), s())
            }).trigger("scroll") : l.on("load", function o() {
                l.off("load", o), s()
            }).trigger("load")
        })
    }
}(jQuery);

/*! jQuery replaceText | v1.1.0 - https://benalman.com/projects/jquery-replacetext-plugin */
!function(e){e.fn.replaceText=function(n,t,i){return this.each(function(){var o,r,l=this.firstChild,u=[];if(l)do{3===l.nodeType&&(r=(o=l.nodeValue).replace(n,t))!==o&&(!i&&/</.test(r)?(e(l).before(r),u.push(l)):l.nodeValue=r)}while(l=l.nextSibling);u.length&&e(u).remove()})}}(jQuery);

/*! Table of Contents | v0.4.1 - https://github.com/ndabas/toc */
!function(t){"use strict";var n=function(n){return this.each(function(){var e,i,a=t(this),o=a.data(),c=[a],r=this.tagName,d=0;e=t.extend({content:"body",headings:"h1,h2,h3"},{content:o.toc||void 0,headings:o.tocHeadings||void 0},n),i=e.headings.split(","),t(e.content).find(e.headings).attr("id",function(n,e){return e||function(t){0===t.length&&(t="?");for(var n=t.replace(/[^a-zA-Z ]/g, "").replace(/\s+/g,"_"),e="",i=1;null!==document.getElementById(n+e);)e="_"+i++;return n+e}(t(this).text())}).each(function(){var n=t(this),e=t.map(i,function(t,e){return n.is(t)?e:void 0})[0];if(e>d){var a=c[0].children("li:last")[0];a&&c.unshift(t("<"+r+"/>").appendTo(a))}else c.splice(0,Math.min(d-e,Math.max(c.length-1,0)));t("<li/>").appendTo(c[0]).append(t("<a/>").text(n.text()).attr("href","#"+n.attr("id"))),d=e})})},e=t.fn.toc;t.fn.toc=n,t.fn.toc.noConflict=function(){return t.fn.toc=e,this},t(function(){n.call(t("[data-toc]"))})}(window.jQuery);

/*! Javascript Cookie | v1.5.1 - https://github.com/js-cookie/js-cookie */
!function(e){var n;if("function"==typeof define&&define.amd)define(["jquery"],e);else if("object"==typeof exports){try{n=require("jquery")}catch(e){}module.exports=e(n)}else{var o=window.Cookies,r=window.Cookies=e(window.jQuery);r.noConflict=function(){return window.Cookies=o,r}}}(function(e){var n=/\+/g;function o(e){return u.raw?e:encodeURIComponent(e)}function r(e){return o(u.json?JSON.stringify(e):String(e))}function t(e,o){var r=u.raw?e:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(n," ")),u.json?JSON.parse(e):e}catch(e){}}(e);return c(o)?o(r):r}function i(){for(var e,n,o=0,r={};o<arguments.length;o++)for(e in n=arguments[o])r[e]=n[e];return r}function c(e){return"[object Function]"===Object.prototype.toString.call(e)}var u=function(e,n,f){if(arguments.length>1&&!c(n)){if("number"==typeof(f=i(u.defaults,f)).expires){var s=f.expires,a=f.expires=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*s)}return document.cookie=[o(e),"=",r(n),f.expires?"; expires="+f.expires.toUTCString():"",f.path?"; path="+f.path:"",f.domain?"; domain="+f.domain:"",f.secure?"; secure":""].join("")}for(var d,p=e?void 0:{},l=document.cookie?document.cookie.split("; "):[],m=0,v=l.length;m<v;m++){var g=l[m].split("="),w=(d=g.shift(),u.raw?d:decodeURIComponent(d)),j=g.join("=");if(e===w){p=t(j,n);break}e||void 0===(j=t(j))||(p[w]=j)}return p};return u.get=u.set=u,u.defaults={},u.remove=function(e,n){return u(e,"",i(n,{expires:-1})),!u(e)},e&&(e.cookie=u,e.removeCookie=u.remove),u});

function zeroShortCode(e, t, a) {
    for (var s = e.split("$"), r = /[^{\}]+(?=})/g, i = 0; i < s.length; i++) {
        var o = s[i].split("=");
        if (o[0].trim() == t) return null != (a = o[1]).match(r) && String(a.match(r)).trim()
    }
    return !1
}

function darkModeLogo(e) {
    $("[data-dark-src]").each(function() {
        var t = $(this),
            a = t.data("dark-src"),
            s = t.data("src");
        "true" == e ? t.attr("src", a) : t.attr("src", s)
    })
}

function msgError() {
    return '<span class="error-msg"><b>Hmmm...</b>&nbsp;No content here yet!</span>'
}

function beforeLoader() {
    return '<div class="loader"></div>'
}

function getFeedUrl(e, t, a, s) {
    switch (a) {
        case "recent":
            s = "/feeds/posts/default?alt=json&max-results=" + t;
            break;
        default:
            s = "comments" != e ? "/feeds/posts/default/-/" + a + "?alt=json&max-results=" + t : "/feeds/comments/default?alt=json&max-results=" + t
    }
    return s
}

function getPostID(e, t, a) {
    return (a = e[t].id.$t) ? a.split("-").pop() : ""
}

function getPostLink(e, t) {
    for (var a = 0; a < e[t].link.length; a++)
        if ("alternate" == e[t].link[a].rel) {
            var s = e[t].link[a].href;
            break
        }
    return s
}

function getPostTitle(e, t, a) {
    return e[t].title.$t ? e[t].title.$t : zeroMessages.noTitle
}

function getPostAuthor(e, t, a, s) {
    return s = "" != zeroMessages.postAuthorLabel ? '<span class="sp">' + zeroMessages.postAuthorLabel + "</span>" : "", zeroMessages.postAuthor ? '<span class="entry-author mi">' + s + '<span class="author-name">' + e[t].author[0].name.$t + "</span></span>" : ""
}

function getPostDate(e, t, a, s, r, i) {
    monthNames = "undefined" != typeof monthNames ? monthNames : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], dateFormat = "undefined" != typeof dateFormat ? dateFormat : "{d} {m} {y}";
    var o = e[t].published.$t,
        n = o.substring(0, 4),
        c = o.substring(5, 7),
        l = o.substring(8, 10),
        d = dateFormat.replace("{m}", monthNames[parseInt(c, 10) - 1]).replace("{d}", l).replace("{y}", n);
    return i = zeroMessages.postAuthor && "" != zeroMessages.postDateLabel ? '<span class="sp">' + zeroMessages.postDateLabel + "</span>" : "", [1 == zeroMessages.postDate ? '<span class="entry-time mi">' + i + '<time class="published" datetime="' + o + '">' + d + "</time></span>" : "", 1 == zeroMessages.postDate ? '<span class="entry-time mi"><time class="published" datetime="' + o + '">' + d + "</time></span>" : ""]
}

function getPostMeta(e, t, a, s, r) {
    return [1 == zeroMessages.postAuthor || 1 == zeroMessages.postDate ? '<div class="entry-meta">' + e + t[0] + "</div>" : "", 1 == zeroMessages.postDate ? '<div class="entry-meta">' + t[1] + "</div>" : ""]
}

function getFirstImage(e) {
    var t = (e = $("<div>").html(e)).find("img").first().attr("src"),
        a = t.split("/"),
        s = "/" + a.slice(-2)[0];
    return 9 == a.length && (s.match(/\/s[0-9]+/g) || s.match(/\/w[0-9]+/g) || "/d" == s) && (t = t.replace(s, "/w72-h72-p-k-no-nu")), t
}

function getPostImage(e, t, a, s) {
    var r = e[t].content ? e[t].content.$t : "";
    return a = e[t].media$thumbnail ? e[t].media$thumbnail.url : "https://resources.blogblog.com/img/blank.gif", r.indexOf(r.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) > -1 ? r.indexOf("<img") > -1 ? r.indexOf(r.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) < r.indexOf("<img") ? a.replace("img.youtube.com", "i.ytimg.com").replace("/default.", "/maxresdefault.") : getFirstImage(r) : a.replace("img.youtube.com", "i.ytimg.com").replace("/default.", "/maxresdefault.") : r.indexOf("<img") > -1 ? getFirstImage(r) : "https://resources.blogblog.com/img/blank.gif"
}

function getPostImageType(e, t) {
    return e.match("i.ytimg.com") ? "is-video" : "is-image"
}

function getPostTag(e, t, a) {
    return e[t].category ? '<span class="entry-category">' + e[t].category[0].term + "</span>" : ""
}

function getPostSummary(e, t, a, s, r) {
    return e[t].content && "" != (s = $(e[t].content.$t).text().trim()) ? '<span class="entry-excerpt excerpt">' + s.substr(0, a) + "…</span>" : ""
}

function getPostComments(e, t, a, s, r) {
    var i = e[t].author[0].name.$t,
        o = e[t].author[0].gd$image.src.replace("/s113", "/s72-c").replace("/s220", "/s72-c");
    return (o.match("//img1.blogblog.com/img/blank.gif") || o.match("//img1.blogblog.com/img/b16-rounded.gif")) && (o = "//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeFAna9hHytUUULDkkfWMHDVkHDtWm_gLJHCfFxrtWPubqLwqYpzCC0aWxemaf9QEwEv9YR8H_IZGs6p3CTXB803ee_PkQVp6pI_wbq3SGbUf3JQft9uTsRYshOVSD8tSQj_JttDoXM74Cdq_UGQIStwGYZkA9qwjZ25_R-Mnkgl9AU1xnYRcocY-x/w72-h72-p-k-no-nu-rw/krmz-comments-author-profile-picture.png"), '<div class="cmm1-item item-' + t + '"><a class="entry-inner" href="' + a + '" title="' + i + '"><span class="entry-image-wrap cmm-avatar"><span class="entry-image" data-image="' + o + '"></span></span><div class="entry-header"><h2 class="entry-title cmm-title">' + i + '</h2><p class="cmm-snippet excerpt">' + s + "</p></div></a></div>"
}

function getPostContent(e, t, a, s) {
    var r = "",
        i = (t.length, getPostLink(t, a)),
        o = getPostTitle(t, a),
        n = getPostAuthor(t, a),
        c = getPostDate(t, a),
        l = getPostImage(t, a),
        d = getPostImageType(l, a),
        p = getPostMeta(n, c),
        m = getPostTag(t, a);
    switch (e) {
        case "mega":
            r += '<div class="mega-item post"><a title="' + o + '" class="entry-image-wrap ' + d + '" href="' + i + '"><span class="entry-image" data-image="' + l + '"></span>' + m + '</a><div class="entry-header"><h2 class="entry-title"><a href="' + i + '" title="' + o + '">' + o + "</a></h2>" + p[1] + "</div></div>";
            break;
        case "video":
                    r += '<div class="video-item item-' + a + '"><a title="' + o + '" class="entry-image-wrap is-video" href="' + i + '"><span class="entry-image" data-image="' + l + '"></span>' + m + '</a><div class="entry-header"><h2 class="entry-title"><a href="' + i + '" title="' + o + '">' + o + "</a></h2>" + p[0] + "</div></div>";
            break;
        case "side1":
            switch (a) {
                case 0:
                    r += '<div class="side-item cs item-' + a + '"><a class="entry-inner" href="' + i + '" title="' + o + '"><span class="entry-image-wrap before-mask ' + d + '"><span class="entry-image" data-image="' + l + '"></span></span><div class="entry-header entry-info">' + m + '<h2 class="entry-title">' + o + "</h2>" + p[0] + "</div></a></div>";
                    break;
                default:
                    r += '<div class="side-item item-' + a + '"><a title="' + o + '" class="entry-image-wrap sz-1 ' + d + '" href="' + i + '"><span class="entry-image" data-image="' + l + '"></span></a><div class="entry-header"><h2 class="entry-title"><a href="' + i + '" title="' + o + '">' + o + "</a></h2>" + p[1] + "</div></div>"
            }
            break;
        case "side2":
            r += '<div class="side-item item-' + a + '"><a title="' + o + '" class="entry-image-wrap sz-1 ' + d + '" href="' + i + '"><span class="entry-image" data-image="' + l + '"></span></a><div class="entry-header"><h2 class="entry-title"><a href="' + i + '" title="' + o + '">' + o + "</a></h2>" + p[1] + "</div></div>";
            break;
        case "side3":
            r += '<div class="side3-item item-' + a + '"><a title="' + o + '" class="entry-image-wrap sz-2 ' + d + '" href="' + i + '"><span class="entry-image" data-image="' + l + '"></span>' + m + '</a><div class="entry-header"><h2 class="entry-title"><a href="' + i + '" title="' + o + '">' + o + "</a></h2>" + p[1] + "</div></div>";
            break;
        case "comments":
            r += getPostComments(t, a, i, o);
            break;
        case "related":
            a != s - 1 && (r += '<div class="related-item item-' + a + '"><a title="' + o + '" class="entry-image-wrap ' + d + '" href="' + i + '"><span class="entry-image" data-image="' + l + '"></span>' + m + '</a><div class="entry-header"><h2 class="entry-title"><a href="' + i + '" title="' + o + '">' + o + "</a></h2>" + p[1] + "</div></div>")
    }
    return r
}

function getRecentPostsData(e, t, a) {
    return $.ajax({
        url: getFeedUrl(e, t, "recent"),
        type: "GET",
        async: !1,
        dataType: "json",
        cache: !0,
        success: function(e) {
            return e
        }
    }).responseJSON
}

function getPosts(e, t, a, s, r) {
    s = 0 != s ? s : "unlabeled", a = "related" != t ? a : Number(a) + 1, $.ajax({
        url: getFeedUrl(t, a, s),
        type: "GET",
        dataType: "json",
        cache: !0,
        beforeSend: function(a) {
            switch (t) {
                case "video":
                case "side1":
                case "side2":
                case "side3":
                case "comments":
                case "related":
                    e.html(beforeLoader()).parent().addClass("type-" + t)
            }
        },
        success: function(i) {
            var o = "";
            switch (t) {
                case "mega":
                    o = '<div class="ul mega-items">';
                    break;
                case "video":
                    o = '<div class="content-block ' + t + '-items"><div class="video-grid">';
                    break;
                case "side1":
                case "side2":
                    o = '<div class="side-items">';
                    break;
                case "side3":
                    o = '<div class="side3-items">';
                    break;
                case "comments":
                    o = '<div class="cmm1-items">';
                    break;
                case "related":
                    o = '<div class="related-posts">'
            }
            var n = i.feed.entry;
            if (n) {
                if ("related" == t) {
                    1 == n.length && "recent" != s && (n = (i = getRecentPostsData(t, a)).feed.entry);
                    for (let e = 0; e < n.length; e++)
                        if (1 != n.length && getPostID(n, e) == r) {
                            n.splice(e, 1);
                            break
                        }
                }
                for (var c = 0, l = n; c < l.length; c++) o += getPostContent(t, l, c, a)
            } else switch (t) {
                case "mega":
                    o = '<div class="ul mega-items no-items">' + msgError() + "</div>";
                    break;
                default:
                    o = msgError()
            }
            switch (t) {
                case "mega":
                    o += "</div>", e.append(o).addClass("mega"), e.find("a:first").attr("href", function(e, t) {
                        switch (s) {
                            case "recent":
                                t = t.replace(t, "/search");
                                break;
                            default:
                                t = t.replace(t, "/search/label/" + s)
                        }
                        return t
                    });
                    break;
                 case "video":
                    o += "</div></div>", e.html(o)
                    break;
                default:
                    o += "</div>", e.html(o)
            }
            e.find("span.entry-image").zeroThumb()
        },
        error: function() {
            switch (t) {
                case "mega":
                    e.append('<div class="ul mega-items no-items">' + msgError() + "</div>");
                    break;
                default:
                    e.html(msgError())
            }
        }
    })
}

function getMega(e, t, a, s, r) {
    r.match("getposts") && ("mega" == t ? getPosts(e, t, a, s) : e.append('<div class="ul mega-items no-items">' + msgError() + "</div>"))
}

function getBlock(e, t, a, s, r, i, o) {
    if (r.match("getposts")) {
        if ("video" == t) return 0 != s && (i = "recent" == s ? "/search" : "/search/label/" + s, o = "" != viewAllText.trim() ? viewAllText : exportify.viewAll, e.parent().find(".widget-title").append('<a href="' + i + '" class="title-link">' + o + "</a>")), getPosts(e, t, a, s);
        e.html(msgError())
    }
}

function getWidget(e, t, a, s, r) {
    r.match("getposts") && ("side1" == t || "side2" == t || "side3" == t || "comments" == t ? getPosts(e, t, a, s) : e.html(msgError()))
}

function getRelated(e, t, a, s, r) {
    getPosts(e, t, a, s, r)
}

function disqusComments(e) {
    var t = document.createElement("script");
    t.type = "text/javascript", t.async = !0, t.src = "//" + e + ".disqus.com/blogger_item.js", document.getElementsByTagName("head")[0].appendChild(t)
}

function beautiAvatar(e) {
    $(e).attr("src", function(e, t, a) {
        return a = "//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeFAna9hHytUUULDkkfWMHDVkHDtWm_gLJHCfFxrtWPubqLwqYpzCC0aWxemaf9QEwEv9YR8H_IZGs6p3CTXB803ee_PkQVp6pI_wbq3SGbUf3JQft9uTsRYshOVSD8tSQj_JttDoXM74Cdq_UGQIStwGYZkA9qwjZ25_R-Mnkgl9AU1xnYRcocY-x/s35-rw/krmz-comments-author-profile-picture.png", t = (t = (t = t.replace("//resources.blogblog.com/img/blank.gif", a)).replace("//lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=s35", a)).replace("/s35", "/s39")
    })
}

function zeroFixedSidebar(e) {
    $(e).each(function(e, t) {
        fixedSidebar = "undefined" == typeof fixedSidebar || fixedSidebar, 1 == fixedSidebar && (e = $(".header-inner").height(), t = 1 == fixedMenu ? e + 30 : 30, $(this).theiaStickySidebar({
            containerSelector: "#content-wrapper > .container",
            additionalMarginTop: t,
            additionalMarginBottom: 30
        }))
    })
}
fixedMenu = "undefined" == typeof fixedMenu || fixedMenu, viewAllText = "undefined" != typeof viewAllText ? viewAllText : zeroMessages.viewAll, $("#krmz-pro-main-nav").zeroMenu().find(".widget").addClass("show-menu"), $(".show-search").click(function(e) {
    e.preventDefault(), $("body").addClass("search-active"), $("#main-search-wrap").fadeIn(170).find("input").focus()
}), $(".search-close").click(function(e) {
    e.preventDefault(), $("body").removeClass("search-active"), $("#main-search-wrap").fadeOut(170).find("input").blur()
}), $("html").each(function() {
    var e = $(this),
        t = localStorage.darkMode;
    darkMode = "undefined" != typeof darkMode && darkMode, userDarkMode = "undefined" == typeof userDarkMode || userDarkMode, 1 != darkMode && 0 != userDarkMode && ("true" == t && (e.addClass("is-dark"), darkModeLogo(t)), $(".darkmode-toggle").click(function(a) {
        a.preventDefault(), e.toggleClass("is-dark"), t = "true" != t ? "true" : "false", localStorage.darkMode = t, darkModeLogo(t)
    }))
}), $(".main-title a.title-link").each(function() {
    "" != viewAllText.trim() && $(this).html(viewAllText)
}), $(".sidebar .social-icons a").each(function(e) {
    var t = $(this),
        a = t.attr("href").split("#");
    a[1] && "" != (e = a[1].trim()) && t.append('<span class="text">' + e + "</span>"), t.attr("href", a[0].trim())
}), $(".post-body a").each(function() {
    var e = $(this),
        t = e.text(),
        a = t.toLowerCase(),
        s = zeroShortCode(t, "text");
    a.match("getbutton") && 0 != s && (e.replaceText(/([^{\}]+(?=}))/g, "<em>$1</em>"), e.find("em").replaceText("$", "%s"), e.each(function() {
        var e = $(this),
            t = e.text(),
            a = zeroShortCode(t, "text"),
            s = zeroShortCode(t, "icon"),
            r = zeroShortCode(t, "color"),
            i = zeroShortCode(t, "size"),
            o = zeroShortCode(t, "info"),
            n = e.parent().attr("style");
        e.addClass(0 != i ? "button btn x2" : "button btn").text(a.replace("%s", "$")), n && n.match("center") && e.addClass("is-c"), 0 != o ? (e.addClass(0 != s ? "x2 " + s : "x2"), e.append('<span class="btn-info">' + o.replace("%s", "$") + "</span>")) : 0 != s && e.addClass(s), 0 != r && e.addClass("color").attr("style", "background-color:" + r + ";")
    }))
}), $(".post-body b").each(function() {
    var e = $(this),
        t = e.text(),
        a = t.toLowerCase().trim();
    a.match(/(?:\$ads\=\{1\})/g) && e.replaceWith('<div id="krmz-pro-new-before-ad"/>'), a.match(/(?:\$ads\=\{2\})/g) && e.replaceWith('<div id="krmz-pro-new-after-ad"/>'), a.match("{tocify}") && (t = 0 != (t = zeroShortCode(t, "title")) ? t : "Table of Contents", e.replaceWith('<div class="zero-toc-wrap"><div class="zero-toc-inner"><a href="#" class="zero-toc-title" role="button" title="' + t + '"><span class="zero-toc-title-text">' + t + '</span></a><ol id="zero-toc"></ol></div></div>'), $(".zero-toc-title").each(function() {
        var e = $(this);
        e.click(function(t) {
            t.preventDefault(), e.toggleClass("is-expanded"), $("#zero-toc").slideToggle(170)
        })
    }), $("#zero-toc").toc({
        content: "#post-body",
        headings: "h2,h3,h4"
    }), $("#zero-toc li a").each(function() {
        var e = $(this);
        e.click(function(t) {
            return t.preventDefault(), $("html,body").animate({
                scrollTop: $(e.attr("href")).offset().top - 20
            }, 500), !1
        })
    })), a.match("{contactform}") && (e.replaceWith('<div class="contact-form-widget"/>'), $("#post-body .contact-form-widget").append($("#ContactForm1 .contact-form-form"))), a.match("{leftsidebar}") && ($("body").addClass("is-left"), e.remove()), a.match("{rightsidebar}") && ($("body").addClass("is-right").removeClass("is-left"), e.remove()), a.match("{fullwidth}") && ($("body").addClass("no-sidebar"), e.remove())
}), $("#krmz-pro-new-before-ad").each(function() {
    var e = $(this);
    e.length && $("#before-ad").appendTo(e)
}), $("#krmz-pro-new-after-ad").each(function() {
    var e = $(this);
    e.length && $("#after-ad").appendTo(e)
}), $("#krmz-pro-main-before-ad .widget").each(function() {
    var e = $(this);
    e.length && e.appendTo($("#before-ad"))
}), $("#krmz-pro-main-after-ad .widget").each(function() {
    var e = $(this);
    e.length && e.appendTo($("#after-ad"))
}), $("#krmz-pro-post-footer-ads .widget").each(function() {
    var e = $(this);
    e.length && e.appendTo($("#post-footer-ads"))
}), $(".post-body blockquote").each(function() {
    var e = $(this),
        t = e.text().toLowerCase().trim(),
        a = e.html();
    if (t.match("{alertsuccess}")) {
        const t = a.replace("{alertSuccess}", "");
        e.replaceWith('<div class="alert-message alert-success">' + t + "</div>")
    }
    if (t.match("{alertinfo}")) {
        const t = a.replace("{alertInfo}", "");
        e.replaceWith('<div class="alert-message alert-info">' + t + "</div>")
    }
    if (t.match("{alertwarning}")) {
        const t = a.replace("{alertWarning}", "");
        e.replaceWith('<div class="alert-message alert-warning">' + t + "</div>")
    }
    if (t.match("{alerterror}")) {
        const t = a.replace("{alertError}", "");
        e.replaceWith('<div class="alert-message alert-error">' + t + "</div>")
    }
    if (t.match("{codebox}")) {
        const t = a.replace("{codeBox}", "");
        e.replaceWith('<pre class="code-box">' + t + "</pre>")
    }
}), $(".share-links .zero-window").click(function(e) {
    e.preventDefault();
    var t = $(this),
        a = t.data("url"),
        s = t.data("width"),
        r = t.data("height");
    window.open(a, "_blank", "scrollbars=yes,resizable=yes,toolbar=0,width=" + s + ",height=" + r + ",top=50,left=50").focus()
}), $(".share-links .show-hid a").click(function(e) {
    e.preventDefault(), $(this).parent().parent().toggleClass("expanded")
}), $(".about-author .author-text").each(function() {
    var e = $(this),
        t = e.find("a");
    t.length && (t.each(function() {
        var e = $(this),
            t = e.text().trim(),
            a = e.attr("href");
        e.replaceWith('<li class="' + t + '"><a class="fa-' + t + '" href="' + a + '" title="' + t + '" rel="noopener noreferrer" target="_blank"/></li>')
    }), e.parent().append('<ul class="author-links social social-color"></ul>'), e.find("li").appendTo(e.parent().find(".author-links")))
}), $("#krmz-pro-main-nav-menu li.mega-menu").each(function(e, t) {
    var a = $(this),
        s = a.find("a").data("shortcode");
    s && (e = s.toLowerCase(), getMega(a, "mega", 5, zeroShortCode(s, "label"), e))
}), $(".content-section .HTML .widget-content").each(function(e, t, a, s, r) {
    var i = $(this),
        o = $(window),
        n = i.data("shortcode");
    n && (mtc = n.toLowerCase(), e = zeroShortCode(n, "results"), t = zeroShortCode(n, "label"), a = zeroShortCode(n, "type"), o.on("load resize scroll", function s() {
        o.scrollTop() + o.height() >= i.offset().top && (o.off("load resize scroll", s), getBlock(i, a, e, t, mtc))
    }).trigger("scroll"))
}), $(".zero-section .HTML .widget-content").each(function(e, t, a, s, r) {
    var i = $(this),
        o = $(window),
        n = i.data("shortcode"),
        c = i.data("is");
    n && (e = n.toLowerCase(), t = zeroShortCode(n, "results"), a = zeroShortCode(n, "label"), s = zeroShortCode(n, "type"), r = 0 != (r = zeroShortCode(n, "style")) ? r : "1", s = "posts" != (s = 0 != s ? s : "posts") ? s : "side" + r, c && "footer" == c && (s = "side1" != s ? s : "side2"), o.on("load resize scroll", function r() {
        o.scrollTop() + o.height() >= i.offset().top && (o.off("load resize scroll", r), getWidget(i, s, t, a, e))
    }).trigger("scroll"))
}), $("#krmz-pro-related-posts .HTML").each(function(e, t) {
    var a = $(this).data("shortcode");
    if (a) {
        function s() {
            return e = zeroShortCode(a, "title"), t = zeroShortCode(a, "results"), [e, t]
        }
        $("#related-wrap").each(function(e, t, a) {
            var r = $(this),
                i = r.find(".related-tag"),
                o = $(window),
                n = r.find(".related-content"),
                c = s();
            e = 0 != c[1] ? c[1] : 3, 0 != c[0] && r.find(".related-title .title > span").text(c[0]), t = i.data("label"), a = i.data("id"), o.on("load resize scroll", function s() {
                o.scrollTop() + o.height() >= n.offset().top && (o.off("load resize scroll", s), getRelated(n, "related", e, t, a))
            }).trigger("scroll")
        })
    }
}), $(".krmz-pro-blog-post-comments").each(function() {
    var e = $(this),
        t = e.data("shortcode"),
        a = zeroShortCode(t, "type"),
        s = "comments-system-" + a,
        r = e.find("#top-continue .comment-reply");
    switch (a) {
        case "disqus":
            var i = zeroShortCode(t, "shortname");
            0 != i && (disqus_shortname = i), disqusComments(disqus_shortname), e.addClass(s + " is-visible");
            break;
        case "facebook":
            var o = zeroShortCode(t, "lang"),
                n = 0 != o ? "https://connect.facebook.net/" + o + "/all.js#xfbml=1&version=v11.0" : "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0";
            $("head").append('<script async="async" defer="defer" crossorigin="anonymous" src="' + n + '"/>'), e.addClass(s).find("#comments").html('<div class="fb-comments" data-width="100%" data-href="' + disqus_blogger_current_url + '" order_by="time" data-numposts="5" data-lazy="true"></div>'), e.addClass("is-visible");
            break;
        case "hide":
            e.addClass("is-hidden");
            break;
        default:
            e.addClass("comments-system-blogger is-visible"), $(".entry-meta .entry-comments-link").addClass("show"), r.addClass("btn"), beautiAvatar(".avatar-image-container img")
    }
    var c = e.find(".comments .comment-reply"),
        l = e.find(".comments #top-continue"),
        d = e.find("#top-ce.comment-replybox-thread");
    c.click(function(e) {
        e.preventDefault(), l.show(), d.hide()
    }), l.click(function(e) {
        e.preventDefault(), l.hide(), d.show()
    })
}), $(function() {
    $(".entry-image-wrap .entry-image,.author-avatar-wrap .author-avatar").zeroThumb(), $(".mobile-logo").each(function() {
        var e = $(this),
            t = $(".main-logo a").clone();
        t.find("h1").remove(), t.appendTo(e)
    }), $("#mobile-menu").each(function() {
        var e = $(this),
            t = $("#krmz-pro-main-nav-menu").clone();
        t.attr("id", "main-mobile-nav"), t.find(".mega-items").remove(), t.find(".mega-menu > a").each(function(e, t) {
            var a = $(this),
                s = a.data("shortcode");
            s && (t = "recent" == (e = zeroShortCode(s, "label")) ? "/search" : "/search/label/" + e, a.attr("href", t))
        }), t.appendTo(e), $(".mobile-menu-toggle, .hide-mobile-menu, .overlay").click(function(e) {
            e.preventDefault(), $("body").toggleClass("nav-active")
        }), $(".mobile-menu .has-sub > a").after('<button class="submenu-toggle" value=""/>'), $(".mobile-menu .mega-menu").find(".submenu-toggle").remove(), $(".mobile-menu ul li .submenu-toggle").click(function() {
            var e = $(this);
            e.parent().hasClass("has-sub") && (e.parent().hasClass("expanded") ? e.parent().removeClass("expanded").find("> .m-sub").slideToggle(170) : e.parent().addClass("expanded").children(".m-sub").slideToggle(170))
        })
    }), $(".mm-footer .mm-social").each(function() {
        var e = $(this);
        $("#topbar ul.social").clone().appendTo(e)
    }), $(".mm-footer .mm-menu").each(function() {
        var e = $(this);
        $("#topbar ul.link-list").clone().appendTo(e)
    }), $(".header-inner").each(function() {
        var e = $(this);
        if (1 == fixedMenu && e.length > 0) {
            var t = $(document).scrollTop(),
                a = e.offset().top,
                s = e.height(),
                r = a + s + s;
            $(window).scroll(function(s) {
                (s = $(document).scrollTop()) > r ? e.addClass("is-fixed") : (s < a || s <= 1) && e.removeClass("is-fixed"), s < t ? setTimeout(function() {
                    e.addClass("show")
                }, 200) : setTimeout(function() {
                    e.removeClass("show")
                }, 200), t = s
            })
        }
    }), zeroFixedSidebar("#main-wrapper, #sidebar-wrapper"), $("#post-body iframe").each(function() {
        var e = $(this);
        e.attr("src").match("www.youtube.com") && e.wrap('<div class="responsive-video-wrap"/>')
    }), $("p.comment-content").each(function() {
        var e = $(this);
        e.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g, '<img src="$1"/>'), e.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, '<div class="responsive-video-wrap"><iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')
    }), $("#krmz-pro-load-more-link").each(function() {
        var e = $(this),
            t = e.data("load");
        t && e.show(), e.click(function(a) {
            a.preventDefault(), e.hide(), $.ajax({
                url: t,
                success: function(a) {
                    var s = $(a).find(".blog-posts");
                    s.find(".index-post").addClass("post-animated post-fadeInUp"), $(".blog-posts").append(s.html()), (t = $(a).find("#krmz-pro-load-more-link").data("load")) ? e.show() : (e.hide(), $("#blog-pager .no-more").addClass("show"))
                },
                beforeSend: function() {
                    $("#blog-pager .loading").show()
                },
                complete: function() {
                    $("#blog-pager .loading").hide(), $(".index-post .entry-image-wrap .entry-image").zeroThumb(), zeroFixedSidebar("#main-wrapper, #sidebar-wrapper")
                }
            })
        })
    }), $("#krmz-pro-cookie-consent").each(function() {
        var e = $(this),
            t = e.find(".widget.Text").data("shortcode"),
            a = e.find(".consent-button");
        e.length > 0 && (t && (ok = zeroShortCode(t, "ok"), days = zeroShortCode(t, "days"), 0 != ok && a.text(ok), days = 0 != days ? Number(days) : 7), "1" !== $.cookie("krmz_pro_cookie_consent") && (e.css("display", "block"), $(window).on("load", function() {
            e.addClass("is-visible")
        })), a.off("click").click(function(t) {
            t.preventDefault(), t.stopPropagation(), $.cookie("krmz_pro_cookie_consent", "1", {
                expires: days,
                path: "/"
            }), e.removeClass("is-visible"), setTimeout(function() {
                e.css("display", "none")
            }, 500)
        }), cookieChoices = {})
    }), $("#back-top").each(function() {
        var e = $(this);
        $(window).on("scroll", function() {
            $(this).scrollTop() >= 100 ? e.addClass("show") : e.removeClass("show"), e.offset().top >= $("#footer-wrapper").offset().top - 34 ? e.addClass("on-footer") : e.removeClass("on-footer")
        }), e.click(function(e) {
            e.preventDefault(), $("html, body").animate({
                scrollTop: 0
            }, 500)
        })
    })
});
document.onkeydown=function(){switch(event.keyCode){case 116:return event.returnValue=!1,event.keyCode=0,!1;case 82:if(event.ctrlKey)return event.returnValue=!1,event.keyCode=0,!1}};
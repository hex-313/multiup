/*!For license information please see app.01beaa02.js.LICENSE.txt*/
(self.webpackChunk = self.webpackChunk || []).push([
    [143], {
        5579: (t, e, i) => {
            var s = {
                "./hello_controller.js": 4695
            };

            function n(t) {
                var e = o(t);
                return i(e)
            }

            function o(t) {
                if (!i.o(s, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return s[t]
            }
            n.keys = function() {
                return Object.keys(s)
            }, n.resolve = o, t.exports = n, n.id = 5579
        },
        8205: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => s
            });
            const s = {}
        },
        4695: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => c
            });
            i(489), i(8304);

            function s(t) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function o(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var s = e[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                }
            }

            function r(t, e) {
                return (r = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function a(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var i, s = h(t);
                    if (e) {
                        var n = h(this).constructor;
                        i = Reflect.construct(s, arguments, n)
                    } else i = s.apply(this, arguments);
                    return l(this, i)
                }
            }

            function l(t, e) {
                return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function h(t) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var c = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && r(t, e)
                }(h, t);
                var e, i, s, l = a(h);

                function h() {
                    return n(this, h), l.apply(this, arguments)
                }
                return e = h, (i = [{
                    key: "connect",
                    value: function() {
                        this.element.textContent = "Hello Stimulus! Edit me in assets/controllers/hello_controller.js"
                    }
                }]) && o(e.prototype, i), s && o(e, s), h
            }(i(7931).Controller)
        },
        1843: (t, e, i) => {
            "use strict";
            (0, i(2192).x)(i(5579));
            var s = i(9755),
                n = i.n(s),
                o = (i(7915), i(4728), i(3081), i(4987)),
                r = i.n(o),
                a = (i(7729), i(3112), i(8993), i(7285), i(8877), i(882), i(7568), i(6808)),
                l = i.n(a),
                h = i(8),
                c = i.n(h);
            i(8533), i(8102), i(9755);
            i.g.$ = i.g.jQuery = n(), i.g.Clipboard = r(), i.g.Cookies = l(), i.g.moment = c(), i.g.Modernizr = "/* Modernizr 2.8.3 (Custom Build) | MIT & BSD\r\n * Build: http://modernizr.com/download/#-flexbox-flexboxlegacy-csstransforms-csstransforms3d-touch-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-css_overflow_scrolling-load\r\n */\r\n;\r\n\r\n\r\n\r\nwindow.Modernizr = (function( window, document, undefined ) {\r\n\r\n    var version = '2.8.3',\r\n\r\n    Modernizr = {},\r\n\r\n    enableClasses = true,\r\n\r\n    docElement = document.documentElement,\r\n\r\n    mod = 'modernizr',\r\n    modElem = document.createElement(mod),\r\n    mStyle = modElem.style,\r\n\r\n    inputElem  ,\r\n\r\n\r\n    toString = {}.toString,\r\n\r\n    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),\r\n\r\n\r\n\r\n    omPrefixes = 'Webkit Moz O ms',\r\n\r\n    cssomPrefixes = omPrefixes.split(' '),\r\n\r\n    domPrefixes = omPrefixes.toLowerCase().split(' '),\r\n\r\n\r\n    tests = {},\r\n    inputs = {},\r\n    attrs = {},\r\n\r\n    classes = [],\r\n\r\n    slice = classes.slice,\r\n\r\n    featureName,\r\n\r\n\r\n    injectElementWithStyles = function( rule, callback, nodes, testnames ) {\r\n\r\n      var style, ret, node, docOverflow,\r\n          div = document.createElement('div'),\r\n                body = document.body,\r\n                fakeBody = body || document.createElement('body');\r\n\r\n      if ( parseInt(nodes, 10) ) {\r\n                      while ( nodes-- ) {\r\n              node = document.createElement('div');\r\n              node.id = testnames ? testnames[nodes] : mod + (nodes + 1);\r\n              div.appendChild(node);\r\n          }\r\n      }\r\n\r\n                style = ['&#173;','<style id=\"s', mod, '\">', rule, '</style>'].join('');\r\n      div.id = mod;\r\n          (body ? div : fakeBody).innerHTML += style;\r\n      fakeBody.appendChild(div);\r\n      if ( !body ) {\r\n                fakeBody.style.background = '';\r\n                fakeBody.style.overflow = 'hidden';\r\n          docOverflow = docElement.style.overflow;\r\n          docElement.style.overflow = 'hidden';\r\n          docElement.appendChild(fakeBody);\r\n      }\r\n\r\n      ret = callback(div, rule);\r\n        if ( !body ) {\r\n          fakeBody.parentNode.removeChild(fakeBody);\r\n          docElement.style.overflow = docOverflow;\r\n      } else {\r\n          div.parentNode.removeChild(div);\r\n      }\r\n\r\n      return !!ret;\r\n\r\n    },\r\n    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;\r\n\r\n    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {\r\n      hasOwnProp = function (object, property) {\r\n        return _hasOwnProperty.call(object, property);\r\n      };\r\n    }\r\n    else {\r\n      hasOwnProp = function (object, property) {\r\n        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));\r\n      };\r\n    }\r\n\r\n\r\n    if (!Function.prototype.bind) {\r\n      Function.prototype.bind = function bind(that) {\r\n\r\n        var target = this;\r\n\r\n        if (typeof target != \"function\") {\r\n            throw new TypeError();\r\n        }\r\n\r\n        var args = slice.call(arguments, 1),\r\n            bound = function () {\r\n\r\n            if (this instanceof bound) {\r\n\r\n              var F = function(){};\r\n              F.prototype = target.prototype;\r\n              var self = new F();\r\n\r\n              var result = target.apply(\r\n                  self,\r\n                  args.concat(slice.call(arguments))\r\n              );\r\n              if (Object(result) === result) {\r\n                  return result;\r\n              }\r\n              return self;\r\n\r\n            } else {\r\n\r\n              return target.apply(\r\n                  that,\r\n                  args.concat(slice.call(arguments))\r\n              );\r\n\r\n            }\r\n\r\n        };\r\n\r\n        return bound;\r\n      };\r\n    }\r\n\r\n    function setCss( str ) {\r\n        mStyle.cssText = str;\r\n    }\r\n\r\n    function setCssAll( str1, str2 ) {\r\n        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));\r\n    }\r\n\r\n    function is( obj, type ) {\r\n        return typeof obj === type;\r\n    }\r\n\r\n    function contains( str, substr ) {\r\n        return !!~('' + str).indexOf(substr);\r\n    }\r\n\r\n    function testProps( props, prefixed ) {\r\n        for ( var i in props ) {\r\n            var prop = props[i];\r\n            if ( !contains(prop, \"-\") && mStyle[prop] !== undefined ) {\r\n                return prefixed == 'pfx' ? prop : true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n\r\n    function testDOMProps( props, obj, elem ) {\r\n        for ( var i in props ) {\r\n            var item = obj[props[i]];\r\n            if ( item !== undefined) {\r\n\r\n                            if (elem === false) return props[i];\r\n\r\n                            if (is(item, 'function')){\r\n                                return item.bind(elem || obj);\r\n                }\r\n\r\n                            return item;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n\r\n    function testPropsAll( prop, prefixed, elem ) {\r\n\r\n        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),\r\n            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');\r\n\r\n            if(is(prefixed, \"string\") || is(prefixed, \"undefined\")) {\r\n          return testProps(props, prefixed);\r\n\r\n            } else {\r\n          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');\r\n          return testDOMProps(props, prefixed, elem);\r\n        }\r\n    }    tests['flexbox'] = function() {\r\n      return testPropsAll('flexWrap');\r\n    };\r\n\r\n\r\n    tests['flexboxlegacy'] = function() {\r\n        return testPropsAll('boxDirection');\r\n    };\r\n\r\n\r\n\r\n    tests['touch'] = function() {\r\n        var bool;\r\n\r\n        if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {\r\n          bool = true;\r\n        } else {\r\n          injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {\r\n            bool = node.offsetTop === 9;\r\n          });\r\n        }\r\n\r\n        return bool;\r\n    };\r\n\r\n\r\n\r\n    tests['csstransforms'] = function() {\r\n        return !!testPropsAll('transform');\r\n    };\r\n\r\n\r\n    tests['csstransforms3d'] = function() {\r\n\r\n        var ret = !!testPropsAll('perspective');\r\n\r\n                        if ( ret && 'webkitPerspective' in docElement.style ) {\r\n\r\n                      injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {\r\n            ret = node.offsetLeft === 9 && node.offsetHeight === 3;\r\n          });\r\n        }\r\n        return ret;\r\n    };\r\n    for ( var feature in tests ) {\r\n        if ( hasOwnProp(tests, feature) ) {\r\n                                    featureName  = feature.toLowerCase();\r\n            Modernizr[featureName] = tests[feature]();\r\n\r\n            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);\r\n        }\r\n    }\r\n\r\n\r\n\r\n     Modernizr.addTest = function ( feature, test ) {\r\n       if ( typeof feature == 'object' ) {\r\n         for ( var key in feature ) {\r\n           if ( hasOwnProp( feature, key ) ) {\r\n             Modernizr.addTest( key, feature[ key ] );\r\n           }\r\n         }\r\n       } else {\r\n\r\n         feature = feature.toLowerCase();\r\n\r\n         if ( Modernizr[feature] !== undefined ) {\r\n                                              return Modernizr;\r\n         }\r\n\r\n         test = typeof test == 'function' ? test() : test;\r\n\r\n         if (typeof enableClasses !== \"undefined\" && enableClasses) {\r\n           docElement.className += ' ' + (test ? '' : 'no-') + feature;\r\n         }\r\n         Modernizr[feature] = test;\r\n\r\n       }\r\n\r\n       return Modernizr;\r\n     };\r\n\r\n\r\n    setCss('');\r\n    modElem = inputElem = null;\r\n\r\n    ;(function(window, document) {\r\n                var version = '3.7.0';\r\n\r\n            var options = window.html5 || {};\r\n\r\n            var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;\r\n\r\n            var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;\r\n\r\n            var supportsHtml5Styles;\r\n\r\n            var expando = '_html5shiv';\r\n\r\n            var expanID = 0;\r\n\r\n            var expandoData = {};\r\n\r\n            var supportsUnknownElements;\r\n\r\n        (function() {\r\n          try {\r\n            var a = document.createElement('a');\r\n            a.innerHTML = '<xyz></xyz>';\r\n                    supportsHtml5Styles = ('hidden' in a);\r\n\r\n            supportsUnknownElements = a.childNodes.length == 1 || (function() {\r\n                        (document.createElement)('a');\r\n              var frag = document.createDocumentFragment();\r\n              return (\r\n                typeof frag.cloneNode == 'undefined' ||\r\n                typeof frag.createDocumentFragment == 'undefined' ||\r\n                typeof frag.createElement == 'undefined'\r\n              );\r\n            }());\r\n          } catch(e) {\r\n                    supportsHtml5Styles = true;\r\n            supportsUnknownElements = true;\r\n          }\r\n\r\n        }());\r\n\r\n            function addStyleSheet(ownerDocument, cssText) {\r\n          var p = ownerDocument.createElement('p'),\r\n          parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;\r\n\r\n          p.innerHTML = 'x<style>' + cssText + '</style>';\r\n          return parent.insertBefore(p.lastChild, parent.firstChild);\r\n        }\r\n\r\n            function getElements() {\r\n          var elements = html5.elements;\r\n          return typeof elements == 'string' ? elements.split(' ') : elements;\r\n        }\r\n\r\n            function getExpandoData(ownerDocument) {\r\n          var data = expandoData[ownerDocument[expando]];\r\n          if (!data) {\r\n            data = {};\r\n            expanID++;\r\n            ownerDocument[expando] = expanID;\r\n            expandoData[expanID] = data;\r\n          }\r\n          return data;\r\n        }\r\n\r\n            function createElement(nodeName, ownerDocument, data){\r\n          if (!ownerDocument) {\r\n            ownerDocument = document;\r\n          }\r\n          if(supportsUnknownElements){\r\n            return ownerDocument.createElement(nodeName);\r\n          }\r\n          if (!data) {\r\n            data = getExpandoData(ownerDocument);\r\n          }\r\n          var node;\r\n\r\n          if (data.cache[nodeName]) {\r\n            node = data.cache[nodeName].cloneNode();\r\n          } else if (saveClones.test(nodeName)) {\r\n            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();\r\n          } else {\r\n            node = data.createElem(nodeName);\r\n          }\r\n\r\n                                                    return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;\r\n        }\r\n\r\n            function createDocumentFragment(ownerDocument, data){\r\n          if (!ownerDocument) {\r\n            ownerDocument = document;\r\n          }\r\n          if(supportsUnknownElements){\r\n            return ownerDocument.createDocumentFragment();\r\n          }\r\n          data = data || getExpandoData(ownerDocument);\r\n          var clone = data.frag.cloneNode(),\r\n          i = 0,\r\n          elems = getElements(),\r\n          l = elems.length;\r\n          for(;i<l;i++){\r\n            clone.createElement(elems[i]);\r\n          }\r\n          return clone;\r\n        }\r\n\r\n            function shivMethods(ownerDocument, data) {\r\n          if (!data.cache) {\r\n            data.cache = {};\r\n            data.createElem = ownerDocument.createElement;\r\n            data.createFrag = ownerDocument.createDocumentFragment;\r\n            data.frag = data.createFrag();\r\n          }\r\n\r\n\r\n          ownerDocument.createElement = function(nodeName) {\r\n                    if (!html5.shivMethods) {\r\n              return data.createElem(nodeName);\r\n            }\r\n            return createElement(nodeName, ownerDocument, data);\r\n          };\r\n\r\n          ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +\r\n                                                          'var n=f.cloneNode(),c=n.createElement;' +\r\n                                                          'h.shivMethods&&(' +\r\n                                                                                                                getElements().join().replace(/[\\w\\-]+/g, function(nodeName) {\r\n            data.createElem(nodeName);\r\n            data.frag.createElement(nodeName);\r\n            return 'c(\"' + nodeName + '\")';\r\n          }) +\r\n            ');return n}'\r\n                                                         )(html5, data.frag);\r\n        }\r\n\r\n            function shivDocument(ownerDocument) {\r\n          if (!ownerDocument) {\r\n            ownerDocument = document;\r\n          }\r\n          var data = getExpandoData(ownerDocument);\r\n\r\n          if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {\r\n            data.hasCSS = !!addStyleSheet(ownerDocument,\r\n                                                                                'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +\r\n                                                                                    'mark{background:#FF0;color:#000}' +\r\n                                                                                    'template{display:none}'\r\n                                         );\r\n          }\r\n          if (!supportsUnknownElements) {\r\n            shivMethods(ownerDocument, data);\r\n          }\r\n          return ownerDocument;\r\n        }\r\n\r\n            var html5 = {\r\n\r\n                'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',\r\n\r\n                'version': version,\r\n\r\n                'shivCSS': (options.shivCSS !== false),\r\n\r\n                'supportsUnknownElements': supportsUnknownElements,\r\n\r\n                'shivMethods': (options.shivMethods !== false),\r\n\r\n                'type': 'default',\r\n\r\n                'shivDocument': shivDocument,\r\n\r\n                createElement: createElement,\r\n\r\n                createDocumentFragment: createDocumentFragment\r\n        };\r\n\r\n            window.html5 = html5;\r\n\r\n            shivDocument(document);\r\n\r\n    }(this, document));\r\n\r\n    Modernizr._version      = version;\r\n\r\n    Modernizr._prefixes     = prefixes;\r\n    Modernizr._domPrefixes  = domPrefixes;\r\n    Modernizr._cssomPrefixes  = cssomPrefixes;\r\n\r\n\r\n\r\n    Modernizr.testProp      = function(prop){\r\n        return testProps([prop]);\r\n    };\r\n\r\n    Modernizr.testAllProps  = testPropsAll;\r\n\r\n\r\n    Modernizr.testStyles    = injectElementWithStyles;    docElement.className = docElement.className.replace(/(^|\\s)no-js(\\s|$)/, '$1$2') +\r\n\r\n                                                    (enableClasses ? ' js ' + classes.join(' ') : '');\r\n\r\n    return Modernizr;\r\n\r\n})(this, this.document);\r\n/*yepnope1.5.4|WTFPL*/\r\n(function(a,b,c){function d(a){return\"[object Function]\"==o.call(a)}function e(a){return\"string\"==typeof a}function f(){}function g(a){return!a||\"loaded\"==a||\"complete\"==a||\"uninitialized\"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){(\"c\"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){\"img\"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),\"object\"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height=\"0\",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),\"img\"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||\"j\",e(a)?i(\"c\"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName(\"script\")[0],o={}.toString,p=[],q=0,r=\"MozAppearance\"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&\"[object Opera]\"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?\"object\":l?\"script\":\"img\",v=l?\"script\":u,w=Array.isArray||function(a){return\"[object Array]\"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split(\"!\"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split(\"=\"),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(\".\").pop().split(\"?\").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split(\"/\").pop().split(\"?\")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&\"css\"==i.url.split(\".\").pop().split(\"?\").shift()?\"c\":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState=\"loading\",b.addEventListener(\"DOMContentLoaded\",A=function(){b.removeEventListener(\"DOMContentLoaded\",A,0),b.readyState=\"complete\"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement(\"script\"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement(\"link\"),j,c=i?h:c||f;e.href=a,e.rel=\"stylesheet\",e.type=\"text/css\";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}})(this,document);\r\nModernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0));};\r\n\r\n// johanbrook.com/browsers/native-momentum-scrolling-ios-5/\r\n// introduced in iOS5b2. Possible API may change...\r\n\r\nModernizr.addTest(\"overflowscrolling\",function(){\r\n    return Modernizr.testAllProps(\"overflowScrolling\");\r\n});\r\n\r\n\r\n;"
        },
        8102: (t, e, i) => {
            var s, n, o = i(9755);
            i(9826), i(8309), i(4916), i(4723), i(5306), s = o, (n = function(t, e) {
                if (this.$element = s(t), this.type = this.$element.data("uploadtype") || (this.$element.find(".thumbnail").length > 0 ? "image" : "file"), this.$input = this.$element.find(":file"), 0 !== this.$input.length) {
                    this.name = this.$input.attr("name") || e.name, this.$hidden = this.$element.find('input[type=hidden][name="' + this.name + '"]'), 0 === this.$hidden.length && (this.$hidden = s('<input type="hidden" />'), this.$element.prepend(this.$hidden)), this.$preview = this.$element.find(".fileupload-preview");
                    var i = this.$preview.css("height");
                    "inline" != this.$preview.css("display") && "0px" != i && "none" != i && this.$preview.css("line-height", i), this.original = {
                        exists: this.$element.hasClass("fileupload-exists"),
                        preview: this.$preview.html(),
                        hiddenVal: this.$hidden.val()
                    }, this.$remove = this.$element.find('[data-dismiss="fileupload"]'), this.$element.find('[data-trigger="fileupload"]').on("click.fileupload", s.proxy(this.trigger, this)), this.listen()
                }
            }).prototype = {
                listen: function() {
                    this.$input.on("change.fileupload", s.proxy(this.change, this)), s(this.$input[0].form).on("reset.fileupload", s.proxy(this.reset, this)), this.$remove && this.$remove.on("click.fileupload", s.proxy(this.clear, this))
                },
                change: function(t, e) {
                    if ("clear" !== e) {
                        var i = void 0 !== t.target.files ? t.target.files[0] : t.target.value ? {
                            name: t.target.value.replace(/^.+\\/, "")
                        } : null;
                        if (i)
                            if (this.$hidden.val(""), this.$hidden.attr("name", ""), this.$input.attr("name", this.name), "image" === this.type && this.$preview.length > 0 && (void 0 !== i.type ? i.type.match("image.*") : i.name.match("\\.(gif|png|jpe?g)$")) && "undefined" != typeof FileReader) {
                                var s = new FileReader,
                                    n = this.$preview,
                                    o = this.$element;
                                s.onload = function(t) {
                                    n.html('<img src="' + t.target.result + '" ' + ("none" != n.css("max-height") ? 'style="max-height: ' + n.css("max-height") + ';"' : "") + " />"), o.addClass("fileupload-exists").removeClass("fileupload-new")
                                }, s.readAsDataURL(i)
                            } else this.$preview.text(i.name), this.$element.addClass("fileupload-exists").removeClass("fileupload-new");
                        else this.clear()
                    }
                },
                clear: function(t) {
                    if (this.$hidden.val(""), this.$hidden.attr("name", this.name), this.$input.attr("name", ""), navigator.userAgent.match(/msie/i)) {
                        var e = this.$input.clone(!0);
                        this.$input.after(e), this.$input.remove(), this.$input = e
                    } else this.$input.val("");
                    this.$preview.html(""), this.$element.addClass("fileupload-new").removeClass("fileupload-exists"), t && (this.$input.trigger("change", ["clear"]), t.preventDefault())
                },
                reset: function(t) {
                    this.clear(), this.$hidden.val(this.original.hiddenVal), this.$preview.html(this.original.preview), this.original.exists ? this.$element.addClass("fileupload-exists").removeClass("fileupload-new") : this.$element.addClass("fileupload-new").removeClass("fileupload-exists")
                },
                trigger: function(t) {
                    this.$input.trigger("click"), t.preventDefault()
                }
            }, s.fn.fileupload = function(t) {
                return this.each((function() {
                    var e = s(this),
                        i = e.data("fileupload");
                    i || e.data("fileupload", i = new n(this, t)), "string" == typeof t && i[t]()
                }))
            }, s.fn.fileupload.Constructor = n, s(document).on("click.fileupload.data-api", '[data-provides="fileupload"]', (function(t) {
                var e = s(this);
                if (!e.data("fileupload")) {
                    e.fileupload(e.data());
                    var i = s(t.target).closest('[data-dismiss="fileupload"],[data-trigger="fileupload"]');
                    i.length > 0 && (i.trigger("click.fileupload"), t.preventDefault())
                }
            }))
        },
        8993: (t, e, i) => {
            var s, n, o;

            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            i(2526), i(1817), i(2165), i(2222), i(7327), i(9826), i(2772), i(6992), i(9600), i(1249), i(7042), i(2707), i(561), i(3710), i(8309), i(6977), i(1539), i(4678), i(1058), i(4916), i(9714), i(8783), i(4723), i(5306), i(3123), i(3210), i(3948), i(2564), n = [i(9755)], void 0 === (o = "function" == typeof(s = function(t) {
                t.ui = t.ui || {}, t.ui.version = "1.12.0";
                var e, i, s = 0,
                    n = Array.prototype.slice;

                function o(t) {
                    for (var e = t.css("visibility");
                        "inherit" === e;) e = (t = t.parent()).css("visibility");
                    return "hidden" !== e
                }
                t.cleanData = (e = t.cleanData, function(i) {
                        var s, n, o;
                        for (o = 0; null != (n = i[o]); o++) try {
                            (s = t._data(n, "events")) && s.remove && t(n).triggerHandler("remove")
                        } catch (t) {}
                        e(i)
                    }), t.widget = function(e, i, s) {
                        var n, o, r, a = {},
                            l = e.split(".")[0],
                            h = l + "-" + (e = e.split(".")[1]);
                        return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][h.toLowerCase()] = function(e) {
                            return !!t.data(e, h)
                        }, t[l] = t[l] || {}, n = t[l][e], o = t[l][e] = function(t, e) {
                            if (!this._createWidget) return new o(t, e);
                            arguments.length && this._createWidget(t, e)
                        }, t.extend(o, n, {
                            version: s.version,
                            _proto: t.extend({}, s),
                            _childConstructors: []
                        }), (r = new i).options = t.widget.extend({}, r.options), t.each(s, (function(e, s) {
                            t.isFunction(s) ? a[e] = function() {
                                function t() {
                                    return i.prototype[e].apply(this, arguments)
                                }

                                function n(t) {
                                    return i.prototype[e].apply(this, t)
                                }
                                return function() {
                                    var e, i = this._super,
                                        o = this._superApply;
                                    return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e
                                }
                            }() : a[e] = s
                        })), o.prototype = t.widget.extend(r, {
                            widgetEventPrefix: n && r.widgetEventPrefix || e
                        }, a, {
                            constructor: o,
                            namespace: l,
                            widgetName: e,
                            widgetFullName: h
                        }), n ? (t.each(n._childConstructors, (function(e, i) {
                            var s = i.prototype;
                            t.widget(s.namespace + "." + s.widgetName, o, i._proto)
                        })), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
                    }, t.widget.extend = function(e) {
                        for (var i, s, o = n.call(arguments, 1), r = 0, a = o.length; r < a; r++)
                            for (i in o[r]) s = o[r][i], o[r].hasOwnProperty(i) && void 0 !== s && (t.isPlainObject(s) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : e[i] = s);
                        return e
                    }, t.widget.bridge = function(e, i) {
                        var s = i.prototype.widgetFullName || e;
                        t.fn[e] = function(o) {
                            var r = "string" == typeof o,
                                a = n.call(arguments, 1),
                                l = this;
                            return r ? this.each((function() {
                                var i, n = t.data(this, s);
                                return "instance" === o ? (l = n, !1) : n ? t.isFunction(n[o]) && "_" !== o.charAt(0) ? (i = n[o].apply(n, a)) !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0 : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'")
                            })) : (a.length && (o = t.widget.extend.apply(null, [o].concat(a))), this.each((function() {
                                var e = t.data(this, s);
                                e ? (e.option(o || {}), e._init && e._init()) : t.data(this, s, new i(o, this))
                            }))), l
                        }
                    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
                        widgetName: "widget",
                        widgetEventPrefix: "",
                        defaultElement: "<div>",
                        options: {
                            classes: {},
                            disabled: !1,
                            create: null
                        },
                        _createWidget: function(e, i) {
                            i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = s++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                                remove: function(t) {
                                    t.target === i && this.destroy()
                                }
                            }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
                        },
                        _getCreateOptions: function() {
                            return {}
                        },
                        _getCreateEventData: t.noop,
                        _create: t.noop,
                        _init: t.noop,
                        destroy: function() {
                            var e = this;
                            this._destroy(), t.each(this.classesElementLookup, (function(t, i) {
                                e._removeClass(i, t)
                            })), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
                        },
                        _destroy: t.noop,
                        widget: function() {
                            return this.element
                        },
                        option: function(e, i) {
                            var s, n, o, r = e;
                            if (0 === arguments.length) return t.widget.extend({}, this.options);
                            if ("string" == typeof e)
                                if (r = {}, s = e.split("."), e = s.shift(), s.length) {
                                    for (n = r[e] = t.widget.extend({}, this.options[e]), o = 0; o < s.length - 1; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];
                                    if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
                                    n[e] = i
                                } else {
                                    if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                                    r[e] = i
                                }
                            return this._setOptions(r), this
                        },
                        _setOptions: function(t) {
                            var e;
                            for (e in t) this._setOption(e, t[e]);
                            return this
                        },
                        _setOption: function(t, e) {
                            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
                        },
                        _setOptionClasses: function(e) {
                            var i, s, n;
                            for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
                                element: s,
                                keys: i,
                                classes: e,
                                add: !0
                            })))
                        },
                        _setOptionDisabled: function(t) {
                            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
                        },
                        enable: function() {
                            return this._setOptions({
                                disabled: !1
                            })
                        },
                        disable: function() {
                            return this._setOptions({
                                disabled: !0
                            })
                        },
                        _classes: function(e) {
                            var i = [],
                                s = this;

                            function n(n, o) {
                                var r, a;
                                for (a = 0; a < n.length; a++) r = s.classesElementLookup[n[a]] || t(), r = e.add ? t(t.unique(r.get().concat(e.element.get()))) : t(r.not(e.element).get()), s.classesElementLookup[n[a]] = r, i.push(n[a]), o && e.classes[n[a]] && i.push(e.classes[n[a]])
                            }
                            return (e = t.extend({
                                element: this.element,
                                classes: this.options.classes || {}
                            }, e)).keys && n(e.keys.match(/\S+/g) || [], !0), e.extra && n(e.extra.match(/\S+/g) || []), i.join(" ")
                        },
                        _removeClass: function(t, e, i) {
                            return this._toggleClass(t, e, i, !1)
                        },
                        _addClass: function(t, e, i) {
                            return this._toggleClass(t, e, i, !0)
                        },
                        _toggleClass: function(t, e, i, s) {
                            s = "boolean" == typeof s ? s : i;
                            var n = "string" == typeof t || null === t,
                                o = {
                                    extra: n ? e : i,
                                    keys: n ? t : e,
                                    element: n ? this.element : t,
                                    add: s
                                };
                            return o.element.toggleClass(this._classes(o), s), this
                        },
                        _on: function(e, i, s) {
                            var n, o = this;
                            "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, (function(s, r) {
                                function a() {
                                    if (e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled")) return ("string" == typeof r ? o[r] : r).apply(o, arguments)
                                }
                                "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                                var l = s.match(/^([\w:-]*)\s*(.*)$/),
                                    h = l[1] + o.eventNamespace,
                                    c = l[2];
                                c ? n.on(h, c, a) : i.on(h, a)
                            }))
                        },
                        _off: function(e, i) {
                            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
                        },
                        _delay: function(t, e) {
                            function i() {
                                return ("string" == typeof t ? s[t] : t).apply(s, arguments)
                            }
                            var s = this;
                            return setTimeout(i, e || 0)
                        },
                        _hoverable: function(e) {
                            this.hoverable = this.hoverable.add(e), this._on(e, {
                                mouseenter: function(e) {
                                    this._addClass(t(e.currentTarget), null, "ui-state-hover")
                                },
                                mouseleave: function(e) {
                                    this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                                }
                            })
                        },
                        _focusable: function(e) {
                            this.focusable = this.focusable.add(e), this._on(e, {
                                focusin: function(e) {
                                    this._addClass(t(e.currentTarget), null, "ui-state-focus")
                                },
                                focusout: function(e) {
                                    this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                                }
                            })
                        },
                        _trigger: function(e, i, s) {
                            var n, o, r = this.options[e];
                            if (s = s || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                                for (n in o) n in i || (i[n] = o[n]);
                            return this.element.trigger(i, s), !(t.isFunction(r) && !1 === r.apply(this.element[0], [i].concat(s)) || i.isDefaultPrevented())
                        }
                    }, t.each({
                        show: "fadeIn",
                        hide: "fadeOut"
                    }, (function(e, i) {
                        t.Widget.prototype["_" + e] = function(s, n, o) {
                            var r;
                            "string" == typeof n && (n = {
                                effect: n
                            });
                            var a = n ? !0 === n || "number" == typeof n ? i : n.effect || i : e;
                            "number" == typeof(n = n || {}) && (n = {
                                duration: n
                            }), r = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), r && t.effects && t.effects.effect[a] ? s[e](n) : a !== e && s[a] ? s[a](n.duration, n.easing, o) : s.queue((function(i) {
                                t(this)[e](), o && o.call(s[0]), i()
                            }))
                        }
                    })), t.widget,
                    function() {
                        var e, i, s = Math.max,
                            n = Math.abs,
                            o = Math.round,
                            r = /left|center|right/,
                            a = /top|center|bottom/,
                            l = /[\+\-]\d+(\.[\d]+)?%?/,
                            h = /^\w+/,
                            c = /%$/,
                            u = t.fn.position;

                        function p(t, e, i) {
                            return [parseFloat(t[0]) * (c.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (c.test(t[1]) ? i / 100 : 1)]
                        }

                        function d(e, i) {
                            return parseInt(t.css(e, i), 10) || 0
                        }

                        function f(e) {
                            var i = e[0];
                            return 9 === i.nodeType ? {
                                width: e.width(),
                                height: e.height(),
                                offset: {
                                    top: 0,
                                    left: 0
                                }
                            } : t.isWindow(i) ? {
                                width: e.width(),
                                height: e.height(),
                                offset: {
                                    top: e.scrollTop(),
                                    left: e.scrollLeft()
                                }
                            } : i.preventDefault ? {
                                width: 0,
                                height: 0,
                                offset: {
                                    top: i.pageY,
                                    left: i.pageX
                                }
                            } : {
                                width: e.outerWidth(),
                                height: e.outerHeight(),
                                offset: e.offset()
                            }
                        }
                        i = function() {
                            var e = t("<div>").css("position", "absolute").appendTo("body").offset({
                                    top: 1.5,
                                    left: 1.5
                                }),
                                s = 1.5 === e.offset().top;
                            return e.remove(), i = function() {
                                return s
                            }, s
                        }, t.position = {
                            scrollbarWidth: function() {
                                if (void 0 !== e) return e;
                                var i, s, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                                    o = n.children()[0];
                                return t("body").append(n), i = o.offsetWidth, n.css("overflow", "scroll"), i === (s = o.offsetWidth) && (s = n[0].clientWidth), n.remove(), e = i - s
                            },
                            getScrollInfo: function(e) {
                                var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                                    s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                                    n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
                                return {
                                    width: "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                                    height: n ? t.position.scrollbarWidth() : 0
                                }
                            },
                            getWithinInfo: function(e) {
                                var i = t(e || window),
                                    s = t.isWindow(i[0]),
                                    n = !!i[0] && 9 === i[0].nodeType;
                                return {
                                    element: i,
                                    isWindow: s,
                                    isDocument: n,
                                    offset: s || n ? {
                                        left: 0,
                                        top: 0
                                    } : t(e).offset(),
                                    scrollLeft: i.scrollLeft(),
                                    scrollTop: i.scrollTop(),
                                    width: i.outerWidth(),
                                    height: i.outerHeight()
                                }
                            }
                        }, t.fn.position = function(e) {
                            if (!e || !e.of) return u.apply(this, arguments);
                            e = t.extend({}, e);
                            var c, m, g, v, _, b, y = t(e.of),
                                w = t.position.getWithinInfo(e.within),
                                x = t.position.getScrollInfo(w),
                                C = (e.collision || "flip").split(" "),
                                P = {};
                            return b = f(y), y[0].preventDefault && (e.at = "left top"), m = b.width, g = b.height, v = b.offset, _ = t.extend({}, v), t.each(["my", "at"], (function() {
                                var t, i, s = (e[this] || "").split(" ");
                                1 === s.length && (s = r.test(s[0]) ? s.concat(["center"]) : a.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = r.test(s[0]) ? s[0] : "center", s[1] = a.test(s[1]) ? s[1] : "center", t = l.exec(s[0]), i = l.exec(s[1]), P[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [h.exec(s[0])[0], h.exec(s[1])[0]]
                            })), 1 === C.length && (C[1] = C[0]), "right" === e.at[0] ? _.left += m : "center" === e.at[0] && (_.left += m / 2), "bottom" === e.at[1] ? _.top += g : "center" === e.at[1] && (_.top += g / 2), c = p(P.at, m, g), _.left += c[0], _.top += c[1], this.each((function() {
                                var r, a, l = t(this),
                                    h = l.outerWidth(),
                                    u = l.outerHeight(),
                                    f = d(this, "marginLeft"),
                                    b = d(this, "marginTop"),
                                    S = h + f + d(this, "marginRight") + x.width,
                                    k = u + b + d(this, "marginBottom") + x.height,
                                    z = t.extend({}, _),
                                    j = p(P.my, l.outerWidth(), l.outerHeight());
                                "right" === e.my[0] ? z.left -= h : "center" === e.my[0] && (z.left -= h / 2), "bottom" === e.my[1] ? z.top -= u : "center" === e.my[1] && (z.top -= u / 2), z.left += j[0], z.top += j[1], i() || (z.left = o(z.left), z.top = o(z.top)), r = {
                                    marginLeft: f,
                                    marginTop: b
                                }, t.each(["left", "top"], (function(i, s) {
                                    t.ui.position[C[i]] && t.ui.position[C[i]][s](z, {
                                        targetWidth: m,
                                        targetHeight: g,
                                        elemWidth: h,
                                        elemHeight: u,
                                        collisionPosition: r,
                                        collisionWidth: S,
                                        collisionHeight: k,
                                        offset: [c[0] + j[0], c[1] + j[1]],
                                        my: e.my,
                                        at: e.at,
                                        within: w,
                                        elem: l
                                    })
                                })), e.using && (a = function(t) {
                                    var i = v.left - z.left,
                                        o = i + m - h,
                                        r = v.top - z.top,
                                        a = r + g - u,
                                        c = {
                                            target: {
                                                element: y,
                                                left: v.left,
                                                top: v.top,
                                                width: m,
                                                height: g
                                            },
                                            element: {
                                                element: l,
                                                left: z.left,
                                                top: z.top,
                                                width: h,
                                                height: u
                                            },
                                            horizontal: o < 0 ? "left" : i > 0 ? "right" : "center",
                                            vertical: a < 0 ? "top" : r > 0 ? "bottom" : "middle"
                                        };
                                    m < h && n(i + o) < m && (c.horizontal = "center"), g < u && n(r + a) < g && (c.vertical = "middle"), s(n(i), n(o)) > s(n(r), n(a)) ? c.important = "horizontal" : c.important = "vertical", e.using.call(this, t, c)
                                }), l.offset(t.extend(z, {
                                    using: a
                                }))
                            }))
                        }, t.ui.position = {
                            fit: {
                                left: function(t, e) {
                                    var i, n = e.within,
                                        o = n.isWindow ? n.scrollLeft : n.offset.left,
                                        r = n.width,
                                        a = t.left - e.collisionPosition.marginLeft,
                                        l = o - a,
                                        h = a + e.collisionWidth - r - o;
                                    e.collisionWidth > r ? l > 0 && h <= 0 ? (i = t.left + l + e.collisionWidth - r - o, t.left += l - i) : t.left = h > 0 && l <= 0 ? o : l > h ? o + r - e.collisionWidth : o : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = s(t.left - a, t.left)
                                },
                                top: function(t, e) {
                                    var i, n = e.within,
                                        o = n.isWindow ? n.scrollTop : n.offset.top,
                                        r = e.within.height,
                                        a = t.top - e.collisionPosition.marginTop,
                                        l = o - a,
                                        h = a + e.collisionHeight - r - o;
                                    e.collisionHeight > r ? l > 0 && h <= 0 ? (i = t.top + l + e.collisionHeight - r - o, t.top += l - i) : t.top = h > 0 && l <= 0 ? o : l > h ? o + r - e.collisionHeight : o : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = s(t.top - a, t.top)
                                }
                            },
                            flip: {
                                left: function(t, e) {
                                    var i, s, o = e.within,
                                        r = o.offset.left + o.scrollLeft,
                                        a = o.width,
                                        l = o.isWindow ? o.scrollLeft : o.offset.left,
                                        h = t.left - e.collisionPosition.marginLeft,
                                        c = h - l,
                                        u = h + e.collisionWidth - a - l,
                                        p = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                                        d = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                                        f = -2 * e.offset[0];
                                    c < 0 ? ((i = t.left + p + d + f + e.collisionWidth - a - r) < 0 || i < n(c)) && (t.left += p + d + f) : u > 0 && ((s = t.left - e.collisionPosition.marginLeft + p + d + f - l) > 0 || n(s) < u) && (t.left += p + d + f)
                                },
                                top: function(t, e) {
                                    var i, s, o = e.within,
                                        r = o.offset.top + o.scrollTop,
                                        a = o.height,
                                        l = o.isWindow ? o.scrollTop : o.offset.top,
                                        h = t.top - e.collisionPosition.marginTop,
                                        c = h - l,
                                        u = h + e.collisionHeight - a - l,
                                        p = "top" === e.my[1],
                                        d = p ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                                        f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                                        m = -2 * e.offset[1];
                                    c < 0 ? ((s = t.top + d + f + m + e.collisionHeight - a - r) < 0 || s < n(c)) && (t.top += d + f + m) : u > 0 && ((i = t.top - e.collisionPosition.marginTop + d + f + m - l) > 0 || n(i) < u) && (t.top += d + f + m)
                                }
                            },
                            flipfit: {
                                left: function() {
                                    t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                                },
                                top: function() {
                                    t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                                }
                            }
                        }
                    }(), t.ui.position, t.extend(t.expr[":"], {
                        data: t.expr.createPseudo ? t.expr.createPseudo((function(e) {
                            return function(i) {
                                return !!t.data(i, e)
                            }
                        })) : function(e, i, s) {
                            return !!t.data(e, s[3])
                        }
                    }), t.fn.extend({
                        disableSelection: (i = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function() {
                            return this.on(i + ".ui-disableSelection", (function(t) {
                                t.preventDefault()
                            }))
                        }),
                        enableSelection: function() {
                            return this.off(".ui-disableSelection")
                        }
                    }), t.ui.focusable = function(e, i) {
                        var s, n, r, a, l, h = e.nodeName.toLowerCase();
                        return "area" === h ? (n = (s = e.parentNode).name, !(!e.href || !n || "map" !== s.nodeName.toLowerCase()) && (r = t("img[usemap='#" + n + "']")).length > 0 && r.is(":visible")) : (/^(input|select|textarea|button|object)$/.test(h) ? (a = !e.disabled) && (l = t(e).closest("fieldset")[0]) && (a = !l.disabled) : a = "a" === h && e.href || i, a && t(e).is(":visible") && o(t(e)))
                    }, t.extend(t.expr[":"], {
                        focusable: function(e) {
                            return t.ui.focusable(e, null != t.attr(e, "tabindex"))
                        }
                    }), t.ui.focusable, t.fn.form = function() {
                        return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
                    }, t.ui.formResetMixin = {
                        _formResetHandler: function() {
                            var e = t(this);
                            setTimeout((function() {
                                var i = e.data("ui-form-reset-instances");
                                t.each(i, (function() {
                                    this.refresh()
                                }))
                            }))
                        },
                        _bindFormResetHandler: function() {
                            if (this.form = this.element.form(), this.form.length) {
                                var t = this.form.data("ui-form-reset-instances") || [];
                                t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
                            }
                        },
                        _unbindFormResetHandler: function() {
                            if (this.form.length) {
                                var e = this.form.data("ui-form-reset-instances");
                                e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
                            }
                        }
                    }, t.ui.keyCode = {
                        BACKSPACE: 8,
                        COMMA: 188,
                        DELETE: 46,
                        DOWN: 40,
                        END: 35,
                        ENTER: 13,
                        ESCAPE: 27,
                        HOME: 36,
                        LEFT: 37,
                        PAGE_DOWN: 34,
                        PAGE_UP: 33,
                        PERIOD: 190,
                        RIGHT: 39,
                        SPACE: 32,
                        TAB: 9,
                        UP: 38
                    }, t.ui.escapeSelector = (l = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g, function(t) {
                        return t.replace(l, "\\$1")
                    }), t.fn.labels = function() {
                        var e, i, s, n, o;
                        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), (s = this.attr("id")) && (o = (e = this.eq(0).parents().last()).add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(s) + "']", n = n.add(o.find(i).addBack(i))), this.pushStack(n))
                    }, t.fn.scrollParent = function(e) {
                        var i = this.css("position"),
                            s = "absolute" === i,
                            n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                            o = this.parents().filter((function() {
                                var e = t(this);
                                return (!s || "static" !== e.css("position")) && n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                            })).eq(0);
                        return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
                    }, t.extend(t.expr[":"], {
                        tabbable: function(e) {
                            var i = t.attr(e, "tabindex"),
                                s = null != i;
                            return (!s || i >= 0) && t.ui.focusable(e, s)
                        }
                    }), t.fn.extend({
                        uniqueId: (a = 0, function() {
                            return this.each((function() {
                                this.id || (this.id = "ui-id-" + ++a)
                            }))
                        }),
                        removeUniqueId: function() {
                            return this.each((function() {
                                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                            }))
                        }
                    }), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
                var a, l, h = !1;
                t(document).on("mouseup", (function() {
                    h = !1
                })), t.widget("ui.mouse", {
                    version: "1.12.0",
                    options: {
                        cancel: "input, textarea, button, select, option",
                        distance: 1,
                        delay: 0
                    },
                    _mouseInit: function() {
                        var e = this;
                        this.element.on("mousedown." + this.widgetName, (function(t) {
                            return e._mouseDown(t)
                        })).on("click." + this.widgetName, (function(i) {
                            if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent")) return t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
                        })), this.started = !1
                    },
                    _mouseDestroy: function() {
                        this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
                    },
                    _mouseDown: function(e) {
                        if (!h) {
                            this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                            var i = this,
                                s = 1 === e.which,
                                n = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                            return !(s && !n && this._mouseCapture(e) && (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout((function() {
                                i.mouseDelayMet = !0
                            }), this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), 0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                                return i._mouseMove(t)
                            }, this._mouseUpDelegate = function(t) {
                                return i._mouseUp(t)
                            }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), h = !0, 0)))
                        }
                    },
                    _mouseMove: function(e) {
                        if (this._mouseMoved) {
                            if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                            if (!e.which)
                                if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                                else if (!this.ignoreMissingWhich) return this._mouseUp(e)
                        }
                        return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
                    },
                    _mouseUp: function(e) {
                        this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, h = !1, e.preventDefault()
                    },
                    _mouseDistanceMet: function(t) {
                        return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
                    },
                    _mouseDelayMet: function() {
                        return this.mouseDelayMet
                    },
                    _mouseStart: function() {},
                    _mouseDrag: function() {},
                    _mouseStop: function() {},
                    _mouseCapture: function() {
                        return !0
                    }
                }), t.ui.plugin = {
                    add: function(e, i, s) {
                        var n, o = t.ui[e].prototype;
                        for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]])
                    },
                    call: function(t, e, i, s) {
                        var n, o = t.plugins[e];
                        if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                            for (n = 0; n < o.length; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i)
                    }
                }, t.ui.safeActiveElement = function(t) {
                    var e;
                    try {
                        e = t.activeElement
                    } catch (i) {
                        e = t.body
                    }
                    return e || (e = t.body), e.nodeName || (e = t.body), e
                }, t.ui.safeBlur = function(e) {
                    e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur")
                }, t.widget("ui.draggable", t.ui.mouse, {
                    version: "1.12.0",
                    widgetEventPrefix: "drag",
                    options: {
                        addClasses: !0,
                        appendTo: "parent",
                        axis: !1,
                        connectToSortable: !1,
                        containment: !1,
                        cursor: "auto",
                        cursorAt: !1,
                        grid: !1,
                        handle: !1,
                        helper: "original",
                        iframeFix: !1,
                        opacity: !1,
                        refreshPositions: !1,
                        revert: !1,
                        revertDuration: 500,
                        scope: "default",
                        scroll: !0,
                        scrollSensitivity: 20,
                        scrollSpeed: 20,
                        snap: !1,
                        snapMode: "both",
                        snapTolerance: 20,
                        stack: !1,
                        zIndex: !1,
                        drag: null,
                        start: null,
                        stop: null
                    },
                    _create: function() {
                        "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
                    },
                    _setOption: function(t, e) {
                        this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
                    },
                    _destroy: function() {
                        (this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = !0 : (this._removeHandleClassName(), this._mouseDestroy())
                    },
                    _mouseCapture: function(e) {
                        var i = this.options;
                        return this._blurActiveElement(e), !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 || (this.handle = this._getHandle(e), !this.handle || (this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix), 0)))
                    },
                    _blockFrames: function(e) {
                        this.iframeBlocks = this.document.find(e).map((function() {
                            var e = t(this);
                            return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
                        }))
                    },
                    _unblockFrames: function() {
                        this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
                    },
                    _blurActiveElement: function(e) {
                        var i = t.ui.safeActiveElement(this.document[0]),
                            s = t(e.target);
                        this._getHandle(e) && s.closest(i).length || t.ui.safeBlur(i)
                    },
                    _mouseStart: function(e) {
                        var i = this.options;
                        return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter((function() {
                            return "fixed" === t(this).css("position")
                        })).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
                    },
                    _refreshOffsets: function(t) {
                        this.offset = {
                            top: this.positionAbs.top - this.margins.top,
                            left: this.positionAbs.left - this.margins.left,
                            scroll: !1,
                            parent: this._getParentOffset(),
                            relative: this._getRelativeOffset()
                        }, this.offset.click = {
                            left: t.pageX - this.offset.left,
                            top: t.pageY - this.offset.top
                        }
                    },
                    _mouseDrag: function(e, i) {
                        if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                            var s = this._uiHash();
                            if (!1 === this._trigger("drag", e, s)) return this._mouseUp(new t.Event("mouseup", e)), !1;
                            this.position = s.position
                        }
                        return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
                    },
                    _mouseStop: function(e) {
                        var i = this,
                            s = !1;
                        return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), (function() {
                            !1 !== i._trigger("stop", e) && i._clear()
                        })) : !1 !== this._trigger("stop", e) && this._clear(), !1
                    },
                    _mouseUp: function(e) {
                        return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e)
                    },
                    cancel: function() {
                        return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {
                            target: this.element[0]
                        })) : this._clear(), this
                    },
                    _getHandle: function(e) {
                        return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length
                    },
                    _setHandleClassName: function() {
                        this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
                    },
                    _removeHandleClassName: function() {
                        this._removeClass(this.handleElement, "ui-draggable-handle")
                    },
                    _createHelper: function(e) {
                        var i = this.options,
                            s = t.isFunction(i.helper),
                            n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
                        return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
                    },
                    _setPositionRelative: function() {
                        /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
                    },
                    _adjustOffsetFromHelper: function(e) {
                        "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                            left: +e[0],
                            top: +e[1] || 0
                        }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
                    },
                    _isRootNode: function(t) {
                        return /(html|body)/i.test(t.tagName) || t === this.document[0]
                    },
                    _getParentOffset: function() {
                        var e = this.offsetParent.offset(),
                            i = this.document[0];
                        return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
                            top: 0,
                            left: 0
                        }), {
                            top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                            left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                        }
                    },
                    _getRelativeOffset: function() {
                        if ("relative" !== this.cssPosition) return {
                            top: 0,
                            left: 0
                        };
                        var t = this.element.position(),
                            e = this._isRootNode(this.scrollParent[0]);
                        return {
                            top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                            left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
                        }
                    },
                    _cacheMargins: function() {
                        this.margins = {
                            left: parseInt(this.element.css("marginLeft"), 10) || 0,
                            top: parseInt(this.element.css("marginTop"), 10) || 0,
                            right: parseInt(this.element.css("marginRight"), 10) || 0,
                            bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                        }
                    },
                    _cacheHelperProportions: function() {
                        this.helperProportions = {
                            width: this.helper.outerWidth(),
                            height: this.helper.outerHeight()
                        }
                    },
                    _setContainment: function() {
                        var e, i, s, n = this.options,
                            o = this.document[0];
                        this.relativeContainer = null, n.containment ? "window" !== n.containment ? "document" !== n.containment ? n.containment.constructor !== Array ? ("parent" === n.containment && (n.containment = this.helper[0].parentNode), (s = (i = t(n.containment))[0]) && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i)) : this.containment = n.containment : this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = null
                    },
                    _convertPositionTo: function(t, e) {
                        e || (e = this.position);
                        var i = "absolute" === t ? 1 : -1,
                            s = this._isRootNode(this.scrollParent[0]);
                        return {
                            top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
                            left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
                        }
                    },
                    _generatePosition: function(t, e) {
                        var i, s, n, o, r = this.options,
                            a = this._isRootNode(this.scrollParent[0]),
                            l = t.pageX,
                            h = t.pageY;
                        return a && this.offset.scroll || (this.offset.scroll = {
                            top: this.scrollParent.scrollTop(),
                            left: this.scrollParent.scrollLeft()
                        }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), r.grid && (n = r.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, h = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - r.grid[1] : n + r.grid[1] : n, o = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - r.grid[0] : o + r.grid[0] : o), "y" === r.axis && (l = this.originalPageX), "x" === r.axis && (h = this.originalPageY)), {
                            top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top),
                            left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left)
                        }
                    },
                    _clear: function() {
                        this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
                    },
                    _trigger: function(e, i, s) {
                        return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s)
                    },
                    plugins: {},
                    _uiHash: function() {
                        return {
                            helper: this.helper,
                            position: this.position,
                            originalPosition: this.originalPosition,
                            offset: this.positionAbs
                        }
                    }
                }), t.ui.plugin.add("draggable", "connectToSortable", {
                    start: function(e, i, s) {
                        var n = t.extend({}, i, {
                            item: s.element
                        });
                        s.sortables = [], t(s.options.connectToSortable).each((function() {
                            var i = t(this).sortable("instance");
                            i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n))
                        }))
                    },
                    stop: function(e, i, s) {
                        var n = t.extend({}, i, {
                            item: s.element
                        });
                        s.cancelHelperRemoval = !1, t.each(s.sortables, (function() {
                            var t = this;
                            t.isOver ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                                position: t.placeholder.css("position"),
                                top: t.placeholder.css("top"),
                                left: t.placeholder.css("left")
                            }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, n))
                        }))
                    },
                    drag: function(e, i, s) {
                        t.each(s.sortables, (function() {
                            var n = !1,
                                o = this;
                            o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, o._intersectsWith(o.containerCache) && (n = !0, t.each(s.sortables, (function() {
                                return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1), n
                            }))), n ? (o.isOver || (o.isOver = 1, s._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function() {
                                return i.helper[0]
                            }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top, s._trigger("toSortable", e), s.dropped = o.element, t.each(s.sortables, (function() {
                                this.refreshPositions()
                            })), s.currentItem = s.element, o.fromOutside = s), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables, (function() {
                                this.refreshPositions()
                            })))
                        }))
                    }
                }), t.ui.plugin.add("draggable", "cursor", {
                    start: function(e, i, s) {
                        var n = t("body"),
                            o = s.options;
                        n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor)
                    },
                    stop: function(e, i, s) {
                        var n = s.options;
                        n._cursor && t("body").css("cursor", n._cursor)
                    }
                }), t.ui.plugin.add("draggable", "opacity", {
                    start: function(e, i, s) {
                        var n = t(i.helper),
                            o = s.options;
                        n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity)
                    },
                    stop: function(e, i, s) {
                        var n = s.options;
                        n._opacity && t(i.helper).css("opacity", n._opacity)
                    }
                }), t.ui.plugin.add("draggable", "scroll", {
                    start: function(t, e, i) {
                        i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
                    },
                    drag: function(e, i, s) {
                        var n = s.options,
                            o = !1,
                            r = s.scrollParentNotHidden[0],
                            a = s.document[0];
                        r !== a && "HTML" !== r.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + r.offsetHeight - e.pageY < n.scrollSensitivity ? r.scrollTop = o = r.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (r.scrollTop = o = r.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + r.offsetWidth - e.pageX < n.scrollSensitivity ? r.scrollLeft = o = r.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (r.scrollLeft = o = r.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(a).scrollTop() < n.scrollSensitivity ? o = t(a).scrollTop(t(a).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(a).scrollTop()) < n.scrollSensitivity && (o = t(a).scrollTop(t(a).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(a).scrollLeft() < n.scrollSensitivity ? o = t(a).scrollLeft(t(a).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(a).scrollLeft()) < n.scrollSensitivity && (o = t(a).scrollLeft(t(a).scrollLeft() + n.scrollSpeed)))), !1 !== o && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e)
                    }
                }), t.ui.plugin.add("draggable", "snap", {
                    start: function(e, i, s) {
                        var n = s.options;
                        s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each((function() {
                            var e = t(this),
                                i = e.offset();
                            this !== s.element[0] && s.snapElements.push({
                                item: this,
                                width: e.outerWidth(),
                                height: e.outerHeight(),
                                top: i.top,
                                left: i.left
                            })
                        }))
                    },
                    drag: function(e, i, s) {
                        var n, o, r, a, l, h, c, u, p, d, f = s.options,
                            m = f.snapTolerance,
                            g = i.offset.left,
                            v = g + s.helperProportions.width,
                            _ = i.offset.top,
                            b = _ + s.helperProportions.height;
                        for (p = s.snapElements.length - 1; p >= 0; p--) h = (l = s.snapElements[p].left - s.margins.left) + s.snapElements[p].width, u = (c = s.snapElements[p].top - s.margins.top) + s.snapElements[p].height, v < l - m || g > h + m || b < c - m || _ > u + m || !t.contains(s.snapElements[p].item.ownerDocument, s.snapElements[p].item) ? (s.snapElements[p].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
                            snapItem: s.snapElements[p].item
                        })), s.snapElements[p].snapping = !1) : ("inner" !== f.snapMode && (n = Math.abs(c - b) <= m, o = Math.abs(u - _) <= m, r = Math.abs(l - v) <= m, a = Math.abs(h - g) <= m, n && (i.position.top = s._convertPositionTo("relative", {
                            top: c - s.helperProportions.height,
                            left: 0
                        }).top), o && (i.position.top = s._convertPositionTo("relative", {
                            top: u,
                            left: 0
                        }).top), r && (i.position.left = s._convertPositionTo("relative", {
                            top: 0,
                            left: l - s.helperProportions.width
                        }).left), a && (i.position.left = s._convertPositionTo("relative", {
                            top: 0,
                            left: h
                        }).left)), d = n || o || r || a, "outer" !== f.snapMode && (n = Math.abs(c - _) <= m, o = Math.abs(u - b) <= m, r = Math.abs(l - g) <= m, a = Math.abs(h - v) <= m, n && (i.position.top = s._convertPositionTo("relative", {
                            top: c,
                            left: 0
                        }).top), o && (i.position.top = s._convertPositionTo("relative", {
                            top: u - s.helperProportions.height,
                            left: 0
                        }).top), r && (i.position.left = s._convertPositionTo("relative", {
                            top: 0,
                            left: l
                        }).left), a && (i.position.left = s._convertPositionTo("relative", {
                            top: 0,
                            left: h - s.helperProportions.width
                        }).left)), !s.snapElements[p].snapping && (n || o || r || a || d) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
                            snapItem: s.snapElements[p].item
                        })), s.snapElements[p].snapping = n || o || r || a || d)
                    }
                }), t.ui.plugin.add("draggable", "stack", {
                    start: function(e, i, s) {
                        var n, o = s.options,
                            r = t.makeArray(t(o.stack)).sort((function(e, i) {
                                return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                            }));
                        r.length && (n = parseInt(t(r[0]).css("zIndex"), 10) || 0, t(r).each((function(e) {
                            t(this).css("zIndex", n + e)
                        })), this.css("zIndex", n + r.length))
                    }
                }), t.ui.plugin.add("draggable", "zIndex", {
                    start: function(e, i, s) {
                        var n = t(i.helper),
                            o = s.options;
                        n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex)
                    },
                    stop: function(e, i, s) {
                        var n = s.options;
                        n._zIndex && t(i.helper).css("zIndex", n._zIndex)
                    }
                }), t.ui.draggable, t.widget("ui.droppable", {
                    version: "1.12.0",
                    widgetEventPrefix: "drop",
                    options: {
                        accept: "*",
                        addClasses: !0,
                        greedy: !1,
                        scope: "default",
                        tolerance: "intersect",
                        activate: null,
                        deactivate: null,
                        drop: null,
                        out: null,
                        over: null
                    },
                    _create: function() {
                        var e, i = this.options,
                            s = i.accept;
                        this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function(t) {
                            return t.is(s)
                        }, this.proportions = function() {
                            if (!arguments.length) return e || (e = {
                                width: this.element[0].offsetWidth,
                                height: this.element[0].offsetHeight
                            });
                            e = arguments[0]
                        }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
                    },
                    _addToManager: function(e) {
                        t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
                    },
                    _splice: function(t) {
                        for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1)
                    },
                    _destroy: function() {
                        var e = t.ui.ddmanager.droppables[this.options.scope];
                        this._splice(e)
                    },
                    _setOption: function(e, i) {
                        if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) {
                            return t.is(i)
                        };
                        else if ("scope" === e) {
                            var s = t.ui.ddmanager.droppables[this.options.scope];
                            this._splice(s), this._addToManager(i)
                        }
                        this._super(e, i)
                    },
                    _activate: function(e) {
                        var i = t.ui.ddmanager.current;
                        this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
                    },
                    _deactivate: function(e) {
                        var i = t.ui.ddmanager.current;
                        this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
                    },
                    _over: function(e) {
                        var i = t.ui.ddmanager.current;
                        i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
                    },
                    _out: function(e) {
                        var i = t.ui.ddmanager.current;
                        i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
                    },
                    _drop: function(e, i) {
                        var s = i || t.ui.ddmanager.current,
                            n = !1;
                        return !(!s || (s.currentItem || s.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each((function() {
                            var i = t(this).droppable("instance");
                            if (i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && c(s, t.extend(i, {
                                    offset: i.element.offset()
                                }), i.options.tolerance, e)) return n = !0, !1
                        })), !n && !!this.accept.call(this.element[0], s.currentItem || s.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(s)), this.element))
                    },
                    ui: function(t) {
                        return {
                            draggable: t.currentItem || t.element,
                            helper: t.helper,
                            position: t.position,
                            offset: t.positionAbs
                        }
                    },
                    _addHoverClass: function() {
                        this._addClass("ui-droppable-hover")
                    },
                    _removeHoverClass: function() {
                        this._removeClass("ui-droppable-hover")
                    },
                    _addActiveClass: function() {
                        this._addClass("ui-droppable-active")
                    },
                    _removeActiveClass: function() {
                        this._removeClass("ui-droppable-active")
                    }
                });
                var c = t.ui.intersect = function() {
                    function t(t, e, i) {
                        return t >= e && t < e + i
                    }
                    return function(e, i, s, n) {
                        if (!i.offset) return !1;
                        var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                            r = (e.positionAbs || e.position.absolute).top + e.margins.top,
                            a = o + e.helperProportions.width,
                            l = r + e.helperProportions.height,
                            h = i.offset.left,
                            c = i.offset.top,
                            u = h + i.proportions().width,
                            p = c + i.proportions().height;
                        switch (s) {
                            case "fit":
                                return h <= o && a <= u && c <= r && l <= p;
                            case "intersect":
                                return h < o + e.helperProportions.width / 2 && a - e.helperProportions.width / 2 < u && c < r + e.helperProportions.height / 2 && l - e.helperProportions.height / 2 < p;
                            case "pointer":
                                return t(n.pageY, c, i.proportions().height) && t(n.pageX, h, i.proportions().width);
                            case "touch":
                                return (r >= c && r <= p || l >= c && l <= p || r < c && l > p) && (o >= h && o <= u || a >= h && a <= u || o < h && a > u);
                            default:
                                return !1
                        }
                    }
                }();
                t.ui.ddmanager = {
                    current: null,
                    droppables: {
                        default: []
                    },
                    prepareOffsets: function(e, i) {
                        var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [],
                            r = i ? i.type : null,
                            a = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
                        t: for (s = 0; s < o.length; s++)
                            if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
                                for (n = 0; n < a.length; n++)
                                    if (a[n] === o[s].element[0]) {
                                        o[s].proportions().height = 0;
                                        continue t
                                    }
                                o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === r && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions({
                                    width: o[s].element[0].offsetWidth,
                                    height: o[s].element[0].offsetHeight
                                }))
                            }
                    },
                    drop: function(e, i) {
                        var s = !1;
                        return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), (function() {
                            this.options && (!this.options.disabled && this.visible && c(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
                        })), s
                    },
                    dragStart: function(e, i) {
                        e.element.parentsUntil("body").on("scroll.droppable", (function() {
                            e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
                        }))
                    },
                    drag: function(e, i) {
                        e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], (function() {
                            if (!this.options.disabled && !this.greedyChild && this.visible) {
                                var s, n, o, r = c(e, this, this.options.tolerance, i),
                                    a = !r && this.isover ? "isout" : r && !this.isover ? "isover" : null;
                                a && (this.options.greedy && (n = this.options.scope, (o = this.element.parents(":data(ui-droppable)").filter((function() {
                                    return t(this).droppable("instance").options.scope === n
                                }))).length && ((s = t(o[0]).droppable("instance")).greedyChild = "isover" === a)), s && "isover" === a && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[a] = !0, this["isout" === a ? "isover" : "isout"] = !1, this["isover" === a ? "_over" : "_out"].call(this, i), s && "isout" === a && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                            }
                        }))
                    },
                    dragStop: function(e, i) {
                        e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
                    }
                }, !1 !== t.uiBackCompat && t.widget("ui.droppable", t.ui.droppable, {
                    options: {
                        hoverClass: !1,
                        activeClass: !1
                    },
                    _addActiveClass: function() {
                        this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
                    },
                    _removeActiveClass: function() {
                        this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
                    },
                    _addHoverClass: function() {
                        this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
                    },
                    _removeHoverClass: function() {
                        this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
                    }
                }), t.ui.droppable, t.widget("ui.resizable", t.ui.mouse, {
                    version: "1.12.0",
                    widgetEventPrefix: "resize",
                    options: {
                        alsoResize: !1,
                        animate: !1,
                        animateDuration: "slow",
                        animateEasing: "swing",
                        aspectRatio: !1,
                        autoHide: !1,
                        classes: {
                            "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
                        },
                        containment: !1,
                        ghost: !1,
                        grid: !1,
                        handles: "e,s,se",
                        helper: !1,
                        maxHeight: null,
                        maxWidth: null,
                        minHeight: 10,
                        minWidth: 10,
                        zIndex: 90,
                        resize: null,
                        start: null,
                        stop: null
                    },
                    _num: function(t) {
                        return parseFloat(t) || 0
                    },
                    _isNumber: function(t) {
                        return !isNaN(parseFloat(t))
                    },
                    _hasScroll: function(e, i) {
                        if ("hidden" === t(e).css("overflow")) return !1;
                        var s = i && "left" === i ? "scrollLeft" : "scrollTop",
                            n = !1;
                        return e[s] > 0 || (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
                    },
                    _create: function() {
                        var e, i = this.options,
                            s = this;
                        this._addClass("ui-resizable"), t.extend(this, {
                            _aspectRatio: !!i.aspectRatio,
                            aspectRatio: i.aspectRatio,
                            originalElement: this.element,
                            _proportionallyResizeElements: [],
                            _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
                        }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                            position: this.element.css("position"),
                            width: this.element.outerWidth(),
                            height: this.element.outerHeight(),
                            top: this.element.css("top"),
                            left: this.element.css("left")
                        })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = {
                            marginTop: this.originalElement.css("marginTop"),
                            marginRight: this.originalElement.css("marginRight"),
                            marginBottom: this.originalElement.css("marginBottom"),
                            marginLeft: this.originalElement.css("marginLeft")
                        }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                            position: "static",
                            zoom: 1,
                            display: "block"
                        })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", (function() {
                            i.disabled || (s._removeClass("ui-resizable-autohide"), s._handles.show())
                        })).on("mouseleave", (function() {
                            i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"), s._handles.hide())
                        })), this._mouseInit()
                    },
                    _destroy: function() {
                        this._mouseDestroy();
                        var e, i = function(e) {
                            t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
                        };
                        return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                            position: e.css("position"),
                            width: e.outerWidth(),
                            height: e.outerHeight(),
                            top: e.css("top"),
                            left: e.css("left")
                        }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
                    },
                    _setOption: function(t, e) {
                        switch (this._super(t, e), t) {
                            case "handles":
                                this._removeHandles(), this._setupHandles()
                        }
                    },
                    _setupHandles: function() {
                        var e, i, s, n, o, r = this.options,
                            a = this;
                        if (this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {
                                n: ".ui-resizable-n",
                                e: ".ui-resizable-e",
                                s: ".ui-resizable-s",
                                w: ".ui-resizable-w",
                                se: ".ui-resizable-se",
                                sw: ".ui-resizable-sw",
                                ne: ".ui-resizable-ne",
                                nw: ".ui-resizable-nw"
                            } : "e,s,se"), this._handles = t(), this.handles.constructor === String)
                            for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), s = this.handles.split(","), this.handles = {}, i = 0; i < s.length; i++) n = "ui-resizable-" + (e = t.trim(s[i])), o = t("<div>"), this._addClass(o, "ui-resizable-handle " + n), o.css({
                                zIndex: r.zIndex
                            }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
                        this._renderAxis = function(e) {
                            var i, s, n, o;
                            for (i in e = e || this.element, this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {
                                mousedown: a._mouseDown
                            })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
                        }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", (function() {
                            a.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = o && o[1] ? o[1] : "se")
                        })), r.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
                    },
                    _removeHandles: function() {
                        this._handles.remove()
                    },
                    _mouseCapture: function(e) {
                        var i, s, n = !1;
                        for (i in this.handles)((s = t(this.handles[i])[0]) === e.target || t.contains(s, e.target)) && (n = !0);
                        return !this.options.disabled && n
                    },
                    _mouseStart: function(e) {
                        var i, s, n, o = this.options,
                            r = this.element;
                        return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, s += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                            left: i,
                            top: s
                        }, this.size = this._helper ? {
                            width: this.helper.width(),
                            height: this.helper.height()
                        } : {
                            width: r.width(),
                            height: r.height()
                        }, this.originalSize = this._helper ? {
                            width: r.outerWidth(),
                            height: r.outerHeight()
                        } : {
                            width: r.width(),
                            height: r.height()
                        }, this.sizeDiff = {
                            width: r.outerWidth() - r.width(),
                            height: r.outerHeight() - r.height()
                        }, this.originalPosition = {
                            left: i,
                            top: s
                        }, this.originalMousePosition = {
                            left: e.pageX,
                            top: e.pageY
                        }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
                    },
                    _mouseDrag: function(e) {
                        var i, s, n = this.originalMousePosition,
                            o = this.axis,
                            r = e.pageX - n.left || 0,
                            a = e.pageY - n.top || 0,
                            l = this._change[o];
                        return this._updatePrevProperties(), !!l && (i = l.apply(this, [e, r, a]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1)
                    },
                    _mouseStop: function(e) {
                        this.resizing = !1;
                        var i, s, n, o, r, a, l, h = this.options,
                            c = this;
                        return this._helper && (n = (s = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = s ? 0 : c.sizeDiff.width, r = {
                            width: c.helper.width() - o,
                            height: c.helper.height() - n
                        }, a = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, l = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null, h.animate || this.element.css(t.extend(r, {
                            top: l,
                            left: a
                        })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !h.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
                    },
                    _updatePrevProperties: function() {
                        this.prevPosition = {
                            top: this.position.top,
                            left: this.position.left
                        }, this.prevSize = {
                            width: this.size.width,
                            height: this.size.height
                        }
                    },
                    _applyChanges: function() {
                        var t = {};
                        return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
                    },
                    _updateVirtualBoundaries: function(t) {
                        var e, i, s, n, o, r = this.options;
                        o = {
                            minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0,
                            maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : 1 / 0,
                            minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0,
                            maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : 1 / 0
                        }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), i < o.maxWidth && (o.maxWidth = i), n < o.maxHeight && (o.maxHeight = n)), this._vBoundaries = o
                    },
                    _updateCache: function(t) {
                        this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
                    },
                    _updateRatio: function(t) {
                        var e = this.position,
                            i = this.size,
                            s = this.axis;
                        return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
                    },
                    _respectSize: function(t) {
                        var e = this._vBoundaries,
                            i = this.axis,
                            s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                            n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                            o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                            r = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                            a = this.originalPosition.left + this.originalSize.width,
                            l = this.originalPosition.top + this.originalSize.height,
                            h = /sw|nw|w/.test(i),
                            c = /nw|ne|n/.test(i);
                        return o && (t.width = e.minWidth), r && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && h && (t.left = a - e.minWidth), s && h && (t.left = a - e.maxWidth), r && c && (t.top = l - e.minHeight), n && c && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
                    },
                    _getPaddingPlusBorderDimensions: function(t) {
                        for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; e < 4; e++) i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(n[e]) || 0;
                        return {
                            height: i[0] + i[2],
                            width: i[1] + i[3]
                        }
                    },
                    _proportionallyResize: function() {
                        if (this._proportionallyResizeElements.length)
                            for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                                height: i.height() - this.outerDimensions.height || 0,
                                width: i.width() - this.outerDimensions.width || 0
                            })
                    },
                    _renderProxy: function() {
                        var e = this.element,
                            i = this.options;
                        this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
                            width: this.element.outerWidth(),
                            height: this.element.outerHeight(),
                            position: "absolute",
                            left: this.elementOffset.left + "px",
                            top: this.elementOffset.top + "px",
                            zIndex: ++i.zIndex
                        }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
                    },
                    _change: {
                        e: function(t, e) {
                            return {
                                width: this.originalSize.width + e
                            }
                        },
                        w: function(t, e) {
                            var i = this.originalSize;
                            return {
                                left: this.originalPosition.left + e,
                                width: i.width - e
                            }
                        },
                        n: function(t, e, i) {
                            var s = this.originalSize;
                            return {
                                top: this.originalPosition.top + i,
                                height: s.height - i
                            }
                        },
                        s: function(t, e, i) {
                            return {
                                height: this.originalSize.height + i
                            }
                        },
                        se: function(e, i, s) {
                            return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
                        },
                        sw: function(e, i, s) {
                            return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
                        },
                        ne: function(e, i, s) {
                            return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
                        },
                        nw: function(e, i, s) {
                            return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
                        }
                    },
                    _propagate: function(e, i) {
                        t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
                    },
                    plugins: {},
                    ui: function() {
                        return {
                            originalElement: this.originalElement,
                            element: this.element,
                            helper: this.helper,
                            position: this.position,
                            size: this.size,
                            originalSize: this.originalSize,
                            originalPosition: this.originalPosition
                        }
                    }
                }), t.ui.plugin.add("resizable", "animate", {
                    stop: function(e) {
                        var i = t(this).resizable("instance"),
                            s = i.options,
                            n = i._proportionallyResizeElements,
                            o = n.length && /textarea/i.test(n[0].nodeName),
                            r = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
                            a = o ? 0 : i.sizeDiff.width,
                            l = {
                                width: i.size.width - a,
                                height: i.size.height - r
                            },
                            h = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                            c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
                        i.element.animate(t.extend(l, c && h ? {
                            top: c,
                            left: h
                        } : {}), {
                            duration: s.animateDuration,
                            easing: s.animateEasing,
                            step: function() {
                                var s = {
                                    width: parseFloat(i.element.css("width")),
                                    height: parseFloat(i.element.css("height")),
                                    top: parseFloat(i.element.css("top")),
                                    left: parseFloat(i.element.css("left"))
                                };
                                n && n.length && t(n[0]).css({
                                    width: s.width,
                                    height: s.height
                                }), i._updateCache(s), i._propagate("resize", e)
                            }
                        })
                    }
                }), t.ui.plugin.add("resizable", "containment", {
                    start: function() {
                        var e, i, s, n, o, r, a, l = t(this).resizable("instance"),
                            h = l.options,
                            c = l.element,
                            u = h.containment,
                            p = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
                        p && (l.containerElement = t(p), /document/.test(u) || u === document ? (l.containerOffset = {
                            left: 0,
                            top: 0
                        }, l.containerPosition = {
                            left: 0,
                            top: 0
                        }, l.parentData = {
                            element: t(document),
                            left: 0,
                            top: 0,
                            width: t(document).width(),
                            height: t(document).height() || document.body.parentNode.scrollHeight
                        }) : (e = t(p), i = [], t(["Top", "Right", "Left", "Bottom"]).each((function(t, s) {
                            i[t] = l._num(e.css("padding" + s))
                        })), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {
                            height: e.innerHeight() - i[3],
                            width: e.innerWidth() - i[1]
                        }, s = l.containerOffset, n = l.containerSize.height, o = l.containerSize.width, r = l._hasScroll(p, "left") ? p.scrollWidth : o, a = l._hasScroll(p) ? p.scrollHeight : n, l.parentData = {
                            element: p,
                            left: s.left,
                            top: s.top,
                            width: r,
                            height: a
                        }))
                    },
                    resize: function(e) {
                        var i, s, n, o, r = t(this).resizable("instance"),
                            a = r.options,
                            l = r.containerOffset,
                            h = r.position,
                            c = r._aspectRatio || e.shiftKey,
                            u = {
                                top: 0,
                                left: 0
                            },
                            p = r.containerElement,
                            d = !0;
                        p[0] !== document && /static/.test(p.css("position")) && (u = l), h.left < (r._helper ? l.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - l.left : r.position.left - u.left), c && (r.size.height = r.size.width / r.aspectRatio, d = !1), r.position.left = a.helper ? l.left : 0), h.top < (r._helper ? l.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - l.top : r.position.top), c && (r.size.width = r.size.height * r.aspectRatio, d = !1), r.position.top = r._helper ? l.top : 0), n = r.containerElement.get(0) === r.element.parent().get(0), o = /relative|absolute/.test(r.containerElement.css("position")), n && o ? (r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top) : (r.offset.left = r.element.offset().left, r.offset.top = r.element.offset().top), i = Math.abs(r.sizeDiff.width + (r._helper ? r.offset.left - u.left : r.offset.left - l.left)), s = Math.abs(r.sizeDiff.height + (r._helper ? r.offset.top - u.top : r.offset.top - l.top)), i + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - i, c && (r.size.height = r.size.width / r.aspectRatio, d = !1)), s + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - s, c && (r.size.width = r.size.height * r.aspectRatio, d = !1)), d || (r.position.left = r.prevPosition.left, r.position.top = r.prevPosition.top, r.size.width = r.prevSize.width, r.size.height = r.prevSize.height)
                    },
                    stop: function() {
                        var e = t(this).resizable("instance"),
                            i = e.options,
                            s = e.containerOffset,
                            n = e.containerPosition,
                            o = e.containerElement,
                            r = t(e.helper),
                            a = r.offset(),
                            l = r.outerWidth() - e.sizeDiff.width,
                            h = r.outerHeight() - e.sizeDiff.height;
                        e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                            left: a.left - n.left - s.left,
                            width: l,
                            height: h
                        }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                            left: a.left - n.left - s.left,
                            width: l,
                            height: h
                        })
                    }
                }), t.ui.plugin.add("resizable", "alsoResize", {
                    start: function() {
                        var e = t(this).resizable("instance").options;
                        t(e.alsoResize).each((function() {
                            var e = t(this);
                            e.data("ui-resizable-alsoresize", {
                                width: parseFloat(e.width()),
                                height: parseFloat(e.height()),
                                left: parseFloat(e.css("left")),
                                top: parseFloat(e.css("top"))
                            })
                        }))
                    },
                    resize: function(e, i) {
                        var s = t(this).resizable("instance"),
                            n = s.options,
                            o = s.originalSize,
                            r = s.originalPosition,
                            a = {
                                height: s.size.height - o.height || 0,
                                width: s.size.width - o.width || 0,
                                top: s.position.top - r.top || 0,
                                left: s.position.left - r.left || 0
                            };
                        t(n.alsoResize).each((function() {
                            var e = t(this),
                                s = t(this).data("ui-resizable-alsoresize"),
                                n = {},
                                o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                            t.each(o, (function(t, e) {
                                var i = (s[e] || 0) + (a[e] || 0);
                                i && i >= 0 && (n[e] = i || null)
                            })), e.css(n)
                        }))
                    },
                    stop: function() {
                        t(this).removeData("ui-resizable-alsoresize")
                    }
                }), t.ui.plugin.add("resizable", "ghost", {
                    start: function() {
                        var e = t(this).resizable("instance"),
                            i = e.size;
                        e.ghost = e.originalElement.clone(), e.ghost.css({
                            opacity: .25,
                            display: "block",
                            position: "relative",
                            height: i.height,
                            width: i.width,
                            margin: 0,
                            left: 0,
                            top: 0
                        }), e._addClass(e.ghost, "ui-resizable-ghost"), !1 !== t.uiBackCompat && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
                    },
                    resize: function() {
                        var e = t(this).resizable("instance");
                        e.ghost && e.ghost.css({
                            position: "relative",
                            height: e.size.height,
                            width: e.size.width
                        })
                    },
                    stop: function() {
                        var e = t(this).resizable("instance");
                        e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
                    }
                }), t.ui.plugin.add("resizable", "grid", {
                    resize: function() {
                        var e, i = t(this).resizable("instance"),
                            s = i.options,
                            n = i.size,
                            o = i.originalSize,
                            r = i.originalPosition,
                            a = i.axis,
                            l = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
                            h = l[0] || 1,
                            c = l[1] || 1,
                            u = Math.round((n.width - o.width) / h) * h,
                            p = Math.round((n.height - o.height) / c) * c,
                            d = o.width + u,
                            f = o.height + p,
                            m = s.maxWidth && s.maxWidth < d,
                            g = s.maxHeight && s.maxHeight < f,
                            v = s.minWidth && s.minWidth > d,
                            _ = s.minHeight && s.minHeight > f;
                        s.grid = l, v && (d += h), _ && (f += c), m && (d -= h), g && (f -= c), /^(se|s|e)$/.test(a) ? (i.size.width = d, i.size.height = f) : /^(ne)$/.test(a) ? (i.size.width = d, i.size.height = f, i.position.top = r.top - p) : /^(sw)$/.test(a) ? (i.size.width = d, i.size.height = f, i.position.left = r.left - u) : ((f - c <= 0 || d - h <= 0) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = r.top - p) : (f = c - e.height, i.size.height = f, i.position.top = r.top + o.height - f), d - h > 0 ? (i.size.width = d, i.position.left = r.left - u) : (d = h - e.width, i.size.width = d, i.position.left = r.left + o.width - d))
                    }
                }), t.ui.resizable, t.widget("ui.sortable", t.ui.mouse, {
                    version: "1.12.0",
                    widgetEventPrefix: "sort",
                    ready: !1,
                    options: {
                        appendTo: "parent",
                        axis: !1,
                        connectWith: !1,
                        containment: !1,
                        cursor: "auto",
                        cursorAt: !1,
                        dropOnEmpty: !0,
                        forcePlaceholderSize: !1,
                        forceHelperSize: !1,
                        grid: !1,
                        handle: !1,
                        helper: "original",
                        items: "> *",
                        opacity: !1,
                        placeholder: !1,
                        revert: !1,
                        scroll: !0,
                        scrollSensitivity: 20,
                        scrollSpeed: 20,
                        scope: "default",
                        tolerance: "intersect",
                        zIndex: 1e3,
                        activate: null,
                        beforeStop: null,
                        change: null,
                        deactivate: null,
                        out: null,
                        over: null,
                        receive: null,
                        remove: null,
                        sort: null,
                        start: null,
                        stop: null,
                        update: null
                    },
                    _isOverAxis: function(t, e, i) {
                        return t >= e && t < e + i
                    },
                    _isFloating: function(t) {
                        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
                    },
                    _create: function() {
                        this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
                    },
                    _setOption: function(t, e) {
                        this._super(t, e), "handle" === t && this._setHandleClassName()
                    },
                    _setHandleClassName: function() {
                        var e = this;
                        this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, (function() {
                            e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
                        }))
                    },
                    _destroy: function() {
                        this._mouseDestroy();
                        for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
                        return this
                    },
                    _mouseCapture: function(e, i) {
                        var s = null,
                            n = !1,
                            o = this;
                        return !(this.reverting || this.options.disabled || "static" === this.options.type || (this._refreshItems(e), t(e.target).parents().each((function() {
                            if (t.data(this, o.widgetName + "-item") === o) return s = t(this), !1
                        })), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), !s || this.options.handle && !i && (t(this.options.handle, s).find("*").addBack().each((function() {
                            this === e.target && (n = !0)
                        })), !n) || (this.currentItem = s, this._removeCurrentsFromItems(), 0)))
                    },
                    _mouseStart: function(e, i, s) {
                        var n, o, r = this.options;
                        if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                                top: this.offset.top - this.margins.top,
                                left: this.offset.left - this.margins.left
                            }, t.extend(this.offset, {
                                click: {
                                    left: e.pageX - this.offset.left,
                                    top: e.pageY - this.offset.top
                                },
                                parent: this._getParentOffset(),
                                relative: this._getRelativeOffset()
                            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = {
                                prev: this.currentItem.prev()[0],
                                parent: this.currentItem.parent()[0]
                            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), r.cursor && "auto" !== r.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", r.cursor), this.storedStylesheet = t("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(o)), r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
                            for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
                        return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
                    },
                    _mouseDrag: function(e) {
                        var i, s, n, o, r = this.options,
                            a = !1;
                        for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + r.scrollSpeed : e.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - r.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + r.scrollSpeed : e.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (e.pageY - this.document.scrollTop() < r.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - r.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < r.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + r.scrollSpeed)), e.pageX - this.document.scrollLeft() < r.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - r.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < r.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + r.scrollSpeed))), !1 !== a && t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                            if (n = (s = this.items[i]).item[0], (o = this._intersectsWithPointer(s)) && s.instance === this.currentContainer && !(n === this.currentItem[0] || this.placeholder[1 === o ? "next" : "prev"]()[0] === n || t.contains(this.placeholder[0], n) || "semi-dynamic" === this.options.type && t.contains(this.element[0], n))) {
                                if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                                this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                                break
                            }
                        return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
                    },
                    _mouseStop: function(e, i) {
                        if (e) {
                            if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                                var s = this,
                                    n = this.placeholder.offset(),
                                    o = this.options.axis,
                                    r = {};
                                o && "x" !== o || (r.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (r.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, (function() {
                                    s._clear(e)
                                }))
                            } else this._clear(e, i);
                            return !1
                        }
                    },
                    cancel: function() {
                        if (this.dragging) {
                            this._mouseUp({
                                target: null
                            }), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                            for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
                        }
                        return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                            helper: null,
                            dragging: !1,
                            reverting: !1,
                            _noFinalSort: null
                        }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
                    },
                    serialize: function(e) {
                        var i = this._getItemsAsjQuery(e && e.connected),
                            s = [];
                        return e = e || {}, t(i).each((function() {
                            var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                            i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
                        })), !s.length && e.key && s.push(e.key + "="), s.join("&")
                    },
                    toArray: function(e) {
                        var i = this._getItemsAsjQuery(e && e.connected),
                            s = [];
                        return e = e || {}, i.each((function() {
                            s.push(t(e.item || this).attr(e.attribute || "id") || "")
                        })), s
                    },
                    _intersectsWith: function(t) {
                        var e = this.positionAbs.left,
                            i = e + this.helperProportions.width,
                            s = this.positionAbs.top,
                            n = s + this.helperProportions.height,
                            o = t.left,
                            r = o + t.width,
                            a = t.top,
                            l = a + t.height,
                            h = this.offset.click.top,
                            c = this.offset.click.left,
                            u = "x" === this.options.axis || s + h > a && s + h < l,
                            p = "y" === this.options.axis || e + c > o && e + c < r,
                            d = u && p;
                        return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? d : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < r && a < s + this.helperProportions.height / 2 && n - this.helperProportions.height / 2 < l
                    },
                    _intersectsWithPointer: function(t) {
                        var e, i, s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                            n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
                        return !(!s || !n) && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
                    },
                    _intersectsWithSides: function(t) {
                        var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                            i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                            s = this._getDragVerticalDirection(),
                            n = this._getDragHorizontalDirection();
                        return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e)
                    },
                    _getDragVerticalDirection: function() {
                        var t = this.positionAbs.top - this.lastPositionAbs.top;
                        return 0 !== t && (t > 0 ? "down" : "up")
                    },
                    _getDragHorizontalDirection: function() {
                        var t = this.positionAbs.left - this.lastPositionAbs.left;
                        return 0 !== t && (t > 0 ? "right" : "left")
                    },
                    refresh: function(t) {
                        return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
                    },
                    _connectWith: function() {
                        var t = this.options;
                        return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
                    },
                    _getItemsAsjQuery: function(e) {
                        var i, s, n, o, r = [],
                            a = [],
                            l = this._connectWith();
                        if (l && e)
                            for (i = l.length - 1; i >= 0; i--)
                                for (s = (n = t(l[i], this.document[0])).length - 1; s >= 0; s--)(o = t.data(n[s], this.widgetFullName)) && o !== this && !o.options.disabled && a.push([t.isFunction(o.options.items) ? o.options.items.call(o.element) : t(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);

                        function h() {
                            r.push(this)
                        }
                        for (a.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                                options: this.options,
                                item: this.currentItem
                            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = a.length - 1; i >= 0; i--) a[i][0].each(h);
                        return t(r)
                    },
                    _removeCurrentsFromItems: function() {
                        var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
                        this.items = t.grep(this.items, (function(t) {
                            for (var i = 0; i < e.length; i++)
                                if (e[i] === t.item[0]) return !1;
                            return !0
                        }))
                    },
                    _refreshItems: function(e) {
                        this.items = [], this.containers = [this];
                        var i, s, n, o, r, a, l, h, c = this.items,
                            u = [
                                [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                                    item: this.currentItem
                                }) : t(this.options.items, this.element), this]
                            ],
                            p = this._connectWith();
                        if (p && this.ready)
                            for (i = p.length - 1; i >= 0; i--)
                                for (s = (n = t(p[i], this.document[0])).length - 1; s >= 0; s--)(o = t.data(n[s], this.widgetFullName)) && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                                    item: this.currentItem
                                }) : t(o.options.items, o.element), o]), this.containers.push(o));
                        for (i = u.length - 1; i >= 0; i--)
                            for (r = u[i][1], s = 0, h = (a = u[i][0]).length; s < h; s++)(l = t(a[s])).data(this.widgetName + "-item", r), c.push({
                                item: l,
                                instance: r,
                                width: 0,
                                height: 0,
                                left: 0,
                                top: 0
                            })
                    },
                    refreshPositions: function(e) {
                        var i, s, n, o;
                        for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), i = this.items.length - 1; i >= 0; i--)(s = this.items[i]).instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
                        if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                        else
                            for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                        return this
                    },
                    _createPlaceholder: function(e) {
                        var i, s = (e = e || this).options;
                        s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                            element: function() {
                                var s = e.currentItem[0].nodeName.toLowerCase(),
                                    n = t("<" + s + ">", e.document[0]);
                                return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"), "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
                            },
                            update: function(t, n) {
                                i && !s.forcePlaceholderSize || (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                            }
                        }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
                    },
                    _createTrPlaceholder: function(e, i) {
                        var s = this;
                        e.children().each((function() {
                            t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
                        }))
                    },
                    _contactContainers: function(e) {
                        var i, s, n, o, r, a, l, h, c, u, p = null,
                            d = null;
                        for (i = this.containers.length - 1; i >= 0; i--)
                            if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                                if (this._intersectsWith(this.containers[i].containerCache)) {
                                    if (p && t.contains(this.containers[i].element[0], p.element[0])) continue;
                                    p = this.containers[i], d = i
                                } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
                        if (p)
                            if (1 === this.containers.length) this.containers[d].containerCache.over || (this.containers[d]._trigger("over", e, this._uiHash(this)), this.containers[d].containerCache.over = 1);
                            else {
                                for (n = 1e4, o = null, r = (c = p.floating || this._isFloating(this.currentItem)) ? "left" : "top", a = c ? "width" : "height", u = c ? "pageX" : "pageY", s = this.items.length - 1; s >= 0; s--) t.contains(this.containers[d].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (l = this.items[s].item.offset()[r], h = !1, e[u] - l > this.items[s][a] / 2 && (h = !0), Math.abs(e[u] - l) < n && (n = Math.abs(e[u] - l), o = this.items[s], this.direction = h ? "up" : "down"));
                                if (!o && !this.options.dropOnEmpty) return;
                                if (this.currentContainer === this.containers[d]) return void(this.currentContainer.containerCache.over || (this.containers[d]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                                o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[d].element, !0), this._trigger("change", e, this._uiHash()), this.containers[d]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[d], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[d]._trigger("over", e, this._uiHash(this)), this.containers[d].containerCache.over = 1
                            }
                    },
                    _createHelper: function(e) {
                        var i = this.options,
                            s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
                        return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
                            width: this.currentItem[0].style.width,
                            height: this.currentItem[0].style.height,
                            position: this.currentItem.css("position"),
                            top: this.currentItem.css("top"),
                            left: this.currentItem.css("left")
                        }), s[0].style.width && !i.forceHelperSize || s.width(this.currentItem.width()), s[0].style.height && !i.forceHelperSize || s.height(this.currentItem.height()), s
                    },
                    _adjustOffsetFromHelper: function(e) {
                        "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                            left: +e[0],
                            top: +e[1] || 0
                        }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
                    },
                    _getParentOffset: function() {
                        this.offsetParent = this.helper.offsetParent();
                        var e = this.offsetParent.offset();
                        return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                            top: 0,
                            left: 0
                        }), {
                            top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                            left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                        }
                    },
                    _getRelativeOffset: function() {
                        if ("relative" === this.cssPosition) {
                            var t = this.currentItem.position();
                            return {
                                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                            }
                        }
                        return {
                            top: 0,
                            left: 0
                        }
                    },
                    _cacheMargins: function() {
                        this.margins = {
                            left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                            top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                        }
                    },
                    _cacheHelperProportions: function() {
                        this.helperProportions = {
                            width: this.helper.outerWidth(),
                            height: this.helper.outerHeight()
                        }
                    },
                    _setContainment: function() {
                        var e, i, s, n = this.options;
                        "parent" === n.containment && (n.containment = this.helper[0].parentNode), "document" !== n.containment && "window" !== n.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
                    },
                    _convertPositionTo: function(e, i) {
                        i || (i = this.position);
                        var s = "absolute" === e ? 1 : -1,
                            n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                            o = /(html|body)/i.test(n[0].tagName);
                        return {
                            top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
                            left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
                        }
                    },
                    _generatePosition: function(e) {
                        var i, s, n = this.options,
                            o = e.pageX,
                            r = e.pageY,
                            a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                            l = /(html|body)/i.test(a[0].tagName);
                        return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((r - this.originalPageY) / n.grid[1]) * n.grid[1], r = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
                            top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                            left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
                        }
                    },
                    _rearrange: function(t, e, i, s) {
                        i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                        var n = this.counter;
                        this._delay((function() {
                            n === this.counter && this.refreshPositions(!s)
                        }))
                    },
                    _clear: function(t, e) {
                        this.reverting = !1;
                        var i, s = [];
                        if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                            for (i in this._storedCSS) "auto" !== this._storedCSS[i] && "static" !== this._storedCSS[i] || (this._storedCSS[i] = "");
                            this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
                        } else this.currentItem.show();

                        function n(t, e, i) {
                            return function(s) {
                                i._trigger(t, s, e._uiHash(e))
                            }
                        }
                        for (this.fromOutside && !e && s.push((function(t) {
                                this._trigger("receive", t, this._uiHash(this.fromOutside))
                            })), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push((function(t) {
                                this._trigger("update", t, this._uiHash())
                            })), this !== this.currentContainer && (e || (s.push((function(t) {
                                this._trigger("remove", t, this._uiHash())
                            })), s.push(function(t) {
                                return function(e) {
                                    t._trigger("receive", e, this._uiHash(this))
                                }
                            }.call(this, this.currentContainer)), s.push(function(t) {
                                return function(e) {
                                    t._trigger("update", e, this._uiHash(this))
                                }
                            }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) e || s.push(n("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (s.push(n("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
                        if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                            for (i = 0; i < s.length; i++) s[i].call(this, t);
                            this._trigger("stop", t, this._uiHash())
                        }
                        return this.fromOutside = !1, !this.cancelHelperRemoval
                    },
                    _trigger: function() {
                        !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
                    },
                    _uiHash: function(e) {
                        var i = e || this;
                        return {
                            helper: i.helper,
                            placeholder: i.placeholder || t([]),
                            position: i.position,
                            originalPosition: i.originalPosition,
                            offset: i.positionAbs,
                            item: i.currentItem,
                            sender: e ? e.element : null
                        }
                    }
                });
                var u = /ui-corner-([a-z]){2,6}/g;

                function p(t) {
                    return function() {
                        var e = this.element.val();
                        t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
                    }
                }
                t.widget("ui.controlgroup", {
                    version: "1.12.0",
                    defaultElement: "<div>",
                    options: {
                        direction: "horizontal",
                        disabled: null,
                        onlyVisible: !0,
                        items: {
                            button: "input[type=button], input[type=submit], input[type=reset], button, a",
                            controlgroupLabel: ".ui-controlgroup-label",
                            checkboxradio: "input[type='checkbox'], input[type='radio']",
                            selectmenu: "select",
                            spinner: ".ui-spinner-input"
                        }
                    },
                    _create: function() {
                        this._enhance()
                    },
                    _enhance: function() {
                        this.element.attr("role", "toolbar"), this.refresh()
                    },
                    _destroy: function() {
                        this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
                    },
                    _initWidgets: function() {
                        var e = this,
                            i = [];
                        t.each(this.options.items, (function(s, n) {
                            var o, r = {};
                            if (n) return "controlgroupLabel" === s ? ((o = e.element.find(n)).each((function() {
                                var e = t(this);
                                e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                            })), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), void(i = i.concat(o.get()))) : void(t.fn[s] && (e["_" + s + "Options"] && (r = e["_" + s + "Options"]("middle")), e.element.find(n).each((function() {
                                var n = t(this),
                                    o = n[s]("instance"),
                                    a = t.widget.extend({}, r);
                                if ("button" !== s || !n.parent(".ui-spinner").length) {
                                    o || (o = n[s]()[s]("instance")), o && (a.classes = e._resolveClassesValues(a.classes, o)), n[s](a);
                                    var l = n[s]("widget");
                                    t.data(l[0], "ui-controlgroup-data", o || n[s]("instance")), i.push(l[0])
                                }
                            }))))
                        })), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
                    },
                    _callChildMethod: function(e) {
                        this.childWidgets.each((function() {
                            var i = t(this).data("ui-controlgroup-data");
                            i && i[e] && i[e]()
                        }))
                    },
                    _updateCornerClass: function(t, e) {
                        var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",
                            s = this._buildSimpleOptions(e, "label").classes.label;
                        this._removeClass(t, null, i), this._addClass(t, null, s)
                    },
                    _buildSimpleOptions: function(t, e) {
                        var i = "vertical" === this.options.direction,
                            s = {
                                classes: {}
                            };
                        return s.classes[e] = {
                            middle: "",
                            first: "ui-corner-" + (i ? "top" : "left"),
                            last: "ui-corner-" + (i ? "bottom" : "right"),
                            only: "ui-corner-all"
                        }[t], s
                    },
                    _spinnerOptions: function(t) {
                        var e = this._buildSimpleOptions(t, "ui-spinner");
                        return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
                    },
                    _buttonOptions: function(t) {
                        return this._buildSimpleOptions(t, "ui-button")
                    },
                    _checkboxradioOptions: function(t) {
                        return this._buildSimpleOptions(t, "ui-checkboxradio-label")
                    },
                    _selectmenuOptions: function(t) {
                        var e = "vertical" === this.options.direction;
                        return {
                            width: !!e && "auto",
                            classes: {
                                middle: {
                                    "ui-selectmenu-button-open": "",
                                    "ui-selectmenu-button-closed": ""
                                },
                                first: {
                                    "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                                    "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                                },
                                last: {
                                    "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                                    "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                                },
                                only: {
                                    "ui-selectmenu-button-open": "ui-corner-top",
                                    "ui-selectmenu-button-closed": "ui-corner-all"
                                }
                            }[t]
                        }
                    },
                    _resolveClassesValues: function(e, i) {
                        var s = {};
                        return t.each(e, (function(t) {
                            var n = i.options.classes[t] || "";
                            n = n.replace(u, "").trim(), s[t] = (n + " " + e[t]).replace(/\s+/g, " ")
                        })), s
                    },
                    _setOption: function(t, e) {
                        "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" !== t ? this.refresh() : this._callChildMethod(e ? "disable" : "enable")
                    },
                    refresh: function() {
                        var e, i = this;
                        this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], (function(t, s) {
                            var n = e[s]().data("ui-controlgroup-data");
                            if (n && i["_" + n.widgetName + "Options"]) {
                                var o = i["_" + n.widgetName + "Options"](1 === e.length ? "only" : s);
                                o.classes = i._resolveClassesValues(o.classes, n), n.element[n.widgetName](o)
                            } else i._updateCornerClass(e[s](), s)
                        })), this._callChildMethod("refresh"))
                    }
                }), t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
                    version: "1.12.0",
                    options: {
                        disabled: null,
                        label: null,
                        icon: !0,
                        classes: {
                            "ui-checkboxradio-label": "ui-corner-all",
                            "ui-checkboxradio-icon": "ui-corner-all"
                        }
                    },
                    _getCreateOptions: function() {
                        var e, i, s = this,
                            n = this._super() || {};
                        return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element).each((function() {
                            s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML
                        })), this.originalLabel && (n.label = this.originalLabel), null != (e = this.element[0].disabled) && (n.disabled = e), n
                    },
                    _create: function() {
                        var t = this.element[0].checked;
                        this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                            change: "_toggleClasses",
                            focus: function() {
                                this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                            },
                            blur: function() {
                                this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                            }
                        })
                    },
                    _readType: function() {
                        var e = this.element[0].nodeName.toLowerCase();
                        this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
                    },
                    _enhance: function() {
                        this._updateIcon(this.element[0].checked)
                    },
                    widget: function() {
                        return this.label
                    },
                    _getRadioGroup: function() {
                        var e = this.element[0].name,
                            i = "input[name='" + t.ui.escapeSelector(e) + "']";
                        return e ? (this.form.length ? t(this.form[0].elements).filter(i) : t(i).filter((function() {
                            return 0 === t(this).form().length
                        }))).not(this.element) : t([])
                    },
                    _toggleClasses: function() {
                        var e = this.element[0].checked;
                        this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each((function() {
                            var e = t(this).checkboxradio("instance");
                            e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
                        }))
                    },
                    _destroy: function() {
                        this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
                    },
                    _setOption: function(t, e) {
                        if ("label" !== t || e) {
                            if (this._super(t, e), "disabled" === t) return this._toggleClass(this.label, null, "ui-state-disabled", e), void(this.element[0].disabled = e);
                            this.refresh()
                        }
                    },
                    _updateIcon: function(e) {
                        var i = "ui-icon ui-icon-background ";
                        this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
                    },
                    _updateLabel: function() {
                        this.label.contents().not(this.element.add(this.icon).add(this.iconSpace)).remove(), this.label.append(this.options.label)
                    },
                    refresh: function() {
                        var t = this.element[0].checked,
                            e = this.element[0].disabled;
                        this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({
                            disabled: e
                        })
                    }
                }]), t.ui.checkboxradio, t.widget("ui.button", {
                    version: "1.12.0",
                    defaultElement: "<button>",
                    options: {
                        classes: {
                            "ui-button": "ui-corner-all"
                        },
                        disabled: null,
                        icon: null,
                        iconPosition: "beginning",
                        label: null,
                        showLabel: !0
                    },
                    _getCreateOptions: function() {
                        var t, e = this._super() || {};
                        return this.isInput = this.element.is("input"), null != (t = this.element[0].disabled) && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
                    },
                    _create: function() {
                        !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
                            keyup: function(e) {
                                e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                            }
                        })
                    },
                    _enhance: function() {
                        this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
                    },
                    _updateTooltip: function() {
                        this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
                    },
                    _updateIcon: function(e, i) {
                        var s = "iconPosition" !== e,
                            n = s ? this.options.iconPosition : i,
                            o = "top" === n || "bottom" === n;
                        this.icon ? s && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), s && this._addClass(this.icon, null, i), this._attachIcon(n), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(n))
                    },
                    _destroy: function() {
                        this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
                    },
                    _attachIconSpace: function(t) {
                        this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
                    },
                    _attachIcon: function(t) {
                        this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
                    },
                    _setOptions: function(t) {
                        var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                            i = void 0 === t.icon ? this.options.icon : t.icon;
                        e || i || (t.showLabel = !0), this._super(t)
                    },
                    _setOption: function(t, e) {
                        "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur())
                    },
                    refresh: function() {
                        var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
                        t !== this.options.disabled && this._setOptions({
                            disabled: t
                        }), this._updateTooltip()
                    }
                }), !1 !== t.uiBackCompat && (t.widget("ui.button", t.ui.button, {
                    options: {
                        text: !0,
                        icons: {
                            primary: null,
                            secondary: null
                        }
                    },
                    _create: function() {
                        this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
                    },
                    _setOption: function(t, e) {
                        "text" !== t ? ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), this._superApply(arguments)) : this._super("showLabel", e)
                    }
                }), t.fn.button = function(e) {
                    return function() {
                        return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
                            icon: !1
                        }) : this.checkboxradio.apply(this, arguments))
                    }
                }(t.fn.button), t.fn.buttonset = function() {
                    return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" === r(arguments[0]) && arguments[0].items && (arguments[0].items = {
                        button: arguments[0].items
                    }), this.controlgroup.apply(this, arguments))
                }), t.ui.button, t.widget("ui.slider", t.ui.mouse, {
                    version: "1.12.0",
                    widgetEventPrefix: "slide",
                    options: {
                        animate: !1,
                        classes: {
                            "ui-slider": "ui-corner-all",
                            "ui-slider-handle": "ui-corner-all",
                            "ui-slider-range": "ui-corner-all ui-widget-header"
                        },
                        distance: 0,
                        max: 100,
                        min: 0,
                        orientation: "horizontal",
                        range: !1,
                        step: 1,
                        value: 0,
                        values: null,
                        change: null,
                        slide: null,
                        start: null,
                        stop: null
                    },
                    numPages: 5,
                    _create: function() {
                        this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
                    },
                    _refresh: function() {
                        this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
                    },
                    _createHandles: function() {
                        var e, i, s = this.options,
                            n = this.element.find(".ui-slider-handle"),
                            o = "<span tabindex='0'></span>",
                            r = [];
                        for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; e < i; e++) r.push(o);
                        this.handles = n.add(t(r.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each((function(e) {
                            t(this).data("ui-slider-handle-index", e)
                        }))
                    },
                    _createRange: function() {
                        var e = this.options;
                        e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                            left: "",
                            bottom: ""
                        })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), "min" !== e.range && "max" !== e.range || this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
                    },
                    _setupEvents: function() {
                        this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
                    },
                    _destroy: function() {
                        this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
                    },
                    _mouseCapture: function(e) {
                        var i, s, n, o, r, a, l, h = this,
                            c = this.options;
                        return !c.disabled && (this.elementSize = {
                            width: this.element.outerWidth(),
                            height: this.element.outerHeight()
                        }, this.elementOffset = this.element.offset(), i = {
                            x: e.pageX,
                            y: e.pageY
                        }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each((function(e) {
                            var i = Math.abs(s - h.values(e));
                            (n > i || n === i && (e === h._lastChangedValue || h.values(e) === c.min)) && (n = i, o = t(this), r = e)
                        })), !1 !== this._start(e, r) && (this._mouseSliding = !0, this._handleIndex = r, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), a = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                            left: 0,
                            top: 0
                        } : {
                            left: e.pageX - a.left - o.width() / 2,
                            top: e.pageY - a.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
                        }, this.handles.hasClass("ui-state-hover") || this._slide(e, r, s), this._animateOff = !0, !0))
                    },
                    _mouseStart: function() {
                        return !0
                    },
                    _mouseDrag: function(t) {
                        var e = {
                                x: t.pageX,
                                y: t.pageY
                            },
                            i = this._normValueFromMouse(e);
                        return this._slide(t, this._handleIndex, i), !1
                    },
                    _mouseStop: function(t) {
                        return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
                    },
                    _detectOrientation: function() {
                        this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
                    },
                    _normValueFromMouse: function(t) {
                        var e, i, s, n, o;
                        return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (s = i / e) > 1 && (s = 1), s < 0 && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
                    },
                    _uiHash: function(t, e, i) {
                        var s = {
                            handle: this.handles[t],
                            handleIndex: t,
                            value: void 0 !== e ? e : this.value()
                        };
                        return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s
                    },
                    _hasMultipleValues: function() {
                        return this.options.values && this.options.values.length
                    },
                    _start: function(t, e) {
                        return this._trigger("start", t, this._uiHash(e))
                    },
                    _slide: function(t, e, i) {
                        var s, n = this.value(),
                            o = this.values();
                        this._hasMultipleValues() && (s = this.values(e ? 0 : 1), n = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(s, i) : Math.max(s, i)), o[e] = i), i !== n && !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i))
                    },
                    _stop: function(t, e) {
                        this._trigger("stop", t, this._uiHash(e))
                    },
                    _change: function(t, e) {
                        this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
                    },
                    value: function(t) {
                        return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
                    },
                    values: function(e, i) {
                        var s, n, o;
                        if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
                        if (!arguments.length) return this._values();
                        if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
                        for (s = this.options.values, n = arguments[0], o = 0; o < s.length; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
                        this._refreshValue()
                    },
                    _setOption: function(e, i) {
                        var s, n = 0;
                        switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {
                            case "orientation":
                                this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                                break;
                            case "value":
                                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                                break;
                            case "values":
                                for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);
                                this._animateOff = !1;
                                break;
                            case "step":
                            case "min":
                            case "max":
                                this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                                break;
                            case "range":
                                this._animateOff = !0, this._refresh(), this._animateOff = !1
                        }
                    },
                    _setOptionDisabled: function(t) {
                        this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
                    },
                    _value: function() {
                        var t = this.options.value;
                        return t = this._trimAlignValue(t)
                    },
                    _values: function(t) {
                        var e, i, s;
                        if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
                        if (this._hasMultipleValues()) {
                            for (i = this.options.values.slice(), s = 0; s < i.length; s += 1) i[s] = this._trimAlignValue(i[s]);
                            return i
                        }
                        return []
                    },
                    _trimAlignValue: function(t) {
                        if (t <= this._valueMin()) return this._valueMin();
                        if (t >= this._valueMax()) return this._valueMax();
                        var e = this.options.step > 0 ? this.options.step : 1,
                            i = (t - this._valueMin()) % e,
                            s = t - i;
                        return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
                    },
                    _calculateNewMax: function() {
                        var t = this.options.max,
                            e = this._valueMin(),
                            i = this.options.step;
                        (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
                    },
                    _precision: function() {
                        var t = this._precisionOf(this.options.step);
                        return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
                    },
                    _precisionOf: function(t) {
                        var e = t.toString(),
                            i = e.indexOf(".");
                        return -1 === i ? 0 : e.length - i - 1
                    },
                    _valueMin: function() {
                        return this.options.min
                    },
                    _valueMax: function() {
                        return this.max
                    },
                    _refreshRange: function(t) {
                        "vertical" === t && this.range.css({
                            width: "",
                            left: ""
                        }), "horizontal" === t && this.range.css({
                            height: "",
                            bottom: ""
                        })
                    },
                    _refreshValue: function() {
                        var e, i, s, n, o, r = this.options.range,
                            a = this.options,
                            l = this,
                            h = !this._animateOff && a.animate,
                            c = {};
                        this._hasMultipleValues() ? this.handles.each((function(s) {
                            i = (l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](c, a.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                                left: i + "%"
                            }, a.animate), 1 === s && l.range[h ? "animate" : "css"]({
                                width: i - e + "%"
                            }, {
                                queue: !1,
                                duration: a.animate
                            })) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                                bottom: i + "%"
                            }, a.animate), 1 === s && l.range[h ? "animate" : "css"]({
                                height: i - e + "%"
                            }, {
                                queue: !1,
                                duration: a.animate
                            }))), e = i
                        })) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? (s - n) / (o - n) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                            width: i + "%"
                        }, a.animate), "max" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                            width: 100 - i + "%"
                        }, a.animate), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                            height: i + "%"
                        }, a.animate), "max" === r && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                            height: 100 - i + "%"
                        }, a.animate))
                    },
                    _handleEvents: {
                        keydown: function(e) {
                            var i, s, n, o = t(e.target).data("ui-slider-handle-index");
                            switch (e.keyCode) {
                                case t.ui.keyCode.HOME:
                                case t.ui.keyCode.END:
                                case t.ui.keyCode.PAGE_UP:
                                case t.ui.keyCode.PAGE_DOWN:
                                case t.ui.keyCode.UP:
                                case t.ui.keyCode.RIGHT:
                                case t.ui.keyCode.DOWN:
                                case t.ui.keyCode.LEFT:
                                    if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), !1 === this._start(e, o))) return
                            }
                            switch (n = this.options.step, i = s = this._hasMultipleValues() ? this.values(o) : this.value(), e.keyCode) {
                                case t.ui.keyCode.HOME:
                                    s = this._valueMin();
                                    break;
                                case t.ui.keyCode.END:
                                    s = this._valueMax();
                                    break;
                                case t.ui.keyCode.PAGE_UP:
                                    s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                                    break;
                                case t.ui.keyCode.PAGE_DOWN:
                                    s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                                    break;
                                case t.ui.keyCode.UP:
                                case t.ui.keyCode.RIGHT:
                                    if (i === this._valueMax()) return;
                                    s = this._trimAlignValue(i + n);
                                    break;
                                case t.ui.keyCode.DOWN:
                                case t.ui.keyCode.LEFT:
                                    if (i === this._valueMin()) return;
                                    s = this._trimAlignValue(i - n)
                            }
                            this._slide(e, o, s)
                        },
                        keyup: function(e) {
                            var i = t(e.target).data("ui-slider-handle-index");
                            this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
                        }
                    }
                }), t.widget("ui.spinner", {
                    version: "1.12.0",
                    defaultElement: "<input>",
                    widgetEventPrefix: "spin",
                    options: {
                        classes: {
                            "ui-spinner": "ui-corner-all",
                            "ui-spinner-down": "ui-corner-br",
                            "ui-spinner-up": "ui-corner-tr"
                        },
                        culture: null,
                        icons: {
                            down: "ui-icon-triangle-1-s",
                            up: "ui-icon-triangle-1-n"
                        },
                        incremental: !0,
                        max: null,
                        min: null,
                        numberFormat: null,
                        page: 10,
                        step: 1,
                        change: null,
                        spin: null,
                        start: null,
                        stop: null
                    },
                    _create: function() {
                        this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                            beforeunload: function() {
                                this.element.removeAttr("autocomplete")
                            }
                        })
                    },
                    _getCreateOptions: function() {
                        var e = this._super(),
                            i = this.element;
                        return t.each(["min", "max", "step"], (function(t, s) {
                            var n = i.attr(s);
                            null != n && n.length && (e[s] = n)
                        })), e
                    },
                    _events: {
                        keydown: function(t) {
                            this._start(t) && this._keydown(t) && t.preventDefault()
                        },
                        keyup: "_stop",
                        focus: function() {
                            this.previous = this.element.val()
                        },
                        blur: function(t) {
                            this.cancelBlur ? delete this.cancelBlur : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t))
                        },
                        mousewheel: function(t, e) {
                            if (e) {
                                if (!this.spinning && !this._start(t)) return !1;
                                this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay((function() {
                                    this.spinning && this._stop(t)
                                }), 100), t.preventDefault()
                            }
                        },
                        "mousedown .ui-spinner-button": function(e) {
                            var i;

                            function s() {
                                this.element[0] === t.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), this.previous = i, this._delay((function() {
                                    this.previous = i
                                })))
                            }
                            i = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), s.call(this), this.cancelBlur = !0, this._delay((function() {
                                delete this.cancelBlur, s.call(this)
                            })), !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
                        },
                        "mouseup .ui-spinner-button": "_stop",
                        "mouseenter .ui-spinner-button": function(e) {
                            if (t(e.currentTarget).hasClass("ui-state-active")) return !1 !== this._start(e) && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
                        },
                        "mouseleave .ui-spinner-button": "_stop"
                    },
                    _enhance: function() {
                        this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
                    },
                    _draw: function() {
                        this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                            classes: {
                                "ui-button": ""
                            }
                        }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
                            icon: this.options.icons.up,
                            showLabel: !1
                        }), this.buttons.last().button({
                            icon: this.options.icons.down,
                            showLabel: !1
                        }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
                    },
                    _keydown: function(e) {
                        var i = this.options,
                            s = t.ui.keyCode;
                        switch (e.keyCode) {
                            case s.UP:
                                return this._repeat(null, 1, e), !0;
                            case s.DOWN:
                                return this._repeat(null, -1, e), !0;
                            case s.PAGE_UP:
                                return this._repeat(null, i.page, e), !0;
                            case s.PAGE_DOWN:
                                return this._repeat(null, -i.page, e), !0
                        }
                        return !1
                    },
                    _start: function(t) {
                        return !(!this.spinning && !1 === this._trigger("start", t) || (this.counter || (this.counter = 1), this.spinning = !0, 0))
                    },
                    _repeat: function(t, e, i) {
                        t = t || 500, clearTimeout(this.timer), this.timer = this._delay((function() {
                            this._repeat(40, e, i)
                        }), t), this._spin(e * this.options.step, i)
                    },
                    _spin: function(t, e) {
                        var i = this.value() || 0;
                        this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", e, {
                            value: i
                        }) || (this._value(i), this.counter++)
                    },
                    _increment: function(e) {
                        var i = this.options.incremental;
                        return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
                    },
                    _precision: function() {
                        var t = this._precisionOf(this.options.step);
                        return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
                    },
                    _precisionOf: function(t) {
                        var e = t.toString(),
                            i = e.indexOf(".");
                        return -1 === i ? 0 : e.length - i - 1
                    },
                    _adjustValue: function(t) {
                        var e, i, s = this.options;
                        return i = t - (e = null !== s.min ? s.min : 0), t = e + (i = Math.round(i / s.step) * s.step), t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && t < s.min ? s.min : t
                    },
                    _stop: function(t) {
                        this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
                    },
                    _setOption: function(t, e) {
                        var i, s, n;
                        if ("culture" === t || "numberFormat" === t) return i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i));
                        "max" !== t && "min" !== t && "step" !== t || "string" == typeof e && (e = this._parse(e)), "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), this._addClass(s, null, e.up), n = this.buttons.last().find(".ui-icon"), this._removeClass(n, null, this.options.icons.down), this._addClass(n, null, e.down)), this._super(t, e)
                    },
                    _setOptionDisabled: function(t) {
                        this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
                    },
                    _setOptions: p((function(t) {
                        this._super(t)
                    })),
                    _parse: function(t) {
                        return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
                    },
                    _format: function(t) {
                        return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
                    },
                    _refresh: function() {
                        this.element.attr({
                            "aria-valuemin": this.options.min,
                            "aria-valuemax": this.options.max,
                            "aria-valuenow": this._parse(this.element.val())
                        })
                    },
                    isValid: function() {
                        var t = this.value();
                        return null !== t && t === this._adjustValue(t)
                    },
                    _value: function(t, e) {
                        var i;
                        "" !== t && null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i)), this.element.val(t), this._refresh()
                    },
                    _destroy: function() {
                        this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
                    },
                    stepUp: p((function(t) {
                        this._stepUp(t)
                    })),
                    _stepUp: function(t) {
                        this._start() && (this._spin((t || 1) * this.options.step), this._stop())
                    },
                    stepDown: p((function(t) {
                        this._stepDown(t)
                    })),
                    _stepDown: function(t) {
                        this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
                    },
                    pageUp: p((function(t) {
                        this._stepUp((t || 1) * this.options.page)
                    })),
                    pageDown: p((function(t) {
                        this._stepDown((t || 1) * this.options.page)
                    })),
                    value: function(t) {
                        if (!arguments.length) return this._parse(this.element.val());
                        p(this._value).call(this, t)
                    },
                    widget: function() {
                        return this.uiSpinner
                    }
                }), !1 !== t.uiBackCompat && t.widget("ui.spinner", t.ui.spinner, {
                    _enhance: function() {
                        this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
                    },
                    _uiSpinnerHtml: function() {
                        return "<span>"
                    },
                    _buttonHtml: function() {
                        return "<a></a><a></a>"
                    }
                }), t.ui.spinner
            }) ? s.apply(e, n) : s) || (t.exports = o)
        },
        7285: (t, e, i) => {
            var s = i(9755);
            i(4812),
                function(t) {
                    function e(t, e) {
                        if (!(t.originalEvent.touches.length > 1)) {
                            t.preventDefault();
                            var i = t.originalEvent.changedTouches[0],
                                s = document.createEvent("MouseEvents");
                            s.initMouseEvent(e, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(s)
                        }
                    }
                    if (t.support.touch = "ontouchend" in document, t.support.touch) {
                        var i, s = t.ui.mouse.prototype,
                            n = s._mouseInit,
                            o = s._mouseDestroy;
                        s._touchStart = function(t) {
                            !i && this._mouseCapture(t.originalEvent.changedTouches[0]) && (i = !0, this._touchMoved = !1, e(t, "mouseover"), e(t, "mousemove"), e(t, "mousedown"))
                        }, s._touchMove = function(t) {
                            i && (this._touchMoved = !0, e(t, "mousemove"))
                        }, s._touchEnd = function(t) {
                            i && (e(t, "mouseup"), e(t, "mouseout"), this._touchMoved || e(t, "click"), i = !1)
                        }, s._mouseInit = function() {
                            var e = this;
                            e.element.bind({
                                touchstart: t.proxy(e, "_touchStart"),
                                touchmove: t.proxy(e, "_touchMove"),
                                touchend: t.proxy(e, "_touchEnd")
                            }), n.call(e)
                        }, s._mouseDestroy = function() {
                            var e = this;
                            e.element.unbind({
                                touchstart: t.proxy(e, "_touchStart"),
                                touchmove: t.proxy(e, "_touchMove"),
                                touchend: t.proxy(e, "_touchEnd")
                            }), o.call(e)
                        }
                    }
                }(s)
        },
        8533: (t, e, i) => {
            var s, n;

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            i(2526), i(1817), i(2165), i(9826), i(6992), i(4812), i(1539), i(1058), i(4916), i(8783), i(5306), i(3948), i(2564), s = [i(9755)], void 0 !== (n = function(t) {
                return function(t, e, i) {
                    "use strict";
                    var s, n, r, a, l, h, c, u, p, d, f, m, g, v, _, b, y, w, x, C, P, S, k, z, j, E, T;
                    C = {
                        paneClass: "nano-pane",
                        sliderClass: "nano-slider",
                        contentClass: "nano-content",
                        enabledClass: "has-scrollbar",
                        flashedClass: "flashed",
                        activeClass: "active",
                        iOSNativeScrolling: !1,
                        preventPageScrolling: !1,
                        disableResize: !1,
                        alwaysVisible: !1,
                        flashDelay: 1500,
                        sliderMinHeight: 20,
                        sliderMaxHeight: null,
                        documentContext: null,
                        windowContext: null
                    }, _ = "scroll", c = "mousedown", u = "mouseenter", p = "mousemove", f = "mousewheel", d = "mouseup", v = "resize", l = "drag", h = "enter", y = "up", g = "panedown", r = "DOMMouseScroll", a = "down", w = "wheel", b = "touchmove", s = "Microsoft Internet Explorer" === e.navigator.appName && /msie 7./i.test(e.navigator.appVersion) && e.ActiveXObject, n = null, z = e.requestAnimationFrame, x = e.cancelAnimationFrame, E = i.createElement("div").style, T = function() {
                        var t, e, i, s;
                        for (t = i = 0, s = (e = ["t", "webkitT", "MozT", "msT", "OT"]).length; s > i; t = ++i)
                            if (e[t], e[t] + "ransform" in E) return e[t].substr(0, e[t].length - 1);
                        return !1
                    }(), j = function(t) {
                        return !1 !== T && ("" === T ? t : T + t.charAt(0).toUpperCase() + t.substr(1))
                    }("transform"), S = !1 !== j, P = function() {
                        var t, e, s;
                        return (e = (t = i.createElement("div")).style).position = "absolute", e.width = "100px", e.height = "100px", e.overflow = _, e.top = "-9999px", i.body.appendChild(t), s = t.offsetWidth - t.clientWidth, i.body.removeChild(t), s
                    }, k = function() {
                        var t, i, s;
                        return i = e.navigator.userAgent, !!(t = /(?=.+Mac OS X)(?=.+Firefox)/.test(i)) && ((s = /Firefox\/\d{2}\./.exec(i)) && (s = s[0].replace(/\D+/g, "")), t && +s > 23)
                    }, m = function() {
                        function o(s, o) {
                            this.el = s, this.options = o, n || (n = P()), this.$el = t(this.el), this.doc = t(this.options.documentContext || i), this.win = t(this.options.windowContext || e), this.body = this.doc.find("body"), this.$content = this.$el.children("." + this.options.contentClass), this.$content.attr("tabindex", this.options.tabIndex || 0), this.content = this.$content[0], this.previousPosition = 0, this.options.iOSNativeScrolling && null != this.el.style.WebkitOverflowScrolling ? this.nativeScrolling() : this.generate(), this.createEvents(), this.addEvents(), this.reset()
                        }
                        return o.prototype.preventScrolling = function(t, e) {
                            if (this.isActive)
                                if (t.type === r)(e === a && t.originalEvent.detail > 0 || e === y && t.originalEvent.detail < 0) && t.preventDefault();
                                else if (t.type === f) {
                                if (!t.originalEvent || !t.originalEvent.wheelDelta) return;
                                (e === a && t.originalEvent.wheelDelta < 0 || e === y && t.originalEvent.wheelDelta > 0) && t.preventDefault()
                            }
                        }, o.prototype.nativeScrolling = function() {
                            this.$content.css({
                                WebkitOverflowScrolling: "touch"
                            }), this.iOSNativeScrolling = !0, this.isActive = !0
                        }, o.prototype.updateScrollValues = function() {
                            var t, e;
                            t = this.content, this.maxScrollTop = t.scrollHeight - t.clientHeight, this.prevScrollTop = this.contentScrollTop || 0, this.contentScrollTop = t.scrollTop, e = this.contentScrollTop > this.previousPosition ? "down" : this.contentScrollTop < this.previousPosition ? "up" : "same", this.previousPosition = this.contentScrollTop, "same" !== e && this.$el.trigger("update", {
                                position: this.contentScrollTop,
                                maximum: this.maxScrollTop,
                                direction: e
                            }), this.iOSNativeScrolling || (this.maxSliderTop = this.paneHeight - this.sliderHeight, this.sliderTop = 0 === this.maxScrollTop ? 0 : this.contentScrollTop * this.maxSliderTop / this.maxScrollTop)
                        }, o.prototype.setOnScrollStyles = function() {
                            var t;
                            S ? (t = {})[j] = "translate(0, " + this.sliderTop + "px)" : t = {
                                top: this.sliderTop
                            }, z ? (x && this.scrollRAF && x(this.scrollRAF), this.scrollRAF = z(function(e) {
                                return function() {
                                    return e.scrollRAF = null, e.slider.css(t)
                                }
                            }(this))) : this.slider.css(t)
                        }, o.prototype.createEvents = function() {
                            this.events = {
                                down: function(t) {
                                    return function(e) {
                                        return t.isBeingDragged = !0, t.offsetY = e.pageY - t.slider.offset().top, t.slider.is(e.target) || (t.offsetY = 0), t.pane.addClass(t.options.activeClass), t.doc.bind(p, t.events[l]).bind(d, t.events[y]), t.body.bind(u, t.events[h]), !1
                                    }
                                }(this),
                                drag: function(t) {
                                    return function(e) {
                                        return t.sliderY = e.pageY - t.$el.offset().top - t.paneTop - (t.offsetY || .5 * t.sliderHeight), t.scroll(), t.contentScrollTop >= t.maxScrollTop && t.prevScrollTop !== t.maxScrollTop ? t.$el.trigger("scrollend") : 0 === t.contentScrollTop && 0 !== t.prevScrollTop && t.$el.trigger("scrolltop"), !1
                                    }
                                }(this),
                                up: function(t) {
                                    return function(e) {
                                        return t.isBeingDragged = !1, t.pane.removeClass(t.options.activeClass), t.doc.unbind(p, t.events[l]).unbind(d, t.events[y]), t.body.unbind(u, t.events[h]), !1
                                    }
                                }(this),
                                resize: function(t) {
                                    return function(e) {
                                        t.reset()
                                    }
                                }(this),
                                panedown: function(t) {
                                    return function(e) {
                                        return t.sliderY = (e.offsetY || e.originalEvent.layerY) - .5 * t.sliderHeight, t.scroll(), t.events.down(e), !1
                                    }
                                }(this),
                                scroll: function(t) {
                                    return function(e) {
                                        t.updateScrollValues(), t.isBeingDragged || (t.iOSNativeScrolling || (t.sliderY = t.sliderTop, t.setOnScrollStyles()), null != e && (t.contentScrollTop >= t.maxScrollTop ? (t.options.preventPageScrolling && t.preventScrolling(e, a), t.prevScrollTop !== t.maxScrollTop && t.$el.trigger("scrollend")) : 0 === t.contentScrollTop && (t.options.preventPageScrolling && t.preventScrolling(e, y), 0 !== t.prevScrollTop && t.$el.trigger("scrolltop"))))
                                    }
                                }(this),
                                wheel: function(t) {
                                    return function(e) {
                                        var i;
                                        if (null != e) return (i = e.delta || e.wheelDelta || e.originalEvent && e.originalEvent.wheelDelta || -e.detail || e.originalEvent && -e.originalEvent.detail) && (t.sliderY += -i / 3), t.scroll(), !1
                                    }
                                }(this),
                                enter: function(t) {
                                    return function(e) {
                                        var i;
                                        if (t.isBeingDragged) return 1 !== (e.buttons || e.which) ? (i = t.events)[y].apply(i, arguments) : void 0
                                    }
                                }(this)
                            }
                        }, o.prototype.addEvents = function() {
                            var t;
                            this.removeEvents(), t = this.events, this.options.disableResize || this.win.bind(v, t[v]), this.iOSNativeScrolling || (this.slider.bind(c, t[a]), this.pane.bind(c, t[g]).bind(f + " " + r, t[w])), this.$content.bind(_ + " " + f + " " + r + " " + b, t[_])
                        }, o.prototype.removeEvents = function() {
                            var t;
                            t = this.events, this.win.unbind(v, t[v]), this.iOSNativeScrolling || (this.slider.unbind(), this.pane.unbind()), this.$content.unbind(_ + " " + f + " " + r + " " + b, t[_])
                        }, o.prototype.generate = function() {
                            var t, i, s, o, r;
                            return o = (i = this.options).paneClass, r = i.sliderClass, i.contentClass, (s = this.$el.children("." + o)).length || s.children("." + r).length || this.$el.append('<div class="' + o + '"><div class="' + r + '" /></div>'), this.pane = this.$el.children("." + o), this.slider = this.pane.find("." + r), 0 === n && k() ? t = {
                                right: -14,
                                paddingRight: +e.getComputedStyle(this.content, null).getPropertyValue("padding-right").replace(/[^0-9.]+/g, "") + 14
                            } : n && (t = {
                                right: -n
                            }, this.$el.addClass(i.enabledClass)), null != t && this.$content.css(t), this
                        }, o.prototype.restore = function() {
                            this.stopped = !1, this.iOSNativeScrolling || this.pane.show(), this.addEvents()
                        }, o.prototype.reset = function() {
                            var t, e, i, o, r, a, l, h, c, u, p;
                            return this.iOSNativeScrolling ? void(this.contentHeight = this.content.scrollHeight) : (this.$el.find("." + this.options.paneClass).length || this.generate().stop(), this.stopped && this.restore(), r = (o = (t = this.content).style).overflowY, s && this.$content.css({
                                height: this.$content.height()
                            }), e = t.scrollHeight + n, (c = parseInt(this.$el.css("max-height"), 10)) > 0 && (this.$el.height(""), this.$el.height(t.scrollHeight > c ? c : t.scrollHeight)), l = (a = this.pane.outerHeight(!1)) + (h = parseInt(this.pane.css("top"), 10)) + parseInt(this.pane.css("bottom"), 10), (p = Math.round(l / e * a)) < this.options.sliderMinHeight ? p = this.options.sliderMinHeight : null != this.options.sliderMaxHeight && p > this.options.sliderMaxHeight && (p = this.options.sliderMaxHeight), r === _ && o.overflowX !== _ && (p += n), this.maxSliderTop = l - p, this.contentHeight = e, this.paneHeight = a, this.paneOuterHeight = l, this.sliderHeight = p, this.paneTop = h, this.slider.height(p), this.events.scroll(), this.pane.show(), this.isActive = !0, t.scrollHeight === t.clientHeight || this.pane.outerHeight(!0) >= t.scrollHeight && r !== _ ? (this.pane.hide(), this.isActive = !1) : this.el.clientHeight === t.scrollHeight && r === _ ? this.slider.hide() : this.slider.show(), this.pane.css({
                                opacity: this.options.alwaysVisible ? 1 : "",
                                visibility: this.options.alwaysVisible ? "visible" : ""
                            }), ("static" === (i = this.$content.css("position")) || "relative" === i) && (u = parseInt(this.$content.css("right"), 10)) && this.$content.css({
                                right: "",
                                marginRight: u
                            }), this)
                        }, o.prototype.scroll = function() {
                            return this.isActive ? (this.sliderY = Math.max(0, this.sliderY), this.sliderY = Math.min(this.maxSliderTop, this.sliderY), this.$content.scrollTop(this.maxScrollTop * this.sliderY / this.maxSliderTop), this.iOSNativeScrolling || (this.updateScrollValues(), this.setOnScrollStyles()), this) : void 0
                        }, o.prototype.scrollBottom = function(t) {
                            return this.isActive ? (this.$content.scrollTop(this.contentHeight - this.$content.height() - t).trigger(f), this.stop().restore(), this) : void 0
                        }, o.prototype.scrollTop = function(t) {
                            return this.isActive ? (this.$content.scrollTop(+t).trigger(f), this.stop().restore(), this) : void 0
                        }, o.prototype.scrollTo = function(t) {
                            return this.isActive ? (this.scrollTop(this.$el.find(t).get(0).offsetTop), this) : void 0
                        }, o.prototype.stop = function() {
                            return x && this.scrollRAF && (x(this.scrollRAF), this.scrollRAF = null), this.stopped = !0, this.removeEvents(), this.iOSNativeScrolling || this.pane.hide(), this
                        }, o.prototype.destroy = function() {
                            return this.stopped || this.stop(), !this.iOSNativeScrolling && this.pane.length && this.pane.remove(), s && this.$content.height(""), this.$content.removeAttr("tabindex"), this.$el.hasClass(this.options.enabledClass) && (this.$el.removeClass(this.options.enabledClass), this.$content.css({
                                right: ""
                            })), this
                        }, o.prototype.flash = function() {
                            return !this.iOSNativeScrolling && this.isActive ? (this.reset(), this.pane.addClass(this.options.flashedClass), setTimeout(function(t) {
                                return function() {
                                    t.pane.removeClass(t.options.flashedClass)
                                }
                            }(this), this.options.flashDelay), this) : void 0
                        }, o
                    }(), t.fn.nanoScroller = function(e) {
                        return this.each((function() {
                            var i, s;
                            if ((s = this.nanoscroller) || (i = t.extend({}, C, e), this.nanoscroller = s = new m(this, i)), e && "object" == o(e)) {
                                if (t.extend(s.options, e), null != e.scrollBottom) return s.scrollBottom(e.scrollBottom);
                                if (null != e.scrollTop) return s.scrollTop(e.scrollTop);
                                if (e.scrollTo) return s.scrollTo(e.scrollTo);
                                if ("bottom" === e.scroll) return s.scrollBottom(0);
                                if ("top" === e.scroll) return s.scrollTop(0);
                                if (e.scroll && e.scroll instanceof t) return s.scrollTo(e.scroll);
                                if (e.stop) return s.stop();
                                if (e.destroy) return s.destroy();
                                if (e.flash) return s.flash()
                            }
                            return s.reset()
                        }))
                    }, t.fn.nanoScroller.Constructor = m
                }(t, window, document)
            }.apply(e, s)) && (t.exports = n)
        },
        6700: (t, e, i) => {
            var s = {
                "./af": 2786,
                "./af.js": 2786,
                "./ar": 867,
                "./ar-dz": 4130,
                "./ar-dz.js": 4130,
                "./ar-kw": 6737,
                "./ar-kw.js": 6737,
                "./ar-ly": 6440,
                "./ar-ly.js": 6440,
                "./ar-ma": 7702,
                "./ar-ma.js": 7702,
                "./ar-sa": 6040,
                "./ar-sa.js": 6040,
                "./ar-tn": 7100,
                "./ar-tn.js": 7100,
                "./ar.js": 867,
                "./az": 1083,
                "./az.js": 1083,
                "./be": 9808,
                "./be.js": 9808,
                "./bg": 8338,
                "./bg.js": 8338,
                "./bm": 7438,
                "./bm.js": 7438,
                "./bn": 8905,
                "./bn-bd": 6225,
                "./bn-bd.js": 6225,
                "./bn.js": 8905,
                "./bo": 1560,
                "./bo.js": 1560,
                "./br": 1278,
                "./br.js": 1278,
                "./bs": 622,
                "./bs.js": 622,
                "./ca": 2468,
                "./ca.js": 2468,
                "./cs": 5822,
                "./cs.js": 5822,
                "./cv": 877,
                "./cv.js": 877,
                "./cy": 7373,
                "./cy.js": 7373,
                "./da": 4780,
                "./da.js": 4780,
                "./de": 9740,
                "./de-at": 217,
                "./de-at.js": 217,
                "./de-ch": 894,
                "./de-ch.js": 894,
                "./de.js": 9740,
                "./dv": 5300,
                "./dv.js": 5300,
                "./el": 837,
                "./el.js": 837,
                "./en-au": 8348,
                "./en-au.js": 8348,
                "./en-ca": 7925,
                "./en-ca.js": 7925,
                "./en-gb": 2243,
                "./en-gb.js": 2243,
                "./en-ie": 6436,
                "./en-ie.js": 6436,
                "./en-il": 7207,
                "./en-il.js": 7207,
                "./en-in": 4175,
                "./en-in.js": 4175,
                "./en-nz": 6319,
                "./en-nz.js": 6319,
                "./en-sg": 1662,
                "./en-sg.js": 1662,
                "./eo": 2915,
                "./eo.js": 2915,
                "./es": 5655,
                "./es-do": 5251,
                "./es-do.js": 5251,
                "./es-mx": 6112,
                "./es-mx.js": 6112,
                "./es-us": 1146,
                "./es-us.js": 1146,
                "./es.js": 5655,
                "./et": 5603,
                "./et.js": 5603,
                "./eu": 7763,
                "./eu.js": 7763,
                "./fa": 6959,
                "./fa.js": 6959,
                "./fi": 1897,
                "./fi.js": 1897,
                "./fil": 2549,
                "./fil.js": 2549,
                "./fo": 4694,
                "./fo.js": 4694,
                "./fr": 4470,
                "./fr-ca": 3049,
                "./fr-ca.js": 3049,
                "./fr-ch": 2330,
                "./fr-ch.js": 2330,
                "./fr.js": 4470,
                "./fy": 5044,
                "./fy.js": 5044,
                "./ga": 9295,
                "./ga.js": 9295,
                "./gd": 2101,
                "./gd.js": 2101,
                "./gl": 8794,
                "./gl.js": 8794,
                "./gom-deva": 7884,
                "./gom-deva.js": 7884,
                "./gom-latn": 3168,
                "./gom-latn.js": 3168,
                "./gu": 5349,
                "./gu.js": 5349,
                "./he": 4206,
                "./he.js": 4206,
                "./hi": 94,
                "./hi.js": 94,
                "./hr": 316,
                "./hr.js": 316,
                "./hu": 2138,
                "./hu.js": 2138,
                "./hy-am": 1423,
                "./hy-am.js": 1423,
                "./id": 9218,
                "./id.js": 9218,
                "./is": 135,
                "./is.js": 135,
                "./it": 626,
                "./it-ch": 150,
                "./it-ch.js": 150,
                "./it.js": 626,
                "./ja": 9183,
                "./ja.js": 9183,
                "./jv": 4286,
                "./jv.js": 4286,
                "./ka": 2105,
                "./ka.js": 2105,
                "./kk": 7772,
                "./kk.js": 7772,
                "./km": 8758,
                "./km.js": 8758,
                "./kn": 9282,
                "./kn.js": 9282,
                "./ko": 3730,
                "./ko.js": 3730,
                "./ku": 1408,
                "./ku.js": 1408,
                "./ky": 3291,
                "./ky.js": 3291,
                "./lb": 6841,
                "./lb.js": 6841,
                "./lo": 5466,
                "./lo.js": 5466,
                "./lt": 7010,
                "./lt.js": 7010,
                "./lv": 7595,
                "./lv.js": 7595,
                "./me": 9861,
                "./me.js": 9861,
                "./mi": 5493,
                "./mi.js": 5493,
                "./mk": 5966,
                "./mk.js": 5966,
                "./ml": 7341,
                "./ml.js": 7341,
                "./mn": 5115,
                "./mn.js": 5115,
                "./mr": 370,
                "./mr.js": 370,
                "./ms": 9847,
                "./ms-my": 1237,
                "./ms-my.js": 1237,
                "./ms.js": 9847,
                "./mt": 2126,
                "./mt.js": 2126,
                "./my": 6165,
                "./my.js": 6165,
                "./nb": 4924,
                "./nb.js": 4924,
                "./ne": 6744,
                "./ne.js": 6744,
                "./nl": 3901,
                "./nl-be": 9814,
                "./nl-be.js": 9814,
                "./nl.js": 3901,
                "./nn": 3877,
                "./nn.js": 3877,
                "./oc-lnc": 2135,
                "./oc-lnc.js": 2135,
                "./pa-in": 5858,
                "./pa-in.js": 5858,
                "./pl": 4495,
                "./pl.js": 4495,
                "./pt": 9520,
                "./pt-br": 7971,
                "./pt-br.js": 7971,
                "./pt.js": 9520,
                "./ro": 6459,
                "./ro.js": 6459,
                "./ru": 1793,
                "./ru.js": 1793,
                "./sd": 950,
                "./sd.js": 950,
                "./se": 7930,
                "./se.js": 7930,
                "./si": 124,
                "./si.js": 124,
                "./sk": 4249,
                "./sk.js": 4249,
                "./sl": 4985,
                "./sl.js": 4985,
                "./sq": 1104,
                "./sq.js": 1104,
                "./sr": 9131,
                "./sr-cyrl": 9915,
                "./sr-cyrl.js": 9915,
                "./sr.js": 9131,
                "./ss": 5893,
                "./ss.js": 5893,
                "./sv": 8760,
                "./sv.js": 8760,
                "./sw": 1172,
                "./sw.js": 1172,
                "./ta": 7333,
                "./ta.js": 7333,
                "./te": 3110,
                "./te.js": 3110,
                "./tet": 2095,
                "./tet.js": 2095,
                "./tg": 7321,
                "./tg.js": 7321,
                "./th": 9041,
                "./th.js": 9041,
                "./tk": 9005,
                "./tk.js": 9005,
                "./tl-ph": 5768,
                "./tl-ph.js": 5768,
                "./tlh": 9444,
                "./tlh.js": 9444,
                "./tr": 2397,
                "./tr.js": 2397,
                "./tzl": 8254,
                "./tzl.js": 8254,
                "./tzm": 1106,
                "./tzm-latn": 699,
                "./tzm-latn.js": 699,
                "./tzm.js": 1106,
                "./ug-cn": 9288,
                "./ug-cn.js": 9288,
                "./uk": 7691,
                "./uk.js": 7691,
                "./ur": 3795,
                "./ur.js": 3795,
                "./uz": 6791,
                "./uz-latn": 588,
                "./uz-latn.js": 588,
                "./uz.js": 6791,
                "./vi": 5666,
                "./vi.js": 5666,
                "./x-pseudo": 4378,
                "./x-pseudo.js": 4378,
                "./yo": 5805,
                "./yo.js": 5805,
                "./zh-cn": 3839,
                "./zh-cn.js": 3839,
                "./zh-hk": 5726,
                "./zh-hk.js": 5726,
                "./zh-mo": 9807,
                "./zh-mo.js": 9807,
                "./zh-tw": 4152,
                "./zh-tw.js": 4152
            };

            function n(t) {
                var e = o(t);
                return i(e)
            }

            function o(t) {
                if (!i.o(s, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return s[t]
            }
            n.keys = function() {
                return Object.keys(s)
            }, n.resolve = o, t.exports = n, n.id = 6700
        }
    },
    0, [
        [1843, 666, 107]
    ]
]);
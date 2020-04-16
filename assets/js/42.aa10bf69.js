(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{326:function(t,e,s){"use strict";s.r(e);var a=s(8),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"distinct-attribute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#distinct-attribute"}},[t._v("#")]),t._v(" Distinct attribute")]),t._v(" "),s("p",[s("em",[t._v("Child route of the "),s("RouterLink",{attrs:{to:"/references/settings.html"}},[t._v("settings route")]),t._v(".")],1)]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/guides/advanced_guides/distinct.html"}},[t._v("Distinct attribute")]),t._v(" is a field whose value will always be "),s("strong",[t._v("unique")]),t._v(" in the returned documents.")],1),t._v(" "),s("p",[t._v("Distinct attribute can also be updated directly through the "),s("RouterLink",{attrs:{to:"/references/settings.html#update-settings"}},[t._v("global settings route")]),t._v(" at the same time than the other settings.")],1),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("Updating the settings means overwriting the default settings of MeiliSearch. You can reset to default values using the "),s("code",[t._v("DELETE")]),t._v(" routes.")])]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/guides/advanced_guides/settings.html#distinct-attribute"}},[t._v("Learn more about distinct attribute")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"get-distinct-attribute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-distinct-attribute"}},[t._v("#")]),t._v(" Get distinct attribute")]),t._v(" "),s("RouteHighlighter",{attrs:{method:"GET",route:"/indexes/:index_uid/settings/distinct-attribute"}}),t._v(" "),s("p",[t._v("Get the "),s("RouterLink",{attrs:{to:"/guides/advanced_guides/settings.html#distinct-attribute"}},[t._v("distinct attribute")]),t._v(" field of an index.")],1),t._v(" "),s("h4",{attrs:{id:"path-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-variables"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("index_uid")])]),t._v(" "),s("td",[t._v("The index UID")])])])]),t._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X GET "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/movies/settings/distinct-attribute'")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-200-ok"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-200-ok"}},[t._v("#")]),t._v(" Response: "),s("code",[t._v("200 Ok")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"movie_id"')]),t._v("\n")])])]),s("h2",{attrs:{id:"update-distinct-attribute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-distinct-attribute"}},[t._v("#")]),t._v(" Update distinct attribute")]),t._v(" "),s("RouteHighlighter",{attrs:{method:"POST",route:"/indexes/:index_uid/settings/distinct-attribute"}}),t._v(" "),s("p",[t._v("Update the "),s("RouterLink",{attrs:{to:"/guides/advanced_guides/settings.html#distinct-attribute"}},[t._v("distinct attribute")]),t._v(" field of an index.")],1),t._v(" "),s("h4",{attrs:{id:"path-variables-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-2"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("index_uid")])]),t._v(" "),s("td",[t._v("The index UID")])])])]),t._v(" "),s("h4",{attrs:{id:"body"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[t._v("#")]),t._v(" Body")]),t._v(" "),s("p",[t._v("A String: the field name.")]),t._v(" "),s("h3",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X GET "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/movies/settings/distinct-attribute'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'movie_id'")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-202-accepted"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted"}},[t._v("#")]),t._v(" Response: "),s("code",[t._v("202 Accepted")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This "),s("code",[t._v("updateId")]),t._v(" allows you to "),s("RouterLink",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"reset-distinct-attribute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reset-distinct-attribute"}},[t._v("#")]),t._v(" Reset distinct attribute")]),t._v(" "),s("RouteHighlighter",{attrs:{method:"DELETE",route:"/indexes/:index_uid/settings/distinct-attribute"}}),t._v(" "),s("p",[t._v("Reset the "),s("RouterLink",{attrs:{to:"/guides/advanced_guides/settings.html#distinct-attribute"}},[t._v("distinct attribute")]),t._v(" field of an index to its default value.")],1),t._v(" "),s("p",[s("strong",[t._v("Default value")]),t._v(": "),s("code",[t._v("null")])]),t._v(" "),s("h4",{attrs:{id:"path-variables-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-3"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("index_uid")])]),t._v(" "),s("td",[t._v("The index UID")])])])]),t._v(" "),s("h4",{attrs:{id:"example-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X DELETE "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/movies/settings/distinct-attribute'")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-202-accepted-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted-2"}},[t._v("#")]),t._v(" Response: "),s("code",[t._v("202 Accepted")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This "),s("code",[t._v("updateId")]),t._v(" allows you to "),s("RouterLink",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1)],1)}),[],!1,null,null,null);e.default=r.exports}}]);
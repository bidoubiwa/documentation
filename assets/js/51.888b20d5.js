(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{427:function(t,e,a){"use strict";a.r(e);var s=a(8),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documents"}},[t._v("#")]),t._v(" Documents")]),t._v(" "),a("p",[t._v("Documents are objects composed of fields that can store any type of data."),a("br"),t._v("\nEach field contains an attribute and its associated value.")]),t._v(" "),a("p",[t._v("Documents are stored inside "),a("RouterLink",{attrs:{to:"/guides/main_concepts/indexes.html"}},[t._v("indexes")]),t._v("."),a("br"),t._v(" "),a("RouterLink",{attrs:{to:"/guides/main_concepts/documents.html"}},[t._v("Learn more about documents")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"get-one-document"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-one-document"}},[t._v("#")]),t._v(" Get one document")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"GET",route:"/indexes/:index_uid/documents/:document_id"}}),t._v(" "),a("p",[t._v("Get one "),a("RouterLink",{attrs:{to:"/guides/main_concepts/documents.html"}},[t._v("document")]),t._v(" using its unique id.")],1),t._v(" "),a("h4",{attrs:{id:"path-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index_uid")])]),t._v(" "),a("td",[t._v("The index UID")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("document_id")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/guides/main_concepts/documents.html#primary-key"}},[t._v("The document id")])],1)])])]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("code-samples",{attrs:{id:"get_one_document_1"}}),t._v(" "),a("h4",{attrs:{id:"response-200-ok"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-200-ok"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("200 Ok")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25684")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"American Ninja 5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"poster"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://image.tmdb.org/t/p/w1280/iuAQVI4mvjI83wnirpD8GVNRVuY.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"overview"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"When a scientists daughter is kidnapped, American Ninja, attempts to find her, but this time he teams up with a youngster he has trained in the ways of the ninja."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"release_date"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1993-01-01"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"get-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-documents"}},[t._v("#")]),t._v(" Get documents")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"GET",route:"/indexes/:index_uid/documents"}}),t._v(" "),a("p",[t._v("Get "),a("RouterLink",{attrs:{to:"/guides/main_concepts/documents.html"}},[t._v("documents")]),t._v(" by batch.")],1),t._v(" "),a("p",[t._v("Using the query parameters "),a("code",[t._v("offset")]),t._v(" and "),a("code",[t._v("limit")]),t._v(", you can browse through all your documents.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("Documents are ordered by MeiliSearch depending on the hash of their id.")])]),t._v(" "),a("h4",{attrs:{id:"path-variables-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-2"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index_uid")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("h4",{attrs:{id:"query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Query Parameter")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Default Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("offset")])]),t._v(" "),a("td",[t._v("number of documents to skip")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("limit")])]),t._v(" "),a("td",[t._v("number of documents to take")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("20")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("attributesToRetrieve")])]),t._v(" "),a("td",[t._v("document attributes to show")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("*")])])])]),t._v(" "),a("h3",{attrs:{id:"example-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("code-samples",{attrs:{id:"get_documents_1"}}),t._v(" "),a("h4",{attrs:{id:"response-200-ok-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-200-ok-2"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("200 Ok")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25684")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"release_date"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1993-01-01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"poster"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://image.tmdb.org/t/p/w1280/iuAQVI4mvjI83wnirpD8GVNRVuY.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"American Ninja 5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"overview"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"When a scientists daughter is kidnapped, American Ninja, attempts to find her, but this time he teams up with a youngster he has trained in the ways of the ninja."')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("468219")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Dead in a Week (Or Your Money Back)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"release_date"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-09-12"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"poster"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://image.tmdb.org/t/p/w1280/f4ANVEuEaGy2oP5M0Y2P1dwxUNn.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"overview"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"William has failed to kill himself so many times that he outsources his suicide to aging assassin Leslie. But with the contract signed and death assured within a week (or his money back), William suddenly discovers reasons to live... However Leslie is under pressure from his boss to make sure the contract is completed."')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"add-or-replace-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-or-replace-documents"}},[t._v("#")]),t._v(" Add or replace documents")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"POST",route:"/indexes/:index_uid/documents"}}),t._v(" "),a("p",[t._v("Add a list of "),a("RouterLink",{attrs:{to:"/guides/main_concepts/documents.html"}},[t._v("documents")]),t._v(" or replace them if they already exist.")],1),t._v(" "),a("p",[t._v("If you send an already existing document (same "),a("RouterLink",{attrs:{to:"/guides/main_concepts/documents.html#primary-key"}},[t._v("id")]),t._v(") the "),a("strong",[t._v("whole existing document")]),t._v(" will be overwritten by the new document. Fields previously in the document not present in the new document are removed.")],1),t._v(" "),a("p",[t._v("For a partial update of the document see "),a("RouterLink",{attrs:{to:"/references/documents.html#add-or-update-documents"}},[t._v("add or update documents")]),t._v(".")],1),t._v(" "),a("p",[t._v("If the provided index does not exist, it will be created.")]),t._v(" "),a("h4",{attrs:{id:"path-variables-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-3"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index_uid")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("h4",{attrs:{id:"query-parameters-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters-2"}},[t._v("#")]),t._v(" Query Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Query Parameter")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Default Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("primaryKey")])]),t._v(" "),a("td",[t._v("The "),a("RouterLink",{attrs:{to:"/guides/main_concepts/documents.html#primary-key"}},[t._v("primary key")]),t._v(" of the documents "),a("em",[t._v("(optional)")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("none")])])])]),t._v(" "),a("p",[t._v("If you want to set the "),a("strong",[t._v("primary key")]),t._v(" of your index through this route, it only has to be done "),a("strong",[t._v("the first time you add documents")]),t._v(" to the index. After which it will be ignored if given.")]),t._v(" "),a("h4",{attrs:{id:"body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[t._v("#")]),t._v(" Body")]),t._v(" "),a("p",[t._v("The body is composed of a "),a("strong",[t._v("JSON array")]),t._v(" of documents.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("287947")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Shazam"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"poster"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://image.tmdb.org/t/p/w1280/xnopI5Xtky18MPhK40cZAGAOVeV.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"overview"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A boy is given the ability to become an adult superhero in times of need with a single magic word."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"release_date"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-03-23"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"example-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("code-samples",{attrs:{id:"add_or_replace_documents_1"}}),t._v(" "),a("h4",{attrs:{id:"response-202-accepted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("202 Accepted")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This "),a("code",[t._v("updateId")]),t._v(" allows you to "),a("RouterLink",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"add-or-update-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-or-update-documents"}},[t._v("#")]),t._v(" Add or update documents")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"PUT",route:"/indexes/:index_uid/documents"}}),t._v(" "),a("p",[t._v("Add a list of documents and update them if they already.")]),t._v(" "),a("p",[t._v("If you send an already existing document (same "),a("RouterLink",{attrs:{to:"/guides/main_concepts/documents.html#primary-key"}},[t._v("id")]),t._v(") the old document will be only partially updated according to the fields of the new document. Thus, any fields not present in the new document are kept and remained unchanged.")],1),t._v(" "),a("p",[t._v("To completely overwrite a document, check out the "),a("RouterLink",{attrs:{to:"/references/documents.html#add-or-replace-documents"}},[t._v("add or replace documents route")]),t._v(".")],1),t._v(" "),a("p",[t._v("If the provided index does not exist, it will be created.")]),t._v(" "),a("h4",{attrs:{id:"path-variables-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-4"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index_uid")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("p",[t._v("If you want to set the "),a("strong",[t._v("primary key")]),t._v(" of your index through this route, it only has to be done "),a("strong",[t._v("the first time you add documents")]),t._v(" to the index. After which it will be ignored if given.")]),t._v(" "),a("h4",{attrs:{id:"query-parameters-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters-3"}},[t._v("#")]),t._v(" Query Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Query Parameter")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Default Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("primaryKey")])]),t._v(" "),a("td",[t._v("The "),a("RouterLink",{attrs:{to:"/guides/main_concepts/documents.html#primary-key"}},[t._v("primary key")]),t._v(" of the documents "),a("em",[t._v("(optional)")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("none")])])])]),t._v(" "),a("h4",{attrs:{id:"body-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body-2"}},[t._v("#")]),t._v(" Body")]),t._v(" "),a("p",[t._v("The body is composed of a "),a("strong",[t._v("JSON array")]),t._v(" of documents.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("287947")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Shazam ⚡️"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"example-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-4"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("code-samples",{attrs:{id:"add_or_update_documents_1"}}),t._v(" "),a("p",[t._v("This document is an update of the document found in "),a("RouterLink",{attrs:{to:"/references/documents.html#add-or-replace-documents"}},[t._v("add or replace document")]),t._v("."),a("br"),t._v("\nThe documents are matched because they have the same "),a("code",[t._v("primaryKey")]),t._v(" value "),a("code",[t._v("id: 287947")]),t._v(". This route will update the "),a("code",[t._v("title")]),t._v(" field as it changed from "),a("code",[t._v("Shazam")]),t._v(" to "),a("code",[t._v("Shazam ⚡️")]),t._v(" and add the new "),a("code",[t._v("genres")]),t._v(" field to that document. The rest of the document will remain unchanged.")],1),t._v(" "),a("h4",{attrs:{id:"response-202-accepted-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted-2"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("202 Accepted")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This "),a("code",[t._v("updateId")]),t._v(" allows you to "),a("RouterLink",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"delete-all-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-all-documents"}},[t._v("#")]),t._v(" Delete all documents")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"DELETE",route:"/indexes/:index_uid/documents"}}),t._v(" "),a("p",[t._v("Delete all documents in the specified index.")]),t._v(" "),a("h4",{attrs:{id:"path-variables-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-5"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index_uid")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("h3",{attrs:{id:"example-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-5"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("code-samples",{attrs:{id:"delete_all_documents_1"}}),t._v(" "),a("h4",{attrs:{id:"response-202-accepted-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted-3"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("202 Accepted")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This "),a("code",[t._v("updateId")]),t._v(" allows you to "),a("RouterLink",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"delete-one-document"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-one-document"}},[t._v("#")]),t._v(" Delete one document")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"DELETE",route:"/indexes/:index_uid/documents/:document_id"}}),t._v(" "),a("p",[t._v("Delete one document based on its unique id.")]),t._v(" "),a("h4",{attrs:{id:"path-variables-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-6"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index_uid")])]),t._v(" "),a("td",[t._v("The index UID")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("document_id")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/guides/main_concepts/documents.html#primary-key"}},[t._v("The document id")])],1)])])]),t._v(" "),a("h3",{attrs:{id:"example-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-6"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("code-samples",{attrs:{id:"delete_one_document_1"}}),t._v(" "),a("h4",{attrs:{id:"response-202-accepted-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted-4"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("202 Accepted")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This "),a("code",[t._v("updateId")]),t._v(" allows you to "),a("RouterLink",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"delete-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-documents"}},[t._v("#")]),t._v(" Delete documents")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"POST",route:"/indexes/:index_uid/documents/delete-batch"}}),t._v(" "),a("p",[t._v("Delete a selection of documents based on array of document id's.")]),t._v(" "),a("h4",{attrs:{id:"path-variables-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-7"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index_uid")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("h4",{attrs:{id:"body-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body-3"}},[t._v("#")]),t._v(" Body")]),t._v(" "),a("p",[t._v("The body must be a "),a("strong",[t._v("JSON Array")]),t._v(" with the unique id's of the documents to delete.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23488")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("153738")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("437035")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("363869")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"example-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-7"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("code-samples",{attrs:{id:"delete_documents_1"}}),t._v(" "),a("h4",{attrs:{id:"response-202-accepted-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted-5"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("202 Accepted")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This "),a("code",[t._v("updateId")]),t._v(" allows you to "),a("RouterLink",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1)],1)}),[],!1,null,null,null);e.default=r.exports}}]);
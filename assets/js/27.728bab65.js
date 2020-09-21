(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{396:function(a,s,t){"use strict";t.r(s);var e=t(8),o=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"safeguards"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#safeguards"}},[a._v("#")]),a._v(" Safeguards")]),a._v(" "),t("p",[a._v("MeiliSearch has only one way to save its data as of today: Snapshots.")]),a._v(" "),t("h2",{attrs:{id:"snapshots"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#snapshots"}},[a._v("#")]),a._v(" Snapshots")]),a._v(" "),t("p",[a._v("A snapshot is an exact copy of the database at the time the snapshot was created. Snapshots do not go through any processing."),t("br"),a._v("\nWith it, it is possible to create and restore MeiliSearch from snapshots and schedule snapshot creation at custom intervals.")]),a._v(" "),t("h3",{attrs:{id:"creating-snapshots"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-snapshots"}},[a._v("#")]),a._v(" Creating Snapshots")]),a._v(" "),t("p",[a._v("For MeiliSearch to create snapshots, the feature must be enabled by specifying a path to the directory in which snapshots will be saved.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ meilisearch --snapshot-path mySnapShots/\n")])])]),t("p",[a._v("By default, MeiliSearch schedules a snapshot creation every day. When the instance starts, it will wait 24 hours until the first snapshot. This means that if you have launched MeiliSearch on Tuesday at 4 pm, the first snapshot will be created on Wednesday at 4 pm, and so on every day.")]),a._v(" "),t("p",[a._v("The schedule can be modified with the "),t("code",[a._v("--snapshot-interval-sec")]),a._v(" flag.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ meilisearch --snapshot-path mySnapShots/ --snapshot-interval-sec "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3600")]),a._v("\n")])])]),t("p",[a._v("Now a snapshot will be created every hour.")]),a._v(" "),t("p",[a._v("During snapshot creation, snapshots are "),t("strong",[a._v("overwritten")]),a._v(". Meaning, only the last snapshot will be present in the folder.")]),a._v(" "),t("p",[t("RouterLink",{attrs:{to:"/guides/advanced_guides/configuration.html#schedule-snapshot-creation"}},[a._v("[More about snapshots flags and env variables]")])],1),a._v(" "),t("h3",{attrs:{id:"start-from-snapshot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-from-snapshot"}},[a._v("#")]),a._v(" Start from Snapshot")]),a._v(" "),t("p",[a._v("Because snapshots are zipped copies of your database that did not go through any processing, starting a MeiliSearch instance from one of them is significantly faster.")]),a._v(" "),t("p",[a._v("Using the global environment "),t("code",[a._v("MEILI_LOAD_FROM_SNAPSHOT")]),a._v(" or the CLI flag "),t("code",[a._v("--load-from-snapshot")]),a._v(" , MeiliSearch will start the server using the provided snapshot.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ meilisearch --load-from-snapshot mySnapShots/data.ms.tar.gz\n")])])]),t("p",[a._v("If a database already exists, or if no snapshot is found at the given path, MeiliSearch will "),t("strong",[a._v("stop processing and throw an error")]),a._v(". This is configurable.")]),a._v(" "),t("p",[a._v("If you don't want MeiliSearch to throw an error if a database already exists, you can add the following flag: "),t("code",[a._v("--ignore-snapshot-if-db-exists=true")]),a._v(". By adding this flag, if a database exists, MeiliSearch will "),t("strong",[a._v("not")]),a._v(" import the snapshot and continue its process.")]),a._v(" "),t("p",[a._v("If you do not want MeiliSearch to throw an error when there is no snapshot at the given path you can add the following flag: "),t("code",[a._v("--ignore-missing-snapshot")]),a._v(". MeiliSearch will then continue its process and not import any snapshot.")]),a._v(" "),t("p",[a._v("When starting from a snapshot, chances are that you already have an existing database. "),t("strong",[a._v("For security reasons, a database is never overwritten")]),a._v(". To load a snapshot when an existing database is present, you will have to delete it manually. By default, the database is in "),t("code",[a._v("data.ms")]),a._v(" folder ("),t("RouterLink",{attrs:{to:"/guides/advanced_guides/configuration.html#database-path"}},[a._v("unless you changed the path")]),a._v("), which is located in the same folder as your MeiliSearch binary."),t("br"),a._v("\nThe simplest way to delete your database is the use "),t("code",[a._v("rm -rf data.ms")]),a._v(". After which you can start your MeiliSearch with the path to the snapshot you want to load.")],1),a._v(" "),t("p",[t("RouterLink",{attrs:{to:"/guides/advanced_guides/configuration.html#schedule-snapshot-creation"}},[a._v("[More about snapshots flags and env variables]")])],1),a._v(" "),t("h3",{attrs:{id:"use-cases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[a._v("#")]),a._v(" Use Cases")]),a._v(" "),t("p",[t("strong",[a._v("Snapshots are safeguards in case of problems")]),a._v(". If your MeiliSearch instance encounters a problem or if you have done a mistake while manipulating your database, restarting your instance with the latest snapshot is an easy way to recover your data.")]),a._v(" "),t("h3",{attrs:{id:"version-compatibilities"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version-compatibilities"}},[a._v("#")]),a._v(" Version Compatibilities")]),a._v(" "),t("p",[a._v("Since a snapshot is a replica of your database, it will restore it only if your MeiliSearch runs on the version it has been created on.")]),a._v(" "),t("p",[a._v("For backups compatibility between different versions, we can't wait to show you our next feature: backups 😉.")])])}),[],!1,null,null,null);s.default=o.exports}}]);
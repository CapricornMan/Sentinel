"use strict";var app;angular.module("sentinelDashboardApp",["oc.lazyLoad","ui.router","ui.bootstrap","angular-loading-bar","ngDialog","ui.bootstrap.datetimepicker","ui-notification","rzTable","angular-clipboard","selectize","angularUtils.directives.dirPagination"]).config(["$stateProvider","$urlRouterProvider","$ocLazyLoadProvider",function(e,r,a){a.config({debug:!1,events:!0}),r.otherwise("/dashboard/home"),e.state("dashboard",{url:"/dashboard",templateUrl:"app/views/dashboard/main.html",resolve:{loadMyDirectives:["$ocLazyLoad",function(e){return e.load({name:"sentinelDashboardApp",files:["app/scripts/directives/header/header.js","app/scripts/directives/sidebar/sidebar.js","app/scripts/directives/sidebar/sidebar-search/sidebar-search.js"]})}]}}).state("dashboard.home",{url:"/home",templateUrl:"app/views/dashboard/home.html",resolve:{loadMyFiles:["$ocLazyLoad",function(e){return e.load({name:"sentinelDashboardApp",files:["app/scripts/controllers/main.js"]})}]}}).state("dashboard.flow",{templateUrl:"app/views/flow.html",url:"/flow/:app",controller:"FlowCtl",resolve:{loadMyFiles:["$ocLazyLoad",function(e){return e.load({name:"sentinelDashboardApp",files:["app/scripts/controllers/flow.js"]})}]}}).state("dashboard.degrade",{templateUrl:"app/views/degrade.html",url:"/degrade/:app",controller:"DegradeCtl",resolve:{loadMyFiles:["$ocLazyLoad",function(e){return e.load({name:"sentinelDashboardApp",files:["app/scripts/controllers/degrade.js"]})}]}}).state("dashboard.system",{templateUrl:"app/views/system.html",url:"/system/:app",controller:"SystemCtl",resolve:{loadMyFiles:["$ocLazyLoad",function(e){return e.load({name:"sentinelDashboardApp",files:["app/scripts/controllers/system.js"]})}]}}).state("dashboard.machine",{templateUrl:"app/views/machine.html",url:"/app/:app",controller:"MachineCtl",resolve:{loadMyFiles:["$ocLazyLoad",function(e){return e.load({name:"sentinelDashboardApp",files:["app/scripts/controllers/machine.js"]})}]}}).state("dashboard.identity",{templateUrl:"app/views/identity.html",url:"/identity/:app",controller:"IdentityCtl",resolve:{loadMyFiles:["$ocLazyLoad",function(e){return e.load({name:"sentinelDashboardApp",files:["app/scripts/controllers/identity.js"]})}]}}).state("dashboard.metric",{templateUrl:"app/views/metric.html",url:"/metric/:app",controller:"MetricCtl",resolve:{loadMyFiles:["$ocLazyLoad",function(e){return e.load({name:"sentinelDashboardApp",files:["app/scripts/controllers/metric.js"]})}]}})}]),(app=angular.module("sentinelDashboardApp")).filter("range",[function(){return function(e,r){if(isNaN(r)||r<=0)return[];e=[];for(var a=1;a<=r;a++)e.push(a);return e}}]),(app=angular.module("sentinelDashboardApp")).service("AppService",["$http",function(e){this.getApps=function(){return e({url:"app/briefinfos.json",method:"GET"})}}]),(app=angular.module("sentinelDashboardApp")).service("FlowService",["$http",function(t){this.queryMachineRules=function(e,r,a){return t({url:"flow/rules.json",params:{app:e,ip:r,port:a},method:"GET"})},this.newRule=function(e){var r={resource:e.resource,limitApp:e.limitApp,grade:e.grade,count:e.count,strategy:e.strategy,refResource:e.refResource,controlBehavior:e.controlBehavior,warmUpPeriodSec:e.warmUpPeriodSec,maxQueueingTimeMs:e.maxQueueingTimeMs,app:e.app,ip:e.ip,port:e.port};return t({url:"/flow/new.json",params:r,method:"GET"})},this.saveRule=function(e){var r={id:e.id,resource:e.resource,limitApp:e.limitApp,grade:e.grade,count:e.count,strategy:e.strategy,refResource:e.refResource,controlBehavior:e.controlBehavior,warmUpPeriodSec:e.warmUpPeriodSec,maxQueueingTimeMs:e.maxQueueingTimeMs};return t({url:"/flow/save.json",params:r,method:"GET"})},this.deleteRule=function(e){var r={id:e.id,app:e.app};return t({url:"/flow/delete.json",params:r,method:"GET"})}}]),(app=angular.module("sentinelDashboardApp")).service("DegradeService",["$http",function(t){this.queryMachineRules=function(e,r,a){return t({url:"degrade/rules.json",params:{app:e,ip:r,port:a},method:"GET"})},this.newRule=function(e){var r={id:e.id,resource:e.resource,limitApp:e.limitApp,count:e.count,timeWindow:e.timeWindow,grade:e.grade,app:e.app,ip:e.ip,port:e.port};return t({url:"/degrade/new.json",params:r,method:"GET"})},this.saveRule=function(e){var r={id:e.id,resource:e.resource,limitApp:e.limitApp,grade:e.grade,count:e.count,timeWindow:e.timeWindow};return t({url:"/degrade/save.json",params:r,method:"GET"})},this.deleteRule=function(e){var r={id:e.id,app:e.app};return t({url:"/degrade/delete.json",params:r,method:"GET"})}}]),(app=angular.module("sentinelDashboardApp")).service("SystemService",["$http",function(t){this.queryMachineRules=function(e,r,a){return t({url:"system/rules.json",params:{app:e,ip:r,port:a},method:"GET"})},this.newRule=function(e){var r={app:e.app,ip:e.ip,port:e.port};return 0===e.grade?r.avgLoad=e.avgLoad:1===e.grade?r.avgRt=e.avgRt:2===e.grade?r.maxThread=e.maxThread:3===e.grade&&(r.qps=e.qps),t({url:"/system/new.json",params:r,method:"GET"})},this.saveRule=function(e){var r={id:e.id};return 0===e.grade?r.avgLoad=e.avgLoad:1===e.grade?r.avgRt=e.avgRt:2===e.grade?r.maxThread=e.maxThread:3===e.grade&&(r.qps=e.qps),t({url:"/system/save.json",params:r,method:"GET"})},this.deleteRule=function(e){var r={id:e.id,app:e.app};return t({url:"/system/delete.json",params:r,method:"GET"})}}]),(app=angular.module("sentinelDashboardApp")).service("MachineService",["$http",function(r){this.getAppMachines=function(e){return r({url:"app/"+e+"/machines.json",method:"GET"})}}]),(app=angular.module("sentinelDashboardApp")).service("IdentityService",["$http",function(t){this.fetchIdentityOfMachine=function(e,r,a){return t({url:"resource/machineResource.json",params:{ip:e,port:r,searchKey:a},method:"GET"})},this.fetchClusterNodeOfMachine=function(e,r,a){return t({url:"resource/machineResource.json",params:{ip:e,port:r,type:"cluster",searchKey:a},method:"GET"})}}]),(app=angular.module("sentinelDashboardApp")).service("MetricService",["$http",function(s){this.queryAppSortedIdentities=function(e){return s({url:"/metric/queryTopResourceMetric.json",params:e,method:"GET"})},this.queryByAppAndIdentity=function(e){return s({url:"/metric/queryByAppAndResource.json",params:e,method:"GET"})},this.queryByMachineAndIdentity=function(e,r,a,t,o){var i={ip:e,port:r,identity:a,startTime:t.getTime(),endTime:o.getTime()};return s({url:"/metric/queryByAppAndResource.json",params:i,method:"GET"})}}]);
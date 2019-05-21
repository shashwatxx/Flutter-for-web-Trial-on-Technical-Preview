define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui', 'packages/myportfolio/profile_page', 'packages/flutter_web/animation', 'packages/myportfolio/resume'], function(dart_sdk, material, ui, profile_page, animation, resume) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material__app = material.src__material__app;
  const src__material__theme_data = material.src__material__theme_data;
  const src__material__colors = material.src__material__colors;
  const src__material__page = material.src__material__page;
  const ui$ = ui.ui;
  const profile_page$ = profile_page.profile_page;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__navigator = animation.src__widgets__navigator;
  const src__widgets__binding = animation.src__widgets__binding;
  const resume$ = resume.resume;
  const main = Object.create(dart.library);
  let BuildContextToResume = () => (BuildContextToResume = dart.constFn(dart.fnType(resume$.Resume, [src__widgets__framework.BuildContext])))();
  let RouteSettingsToMaterialPageRoute = () => (RouteSettingsToMaterialPageRoute = dart.constFn(dart.fnType(src__material__page.MaterialPageRoute, [src__widgets__navigator.RouteSettings])))();
  let GlobalKeyOfNavigatorState = () => (GlobalKeyOfNavigatorState = dart.constFn(src__widgets__framework.GlobalKey$(src__widgets__navigator.NavigatorState)))();
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  main.MyApp = class MyApp extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__app.MaterialApp.new({debugShowCheckedModeBanner: false, theme: src__material__theme_data.ThemeData.new({brightness: ui$.Brightness.dark, primaryColorDark: src__material__colors.Colors.black, fontFamily: "GoogleSansRegular"}), home: new profile_page$.ProfilePage.new({$creationLocationd_0dea112b090073317d4: const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 15, file: "org-dartlang-app:///packages/myportfolio/main.dart", parameterLocations: const$ || (const$ = dart.constList([], src__widgets__widget_inspector._Location))})))}), onGenerateRoute: dart.fn(settings => new src__material__page.MaterialPageRoute.new({builder: dart.fn(context => new resume$.Resume.new({$creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 71, file: "org-dartlang-app:///packages/myportfolio/main.dart", parameterLocations: const$1 || (const$1 = dart.constList([], src__widgets__widget_inspector._Location))})))}), BuildContextToResume())}), RouteSettingsToMaterialPageRoute()), onUnknownRoute: dart.fn(settings => new src__material__page.MaterialPageRoute.new({builder: dart.fn(context => new resume$.Resume.new({$creationLocationd_0dea112b090073317d4: const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 71, file: "org-dartlang-app:///packages/myportfolio/main.dart", parameterLocations: const$3 || (const$3 = dart.constList([], src__widgets__widget_inspector._Location))})))}), BuildContextToResume())}), RouteSettingsToMaterialPageRoute()), navigatorKey: GlobalKeyOfNavigatorState()._check(this.key), $creationLocationd_0dea112b090073317d4: const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 12, file: "org-dartlang-app:///packages/myportfolio/main.dart", parameterLocations: const$11 || (const$11 = dart.constList([const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 9, name: "debugShowCheckedModeBanner"}))), const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 9, name: "theme"}))), const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 9, name: "home"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 9, name: "onGenerateRoute"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 9, name: "onUnknownRoute"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 9, name: "navigatorKey"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main.MyApp.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  let const$13;
  let const$14;
  main.main = function() {
    return async.async(dart.dynamic, function* main$() {
      src__widgets__binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 6, column: 10, file: "org-dartlang-app:///packages/myportfolio/main.dart", parameterLocations: const$13 || (const$13 = dart.constList([], src__widgets__widget_inspector._Location))})))}));
    });
  };
  dart.trackLibraries("packages/myportfolio/main", {
    "package:myportfolio/main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/myportfolio/main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAY4B;AACxB,YAAO,qEACyB,cACrB,qDACkB,uCACE,gDACb,6BAER,8WACW,QAAe,YACvB,wDAA2B,QAAc,WAAY,oaAE9C,QAAe,YACtB,wDAA2B,QAAc,WAAY,qcAEhD;IACpB;;;QAnBiB;;AAAQ,8CAAW,GAAG;;EAAC;;;;;;;;;AALtC;MACF,6BAAO;IACT","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map

if (window.parent["ethereumHelper"]) {
  window["ethereumHelper"] = window.parent["ethereumHelper"];
  window["ethereum"] = window.parent["ethereum"];
  console.log('-----plugin injected-------')
}


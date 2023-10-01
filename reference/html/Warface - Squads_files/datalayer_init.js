(function() {
  function getCookie(name) {
    let matches = document.cookie.match(
      new RegExp("(?:^|; )" + name.replace("/([.$?*|{}()[]\\/+^])/g", "\\$1") + "=([^;]*)")
    );

    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  const datalayer_fallback_language = window.location.host === "ru.warface.com" ? "ru" : "en";
  const datalayer_language = getCookie("cur_language") || datalayer_fallback_language;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ localization: datalayer_language });
  window.dataLayer.push({ roulette: "2020-08-01/08-30" });
})();

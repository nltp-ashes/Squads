(function () {
	var olProjectId = '101750';
	var olEntryPointStr = (typeof olEntryPoint != 'undefined') ? '&_1larg_ep=' + olEntryPoint : '';
	var partnerScript = document.createElement('script');
	partnerScript.type = 'text/javascript';
	partnerScript.async = true;
	partnerScript.src = 'https://1l-hit.my.games/v1/hit/' + olProjectId + '.js?r=' + encodeURIComponent(document.referrer) + olEntryPointStr + '&rnd=' + Math.random();
	var firstScript = document.getElementsByTagName('script')[0];
	firstScript.parentNode.insertBefore(partnerScript, firstScript);
})();

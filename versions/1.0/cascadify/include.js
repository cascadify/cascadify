(function() {const basePath=(function(){const script=document.currentScript||(function(){const scripts = document.getElementsByTagName('script');return scripts[scripts.length - 1];})();return script.src.replace(/[^\/]+$/,'');})();
    const requiredFiles = [
        'style.css'
    ];
function loadScript(url){const script=document.createElement('script');script.src=basePath+url;script.type='text/javascript';script.async=true;document.head.appendChild(script);}requiredFiles.forEach(loadScript);})();
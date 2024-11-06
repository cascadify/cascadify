(function() {
    const basePath=(function(){
        const script=document.currentScript||(function(){
            const scripts = document.getElementsByTagName('script');
            return scripts[scripts.length - 1];})();
            return script.src.replace(/[^\/]+$/,'');
        })();
    const requiredFiles = [
        'style.css'
    ];
function loadScript(url){
    console.log("Load cascadify file: "+ url)
    if (url.endsWith(".js")){
        const script=document.createElement('script');
        script.src=basePath+url;
        script.type='text/javascript';
        script.async=true;
        document.head.appendChild(script);
    } else if (url.endsWith(".css")){
        const link=document.createElement('link');
        link.href=basePath+url;
        link.rel="stylesheet";
        document.head.appendChild(link);
    }
}
requiredFiles.forEach(loadScript);
})();

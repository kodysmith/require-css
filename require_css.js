if((typeof RequireCss) === "undefined"){
    RequireCss = {files: {}};
}

define('require_css', [], function() {

    function requireCss() {
        for (var i = 0; i < arguments.length; i++) {
            if(RequireCss.files[arguments[i]] === undefined){
                var fileref = document.createElement("link")
                fileref.setAttribute("rel", "stylesheet")
                fileref.setAttribute("type", "text/css")
                fileref.setAttribute("href", arguments[i])
            }
            if(typeof fileref != "undefined"){
                document.getElementsByTagName("head")[0].appendChild(fileref)
                RequireCss.files[arguments[i]] = true;
            }
        }
    }

    return requireCss;
});

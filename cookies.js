let accept = (type) => {
    document.cookie = "type=" + type;
    document.getElementById("cookiediag").close();
}

let getCookie = c => {
    let val = document.cookie.split('; ').map(x => x.split("=")).filter(x => x.length == 2).filter(x => x[0] == c);
    if(val.length != 1)
        return "";
    return val[0][1];
}

let display = () => {
    if(getCookie("type") == ""){
        document.getElementById("cookiediag").show();
    }

}
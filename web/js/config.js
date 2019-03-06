window.config = {
    api: 'http://118.112.189.117/api',
    token: 'ACCESS-TOKEN',
    appName: 'SB Admin <sup>2</sup>'
}
$(
    $.ajaxSetup({
        contentType: 'application/json; charset=utf-8',
        beforeSend: function (xhr) {
            if (localStorage.getItem(window.config.token)) {
                xhr.setRequestHeader(window.config.token, localStorage.getItem(window.config.token));
            }
        },
        dataType: "json",
        complete: function (xhr, ts) {
            console.log("ajax complete");
            if (xhr.status == 200) {
                if (xhr.responseJSON) {
                    if (xhr.responseJSON.errorCode != 200) {
                        if (xhr.responseJSON.errorCode == 401) {
                            console.log("未登录");
                            alert(xhr.responseJSON.message);
                            setTimeout(function () {
                                window.location = "./login.html";
                            }, 1000);
                        } else {
                            alert(xhr.responseJSON.message);
                        }
                    }
                }
            }
        }
    })
)
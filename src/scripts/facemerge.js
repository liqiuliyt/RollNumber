var $ = require("jquery");
class FaceMerge {
    constructor(option) {
        this.default = {
            'merge_rate ': 80
        };
        this.options = Object.assign(this.default, option);
        this.template_url=this.options.template_url;
        this.merge_url=this.options.merge_url;
        this.merge_rate=this.options.merge_rate;
    }
    ajax() {
        let params = {
            'api_key': 'Igeuu3TuNOvn3nmWCrolUKa0O8HVIh3w',
            'api_secret': 'jl4mGveq_b2v28qLHSXHFaVViUtQ0msq',
            'template_url': this.template_url,
            'merge_url': this.merge_url,
            'merge_rate': this.merge_rate
        };
        console.log(22222,params);
        var p = new Promise(function (resolve, reject) {  
            $.ajax({
                url: 'https://api-cn.faceplusplus.com/imagepp/v1/mergeface',
                method: 'POST',
                data: params == null ? '' : params,
                async: true,
                contentType: "application/x-www-form-urlencoded",
                success: function (resp) {
                    // callback(resp);
                    resolve(resp);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.log(1111,XMLHttpRequest, textStatus, errorThrown);
                    if (XMLHttpRequest.status == "401") {
                        // window.parent.location = '/enterprise/enterprise_login.html';
                        // self.location = '/enterprise/enterprise_login.html';
                    } else {
                        console.log(4444,XMLHttpRequest.status);
                        // alert(XMLHttpRequest.responseText);
                    }
                    reject();
                }
            });
        });
        return p;
    }
}
export default FaceMerge;
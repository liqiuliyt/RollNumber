var $ = require("jquery");
class FaceMerge {
    constructor(option) {
        this.default = {
            'merge_rate ': 80
        };
        this.options = Object.assign(this.default, option);

    }
    ajax() {
        //    let _this=this;
        let params = {
            'api_key': 'Igeuu3TuNOvn3nmWCrolUKa0O8HVIh3w',
            'api_secret': 'jl4mGveq_b2v28qLHSXHFaVViUtQ0msq',
            'template_url': 'https://cdn1.zhizhucms.com/materials/origin/938821c52259e1206925e57ec526fa80_origin.jpeg',
            'merge_url': 'https://cdn1.zhizhucms.com/materials/origin/9beed908d40183cdfcf69a58255a91e3_origin.jpg',
            'merge_rate': 80
        };
        console.log(22222,params);
        var p = new Promise(function (resolve, reject) {  
            $.ajax({
                url: 'https://api-cn.faceplusplus.com/imagepp/v1/mergeface',
                type: 'POST',
                dataType: "json",
                data: params == null ? '' : JSON.stringify(params),
                async: true,
                contentType: "application/json",
                success: function (resp) {
                    console.log(6666,XMLHttpRequest.status);
                    callback(resp);
                    resolve();
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
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
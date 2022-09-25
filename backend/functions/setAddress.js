$(document).ready(function(){
    console.log("hello");
    var URL = "https://zipcloud.ibsnet.co.jp/api/search";
    var zipcode = "1080074";
    $('#search_address_btn').click(function(){
        http_request.get(URL+"?"+zipcode,function(error,response,body){
            console.log("あなたの住所"+body.results);
        })
    })
    
})
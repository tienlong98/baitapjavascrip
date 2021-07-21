function tinhtien() {
    var stb1 = document.getElementById("stb1").value;
    if (stb1 < 0) {
        alert("もう一度商品数をお選びください。");
        location.reload();
    } else {
        stb1 = stb1 * 500;
    }

    var stb2 = document.getElementById("stb2").value;
    if (stb2 < 0) {
        alert("もう一度商品数をお選びください。");
        location.reload();
    } else {
        stb2 = stb2 * 600;
    }

    var stb3 = document.getElementById("stb3").value;
    if (stb3 < 0) {
        alert("もう一度商品数をお選びください。");
        location.reload();
    } else {
        stb3 = stb3 * 700;
    }

    var shipping = 100;
    var giasp = stb1 + stb2 + stb3;;
    if (giasp == 0) {
        alert("商品数をお選びください。");

    } else {
        giasp = stb1 + stb2 + stb3;
    }

    var tongtien = shipping + giasp;
    document.getElementById("giasp").innerHTML = giasp + "円";
    document.getElementById("tongtien").innerHTML = tongtien + "円";
    if (tongtien >= 5000) {
        alert("ギフトを1つ選ぶ機会があります。");
        var element = document.getElementById("qua");
        element.classList.add("hienqua");
    }
}
var images = ["stb4.png", "stb5.png", "stb6.png", ];
for (var i = 0; i < images.length; i++) {
    document.getElementById("imageList").innerHTML += "<img width='30%' class='fix-stk' src=" + images[i] + ">";
}

function rdsmm() {
    var smm = Math.floor(Math.random() * 5);
    if (smm == 0) {
        document.getElementById("smm").innerHTML = "おめでとう。<br>" + "<img width='30%' class='fix-img-qua' src='stb4.png'>";
    } else if (smm == 1) {
        document.getElementById("smm").innerHTML = "おめでとう。<br>" + "<img width='30%' class='fix-img-qua' src='stb5.png'>";
    } else if (smm == 2) {
        document.getElementById("smm").innerHTML = "おめでとう。<br>" + "<img width='30%' class='fix-img-qua' src='stb6.png'>";
    } else {
        document.getElementById("smm").innerHTML = "申し訳ありませんが、次回もよろしくお願いします。<br>" + "<img width='30%' class='fix-img-qua' src='xl.jpg'>";
    }
}
var merk = "c";
var lengan = "pendek";
var size = "xl";

if (merk == "a") {
    if (lengan == "pendek") {
        if (size == "m") {
            console.log("50.000");
        } else if (size == "l") {
            console.log("60.000");
        } else if (size == "xl") {
            console.log("70.000");
        } else {
            console.log("merk a,lengan pendek size tsb tidak ada ");
        }


    } else if (lengan == "panjang") {
        if (size == "m") {
            console.log("100.000");
        } else if (size == "l") {
            console.log("125.000");
        } else if (size == "xl") {
            console.log("150.0000");
        } else {
            console.log("merk a, lengan panjang size tsb tidak ada");
        }

    } else {
        console.log("merk a type lengan salah");
    }
} else if (merk == "b") {
    if (lengan == "pendek") {
        if (size == "m") {
            console.log("200.000");
        } else if (size == "l") {
            console.log("215.000");
        } else if (size == "xl") {
            console.log("225.000");
        } else {
            console.log("merk b,lengan pendek size tsb tidak ada ");
        }

    } else if (lengan == "panjang") {
        if (size == "m") {
            console.log("250.000");
        } else if (size == "l") {
            console.log("275.000");
        } else if (size == "xl") {
            console.log("300.0000");
        } else {
            console.log("merk b, lengan panjang size tsb tidak ada");
        }
    } else {
        console.log("merk b, type lengan salah ");
    }
} else {
    console.log("merk tidak ada");
}
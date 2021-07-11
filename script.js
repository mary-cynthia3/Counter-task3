
    var i = 0;

    function increase()
    {

        //alert("Hello world")

        if (i < 50) {
            i++;
        } else if (i = 50) {
            i = 50;
        }
        document.getElementById("display").innerHTML = i;
    }

    function decrease() 
    {
        if (i > 0) {
            --i;
        } else if (i = 0) {
            i = 10;
        }
        document.getElementById("display").innerHTML = i;
    }

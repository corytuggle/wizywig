import React from 'react'

const getTheme = () => {
    var url = "http://colormind.io/api/";
    var data = '{"model":"default"}';
    var xhr = new XMLHttpRequest();

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
            var palette = JSON.parse(xhr.responseText).result;
            // console.log(palette);
            var themeZero = palette[0];
            // var themeOne = palette[1];
            var themeTwo = palette[2];
            var themeThree = palette[3];
            var themeFour = palette[4];

            // console.log((themeZero));
            // console.log((themeOne));
            // console.log((themeTwo));
            // console.log((themeThree));
            // console.log((themeFour));

            var pageBg = document.getElementById("page");
            var editorBox = document.getElementById("container");
            // var progressBar = document.getElementById("progress-bar");
            // var progressBarData = document.getElementById("progress-bar").getElementsByClassName("probar::before")[0];
            var editorBg = document.getElementById("container").getElementsByClassName("ql-editor")[0];
            var editorTxtCol = document.getElementById("container").getElementsByClassName("ql-editor")[0];
            var countBG = document.getElementById("counter");
            var countTxtCol = document.getElementById("counter");

            pageBg.style.backgroundColor =
                "rgb(" + themeThree[0] + ", " + themeThree[1] + ", " + themeThree[2] + ")";

            editorBox.style.backgroundColor =
                "rgb(" + themeTwo[0] + ", " + themeTwo[1] + ", " + themeTwo[2] + ")";

            // progressBar.style.backgroundColor =
            //     "rgb(" + themeOne[0] + ", " + themeOne[1] + ", " + themeOne[2] + ")";

            // progressBarData.style.backgroundColor =
            //     "rgb(" + themeFour[0] + ", " + themeFour[1] + ", " + themeFour[2] + ")";

            editorBg.style.backgroundColor =
                "rgb(" + themeFour[0] + ", " + themeFour[1] + ", " + themeFour[2] + ")";

            editorTxtCol.style.color =
                "rgb(" + themeTwo[0] + ", " + themeTwo[1] + ", " + themeTwo[2] + ")";

            countBG.style.backgroundColor =
                "rgb(" + themeZero[0] + ", " + themeZero[1] + ", " + themeZero[2] + ")";

            countTxtCol.style.color =
                "rgb(" + themeFour[0] + ", " + themeFour[1] + ", " + themeFour[2] + ")";
        }
    };
}

export default function RandomTheme() {
    return (
        <div id='theme-container'>
            <button id='theme-generator' onClick={getTheme}>Random Theme</button>
        </div>
    )
}

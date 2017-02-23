document.getElementById("btn-html2canvas").onclick = function(){

    html2canvas(document.getElementById("content"), {
        onrendered: function(canvas) {

            var imgData = canvas.toDataURL('image/jpeg');

            var doc = new jsPDF("p", "mm", "a4");
            //                               |
            // |—————————————————————————————|                     
            // A0 841×1189                           
            // A1 594×841                            
            // A2 420×594                            
            // A3 297×420                            
            // A4 210×297                            
            // A5 148×210                            
            // A6 105×148                            
            // A7 74×105                             
            // A8 52×74                              
            // A9 37×52                              
            // A10 26×37             
            //     |——|———————————————————————————|
            //                                 |——|——|
            //                                 |     |      
            doc.addImage(imgData, 'JPEG', 0, 0,210,297);

            doc.save('content.pdf');
        }
    });

}

document.getElementById("btn-html2canvas").onclick = function(){

    // 将 id 为 content 的 div 渲染成 canvas
    let parent = document.getElementById("content")
    let width = parent.offsetWidth;
    let height = parent.offsetHeight
    html2canvas(document.getElementById("content"))
        ,then(canvas => {
        // 渲染完成时调用，获得 canvas

            // 从 canvas 提取图片数据
            var imgData = canvas.toDataURL('image/jpeg');

            var doc = new jsPDF("p", "mm", [width, height]);

            doc.addImage(imgData, 'JPEG', 0, 0,width, height);

            doc.save('content.pdf');
        
    })
}

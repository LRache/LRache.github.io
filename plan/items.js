document.getElementById("newItemForm").addEventListener("submit", function (evt) {
    evt.preventDefault();
    let formData = new FormData(this)
    fetch('https://localhost:8080/tripplan', {
        method: 'POST',
        body: formData
    })
        .then(function (response) {
            if (response.status === 201) {
                alert("添加成功")
            }
        })  // 假设服务器返回JSON数据// 处理返回的数据
})
const Status = Object.freeze(
    {
        UNDEFINED: 0,
        FINISHED: 1,
        NORMAL: 2,
        DELAY: 3,
        CANCEL: 4,
        PLANNING: 5,
    }
)

const stringMap = new Map(
    [
        [Status.UNDEFINED, "未定义"],
        [Status.FINISHED, "已完成"],
        [Status.NORMAL, "正常"],
        [Status.DELAY, "延期"],
        [Status.CANCEL, "取消"],
        [Status.PLANNING, "计划中"],
    ]
);

const classMap = new Map(
    [
        [Status.UNDEFINED, "undefined"],
        [Status.FINISHED, "status-finished"],
        [Status.NORMAL, "status-normal"],
        [Status.DELAY, "status-delay"],
        [Status.CANCEL, "cancel"],
        [Status.PLANNING, "status-normal"],
    ]
);
let tableData = []
// const tableData = [
//     {"des": "浙江工业大学", "date": "2023年10月21日", "city": "浙江杭州","status": Status.FINISHED, "note": ""},
//     {"des": "浙江理工大学", "date": "2023年10月26日", "city": "浙江杭州", "status": Status.FINISHED, "note": ""},
//     {"des": "中国计量大学", "date": "2023年11月15日", "city": "浙江杭州", "status": Status.FINISHED, "note": ""},
//     {"des": "浙江音乐学院", "date": "2023年11月16日", "city": "浙江杭州", "status": Status.FINISHED, "note": ""},
//     {"des": "浙江财经大学", "date": "2024年4月18日", "city": "浙江杭州", "status": Status.FINISHED, "note": ""},
//     {"des": "杭州师范大学", "date": "2024年4月18日", "city": "浙江杭州", "status": Status.FINISHED, "note": ""},
//     {"des": "哈尔滨工业大学", "date": "2024年5月3日", "city": "黑龙江哈尔滨", "status": Status.FINISHED, "note": ""},
//     {"des": "哈尔滨工程大学", "date": "2024年5月3日", "city": "黑龙江哈尔滨", "status": Status.FINISHED, "note": ""},
//     {"des": "苏州大学", "date": "2024年7月", "city": "江苏苏州", "status": Status.PLANNING, "note": ""},
//     {"des": "浙江工业大学", "date": "2024年7月", "city": "浙江杭州", "status": Status.PLANNING, "note": ""},
// ];

function fillTable(data) {
    const tableBody = document.querySelector('#tripTable tbody');
    var i = 1;
    data.forEach(row => {
        const tr = document.createElement('tr');
        var td = document.createElement('td');
        td.textContent = i++;
        td.classList.add(classMap.get(row.status))
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = row.des;
        td.classList.add(classMap.get(row.status))
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = row.city;
        td.classList.add(classMap.get(row.status))
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = row.date;
        td.classList.add(classMap.get(row.status))
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = stringMap.get(row.status);
        td.classList.add(classMap.get(row.status))
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = row.note;
        td.classList.add(classMap.get(row.status))
        tr.appendChild(td);

        tableBody.appendChild(tr);
    });
}

window.onload = () => {
    fetch('localhost:8080/tripplan')
    .then(response => response.json())
    .then(data => {
        fillTable(data);
    })
};

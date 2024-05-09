const Status = Object.freeze(
    {
        UNDEFINED: 0,
        FINISHED: 1,
        NORMAL: 2,
        DELAY: 3,
        CANCEL: 4,
    }
)

const stringMap = new Map(
    [
        [Status.UNDEFINED, "未定义"],
        [Status.FINISHED, "已完成"],
        [Status.NORMAL, "正常"],
        [Status.DELAY, "延期"],
        [Status.CANCEL, "取消"],
    ]
);

const classMap = new Map(
    [
        [Status.UNDEFINED, "undefined"],
        [Status.FINISHED, "status-finished"],
        [Status.NORMAL, "status-normal"],
        [Status.DELAY, "status-delay"],
        [Status.CANCEL, "cancel"],
    ]
);

const tableData = [
    {"des": "浙江工业大学", "date": "2023年10月21日", "status": Status.FINISHED, "note": ""},
    {"des": "浙江理工大学", "date": "2023年10月26日", "status": Status.FINISHED, "note": ""},
    {"des": "中国计量大学", "date": "2023年11月15日", "status": Status.FINISHED, "note": ""},
    {"des": "浙江音乐学院", "date": "2023年11月16日", "status": Status.FINISHED, "note": ""},
    {"des": "浙江财经大学", "date": "2024年4月18日", "status": Status.FINISHED, "note": ""},
    {"des": "浙江师范大学", "date": "2024年4月18日", "status": Status.FINISHED, "note": ""},
    {"des": "哈尔滨工业大学", "date": "2024年5月3日", "status": Status.FINISHED, "note": ""},
    {"des": "哈尔滨工程大学", "date": "2024年5月3日", "status": Status.FINISHED, "note": ""},
];

const tableHeaders = ["des", "date", "status"]

function fillTable(data) {
    const tableBody = document.querySelector('#myTable tbody');
    var i = 1;
    data.forEach(row => {
        const tr = document.createElement('tr');
        var td = document.createElement('td');
        td.textContent = i++;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = row.des;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = row.date;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = stringMap.get(row.status);
        td.classList.add(classMap.get(row.status))
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = row.note;
        tr.appendChild(td);

        tableBody.appendChild(tr);
    });
}

window.onload = () => {
    fillTable(tableData);
};
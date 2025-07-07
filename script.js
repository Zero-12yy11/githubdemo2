
// 年龄验证
var age = prompt("请输入您的年龄：");

// 获取任务清单容器
var Table1 = document.getElementById("Table1");

// 验证逻辑
if (age >= 18) {
    Table1.classList.remove("hidden"); // 显示清单
} else {
    document.write("<h2 style='color:red'>未满18岁无法查看！</h2>");
}
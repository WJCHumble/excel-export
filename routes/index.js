const fs = require("fs");
const xlsx = require("node-xlsx");

const routes = (router) => {
  router.get("/excelExport", async function (ctx, next) {
    const res = [
      ["name", "age"],
      ["五柳", "22"],
    ];
    // 生成 excel 对应的 buffer 二进制文件
    const buffer = xlsx.build([{ name: "firstSheet", data: res }]);
    // 设置文件名相关的响应首部字段
    ctx.set("Content-Disposition", "inline;filename=test.xlsx;filename*=UTF-8");
    // 返回给前端
    ctx.body = buffer;
  });
};

module.exports = routes;

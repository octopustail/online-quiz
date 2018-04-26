let fs = require("fs");
let main = require("../main-tests")

describe('main()', function () {


it('should get correct student info', function () {
    var correct_info = {
        stuClass: "1班",
        stuId: "001",
        stuName: "王小闹"
    };
    var result = main();
    console.log(result);
    expect(fs.statSync("index.html").isFile()).toBe(true)

})

});

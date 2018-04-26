//window.addEventListener('load', main, false);

module.exports = function main() {
    var studentInfo = {};

    studentInfo.stuClass = document.getElementById('studentClass');
    studentInfo.stuId = document.getElementById('studentId');
    studentInfo.stuName = document.getElementById('studentName');

    return studentInfo;
};
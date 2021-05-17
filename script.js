var testScore = {
    name: "",
    math: 0,
    physical: 0,
    chemistry: 0,
};
var students = [];
// Nhập vào ô
function input() {
    // Phương thức getElementById() lấy giá trị của văn bản đầu vào
    var fullNameInput = document.getElementById("fullName").value;
    var mathScoreInput = document.getElementById("mathScore").value;
    var physicalScoreInput = document.getElementById("physicalScore").value;
    var chemicalScoreInput = document.getElementById("chemicalScore").value;
    //  Đổi giá trị kiểu dữ liệu
    var fullName = fullNameInput;
    // Hàm này chuyển dữ liệu sang định dạng float
    var mathScore = parseFloat(mathScoreInput);
    var physicalScore = parseFloat(physicalScoreInput);
    var chemicalScore = parseFloat(chemicalScoreInput);
    // Tạo đối tượng
    // Object sắp xếp dữ liệu thông tin dựa vào key/value pairs.
    let student = {
        id: students.length + 1,
        name: fullName,
        math: mathScore,
        physical: physicalScore,
        chemistry: chemicalScore,
        average: "?",
    };
    // Hàm push() sẽ thêm mới một hoặc nhiều phần tử vào cuối mảng, hàm trả về chiều dài mảng mới / Hàm push() sẽ làm thay đổi chiều dài của mảng.
    students.push(student);

    fullNameInput.value = "";
    mathScoreInput.value = "";
    physicalScoreInput.value = "";
    chemicalScoreInput.value = "";
    // Check xem hàm Insert có giá trị trả về hay không
    InsertTable(student, false);
}
// Dùng append để thêm ô trong bảng
function InsertTable(student, isAvg) {
    // <tr> xác định hàng của <table>
    var nodeTr = document.createElement("tr");
    // createTextNode() được sử dụng để tạo nội dung văn bản.
    var textStt = document.createTextNode(student.id);
    //  <td> được dùng để tạo một phần tử nội dung trong bảng HTML
    var nodeTdStt = document.createElement("td"); // Create td node for fullName
    // Phương thức appendChild() gắn thêm nút con mới vào cuối danh sách nút con của một nút.
    nodeTdStt.appendChild(textStt);

    var textFullNameInput = document.createTextNode(student.name); //create value of td
    var nodeTdFullName = document.createElement("td"); // Create td node for fullName
    nodeTdFullName.appendChild(textFullNameInput);

    var textMathScore = document.createTextNode(student.math);
    var nodeTdMatch = document.createElement("td");
    nodeTdMatch.appendChild(textMathScore);

    var textPhysicalScoreInput = document.createTextNode(student.physical);
    var nodeTdPhysical = document.createElement("td");
    nodeTdPhysical.appendChild(textPhysicalScoreInput);

    var textChemicalScoreInput = document.createTextNode(student.chemistry);
    var nodeTdChemical = document.createElement("td");
    nodeTdChemical.appendChild(textChemicalScoreInput);
    var nodeTdAvg = document.createElement("td");
    if (isAvg) {
        //tinh diem trung binh
        var avg = (student.math + student.physical + student.chemistry) / 3;
        // Tạo class học sinh trên 8 điểm
        if (avg >= 8) {
            nodeTdAvg.classList.add("avg8");
        }
        var textAvg = document.createTextNode(avg);
        nodeTdAvg.classList.add("avg-point");
        nodeTdAvg.appendChild(textAvg);
    } else {
        var textAvg = document.createTextNode(student.average);
        nodeTdAvg.appendChild(textAvg);
    }

    nodeTr.appendChild(nodeTdStt);
    nodeTr.appendChild(nodeTdFullName);
    nodeTr.appendChild(nodeTdMatch);
    nodeTr.appendChild(nodeTdPhysical);
    nodeTr.appendChild(nodeTdChemical);
    nodeTr.appendChild(nodeTdAvg);
    document.getElementById("table-body").appendChild(nodeTr);
}
// Tính điểm trung bình
function diemTB() {
    if (students != null && students.length > 0) {
        document.getElementById("table-body").innerHTML = "";
        for (var i = 0; i < students.length; i++) {
            var student = students[i];
            InsertTable(student, true);
        }
    }
}
// Xác định học sinh giỏi
function hsGioi() {
    var allGoodStudent = document.getElementsByClassName("avg8");
    for (var i = 0; i < allGoodStudent.length; i++) {
        allGoodStudent[i].style.background = "red";
    }
}
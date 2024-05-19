const UBER_CAR = "uberCar"
const UBER_SUV = "uberSUV"
const UBER_BLACK = "uberBlack"

let tinhGiaKmDauTien = (loaiXe) => {
    switch (loaiXe) {
        case UBER_CAR:
            return 8000;
        case UBER_SUV:
            return 9000;
        case UBER_BLACK:
            return 10000;
    }
}

let tinhGia1Den19 = (loaiXe) => {
    switch (loaiXe) {
        case UBER_CAR:
            return 7500;
        case UBER_SUV:
            return 8500;
        case UBER_BLACK:
            return 9500;
    }
}

let tinhGiaTren19 = (loaiXe) => {
    switch (loaiXe) {
        case UBER_CAR:
            return 7000;
        case UBER_SUV:
            return 8000;
        case UBER_BLACK:
            return 9000;
    }
}

let tinhGiaThoiGianCho = (loaiXe) => {
    switch (loaiXe) {
        case UBER_CAR:
            return 2000;
        case UBER_SUV:
            return 3000;
        case UBER_BLACK:
            return 3500;
    }
}

document.querySelector(".contact100-form-btn").onclick = function () {
    let inputLoaiXe = document.querySelector("input[type='radio']:checked")
    if (!inputLoaiXe) {
        alert("chọn xe chưa?")
        return
    }
    let loaiXe = inputLoaiXe.value;


    let soKM = document.getElementById("txt-km").value * 1;
    let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
    let soKMHon19 = 0
    if (soKM > 19) {
        soKMHon19 = soKM - 19;
    }

    let tongTien = 0;

    let giaKmDauTien = tinhGiaKmDauTien(loaiXe);
    let gia1Den19 = tinhGia1Den19(loaiXe);
    let giaTren19 = tinhGiaTren19(loaiXe)
    let giaTGCho = tinhGiaThoiGianCho(loaiXe)

    let tongTienTGCho = Math.floor(thoiGianCho / 3) * giaTGCho;

    if (soKM <= 19 && soKM != 0) {
        tongTien = giaKmDauTien + gia1Den19 * (soKM - 1) + tongTienTGCho
    }
    else if (soKM > 0) {
        tongTien = giaKmDauTien + gia1Den19 * 18 + giaTren19 * soKMHon19 + tongTienTGCho
    }


    document.getElementById("divThanhTien").style.display = "block"

    document.getElementById("xuatTien").innerHTML = tongTien.toLocaleString("vi", {
        style: 'currency',
        currency: 'VND',
    })

    
}
document.querySelector(".btn2").onclick = function(){
    $('#exampleModal').modal('show')

    document.querySelector(".modal-body").innerHTML = `
        <table class="table table-bordered " width="600" >
        <tr>
            <th colspan="4"  class="text-center ">CHI TIẾT HÓA ĐƠN</th>
        </tr>
        <tr>
            <th class="text-center" style="padding-top: 30px">CHI TIẾT</th>
            <th class="text-center p-3">SỬ DỤNG</th>
            <th class="text-center p-3">ĐƠN GIÁ (1.000đ)</th>
            <th class="text-center p-3">THÀNH TIỀN (1.000đ)</th>
        </tr>
        <tr>
          <th>KM ĐẦU TIÊN</th>
          <td>0.8</td>
          <td>${giaKmDauTien.toLocaleString("vi", {
            style: 'currency',
            currency: 'VND',
        })}</td>
          <td>${giaKmDauTien.toLocaleString("vi", {
            style: 'currency',
            currency: 'VND',
        })}</td>
        </tr>
        <tr>
          <th>Từ 1 đến ${soKM}</th>
          <td>${soKM - 1 - soKMHon19}</td>
          <td>${gia1Den19.toLocaleString("vi", {
            style: 'currency',
            currency: 'VND',
        })}</td>
          <td>${((soKM - 1 - soKMHon19) * gia1Den19).toLocaleString("vi", {
            style: 'currency',
            currency: 'VND',
        })}</td>
        </tr>
        <tr>
          <th>Từ 19 đến ${soKM}</th>
          <td>${soKMHon19}</td>
          <td>${giaTren19.toLocaleString("vi", {
            style: 'currency',
            currency: 'VND',
        })}</td>
          <td>${(giaTren19 * (soKMHon19)).toLocaleString("vi", {
            style: 'currency',
            currency: 'VND',
        })}</td>
        </tr>
        <tr>
          <th>Thời gian chờ</th>
          <td>${thoiGianCho}</td>
          <td>${giaTGCho.toLocaleString("vi", {
            style: 'currency',
            currency: 'VND',
        })}</td>
          <td>${tongTienTGCho.toLocaleString("vi", {
            style: 'currency',
            currency: 'VND',
        })}</td>
        </tr>
        <tr>
          <td colspan="4" align="right">Tổng tiền: ${tongTien.toLocaleString("vi", {
            style: 'currency',
            currency: 'VND',
        })}</td>
        </tr>
    </table>`
}

//input; output:bài này đêu là number
/*  Bài 1:Tính tiền lương nhân viên
Viết chương trình tính tiền lương nhân viên.
lương 1 ngày :100.000
cho người dùng nhập vào số ngày làm, ở đây là: 26 ngày;  */ 
//input
var luong1Ngay = 100000;
var soNgayLam = 26;
//output: tiền lương nhân viên dựa trên số ngày làm;
var luong = 0;
//processed
var luong = luong1Ngay * soNgayLam;
console.log('lương =',luong.toLocaleString());


/*bài 2: Tính giá trị trung bình
Viết chương trình nhập vào 5 số thực.
Tính giá trị trung của 5 số này và xuất ra màn hình. */
//input: 5 số thực-- 6 ,13 , 21, 25 , 30;
var soThuc1 = 6;
var soThuc2 = 13;
var soThuc3 = 21;
var soThuc4 = 25;
var soThuc5 = 30;
//output:giá trị trung bình của 5 số thực ;
var soTrungBinh = 0;
//processed
var soTrungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
console.log('Giá trị trung bình =',soTrungBinh);


/*  bài 3:Quy đổi tiền
Giá USD hiện nay đang là 23.500 VND 
Viết chương trình quy đổi từ USD sang VND 
Cho người dùng nhập vào số tiền USD.
Tính và xuất ra số tiền sau quy đổi VND.
VD:người dùng nhập 5 usd => 47000 VND  */
//input: 
var nhapUSD = 5;
const tiGia = 23500;
//output:
var giaVND = 0;
//processed
var giaVND = nhapUSD * tiGia;
console.log('giá trị VND =',giaVND.toLocaleString());


/* Bài 4: Tính diện tích , chu vi hình chữ nhật 
Viết chương trình nhập vào "2" chiều dài và chiều rộng của HCN (hình chữ nhật).
Tính và xuất ra diện tích ,chu vi của HCN đó biết:
chiều rộng bằng 5cm ,chiều dài bằng 10cm */
//input:
var chieuRong = 5;
var chieuDai = 10;
//output:
var dienTich = 0;
var chuVi = 0;
//processed:
var dienTich = chieuDai * chieuRong;
var chuVi = (chieuDai + chieuRong) * 2;
console.log('diện tích =',dienTich);
console.log('chu vi =',chuVi);


/*bài 5: viết chương trình nhập vào 1 số có 2 chữ số 
Tính tổng 2 ký số của số vừa nhập.
ví dụ : 81 => 8 + 1 = 9 */
//input
var soNhap = 81;
//output:
var tong2KySo = 0;
//processed:
var soHangChuc = Math.floor(soNhap / 10);
var soHangDonVi = Math.floor(soNhap % 10);

var tong2KySo = soHangChuc + soHangDonVi;
console.log('số hàng chục =',soHangChuc );
console.log('số hàng đơn vị =',soHangDonVi);
console.log('tổng 2 ký số =',tong2KySo);
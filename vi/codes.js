window.CODES = {
 "Thiết bị offline": {
  "cat": "Tài khoản / Quyền",
  "alias": "offline 21 không online không kết nối không thấy thiết bị",
  "sym": "Máy bị điều khiển hiện \"offline\" trong danh sách máy điều khiển, hoặc báo không thấy thiết bị (mã lỗi log 21)",
  "l1": "Xác nhận PC máy bị điều khiển đang bật, online, không ngủ, client SunLogin đang chạy và \"đã đăng nhập\"; mạng không ổn thì khởi động lại router hoặc đổi mạng",
  "l2": "Offline = máy bị điều khiển hoàn toàn chưa online, đừng kiểm tra mạng trước: sau khi ngủ card mạng thường mất kết nối, laptop gập nắp mất WiFi, chế độ tiết kiệm pin Android giết nền; Windows kiểm tra services.msc xem dịch vụ \"SunLogin\" có chạy không",
  "tip": "Máy không người trực dài hạn: bật \"tự khởi động + tự đăng nhập + truy cập không người trực\", Android thêm SunLogin vào whitelist tiết kiệm pin",
  "scene": "Điều khiển PC ở nhà thì thấy offline, hóa ra laptop gập nắp WiFi đã ngắt"
 },
 "Kết nối timeout": {
  "cat": "Mạng / Traversal",
  "alias": "timeout không kết nối lỗi kết nối 15 3 kênh",
  "sym": "Sau khi bấm connect quay vòng rồi cuối cùng \"kết nối thất bại / không thiết lập được kênh\" (mã log 3=mạng không thông, 15=timeout thiết lập kênh)",
  "l1": "Tắt firewall / diệt virus hai đầu trước rồi thử; thoát đăng nhập lại hai đầu; cập nhật mới nhất; đổi môi trường mạng (hotspot điện thoại)",
  "l2": "90% \"kết nối thất bại\" kẹt ở giai đoạn 2 \"thiết lập kênh\": 15=P2P không xuyên và relay cũng thất bại (mạng quá kém), 3=tầng mạng bị chặn; đổi hotspot mà được thì cơ bản là vấn đề mạng / firewall",
  "tip": "Định vị 3 giai đoạn: xác thực tài khoản → thiết lập kênh → truyền hình ảnh; timeout hầu như đều ở \"thiết lập kênh\"",
  "scene": "Không kết nối ở công ty, về nhà hay hotspot kết nối ngay → vấn đề môi trường mạng, không phải phần mềm hỏng"
 },
 "Sai mật khẩu truy cập": {
  "cat": "Tài khoản / Quyền",
  "alias": "mật khẩu xác thực thất bại 10 access password",
  "sym": "Sau khi nhập mật khẩu báo xác thực thất bại / sai mật khẩu (mã log 10)",
  "l1": "Xác nhận nhập \"mật khẩu truy cập\" chứ không phải mật khẩu đăng nhập tài khoản SunLogin; đặt lại mật khẩu truy cập ở máy bị điều khiển rồi kết nối",
  "l2": "Mật khẩu truy cập là mật khẩu điều khiển riêng do máy bị điều khiển đặt, thường bị đổi hoặc nhầm với mật khẩu đăng nhập; sau khi đổi máy điều khiển dùng mật khẩu mới",
  "tip": "Mật khẩu truy cập ≠ mật khẩu đăng nhập: xem / đặt lại trong \"Cài đặt → Bảo mật\" máy bị điều khiển",
  "scene": "Cứ dùng mật khẩu tài khoản đăng nhập để kết nối, đương nhiên báo sai"
 },
 "Firewall chặn": {
  "cat": "Mạng / Traversal",
  "alias": "firewall defender diệt virus whitelist chặn",
  "sym": "Kết nối timeout ngay, không popup gì (bị SW bảo mật chặn âm thầm, chiếm hơn nửa số lỗi kết nối)",
  "l1": "Thêm SunLogin vào trust firewall / SW bảo mật: Windows Defender Firewall \"cho phép ứng dụng\" tick SunloginClient; thêm trust ở diệt virus bên thứ ba",
  "l2": "Whitelist phải thêm cả thư mục cài đặt (vd C:\\Program Files (x86)\\Oray\\SunLogin\\), đừng chỉ thêm exe chính—SunLogin gọi nhiều thành phần khi chạy",
  "tip": "Kiểm chứng nhanh: tắt hẳn SW bảo mật (không chỉ tắt bảo vệ thời gian thực) rồi kết nối, được thì 100% nó chặn",
  "scene": "Tưởng mạng hỏng, thực ra diệt virus âm thầm chặn yêu cầu mạng của SunLogin"
 },
 "Mạng công ty không được": {
  "cat": "Mạng / Traversal",
  "alias": "mạng công ty mạng trường doanh nghiệp dpi quản lý hành vi internet cổng 443",
  "sym": "Ở nhà được, đến công ty / trường thì không kết nối (cổng thông nhưng lưu lượng bị deep packet inspection chặn)",
  "l1": "Nhờ IT công ty cho phép whitelist SunLogin; hoặc máy bị điều khiển tạm dùng hotspot điện thoại để bypass; thử SunLogin bản SOS (cách kết nối khác)",
  "l2": "Mạng doanh nghiệp thường có thiết bị quản lý hành vi internet, SunLogin đi TCP 443 (cùng cổng với HTTPS) bị DPI nhận diện và chặn; kinh nghiệm cộng đồng: cho phép TCP 51020–51030 + UDP 50000–50010 ở router doanh nghiệp, hoặc đổi chế độ kết nối từ \"tốc độ cao\" sang \"tương thích\" (80/443 phổ biến hơn)",
  "tip": "Đánh giá có phải mạng công ty: đổi cả hai sang hotspot điện thoại, được thì 100% mạng công ty chặn",
  "scene": "Công ty áp dụng DPI, SunLogin bị coi là lưu lượng HTTPS bất thường rồi chặn"
 },
 "Màn hình đen": {
  "cat": "Hình ảnh / Hiệu năng",
  "alias": "màn hình đen black screen không thấy hình toàn đen truyền hình ảnh",
  "sym": "Kết nối được nhưng màn hình toàn đen / chỉ đen (kẹt ở giai đoạn 3 \"truyền hình ảnh\")",
  "l1": "Cấp quyền cho SunLogin ở máy bị điều khiển: macOS \"Cài đặt hệ thống → Quyền riêng tư & Bảo mật\" tick ghi màn hình / trợ năng / truy cập toàn ổ đĩa; Windows thử đổi chế độ desktop / kết nối lại",
  "l2": "Màn hình đen thường do thiếu quyền chụp hoặc chuyển GPU rời, bảo vệ màn hình khóa; laptop GPU rời có thể đặt SunLogin dùng iGPU để chụp trong chính sách nguồn",
  "tip": "Từ macOS Ventura đường dẫn quyền chuyển sang \"Cài đặt hệ thống\", tìm \"ghi màn hình\" trong ô tìm kiếm là nhanh nhất",
  "scene": "Mac máy bị điều khiển mới cài kết nối toàn đen, là chưa cấp quyền \"ghi màn hình\""
 },
 "Thấy không điều khiển": {
  "cat": "Hình ảnh / Hiệu năng",
  "alias": "không điều khiển chuột bàn phím vô hiệu control chỉ xem trợ năng",
  "sym": "Thấy được màn hình, nhưng bấm chuột bàn phím không phản hồi (thấy mà không điều khiển)",
  "l1": "Bật \"Cho phép điều khiển từ xa\" ở máy bị điều khiển; macOS bắt buộc cấp quyền \"trợ năng\", Windows chú ý UAC / cửa sổ admin cần quyền tương ứng",
  "l2": "Thấy không điều khiển hầu như đều là vấn đề quyền tiêm input: trợ năng macOS chưa tick, hoặc máy bị điều khiển bật UAC secure desktop cần admin (SunLogin cần chạy quyền admin mới thao tác được)",
  "tip": "Khi chỉ đọc: xác nhận \"Cho phép điều khiển từ xa\" đang bật, macOS bổ sung \"trợ năng\", Windows chạy SunLogin quyền admin",
  "scene": "Điều khiển PC đối phương thấy màn hình, bấm gì cũng vô dụng → đối phương chưa bật \"Cho phép điều khiển từ xa\""
 },
 "Lag độ trễ cao": {
  "cat": "Hình ảnh / Hiệu năng",
  "alias": "lag độ trễ delay bóng mờ không mượt chậm",
  "sym": "Kéo cửa sổ giật, gõ 2–3 giây mới hiện, chuột bóng mờ (trải nghiệm độ trễ rõ ràng kém đi)",
  "l1": "Chuyển sang chế độ desktop \"văn phòng / mượt\" để giảm chất lượng/khung hình; tắt tải về / video chiếm băng thông ở máy bị điều khiển; ưu tiên mạng dây hoặc WiFi 5GHz",
  "l2": "Tỷ lệ nguyên nhân (đo cộng đồng): relay 35% > chất lượng quá cao 25% > hiệu năng máy bị ĐK kém 20% > mạng kém 15% > giới hạn khung 5%; mức độ trễ: <30ms gần như cục bộ, 80–150ms giật rõ, >150ms hầu như chỉ bấm. Khi độ trễ trên 100ms, chỉnh chất lượng cũng vô ích, nút cổ chai ở mạng",
  "tip": "Xem trước góc dưới trái P2P hay relay; giảm độ sâu màu từ true color 32 bit một bậc, băng thông chiếm có thể giảm nửa",
  "scene": "Độ trễ 120ms chọn vùng bảng không theo kịp chuột, đổi mạng dây + chế độ văn phòng thì mượt"
 },
 "Chế độ relay": {
  "cat": "Mạng / Traversal",
  "alias": "relay 转发 p2p không xuyên nat upnp đối xứng khác nhà mạng",
  "sym": "Client hiện \"Relay\" chứ không phải \"P2P\" ở góc dưới trái, độ trễ tổng thể cao, chuột bóng mờ",
  "l1": "SunLogin tự chọn chế độ kết nối không thể chuyển tay; ngắt rồi kết nối lại (cách 10 giây trở lên) để hệ thống thử P2P lại",
  "l2": "Tăng tỷ lệ xuyên P2P: ① bật UPnP router (router gia đình mặc định thường tắt, bật thì tỷ lệ xuyên tăng vọt); ② đừng để cả hai đầu sau NAT đối xứng, đổi mạng một đầu; ③ khác nhà mạng dù P2P xuyên độ trễ vẫn cao, đôi khi ép relay lại ổn hơn (máy chủ SunLogin có đường riêng khác nhà mạng)",
  "tip": "UPnP bật mà vẫn relay, khả năng cao là NAT đối xứng; tình huống khác nhà mạng thử relay",
  "scene": "Tắt relay, bật UPnP liền thành P2P, độ trễ 120ms→35ms"
 },
 "Hình mờ": {
  "cat": "Hình ảnh / Hiệu năng",
  "alias": "chất lượng mờ độ nét độ phân giải màu true color bitrate",
  "sym": "Hình mờ khi chuyển động, không đủ nét (nhất là khi kéo / video)",
  "l1": "Khi băng thông thiếu SunLogin tự giảm chất lượng giữ mượt; muốn nét hơn tăng chất lượng / khung hình tay, hoặc chuyển chế độ \"HD / chất lượng\"",
  "l2": "Độ phân giải chất lượng cao nhất bị giới hạn trần vật lý màn hình máy bị điều khiển (máy bị ĐK chỉ 1080P không thể remote 4K); phục dựng chuyên nghiệp dùng true color 4:4:4; giải mã phần cứng ưu tiên giao xử lý cho GPU máy điều khiển, giảm dùng CPU",
  "tip": "Ưu tiên nét: đặt độ phân giải \"theo máy điều khiển\" + toàn màn hình, tránh mờ do co giãn",
  "scene": "Chế độ HD băng thông không theo kịp tự giảm chất lượng → mờ khi chuyển động, hồi phục khi mạng tốt"
 },
 "30fps bản miễn phí": {
  "cat": "Hình ảnh / Hiệu năng",
  "alias": "30fps khung hình fps bản miễn phí 60fps 144fps trả phí",
  "sym": "Độ trễ không cao nhưng kéo cửa sổ / cuộn rõ ràng không mượt và bóng mờ (không phải vấn đề mạng, mà là giới hạn khung hình)",
  "l1": "Tài khoản hạng miễn phí tối đa 30fps; muốn mượt hơn nâng hạng dịch vụ tài khoản: trả phí lên 60fps, bản game tối đa 144fps",
  "l2": "Khung hình cao nhất còn bị giới hạn tần số quét màn hình hai đầu: một bên 60Hz thì không vượt 60FPS; 144fps cần GPU + màn hình hỗ trợ 144Hz, và GPU máy bị ĐK hỗ trợ mã hóa phần cứng",
  "tip": "Chênh lệch 30fps và 60fps cảm nhận rất lớn; Android trả phí cũng 60fps, nhạy hơn với cảm ứng",
  "scene": "Bản miễn phí kéo cửa sổ bóng mờ, sau khi nâng 60fps rõ ràng mượt hơn"
 },
 "Wake thất bại": {
  "cat": "Tài khoản / Quyền",
  "alias": "wake đánh thức ngủ sleep tắt máy boot từ xa không người trực",
  "sym": "Máy bị điều khiển sau khi ngủ / sleep không kết nối, hoặc muốn boot từ xa nhưng không đánh thức được",
  "l1": "Đánh thức bằng \"tính năng Wake\" SunLogin (cần kích hoạt trước ở máy bị điều khiển); đặt máy bị điều khiển không ngủ, bật \"truy cập không người trực\"",
  "l2": "Wake từ xa dựa vào WOL (Wake-on-LAN) + dịch vụ wake SunLogin, cần nguồn / card mạng máy bị ĐK hỗ trợ và cấu hình trước; mất điện hoàn toàn / shutdown không thể wake bằng phần mềm",
  "tip": "Bắt buộc cho không người trực: tự khởi động + tự đăng nhập + không ngủ + kích hoạt wake trước",
  "scene": "Đi công tác muốn kết nối PC nhà, kết quả nó sleep và chưa bật wake trước → không kết nối"
 },
 "Khác tài khoản": {
  "cat": "Tài khoản / Quyền",
  "alias": "tài khoản không khớp danh sách thiết bị không thấy hai tài khoản token đăng nhập lại",
  "sym": "Không thấy thiết bị muốn điều khiển trong danh sách, hoặc bề ngoài online thực ra đã rớt",
  "l1": "Khi điều khiển thiết bị của mình, máy điều khiển và máy bị điều khiển đăng nhập cùng tài khoản SunLogin; mở lại client máy bị điều khiển xem có cần đăng nhập lại không",
  "l2": "Thiết bị ở tài khoản A không thấy trong tài khoản B; thiết bị nhàn rỗi lâu token hết hạn, bề ngoài online thực ra rớt, đăng nhập lại hồi phục; tránh nhiều thiết bị dùng một tài khoản đồng thời (dễ làm dịch vụ bất ổn)",
  "tip": "Hai đầu nhất định cùng tài khoản; hiện online mà không kết nối, để máy bị điều khiển đăng nhập lại một lần trước",
  "scene": "Máy bị điều khiển đăng nhập tài khoản A, máy điều khiển đăng nhập tài khoản B, danh sách hoàn toàn không thấy thiết bị"
 },
 "Phiên bản giao thức không khớp": {
  "cat": "Phiên bản / Giao thức",
  "alias": "phiên bản giao thức 30 không khớp cập nhật cài lại cache",
  "sym": "Chênh lệch phiên bản lớn gây kết nối thất bại / bất thường tương thích (mã log 30)",
  "l1": "Cập nhật cả hai đầu lên mới nhất (client → giới thiệu → xem số phiên bản), khởi động lại client; vẫn không được thì khởi động lại thiết bị, xóa cache",
  "l2": "Giao thức SunLogin cập nhật khá thường, một đầu bản cũ (vd bản 2024) dễ không tương thích với bản mới; nhiều người chỉ cập nhật máy điều khiển, máy bị điều khiển mấy tháng không động",
  "tip": "Cài lại hoàn toàn (khi vẫn không kết nối): gỡ rồi xóa %AppData%\\Oray\\SunLogin và %ProgramData%\\Oray\\SunLogin rồi cài bản mới nhất",
  "scene": "Máy bị điều khiển nửa năm không cập nhật, sau khi máy điều khiển nâng cấp giao thức không khớp → kết nối thất bại"
 },
 "Hiệu năng máy bị ĐK kém": {
  "cat": "Hình ảnh / Hiệu năng",
  "alias": "hiệu năng cpu ram lag máy bị ĐK tài nguyên mã hóa máy cũ",
  "sym": "Độ trễ thao tác lúc tốt lúc xấu, hình giật (tài nguyên máy bị ĐK đầy, mã hóa không theo kịp)",
  "l1": "Tắt chương trình không dùng ở máy bị điều khiển để giải phóng RAM (Chrome nhiều tab rất ngốn RAM); giảm chế độ desktop xuống \"siêu tốc / mượt\"",
  "l2": "Chụp & mã hóa SunLogin cần CPU / RAM: chế độ văn phòng ~CPU 5–15% / RAM 150–200MB, HD / game ~CPU 20–40% / 200–400MB; máy bị ĐK đang compile / VM / quét virus / cập nhật hệ thống thì chậm rõ",
  "tip": "Máy cũ thêm RAM (4G→8G), HDD đổi SSD, bật \"ưu tiên giải mã phần cứng\" để GPU chia sẻ đều hiệu quả",
  "scene": "Máy bị điều khiển đang tải cập nhật Windows, CPU 40%, hình remote bị giật"
 }
};
window.LABELS = {"miss": "Triệu chứng chưa có trong danh sách, thử từ khóa khác hoặc xem bảng đầy đủ bên dưới."};
window.FIELDS = [["sym", "Hiện tượng / kích hoạt"], ["l1", "L1 kiểm tra chính thức trước"], ["l2", "L2 nguyên nhân gốc (mạng)"], ["tip", "Mẹo"], ["scene", "Tình huống thực tế"]];
window.THEAD = ["Triệu chứng / lỗi", "Phân loại", "L1 kiểm tra trước (chính thức)", "L2 nguyên nhân gốc"];

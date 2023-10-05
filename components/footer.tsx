"use client";

import Container from "@/components/ui/container";
import Image from "next/image";
import Button from "./ui/button";

import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(
      "http://online.gov.vn/Home/WebDetails/74620?AspxAutoDetectCookieSupport=1"
    );
  };
  return (
    <footer className="bg-white border-t px-10">
      <Container>
        <div className="mx-auto py-5">
          <div className="text-start text-base text-neutral-700 flex relative justify-between">
            <p>BẢN QUYỀN THUỘC CÔNG TY TNHH UNIQLO. BẢO LƯU MỌI QUYỀN</p>
            <div className="flex relative">
              <div className="px-10">Điều khoản sử dụng</div>
              <div>Chính sách bảo mật</div>
            </div>
          </div>
        </div>
        <div className="text-neutral-950">
          <h2>
            git Tên công ty: UNIQLO VIETNAM
            CO., LTD
          </h2>
          <h2>
            Giấy chứng nhận đăng ký doanh nghiệp số: 0315304731, đăng ký lần đầu
            ngày 02/10/2018, đăng ký thay đổi lần thứ ba ngày 23/09/2019
          </h2>
          <h2>
            Địa chỉ trụ sở doanh nghiệp: Tầng 26, Tòa nhà Trụ Sở Điều Hành Và
            Trung Tâm Thương Mại Viettel, 285 Cách Mạng Tháng Tám, Phường 12,
            Quận 10, Thành phố Hồ Chí Minh Để được giải đáp thắc mắc, vui lòng
            truy cập trang FAQ/Trợ giúp
          </h2>
          <h2>
            Để được giải đáp thắc mắc, vui lòng truy cập trang FAQ/Trợ giúp
          </h2>
        </div>
        <Image
          src="/logoSaleNoti.png"
          width={200}
          height={200}
          alt=""
          onClick={handleClick}
        />
      </Container>
    </footer>
  );
};

export default Footer;

import ProductPage from '@/components/product/ProductPage'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Phòng Thi Đấu Team (Team Arena) - Giải Pháp Không Gian Tập Luyện Chuyên Nghiệp | [Tên Nhà Sản Xuất & Xuất Khẩu]',
    description: 'Thiết lập tiêu chuẩn mới cho hiệu suất đội tuyển với hạ tầng mạng tối ưu và môi trường tập trung tuyệt đối.',
    openGraph: {
      title: 'Phòng Thi Đấu Team (Team Arena) - Giải Pháp Không Gian Tập Luyện Chuyên Nghiệp | [Tên Nhà Sản Xuất & Xuất Khẩu]',
      description: 'Thiết lập tiêu chuẩn mới cho hiệu suất đội tuyển với hạ tầng mạng tối ưu và môi trường tập trung tuyệt đối.',
      images: [
        {
          url: '/placeholder.jpg',
          width: 1200,
          height: 630,
          alt: 'Phòng Thi Đấu Team (Team Arena) - Giải Pháp Không Gian Tập Luyện Chuyên Nghiệp | [Tên Nhà Sản Xuất & Xuất Khẩu]',
        },
      ],
    },
  }
}

export default function ProductPage_PhngThiUTeamTeamArenaGiiPhpKhngGianTpLuynChuynNghipTnNhSnXutXutKhu() {
  return <ProductPage slug="phng-thi-u-team-team-arena-gii-php-khng-gian-tp-luyn-chuyn-nghip-tn-nh-sn-xut-xut-khu" language="vietnamese" />
}

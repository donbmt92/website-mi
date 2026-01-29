import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ProductsPage() {
  const products = [
    {
        "id": "3",
        "slug": "phng-thi-u-team-team-arena-gii-php-khng-gian-tp-luyn-chuyn-nghip-tn-nh-sn-xut-xut-khu",
        "title": "Phòng Thi Đấu Team (Team Arena) - Giải Pháp Không Gian Tập Luyện Chuyên Nghiệp | [Tên Nhà Sản Xuất & Xuất Khẩu]",
        "subtitle": "Thiết lập tiêu chuẩn mới cho hiệu suất đội tuyển với hạ tầng mạng tối ưu và môi trường tập trung tuyệt đối.",
        "image": "/placeholder.jpg"
    }
]

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-lg text-muted-foreground">
            Explore our range of professional products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted relative">
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>{product.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/products/${product.slug}`}>
                  <Button className="w-full">View Details</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

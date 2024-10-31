
import { getProductById } from "@/lib/actions"
import { formatNumber } from "@/lib/utils";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import PriceInfoCard from "@/components/PriceInfoCard";
import { redirect } from "next/navigation";

type Props = {
  params: { id: string }
}

const ProductDetails = async ({ params: { id } }: Props) => {
  const product: Product = await getProductById(id);

  if (!product) redirect('/')

  return (
    <div className="product-container">
      <div className="flex gap-28 xl:flex-row flex-col">

        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-start gap-5 flex-wrap pb-6">
            <div className="flex flex-col gap-3">
              <p className="text-[28px] text-secondary font-semibold">
                {product.title}
              </p>

              <Link
                href={product.url}
                target="_blank"
                className="text-base text-black opacity-50"
              >
                Visit Product
              </Link>
            </div>

            <div className="p-2 bg-white-200 rounded-10">
              <Image
                src="/assets/icons/bookmark.svg"
                alt="bookmark"
                width={20}
                height={20}
              />
            </div>

            <div className="p-2 bg-white-200 rounded-10">
              <Image
                src="/assets/icons/share.svg"
                alt="share"
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className="product-info">
            <div className="flex flex-col gap-2">
              <p className="text-[34px] text-secondary font-bold">
                {formatNumber(product.currentPrice)}
              </p>
              <p className="text-[21px] text-black opacity-50 line-through">
                {formatNumber(product.originalPrice)}
              </p>
            </div>

          </div>

          <div className="my-7 flex flex-col gap-5">
            <div className="flex gap-5 flex-wrap">
              <PriceInfoCard
                title="Current Price"
                iconSrc="/assets/icons/price-tag.svg"
                value={`${formatNumber(product.currentPrice)}`}
              />
              <PriceInfoCard
                title="Average Price"
                iconSrc="/assets/icons/chart.svg"
                value={`${formatNumber(product.averagePrice)}`}
              />
              <PriceInfoCard
                title="Highest Price"
                iconSrc="/assets/icons/arrow-up.svg"
                value={`${formatNumber(product.highestPrice)}`}
              />
              <PriceInfoCard
                title="Lowest Price"
                iconSrc="/assets/icons/arrow-down.svg"
                value={`${formatNumber(product.lowestPrice)}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
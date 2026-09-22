"use client";

import Image from "next/image";
import { useState } from "react";

type ProductItem = {
  name: string;
  description: string;
  image: string;
  alt: string;
};

type ProductCategory = "rice-balls" | "drinks";

const catalog: Record<ProductCategory, ProductItem[]> = {
  "rice-balls": [
    { name: "牛油果金枪鱼饭团", description: "清新饱满，米香相伴", image: "/media/products/rice-01-avocado-tuna.webp", alt: "牛油果金枪鱼饭团" },
    { name: "日式叉烧饭团", description: "咸香叉烧，口感扎实", image: "/media/products/rice-02-char-siu.webp", alt: "日式叉烧饭团" },
    { name: "咸蛋黄饭团", description: "沙润咸香，层次分明", image: "/media/products/rice-03-salted-egg-yolk.webp", alt: "咸蛋黄饭团" },
    { name: "蟹棒火腿饭团", description: "鲜甜柔和，轻松满足", image: "/media/products/rice-04-crab-ham.webp", alt: "蟹棒火腿饭团" },
    { name: "玉米芝士饭团", description: "玉米清甜，芝士浓香", image: "/media/products/rice-05-corn-cheese.webp", alt: "玉米芝士饭团" },
    { name: "中华海草饭团", description: "海草清爽，风味轻盈", image: "/media/products/rice-06-seaweed.webp", alt: "中华海草饭团" },
    { name: "孜然牛肉粒饭团", description: "孜然浓香，牛肉有嚼劲", image: "/media/products/rice-07-cumin-beef.webp", alt: "孜然牛肉粒饭团" },
    { name: "奥尔良鸡排饭团", description: "香嫩鸡排，微甜鲜香", image: "/media/products/rice-08-orleans-chicken.webp", alt: "奥尔良鸡排饭团" },
    { name: "奥利奥碎芝士饭团", description: "甜咸交织，趣味十足", image: "/media/products/rice-09-oreo-cheese.webp", alt: "奥利奥碎芝士饭团" },
    { name: "爆浆芝士火腿饭团", description: "芝士流心，火腿咸香", image: "/media/products/rice-10-cheese-ham.webp", alt: "爆浆芝士火腿饭团" },
  ],
  drinks: [
    { name: "可可冰奶", description: "可可醇香，冰凉顺口", image: "/media/products/drink-01-cocoa-ice-milk.webp", alt: "可可冰奶" },
    { name: "柠檬冰奶", description: "柠檬清新，酸甜轻盈", image: "/media/products/drink-02-lemon-ice-milk.webp", alt: "柠檬冰奶" },
    { name: "牛油果冰奶", description: "牛油果绵密，奶香柔和", image: "/media/products/drink-03-avocado-ice-milk.webp", alt: "牛油果冰奶" },
    { name: "牛油果奶昔", description: "细腻浓醇，果香悠长", image: "/media/products/drink-04-avocado-shake.webp", alt: "牛油果奶昔" },
    { name: "小台芒冰奶", description: "芒果香甜，清爽冰润", image: "/media/products/drink-05-mango-ice-milk.webp", alt: "小台芒冰奶" },
    { name: "茉莉豆浆", description: "豆香温润，茉莉清雅", image: "/media/products/drink-06-jasmine-soy-milk.webp", alt: "茉莉豆浆" },
    { name: "茉莉花茶", description: "花香清雅，回味轻盈", image: "/media/products/drink-07-jasmine-tea.webp", alt: "茉莉花茶" },
    { name: "丑橘果脯酸奶", description: "柑橘酸甜，酸奶柔滑", image: "/media/products/drink-08-citrus-yogurt.webp", alt: "丑橘果脯酸奶" },
    { name: "大麦茶", description: "麦香淡雅，清润解腻", image: "/media/products/drink-09-barley-tea.webp", alt: "大麦茶" },
    { name: "芒果椰枣酸奶", description: "芒果果香，椰枣醇甜", image: "/media/products/drink-10-mango-date-yogurt.webp", alt: "芒果椰枣酸奶" },
  ],
};

const tabs: { id: ProductCategory; label: string }[] = [
  { id: "rice-balls", label: "饭团系列" },
  { id: "drinks", label: "饮品系列" },
];

export function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("rice-balls");
  const products = catalog[activeCategory];

  return (
    <section className="product-catalog" aria-label="汉少爷产品目录">
      <div className="product-catalog-tabs" role="tablist" aria-label="产品分类">
        {tabs.map((tab) => {
          const selected = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              className="product-catalog-tab"
              type="button"
              role="tab"
              id={`${tab.id}-tab`}
              aria-controls={`${tab.id}-panel`}
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveCategory(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        className={`product-catalog-grid product-catalog-grid-${activeCategory}`}
        id={`${activeCategory}-panel`}
        role="tabpanel"
        aria-labelledby={`${activeCategory}-tab`}
      >
        {products.map((product) => (
          <article className="product-catalog-card" key={product.name} tabIndex={0} aria-label={`${product.name}：${product.description}`}>
            <div className="product-catalog-media">
              <Image src={product.image} alt={product.alt} fill sizes="(max-width: 767px) calc((100vw - 3.85rem) / 2), 19vw" />
              <p className="product-catalog-overlay">{product.description}</p>
            </div>
            <h2>{product.name}</h2>
          </article>
        ))}
      </div>
    </section>
  );
}

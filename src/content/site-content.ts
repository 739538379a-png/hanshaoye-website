export type NavigationItem = {
  label: string;
  href: string;
};

export type ProductItem = {
  image: string;
  alt: string;
  imagePosition: string;
};

export type StoreItem = {
  image: string;
  alt: string;
  imagePosition: string;
};

export type JourneyItem = {
  title: string;
  image: string;
  alt: string;
  orientation: "portrait" | "landscape";
  objectPosition: string;
};

export const siteContent = {
  navigation: [
    { label: "关于汉少爷", href: "#about" },
    { label: "产品展示", href: "#products" },
    { label: "合作共创", href: "#cooperation" },
    { label: "门店与案例", href: "#stores" },
    { label: "联系我们", href: "#contact" },
  ] satisfies NavigationItem[],
  hero: {
    title: "再忙，也要好好吃一顿热饭",
    description: "从东方米食文化出发，为忙碌日常带来健康、温暖、便捷的现制热食。",
    primaryAction: "获取合作方案",
    secondaryAction: "认识汉少爷",
  },
  about: {
    title: "从田间一粒米，到掌心一团饭",
    body: "汉少爷饭团诞生于重庆。我们把传统饭团带入通勤、工作与日常出行场景，让一枚握在手中的饭团，成为随时可享的一顿安心热饭。",
    statement: "千年米艺 手心相传",
    journey: [
      { title: "山间稻田", image: "/media/rice-journey/journey-01.webp", alt: "群山之间层叠延伸的绿色稻田", orientation: "portrait", objectPosition: "50% 48%" },
      { title: "晨光初照", image: "/media/rice-journey/journey-02.webp", alt: "晨光照亮云雾与山间梯田", orientation: "portrait", objectPosition: "50% 48%" },
      { title: "金色田野", image: "/media/rice-journey/journey-03.webp", alt: "河流穿过成熟的金色稻田", orientation: "portrait", objectPosition: "50% 52%" },
      { title: "谷香成熟", image: "/media/rice-journey/journey-04.webp", alt: "阳光下成熟饱满的谷穗", orientation: "portrait", objectPosition: "50% 50%" },
      { title: "丰收时节", image: "/media/rice-journey/journey-05.webp", alt: "山谷稻田里垂落的成熟稻穗", orientation: "portrait", objectPosition: "72% 52%" },
      { title: "五谷甄选", image: "/media/rice-journey/journey-06.webp", alt: "木碗中经过甄选的多种谷物", orientation: "portrait", objectPosition: "50% 55%" },
      { title: "蒸出米香", image: "/media/rice-journey/journey-07.webp", alt: "竹篾容器中蒸熟并升腾热气的米饭", orientation: "portrait", objectPosition: "50% 55%" },
      { title: "掌心温度", image: "/media/rice-journey/journey-08.webp", alt: "双手捧起刚蒸熟的温热米饭", orientation: "portrait", objectPosition: "58% 52%" },
      { title: "热饭出笼", image: "/media/rice-journey/journey-09.webp", alt: "汉少爷店员从木桶中盛出热腾腾的杂粮饭", orientation: "landscape", objectPosition: "50% 48%" },
      { title: "层层铺料", image: "/media/rice-journey/journey-10.webp", alt: "店员把新鲜配料层层铺在杂粮饭上", orientation: "landscape", objectPosition: "50% 50%" },
      { title: "压制成形", image: "/media/rice-journey/journey-11.webp", alt: "戴手套的手将杂粮饭压制成形", orientation: "portrait", objectPosition: "48% 54%" },
      { title: "丰富入馅", image: "/media/rice-journey/journey-12.webp", alt: "在杂粮饭上加入肉类和蔬菜馅料", orientation: "landscape", objectPosition: "50% 55%" },
      { title: "调味融合", image: "/media/rice-journey/journey-13.webp", alt: "为饭团馅料加入酱汁调味", orientation: "portrait", objectPosition: "48% 62%" },
      { title: "一口满足", image: "/media/rice-journey/journey-14.webp", alt: "掌心托着切开的招牌杂粮饭团", orientation: "portrait", objectPosition: "52% 56%" },
      { title: "掌心热饭", image: "/media/rice-journey/journey-15.webp", alt: "在汉少爷门店前手持包装好的饭团", orientation: "portrait", objectPosition: "48% 52%" },
    ] satisfies JourneyItem[],
  },
  products: [
    {
      image: "/media/product-showcase-01.webp",
      alt: "木盘上摆放的汉少爷饭团与新鲜食材",
      imagePosition: "50% 57%",
    },
    {
      image: "/media/product-showcase-02.webp",
      alt: "蒸笼、杂粮饭与切开的饭团",
      imagePosition: "51% 55%",
    },
    {
      image: "/media/product-showcase-03.webp",
      alt: "汉少爷米浆和豆浆产品陈列",
      imagePosition: "58% 50%",
    },
  ] satisfies ProductItem[],
  stores: [
    {
      image: "/media/store-showcase-01.webp",
      alt: "汉少爷杭州滨江银泰店的门店效果图",
      imagePosition: "50% 48%",
    },
    {
      image: "/media/store-showcase-02.webp",
      alt: "汉少爷重庆巴南万达广场店的门店效果图",
      imagePosition: "50% 52%",
    },
    {
      image: "/media/store-showcase-03.webp",
      alt: "汉少爷重庆九龙坡喜盈门店的门店效果图",
      imagePosition: "50% 51%",
    },
    {
      image: "/media/store-showcase-04.webp",
      alt: "汉少爷重庆两江新区财富中心店的门店效果图",
      imagePosition: "50% 50%",
    },
    {
      image: "/media/store-showcase-05.webp",
      alt: "汉少爷重庆两江新区大融城店的门店效果图",
      imagePosition: "49% 52%",
    },
    {
      image: "/media/store-showcase-06.webp",
      alt: "汉少爷重庆两江新区光环店的门店效果图",
      imagePosition: "50% 50%",
    },
  ] satisfies StoreItem[],
  cooperation: {
    title: "把好产品，做成长期经营",
    body: "我们期待与认同产品、重视服务并愿意长期投入经营的伙伴同行。",
    values: [
      {
        title: "产品体系",
        text: "围绕真实消费需求，持续完善新式热饭团产品表达。",
      },
      {
        title: "门店模型",
        text: "结合不同商业场景，为门店筹备和落地提供标准化参考。",
      },
      {
        title: "运营支持",
        text: "围绕筹备、培训、开业与日常经营提供约定范围内的支持。",
      },
    ],
  },
  contact: {
    company: "重庆汉少爷品牌管理有限公司",
    phone: "400-870-9288",
    domain: "www.hanshaoye.com",
  },
} as const;

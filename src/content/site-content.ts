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

export type NewsItem =
  | {
      kind: "article";
      source: string;
      date: string;
      dateTime: string;
      title: string;
      excerpt: string;
      image: string;
      alt: string;
      imagePosition: string;
      href: string;
    }
  | {
      kind: "upcoming";
      title: string;
      excerpt: string;
    };

export const siteContent = {
  navigation: [
    { label: "关于我们", href: "/about" },
    { label: "关于产品", href: "/products" },
    { label: "门店布局", href: "/stores" },
    { label: "合作共创", href: "/cooperation" },
    { label: "品牌动态", href: "/news" },
    { label: "联系我们", href: "/contact" },
  ] satisfies NavigationItem[],
  hero: {
    title: "千年米艺 手心相传",
    subtitle: "再忙，也要好好吃一顿热饭",
    description: "从东方米食文化出发，为忙碌日常带来健康、温暖、便捷的现制热食。",
    primaryAction: "获取合作方案",
  },
  about: {
    title: "从田间一粒米，到手心一团饭",
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
    body: "与君同行，共谋长久",
    partnersImage: "/media/cooperation-ip-partners.webp",
    partnersAlt: "两位汉少爷 IP 人物拱手致意",
    presenterImage: "/media/cooperation-ip-presenter.webp",
    presenterAlt: "汉少爷 IP 在讲解板前介绍产品体系、门店模型和运营体系支持",
  },
  news: [
    {
      kind: "article",
      source: "搜狐报道",
      date: "2025.12.25",
      dateTime: "2025-12-25",
      title: "汉少爷重庆首店正式亮相",
      excerpt: "媒体与本地美食达人齐聚现场，共同见证一顿热饭的新表达。",
      image: "/media/brand-news-01.webp",
      alt: "汉少爷活动现场的嘉宾与达人合影",
      imagePosition: "50% 46%",
      href: "https://www.sohu.com/a/969085204_413673",
    },
    {
      kind: "article",
      source: "中国通讯社",
      date: "2025.12.25",
      dateTime: "2025-12-25",
      title: "重庆首店亮相，以现蒸手作带来健康新选择",
      excerpt: "一场围绕好米、现蒸与手作的媒体品鉴会，让热饭的温度被更多人看见。",
      image: "/media/brand-news-02.webp",
      alt: "汉少爷活动现场的嘉宾拍摄与品鉴过程",
      imagePosition: "49% 48%",
      href: "https://www.hkcna.com.cn/list_49/829.html",
    },
    {
      kind: "upcoming",
      title: "更多品牌动态，敬请期待",
      excerpt: "新的热饭故事，正在路上。",
    },
  ] satisfies NewsItem[],
  contact: {
    company: "重庆汉少爷品牌管理有限公司",
    phone: "400-870-9288",
    domain: "www.hanshaoye.com",
  },
} as const;

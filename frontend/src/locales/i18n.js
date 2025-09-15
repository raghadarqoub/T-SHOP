import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Navbar
        HOME: "HOME",
        COLLECTION: "COLLECTION",
        ABOUT: "ABOUT",
        CONTACT: "CONTACT",
        PROFILE: "My Profile",
        ORDERS: "Orders",
        LOGOUT: "Logout",

        // Homepage
        bestseller: "OUR BESTSELLERS",
        latestArrivals: "Latest Arrivals",
        shopNow: "SHOP NOW",
        latestDescription:
          "Explore the latest additions to our online store now! We carefully select the highest quality and most innovative products to meet all your needs. Follow our news regularly and don't miss out on the best deals and latest trends.",

        // Best Seller Section
        title1: "BEST",
        title2: "SELLER",
        description:
          "Explore our exclusive collection of the most popular and best-selling products, carefully selected to suit your taste and provide you with an exceptional shopping experience.",

        // Our Policy
        easyExchange: "Easy Exchange Policy",
        easyExchangeDesc: "We offer hassle free exchange policy",
        sevenDaysReturn: "7 Days Return Policy",
        sevenDaysReturnDesc: "We provide 7 days free return policy",
        bestSupport: "Best Customer Support",
        bestSupportDesc: "We provide 24/7 customer support",

        // Newsletter
        title: "Subscribe Now & Get 20% Off",
        desc: "Welcome to our store – your go-to destination for the latest trends, top-quality products, and must-have essentials carefully selected to elevate your style and lifestyle.",
        placeholder: "Enter your email",
        subscribe: "SUBSCRIBE",

        // Footer
        footerDescription:
          "Welcome to T-Shop – your perfect destination for hoodies, t-shirts, and trendy accessories. Explore our carefully curated collection that adds a touch of style and comfort to your daily look.",
        company: "COMPANY",
        home: "Home",
        aboutUs: "About us",
        delivery: "Delivery",
        privacyPolicy: "Privacy policy",
        getInTouch: "GET IN TOUCH",
        phone: "+1-212-456-7890",
        email: "contact@foreveryou.com",
        copyright: "Copyright 2025 E-Shop - All Rights Reserved.",

        // Collection Page
        filters: "FILTERS",
        categories: "CATEGORIES",
        hoodies: "Hoodies",
        tshirts: "T-Shirts",
        accessories: "Accessories",
        gender: "GENDER",
        women: "Women",
        men: "Men",
        all: "ALL",
        collections: "COLLECTIONS",
        sort: {
          relevant: "Sort by: Relevant",
          lowHigh: "Sort by: Low to High",
          highLow: "Sort by: High to Low",
        },
        // Product Page
        selectSize: "Select Size",
        addToCart: "Add To Cart",
        originalProducts : "100% Original Products.",
        CashOnDelivery: "Cash on Delivery Available on This Product.",
        daysReturn: "Easy returns and exchanges policy within 7 days.",
        des: "Description",
        reviewis: "Reviews (22)",
        productReview1: "The t-shirt is very nice and practical, the fabric is light and soft, but I wish there were more color options. Overall, a great shopping experience and I will definitely buy again.",
        productReview2: "E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.",
        Related: "RELATED",
        products: "PRODUCTS",
        //  Cart Page
        your: "YOUR",
      cart: "CART",
      chackout: "PROCEED TO CHECKOUT",
      //cartTotal
    total: "TOTALS",
    subtotal: "Subtotal",
    shippingFee: "Shipping Fee",
    //place order 
        Delivery: "Delivery",
        Information: "Information",
        FirstName: "First Name",
        LastName: "Last Name",
        Phone1: "Phone",
        Street1: "Street Address",
        City: "City",
        Payment: "Payment",
        Method: "Method",
        CashonDelivery: "Cash on Delivery",
        PlaceOrder: "Place Order",
        //order 
        My: "My",
  Orders: "Orders",
  Quantity: "Quantity",
  Size: "Size",
  Date: "Date",
  ReadyToShip: "Ready to Ship",
  TrackOrder: "Track Order",
    //ABOUT PAGE
    About: "About",
    Us: "Us",
    Paragraph1: "t-shop was born out of a passion for fashion and a desire to create a unique shopping experience that blends comfort with style.",
    Paragraph2: "We’ve been committed to offering a wide selection of high-quality pieces, ranging from casual wear to trendy accessories.",
    Mission: "Our Mission",
    MissionText: "To give you the freedom to express yourself through fashion while enjoying a simple and enjoyable shopping experience.",
    Why: "Why",
    ChooseUs: "Choose Us",
    QualityTitle: "Guaranteed Quality",
    QualityText:"Every item is carefully selected with premium fabrics and durable designs.",
    EasyTitle: "Easy Shopping",
    EasyText: "Browse and order hoodies, t-shirts, and accessories in just a few clicks.",
    ServiceTitle: "Exceptional Customer Service",
    ServiceText: "Our dedicated team is always ready to help, because your satisfaction is our top priority.",
    // contact page
    Contact: "Contact",
    OurStore: "Our Store",
    Street: "2 Madina Commerce St.",
    District: "Al-Balad District, Hebron, Palestine",
    Phone: "+970 59 400 0123",
    Email: "contact@t-shop.ps",
        //Login/Signup
    Login: "Login",
  SignUp: "Sign Up",
  Name: "Name",
  // Email: "Email",
  Password: "Password",
  ForgotPassword: "Forgot your password?",
  CreateAccount: "Create account",
  LoginHere: "Login here"
      },
    },

    ar: {
      translation: {
        // Navbar
        HOME: "الرئيسية",
        COLLECTION: "المجموعة",
        ABOUT: "من نحن",
        CONTACT: "اتصل بنا",
        PROFILE: "الملف الشخصي",
        ORDERS: "الطلبات",
        LOGOUT: "تسجيل الخروج",

        // Homepage
        bestseller: "الأكثر مبيعاً",
        latestArrivals: "أحدث الإصدارات",
        shopNow: "تسوق الآن",
        latestDescription:
          "استكشف أحدث الإضافات إلى متجرنا الإلكتروني الآن! نحن نختار بعناية المنتجات الأعلى جودة والأكثر ابتكارًا لتلبية جميع احتياجاتك. تابع أخبارنا بانتظام ولا تفوت أفضل العروض وآخر الصيحات.",

        // Best Seller Section
        title1: "الأكثر",
        title2: "مبيعًا",
        description:
          "اكتشف مجموعتنا الحصرية من المنتجات الأكثر شعبية ومبيعًا، المختارة بعناية لتناسب ذوقك وتمنحك تجربة تسوق استثنائية.",

        // Our Policy
        easyExchange: "سياسة تبديل سهلة",
        easyExchangeDesc: "نقدم سياسة تبديل خالية من المتاعب",
        sevenDaysReturn: "سياسة إرجاع خلال 7 أيام",
        sevenDaysReturnDesc: "نوفر سياسة إرجاع مجانية لمدة 7 أيام",
        bestSupport: "أفضل دعم للعملاء",
        bestSupportDesc: "نوفر دعمًا للعملاء على مدار الساعة طوال أيام الأسبوع",

        // Newsletter
        title: "اشترك الآن واحصل على 20% خصم",
        desc: "مرحبًا بك في متجرنا – وجهتك الموثوقة لأحدث الصيحات والمنتجات عالية الجودة والأساسيات التي تم اختيارها بعناية لرفع مستوى أسلوب حياتك.",
        placeholder: "أدخل بريدك الإلكتروني",
        subscribe: "اشترك",

        // Footer
        footerDescription:
          "مرحبًا بكم في T-Shop – وجهتكم المثالية لكل ما يخص الهوديز، التيشيرتات، والإكسسوارات العصرية. اكتشف تشكيلتنا المختارة بعناية لتضفي لمسة من الأناقة والراحة على إطلالتك اليومية.",
        company: "الشركة",
        home: "الرئيسية",
        aboutUs: "من نحن",
        delivery: "التوصيل",
        privacyPolicy: "سياسة الخصوصية",
        getInTouch: "تواصل معنا",
        phone: "+1-212-456-7890",
        email: "contact@foreveryou.com",
        copyright: "حقوق النشر 2025 لمتجر T-Shop - جميع الحقوق محفوظة.",

        // Collection Page
        filters: "الفلاتر",
        categories: "الفئات",
        hoodies: "هوديز",
        tshirts: "تيشيرتات",
        accessories: "إكسسوارات",
        gender: "الجنس",
        women: "نساء",
        men: "رجال",
        all: "الكل",
        collections: "المجموعات",
        sort: {
          relevant: "الترتيب: الأهم أولاً",
          lowHigh: "الترتيب: من الأقل إلى الأعلى",
          highLow: "الترتيب: من الأعلى إلى الأقل",
        },
        // Product Page
        selectSize: "اختر المقاس",
        addToCart: "أضف إلى السلة",
        originalProducts : "المنتجات أصلية 100% ",
        CashOnDelivery: "الدفع عند الاستلام متاح لهذا المنتج .",
        daysReturn: "سياسة استرجاع وتبديل سهلة خلال 7 أيام.",
        des: "الوصف",
        reviewis: "المراجعات",
        productReview1: "القميص عملي وجميل جدًا، القماش خفيف وناعم، لكن أتمنى أن تكون هناك خيارات ألوان أكثر. تجربة تسوق رائعة وسأشتريه بالتأكيد مرة أخرى.",
        productReview2: "عادةً ما تعرض مواقع التجارة الإلكترونية المنتجات أو الخدمات مع وصف تفصيلي، وصور، وأسعار، وأي خيارات متاحة (مثل الأحجام أو الألوان). كل منتج عادةً له صفحة خاصة به تحتوي على المعلومات ذات الصلة.",
        Related: "ذات صلة",
        products: "المنتجات",

      // Cart Page
      your: "سلة",
      cart: "المشتريات",
      chackout: "المتابعة إلى الدفع",
      // cart Total
      total: "الإجمالي",
    subtotal: "المجموع الفرعي",
    shippingFee: "رسوم الشحن",
    //place order
    Delivery: "معلومات",
        Information: "التوصيل",
        FirstName: "الاسم الأول",
        LastName: "اسم العائلة",
        Phone1: "الهاتف",
        Street1: "عنوان الشارع",
        City: "المدينة",
        Payment: "طريقة",
        Method: "الدفع",
        CashonDelivery: "الدفع عند الاستلام",
        PlaceOrder: "إتمام الطلب",
        //order 
        My: "طلباتي",
  Orders: "",
  Quantity: "الكمية",
  Size: "المقاس",
  Date: "التاريخ",
  ReadyToShip: "جاهز للشحن",
  TrackOrder: "تتبع الطلب",
    //ABOUT PAGE
        About: "من ",
    Us: "نحن",
    Paragraph1: "وُلدت تي شوب من شغف بالموضة ورغبة في خلق تجربة تسوق فريدة تمزج بين الراحة والأناقة.",
    Paragraph2: "نلتزم منذ البداية بتقديم تشكيلة واسعة من القطع عالية الجودة، من الملابس اليومية إلى الإكسسوارات العصرية.",
    Mission: "مهمتنا",
    MissionText: "منحك الحرية للتعبير عن نفسك من خلال الموضة مع تجربة تسوق سهلة وممتعة.",
    Why: "لماذا",
    ChooseUs: "نحن؟",
    QualityTitle: "جودة مضمونة",
    QualityText: "كل قطعة مختارة بعناية باستخدام أقمشة فاخرة وتصاميم متينة.",
    EasyTitle: "تسوق سهل",
    EasyText: "يمكنك تصفح وشراء الهوديز والتيشيرتات والإكسسوارات ببضع نقرات.",
    ServiceTitle: "خدمة عملاء مميزة",
    ServiceText: "فريقنا المخصص دائمًا جاهز لمساعدتك لأن رضاك هو أولويتنا.",
    // contact page
    Contact: "اتصل بنا",
    OurStore: "متجرنا",
    Street: "شارع المدينة التجارية 2",
    District: "حي البلَد، الخليل - فلسطين",
    Phone: "+970 59 400 0123",
    Email: "contact@t-shop.ps",    //Login/Signup
Login: "تسجيل الدخول",
  SignUp: "إنشاء حساب",
  Name: "الاسم",
  // Email: "البريد الإلكتروني",
  Password: "كلمة المرور",
  ForgotPassword: "نسيت كلمة المرور؟",
  CreateAccount: "إنشاء حساب جديد",
  LoginHere: "تسجيل الدخول هنا"
      },
    },
  },

  lng: "ar", 
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;

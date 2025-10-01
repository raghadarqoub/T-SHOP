import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        logout: "Logout",
        language: "عربي",
        add: "Add Items",
        list: "List Items",
        orders: "Orders",
        admin_panel: "Admin Panel",
        email_address: "Email Address",
        email_placeholder: "your email@gmail.com",
        password: "Password",
        password_placeholder: "your password",
        login: "Login",
        uploadImage: "Upload Image",
        productName: "Product Name",
        productDescription: "Product Description",
        typeHere: "Type here",
        writeHere: "Write content here",
        productCategory: "Product Category",
        subCategory: "Sub Category",
        men: "Men",
        women: "Women",
        productPrice: "Product Price",
        productSize: "Product Size",
        bestseller: "Add to bestseller",
        addBtn: "ADD",
        categories: {
          hoodies: "Hoodies",
          tshirts: "T-Shirts",
          accessories: "Accessories",
        },
        sizes: ["S", "M", "L", "XL", "XXL"],
        listPage: {
        allProducts: "All Products List",
        image: "Image",
        name: "Name",
        category: "Category",
        price: "Price",
        action: "Action",
        remove: "X",
        noProducts: "No products found"
}
      },
    },
    ar: {
      translation: {
        logout: "تسجيل الخروج",
        language: "English",
        add: "إضافة منتجات",
        list: "قائمة المنتجات",
        orders: "الطلبات",
        admin_panel: "لوحة الإدارة",
        email_address: "البريد الإلكتروني",
        email_placeholder: "بريدك الإلكتروني",
        password: "كلمة المرور",
        password_placeholder: "كلمة المرور الخاصة بك",
        login: "تسجيل الدخول",
        uploadImage: "رفع الصور",
        productName: "اسم المنتج",
        productDescription: "وصف المنتج",
        typeHere: "اكتب هنا",
        writeHere: "اكتب المحتوى هنا",
        productCategory: "فئة المنتج",
        subCategory: "الفئة الفرعية",
        men: "رجال",
        women: "نساء",
        productPrice: "سعر المنتج",
        productSize: "مقاسات المنتج",
        bestseller: "إضافة إلى الأكثر مبيعًا",
        addBtn: "إضافة",
        categories: {
          hoodies: "هوديز",
          tshirts: "تي شيرت",
          accessories: "اكسسوارات",
        },
        sizes:["S", "M", "L", "XL", "XXL"],
        listPage: {
        allProducts: "قائمة كل المنتجات",
        image: "الصورة",
        name: "الاسم",
        category: "الفئة",
        price: "السعر",
        action: "الإجراء",
        remove: "حذف",
        noProducts: "لا توجد منتجات"
}

      },
    },
  },
  lng: "ar",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

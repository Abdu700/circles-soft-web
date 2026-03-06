'use client';

import React, { useState, useEffect } from 'react';

// --- Brand Colors ---
const COLORS = {
  black: '#0d0d0d',
  white: '#f9f9f9',
  raspberry: '#e40046',
  blue: '#4034e0',
  gradient: 'linear-gradient(135deg, #4034e0 0%, #e40046 100%)',
};

const navLinks = [
  { name: 'الرئيسية', href: '#' },
  { name: 'المنتجات والخدمات', href: '#' },
  { name: 'عن الشركة', href: '#' },
  { name: 'التسعير', href: '#' },
  { name: 'اتصل بنا', href: '#' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
        ? 'py-4 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm'
        : 'py-6 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 space-x-reverse cursor-pointer group">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-transform duration-500 group-hover:rotate-[360deg]"
            style={{ background: COLORS.gradient }}
          >
            C
          </div>
          <span className={`text-2xl font-black tracking-tight transition-colors duration-300 ${isScrolled ? 'text-[#0d0d0d]' : 'text-white'}`}>
            Circles<span className={`${isScrolled ? 'text-gray-400' : 'text-white/40'} group-hover:text-[#4034e0] transition-colors`}>Soft</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative font-bold transition-colors px-4 py-2 group text-base ${isScrolled ? 'text-gray-600 hover:text-[#4034e0]' : 'text-white/70 hover:text-white'}`}
            >
              {link.name}
              <span
                className="absolute bottom-0 right-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{ background: COLORS.gradient }}
              />
            </a>
          ))}
        </div>

        {/* CTA Actions */}
        <div className="hidden lg:flex items-center gap-x-8">
          <button className={`font-bold transition-colors text-base px-2 ${isScrolled ? 'text-gray-600 hover:text-[#4034e0]' : 'text-white/70 hover:text-white'}`}>
            تسجيل الدخول
          </button>
          <button
            className="px-10 py-3.5 rounded-full text-white font-bold shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform duration-300 text-base"
            style={{ background: COLORS.gradient }}
          >
            ابدأ الآن
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 ${isScrolled ? 'text-gray-600' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 shadow-2xl transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <div className="flex flex-col space-y-4 text-right">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-gray-600 hover:text-[#4034e0]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-50 flex flex-col space-y-4">
            <button className="text-gray-600 font-bold text-right">تسجيل الدخول</button>
            <button className="w-full py-4 rounded-xl text-white font-bold" style={{ background: COLORS.gradient }}>ابدأ الآن</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const products = [
  {
    arName: 'سيركلز أب',
    enName: 'Circles App',
    desc: 'تطبيق الهاتف المحمول - يسمح للمدراء والموظفين بإجراء المهام والطلبات المتعلقة بمواقعهم الوظيفية بسهولة أينما كانوا.',
    icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    )
  },
  {
    arName: 'سيركلز ون',
    enName: 'Circles One',
    desc: 'نظام يعمل على الانترنت للشركات المتوسطة والصغيرة لإدارة الموارد البشرية وتخطيط الموارد.',
    icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  {
    arName: 'سيركلز باي',
    enName: 'Circles Pay',
    desc: 'نظام الرواتب وشؤون الموظفين - يقوم بأتمتة الرواتب من خلال الإعداد الديناميكي والمرن وفقاً للسياسات المحلية.',
    icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  },
  {
    arName: 'ماي سيركل',
    enName: 'My Circle',
    desc: 'بوابة خدمة ذاتية تمكّن القوى العاملة من إدارة معلوماتهم وطلباتهم بشكل رقمي.',
    icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  },
  {
    arName: 'سيركلز TA',
    enName: 'Circles TA',
    desc: 'نظام مراقبة الدوام - يتتبع الإجازات ويعتمدها ويبلغ عنها بسهولة مع مناوبات عمل قابلة للتخصيص.',
    icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  },
  {
    arName: 'سيركلز 360',
    enName: 'Circles 360',
    desc: 'برنامج إدارة الأداء الذي يعيد تعريف تقييمات الأداء من خلال عملية مراجعة شاملة ومبسطة.',
    icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Z" />
        <path d="M12 7v5l3 3" />
      </svg>
    )
  },
  {
    arName: 'سيركلز تالنتس',
    enName: 'Circles Talents',
    desc: 'مجموعة متكاملة من التطبيقات المصممة لاتخاذ قرارات مؤثرة بشأن القوى العاملة وتطويرها.',
    icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  },
  {
    arName: 'سيركلز ترينينج',
    enName: 'Circles Training',
    desc: 'يهدف إلى إدارة التدريب وتطوير مهارات الموظفين للمعيار المطلوب عبر الممارسة والتعليمات.',
    icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    )
  },
  {
    arName: 'سيركلز ريكروتمينتس',
    enName: 'Circles Recruitments',
    desc: 'يغطي دورة التوظيف الكاملة من نشر الوظائف وفرز الطلبات حتى إجراءات التعيين.',
    icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line x1="20" y1="8" x2="20" y2="14" />
        <line x1="23" y1="11" x2="17" y2="11" />
      </svg>
    )
  },
];

const AbstractCircles = () => (
  <div className="relative w-full h-full flex items-center justify-center opacity-40">
    <div className="absolute w-[80%] h-[80%] border-[2px] border-[#4034e0]/20 rounded-full animate-pulse blur-[1px]" />
    <div className="absolute w-[65%] h-[65%] border-[3px] border-[#e40046]/30 rounded-full animate-[ping_3s_linear_infinite]" />
    <div className="absolute w-[50%] h-[50%] border-[4px] border-[#4034e0]/10 rounded-full blur-[2px]" />
    <div className="absolute w-[35%] h-[35%] border-[2px] border-[#e40046]/30 rounded-full" />
  </div>
);

export default function CirclesSoftHomepage() {
  return (
    <div className="min-h-screen bg-white text-[#0d0d0d] selection:bg-[#e40046] selection:text-white font-['Cairo',_sans-serif] overflow-x-hidden" dir="rtl">

      <Navbar />

      {/* --- Section 1: Hero --- */}
      <section className="relative w-full min-h-[90vh] lg:h-screen flex items-center overflow-hidden">
        {/* Background Image with Dark & Brand Glow Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: 'url("/bg-hero.png")' }}
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#060606]/95 via-[#060606]/90 to-[#060606]/90 lg:bg-gradient-to-r lg:from-[#060606]/95 lg:to-[#060606]/60" />

        {/* Brand Glows */}
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[#4034e0]/10 blur-[150px] rounded-full z-[2]" />

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 pt-20 lg:pt-0">
          {/* Content */}
          <div className="flex flex-col space-y-8 max-w-2xl text-right order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 space-x-reverse px-4 py-2 bg-white/5 border border-white/10 rounded-full w-fit backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: COLORS.gradient }} />
              <span className="text-xs font-bold text-white/50 tracking-widest uppercase">حلول ذكية للمستقبل</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-white tracking-tight">
              خدمات <span style={{ background: COLORS.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 0 20px rgba(64,52,224,0.3))' }}>الموارد البشرية</span> بطريقة تقنية وسهلة
            </h1>

            <p className="text-lg lg:text-xl text-white/60 leading-relaxed font-light">
              ارفع كفاءة مؤسستك من خلال حلول رقمية متكاملة لأتمتة عمليات الموارد البشرية والرواتب، مصممة خصيصاً لتلبية احتياجات الشركات في العالم العربي.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-start space-x-reverse">
              <button
                className="px-8 py-4 rounded-full text-white font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
                style={{ background: COLORS.gradient }}
              >
                اطلب عرض توضيحي
              </button>
              <button className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold text-lg hover:bg-white/10 transition-all">
                المنتجات والخدمات
              </button>
            </div>
          </div>

          {/* Person Image (Human Element) */}
          <div className="relative h-full flex items-center justify-center order-1 lg:order-2">
            <div className="absolute inset-0 z-0">
              <AbstractCircles />
            </div>
            <div className="relative z-10 w-[80%] lg:w-full max-w-[500px] aspect-square rounded-full border-4 border-white/10 overflow-hidden shadow-2xl">
              <img
                src="/person.png"
                alt="Human Element"
                className="w-full h-full object-cover scale-110 object-top hover:scale-100 transition-transform duration-[5s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/60 to-transparent" />
            </div>

            {/* Status Card Overlay */}
            <div className="absolute bottom-[10%] left-0 lg:-left-10 bg-white/10 backdrop-blur-2xl border border-white/20 p-4 rounded-2xl shadow-2xl z-20 animate-bounce [animation-duration:5s]">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-white/40 uppercase">الموارد البشرية</div>
                  <div className="text-xs font-bold text-white">تحسين الأداء +40%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Products (Light & Clean) --- */}
      <section className="relative py-32 bg-[#f9f9f9]">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-[#4034e0] font-black tracking-widest uppercase text-sm">المنتجات والخدمات</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-[#0d0d0d]">حلولنا الرقمية المبتكرة</h3>
            <p className="text-gray-500 text-lg leading-relaxed">نقدم مجموعة متكاملة من الأنظمة والبرامج المصممة لرقمنة أعمالكم وتسهيل إدارة القوى العاملة.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="group relative bg-white p-10 rounded-[2.5rem] border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden"
              >
                {/* Subtle Hover Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full transition-all group-hover:bg-[#4034e0]/5" />

                <div className="relative z-10 text-right">
                  <div className="mb-8 w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-[#4034e0] group-hover:bg-[#4034e0] group-hover:text-white transition-all duration-300">
                    <product.icon className="w-8 h-8" />
                  </div>

                  <div className="space-y-1 mb-6">
                    <h4 className="text-2xl font-bold text-[#0d0d0d]">{product.arName}</h4>
                    <p className="text-xs font-bold text-gray-400 font-sans tracking-widest uppercase">{product.enName}</p>
                  </div>

                  <p className="text-gray-500 leading-relaxed text-sm">
                    {product.desc}
                  </p>

                  <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-bold text-[#4034e0]">اكتشف المزيد</span>
                    <svg className="w-5 h-5 text-[#4034e0] rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer (Light Theme) */}
      <footer className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center space-x-4 space-x-reverse cursor-pointer">
              <span className="text-3xl font-black tracking-tight text-[#0d0d0d]">Circles<span className="text-gray-300">Soft</span></span>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-xl" style={{ background: COLORS.gradient }}>C</div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-gray-400 items-center">
              <a href="#" className="hover:text-[#4034e0] transition-colors">عن الشركة</a>
              <a href="#" className="hover:text-[#4034e0] transition-colors">سياسة الخصوصية</a>
              <a href="#" className="hover:text-[#4034e0] transition-colors">اتصل بنا</a>
              <p className="mr-0 lg:mr-8 text-gray-300">© 2026 سيركلز سوفت. جميع الحقوق محفوظة.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

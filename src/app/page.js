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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled
          ? 'py-3 bg-white/80 backdrop-blur-2xl border-b border-gray-100/50 shadow-sm'
          : 'py-6 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Replacement */}
        <div className="flex items-center space-x-3 space-x-reverse cursor-pointer group">
          <div className="w-12 h-12 relative overflow-hidden rounded-full border border-gray-100/20 shadow-lg group-hover:scale-110 transition-transform duration-500">
            <img src="/logo.jpeg" alt="CirclesSoft" className="w-full h-full object-cover" />
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
              className={`relative font-bold transition-all py-2 group text-base ${isScrolled ? 'text-gray-600 hover:text-[#4034e0]' : 'text-white/70 hover:text-white pointer-events-auto'}`}
            >
              <span className="relative z-10">{link.name}</span>
              <span
                className="absolute bottom-1 right-0 w-0 h-1 rounded-full opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300 pointer-events-none"
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
            className="px-10 py-3.5 rounded-full text-white font-black shadow-[0_10px_30px_rgba(64,52,224,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 text-base"
            style={{ background: COLORS.gradient }}
          >
            ابدأ الآن
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 rounded-xl border transition-all ${isScrolled ? 'text-gray-600 border-gray-100' : 'text-white border-white/10 bg-white/5'}`}
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

      {/* Mobile Menu Enhanced */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl transition-all duration-500 ease-out overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] border-b border-gray-100' : 'max-h-0'
          }`}
      >
        <div className="container mx-auto px-6 py-10 flex flex-col space-y-6 text-right">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xl font-black text-gray-800 hover:text-[#4034e0] transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
              style={{ transitionDelay: `${i * 50}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-8 border-t border-gray-50 flex flex-col gap-4">
            <button className="w-full py-4 text-gray-600 font-bold text-center border border-gray-100 rounded-2xl">تسجيل الدخول</button>
            <button className="w-full py-4 rounded-2xl text-white font-black shadow-lg" style={{ background: COLORS.gradient }}>ابدأ الآن</button>
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
        <rect x="5" y="2" width="14" height="20" rx="3" />
        <path d="M12 18h.01" />
      </svg>
    )
  },
  {
    arName: 'سيركلز ون',
    enName: 'Circles One',
    desc: 'نظام يعمل على الانترنت للشركات المتوسطة والصغيرة لإدارة الموارد البشرية وتخطيط الموارد.',
    icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    arName: 'سيركلز باي',
    enName: 'Circles Pay',
    desc: 'نظام الرواتب وشؤون الموظفين - يقوم بأتمتة الرواتب من خلال الإعداد الديناميكي والمرن وفقاً للسياسات المحلية.',
    icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    )
  },
  {
    arName: 'ماي سيركل',
    enName: 'My Circle',
    desc: 'بوابة خدمة ذاتية تمكّن القوى العاملة من إدارة معلوماتهم وطلباتهم بشكل رقمي.',
    icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
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
        <path d="M12 2v20" />
        <path d="M2 12h20" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    )
  },
];

const AbstractCircles = () => (
  <div className="relative w-full h-full flex items-center justify-center opacity-40 animate-spin-slow">
    <div className="absolute w-[90%] h-[90%] border-[2px] border-[#4034e0]/10 rounded-full animate-pulse blur-[1px]" />
    <div className="absolute w-[70%] h-[70%] border-[3px] border-[#e40046]/20 rounded-full animate-[ping_4s_linear_infinite]" />
    <div className="absolute w-[50%] h-[50%] border-[4px] border-[#4034e0]/10 rounded-full blur-[2px]" />
    <div className="absolute w-[30%] h-[30%] border-[2px] border-[#e40046]/30 rounded-full" />
  </div>
);

export default function CirclesSoftHomepage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-white text-[#0d0d0d] selection:bg-[#e40046] selection:text-white font-['Cairo',_sans-serif] overflow-x-hidden" dir="rtl">

      <Navbar />

      {/* --- Section 1: Hero --- */}
      <section className="relative w-full min-h-[95vh] flex items-center overflow-hidden">
        {/* Background Image with Dark & Brand Glow Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: 'url("/bg-hero.png")' }}
        />
        <div className="absolute inset-0 z-[1] bg-[#060606]/95 lg:bg-gradient-to-r lg:from-[#060606]/98 lg:via-[#060606]/95 lg:to-transparent" />

        {/* Brand Glows */}
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-[#4034e0]/15 blur-[160px] rounded-full z-[2] animate-pulse" />

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center z-10 pt-32 lg:pt-20">
          {/* Content */}
          <div className="flex flex-col space-y-10 max-w-3xl text-right order-2 lg:order-1 animate-fadeInLeft">
            <div className="inline-flex items-center space-x-3 space-x-reverse px-5 py-2.5 bg-white/5 border border-white/10 rounded-2xl w-fit backdrop-blur-2xl">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: COLORS.gradient }} />
              <span className="text-sm font-bold text-white/60 tracking-widest uppercase">مستقبل الأنظمة الإدارية الذكية</span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black leading-[1.1] text-white tracking-tighter">
              خدمات <span className="inline-block" style={{ background: COLORS.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 0 30px rgba(64,52,224,0.3))' }}>الموارد البشرية</span> بطريقة تقنية وسهلة
            </h1>

            <p className="text-xl lg:text-2xl text-white/50 leading-relaxed font-light max-w-2xl">
              نحن نعيد تعريف إدارة رأس المال البشري من خلال حلول رقمية تتسم بالبساطة والذكاء، مصممة خصيصاً لتلبية طموحات الشركات الرائدة في العالم العربي.
            </p>

            <div className="flex flex-wrap gap-6 pt-6 justify-start space-x-reverse">
              <button
                className="px-12 py-5 rounded-3xl text-white font-black text-xl shadow-[0_20px_40px_-10px_rgba(64,52,224,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
                style={{ background: COLORS.gradient }}
              >
                اطلب عرض توضيحي
              </button>
              <button className="px-12 py-5 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-md text-white font-black text-xl hover:bg-white/10 transition-all">
                استكشف منتجاتنا
              </button>
            </div>
          </div>

          {/* Person Image (Optimized Frame) */}
          <div className="relative h-full flex items-center justify-center order-1 lg:order-2 animate-fadeInRight">
            <div className="absolute inset-0 z-0 scale-125">
              <AbstractCircles />
            </div>
            <div className="relative z-10 w-[85%] lg:w-full max-w-[550px] aspect-square rounded-[4rem] border-2 border-white/15 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] rotate-3 hover:rotate-0 transition-transform duration-1000">
              <img
                src="/person.png"
                alt="Human Centric Technology"
                className="w-full h-full object-cover scale-110 object-top hover:scale-105 transition-transform duration-[8s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Dynamic Card */}
            <div className="absolute top-[20%] -right-8 lg:-right-16 bg-white/10 backdrop-blur-3xl border border-white/20 p-6 rounded-[2rem] shadow-2xl z-20 animate-[float_5s_ease-in-out_infinite]">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: COLORS.gradient }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div className="text-right">
                  <div className="text-xs text-white/50 font-bold uppercase tracking-wider">الأمان والموثوقية</div>
                  <div className="text-lg font-black text-white">بياناتك دائماً محمية</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Products (Elegant Re-design) --- */}
      <section className="relative py-40 bg-[#fdfdfd] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4034e0]/3 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-10 text-right">
            <div className="max-w-3xl space-y-6">
              <div className="flex items-center gap-3 text-[#4034e0] font-black uppercase tracking-[0.4em] text-xs">
                <div className="w-10 h-0.5 bg-[#4034e0]" />
                <span>المنظومة الرقمية</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-[#0d0d0d] leading-[1.2]">
                حلول <span className="text-gradient">متكاملة</span> تلبي طموحاتك
              </h2>
              <p className="text-gray-500 text-xl lg:text-2xl leading-relaxed font-light">
                نحن لا نقدم مجرد برامج، بل نصمم تجارب إدارية فريدة تساعدك على قيادة مؤسستك نحو المستقبل بكل ثقة ووضوح.
              </p>
            </div>

            <div className="hidden lg:flex gap-4">
              <button className="w-16 h-16 rounded-3xl border border-gray-200 flex items-center justify-center hover:bg-[#4034e0] hover:text-white hover:border-[#4034e0] transition-all duration-300">
                <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
              <button className="w-16 h-16 rounded-3xl border border-gray-200 flex items-center justify-center hover:bg-[#4034e0] hover:text-white hover:border-[#4034e0] transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="group relative h-[450px] p-12 rounded-[3.5rem] bg-white border border-gray-100/80 shadow-[0_10px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_100px_rgba(64,52,224,0.1)] transition-all duration-700 overflow-hidden text-right flex flex-col justify-between"
              >
                {/* Background Decor */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-gray-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 ease-out z-0" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-12 w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center text-[#4034e0] group-hover:scale-110 group-hover:bg-[#4034e0] group-hover:text-white transition-all duration-500 shadow-inner overflow-hidden border border-gray-100/50">
                    <product.icon className="w-10 h-10" />
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-black text-blue-500/50 uppercase tracking-[0.3em] font-sans">{product.enName}</div>
                    <h4 className="text-3xl font-black text-[#0d0d0d] group-hover:text-blue-600 transition-colors leading-tight">{product.arName}</h4>
                  </div>

                  <p className="text-gray-400 leading-relaxed text-lg font-light group-hover:text-gray-600 transition-colors">
                    {product.desc}
                  </p>

                  <div className="mt-auto pt-8 flex items-center justify-end">
                    <div className="flex items-center gap-3 text-[#4034e0] font-black group/link">
                      <span className="text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">اكتشف النظام</span>
                      <div className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-[#4034e0] group-hover:bg-[#4034e0] group-hover:text-white transition-all duration-500">
                        <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Invisible hover overlay for card gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4034e0]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <button className="inline-flex items-center gap-4 px-12 py-5 rounded-full border-2 border-gray-100 font-black text-[#4034e0] hover:bg-gray-50 hover:border-[#4034e0]/30 transition-all duration-300">
              عرض كافة الأنظمة والحلول
              <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer (Elegant & Modern) */}
      <footer className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
            <div className="col-span-2 space-y-10 text-right">
              <div className="flex items-center space-x-4 space-x-reverse justify-end">
                <span className="text-4xl font-black tracking-tight text-[#0d0d0d]">Circles<span className="text-gray-300">Soft</span></span>
                <div className="w-14 h-14 rounded-[1.5rem] flex items-center justify-center shadow-2xl relative overflow-hidden">
                  <img src="/logo.jpeg" alt="Logo" className="w-full h-full object-cover" />
                </div>
              </div>
              <p className="text-gray-400 text-xl font-light leading-relaxed max-w-lg mr-0 ml-auto">
                شريككم الاستراتيجي في رحلة التحول الرقمي، نوفر لكم الأدوات الذكية التي تجعل من إدارة الأعمال تجربة ممتعة ومثمرة.
              </p>
              <div className="flex justify-end gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#4034e0] hover:text-white hover:scale-110 transition-all cursor-pointer">
                    <div className="w-6 h-6 border-2 border-current rounded-full" />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 text-right">
              <h5 className="text-xl font-black text-[#0d0d0d]">المنتجات</h5>
              <ul className="space-y-4 text-gray-500 font-bold">
                <li><a href="#" className="hover:text-[#4034e0] transition-colors">سيركلز ون</a></li>
                <li><a href="#" className="hover:text-[#4034e0] transition-colors">سيركلز باي</a></li>
                <li><a href="#" className="hover:text-[#4034e0] transition-colors">ماي سيركل</a></li>
                <li><a href="#" className="hover:text-[#4034e0] transition-colors">التطبيقات</a></li>
              </ul>
            </div>

            <div className="space-y-8 text-right">
              <h5 className="text-xl font-black text-[#0d0d0d]">الشركة</h5>
              <ul className="space-y-4 text-gray-500 font-bold">
                <li><a href="#" className="hover:text-[#4034e0] transition-colors">عن سيركلز سوفت</a></li>
                <li><a href="#" className="hover:text-[#4034e0] transition-colors">الأسعار والخطط</a></li>
                <li><a href="#" className="hover:text-[#4034e0] transition-colors">شركاء النجاح</a></li>
                <li><a href="#" className="hover:text-[#4034e0] transition-colors">اتصل بنا</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-bold text-gray-400">
            <div className="flex gap-8 order-2 md:order-1">
              <a href="#">الشروط والأحكام</a>
              <a href="#">سياسة الخصوصية</a>
            </div>
            <p className="order-1 md:order-2">© 2026 سيركلز سوفت. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .text-gradient {
          background: ${COLORS.gradient};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fadeInRight { animation: fadeInRight 1s ease-out forwards; }
        .animate-fadeInLeft { animation: fadeInLeft 1s ease-out forwards; }
        .animate-spin-slow { animation: spin 20s linear infinite; }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        ::selection {
          background: #4034e0;
          color: white;
        }
        
        body {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}

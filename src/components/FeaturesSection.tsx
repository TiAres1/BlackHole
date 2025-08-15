const FeaturesSection = () => {
  const features = [
    {
      title: "وضع الآمان",
      description: "ما يحذف أي شيء مهم… يفحص ويضيف/يحدث الناقص فقط، بدون تخريب إعداداتك"
    },
    {
      title: "التخصيص الكامل",
      description: "اختر اللي يناسبك: الرتب، القنوات، الإيموجي، صورة السيرفر… أو كلها"
    },
    {
      title: "Dry Run",
      description: "شوف التغييرات قبل ما تصير، عشان تتأكد 100٪ قبل التنفيذ"
    },
    {
      title: "عرض الفروقات",
      description: "اعرف بالضبط وش الجديد، وش اللي بينحذف، قبل أي خطوة"
    },
    {
      title: "نسخ أي سيرفر",
      description: "ما تحتاج رتبة أو صلاحيات في السيرفر الأصلي!"
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-secondary/30 relative grid-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 text-primary fade-in">
          مميزات الأداة
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`feature-card fade-in fade-in-delay-${Math.min(index + 1, 3)} group`}
            >
              <div className="circle-indicator group-hover:bg-primary/20">
                <div className="circle-dot group-hover:opacity-100"></div>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-primary text-right group-hover:text-glow transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-right text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
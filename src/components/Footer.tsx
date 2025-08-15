const Footer = () => {
  return (
    <footer className="relative py-12 px-6 bg-secondary/40 hexagon-background border-t border-border/30">
      <div className="container mx-auto">
        <div className="text-center">
          {/* Logo and Description */}
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4 text-glow">
              Black Hole
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              أداة متقدمة لنسخ وإدارة سيرفرات Discord بطريقة آمنة ومرنة
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Black Hole. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
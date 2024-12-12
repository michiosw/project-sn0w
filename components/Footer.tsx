export default function Footer() {
  return (
    <footer className="py-6 px-4 mt-24">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p className="text-xs font-light text-white/40">
          © {new Date().getFullYear()} sn0w
        </p>
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="text-xs font-light text-white/40 hover:text-white/60 transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-xs font-light text-white/40 hover:text-white/60 transition-colors"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

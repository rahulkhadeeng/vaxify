import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";

interface FooterLink {
  title: string;
  href: string;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

export function Footer() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <footer className="relative mt-20 bg-white">
      <div className="relative mx-auto max-w-6xl px-6 py-14 rounded-t-4xl border-t border-slate-100">
        <div className="grid gap-12 md:grid-cols-[1.2fr_2fr]">
          {/* brand stack */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={containerVariants}
            className="space-y-4"
          >
            <div>
              <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-indigo-600 w-fit">
                <img src="/logo.svg" alt="" className="w-8 h-8" />
                Vaxify
              </Link>
            </div>

            <p className="text-slate-400 text-xs mt-8">© {new Date().getFullYear()} Vaxify. All rights reserved.</p>
          </motion.div>

          {/* links grid */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 1}
                variants={containerVariants}
              >
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900">{section.label}</h3>

                <ul className="mt-6 space-y-3 text-sm">
                  {section.links.map((link) => {
                    const isExternal = link.href.startsWith("http");

                    return (
                      <li key={link.title}>
                        {isExternal ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-slate-500 transition-colors hover:text-indigo-600"
                          >
                            {link.title}
                          </a>
                        ) : (
                          <Link
                            to={link.href}
                            className="inline-flex items-center text-slate-500 transition-colors hover:text-indigo-600"
                          >
                            {link.title}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerLinks: FooterSection[] = [
  {
    label: "Product",
    links: [
      { title: "Features", href: "/" },
      { title: "Hospitals", href: "/" },
      { title: "Appointments", href: "/" },
      { title: "Dashboards", href: "/" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "FAQs", href: "/faqs" },
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Terms of Service", href: "/terms-of-service" },
    ],
  },
  {
    label: "Resources",
    links: [
      {
        title: "GitHub Repository",
        href: "https://github.com/rahulkhadeeng/vaxify",
      },
      { title: "Contact Support", href: "mailto:contact@vaxify.xyz" },
    ],
  },
];

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto py-4 bg-secondary/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-bold text-primary text-lg">Ranjit Yadav</p>
          <p className="text-sm text-primary/80 mt-1">
            IT Student & Aspiring Cloud DevOps Engineer
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/ranjit-15"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-background text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-sm hover:shadow-md"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ranjit-yadav-2ab635200"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-background text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-sm hover:shadow-md"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:ranjityadav982577rd@gmail.com"
            className="p-2 rounded-full bg-background text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-sm hover:shadow-md"
            aria-label="Email Me"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="text-sm text-primary/70 text-center md:text-right">
          &copy; {currentYear} Ranjit Yadav. <br className="hidden md:block" />
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}

import './globals.css';

export const metadata = {
  title: "Ms. Lisye - Portfolio",
  description: "Portfolio of Ms. Lisye, Software Engineer in Computer Vision, AI & Robotics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-slate-50 text-slate-950 antialiased">
        {children}
      </body>
    </html>
  );
}

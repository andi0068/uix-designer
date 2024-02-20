import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';

import { cn } from '@/lib/utils';
import * as Header from '@/components/layouts/header';
import * as Nav from '@/components/layouts/nav';
import * as Footer from '@/components/layouts/footer';
import Container from '@/components/layouts/container';
import * as Badges from '@/components/badges';
import * as data from '@/data';

import './globals.css';

const sans = Inter_Tight({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: data.user.name,
  description: data.user.description,
};

const props = {
  header: {
    title: data.user.name,
    links: [
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  footer: {
    copyright: `© 2023 ${data.user.name}. All right reserved.`,
    links: data.socials,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          sans.className,
          'flex flex-col min-h-screen antialiased text-dark-foreground bg-dark-background',
        )}
      >
        <Header.Provider>
          <Header.Root>
            <Container>
              <Header.Content>
                <Header.Title>
                  <a href="#" className="block leading-10">
                    {props.header.title}
                  </a>
                </Header.Title>
                <Nav.Root>
                  <Nav.Content>
                    {props.header.links.map((nav) => (
                      <Nav.Item key={nav.label}>
                        <a href={nav.href} className="block leading-10">
                          {nav.label}
                        </a>
                      </Nav.Item>
                    ))}
                  </Nav.Content>
                </Nav.Root>
              </Header.Content>
            </Container>
          </Header.Root>
          {children}
          <Footer.Root>
            <Container>
              <Footer.Content>
                <Footer.Copyright>{props.footer.copyright}</Footer.Copyright>
                <Badges.Links
                  label={props.footer.links.title}
                  items={props.footer.links.items}
                  external
                />
              </Footer.Content>
            </Container>
          </Footer.Root>
        </Header.Provider>
      </body>
    </html>
  );
}

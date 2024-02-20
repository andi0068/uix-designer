import type { Link } from '@/types';

import { Badges as List } from './layouts/list';
import Badge from './ui/badge';

interface BaseProps<T> {
  items: T[];
  label?: string;
}
interface LinksProps extends BaseProps<Link> {
  external?: boolean;
}

export function Links({ label = 'Links', items, external }: LinksProps) {
  return (
    <List as="ul" aria-label={label}>
      {items.map((social) => (
        <li key={social.label}>
          <Badge asChild>
            <a
              href={social.href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {social.label}
            </a>
          </Badge>
        </li>
      ))}
    </List>
  );
}

export function Tags({ label = 'Tags', items }: BaseProps<string>) {
  return (
    <List as="ul" aria-label={label}>
      {items.map((tag) => (
        <Badge asChild key={tag}>
          <li>{tag}</li>
        </Badge>
      ))}
    </List>
  );
}

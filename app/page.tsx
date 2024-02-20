import { Fragment } from 'react';

import Time from '@/lib/components/time';
import { Hero, Marquee, Body, Quote, Projects, Steps, Contact } from '@/components/home';
import ProjectList from '@/components/projects';
import StepList from '@/components/steps';
import * as Badges from '@/components/badges';
import Main from '@/components/layouts/main';
import Container from '@/components/layouts/container';
import Badge from '@/components/ui/badge';
import * as SVGs from '@/components/svgs/home-svgs';
import * as TimeService from '@/services/time';
import * as data from '@/data';

export default async function Home() {
  const { dateTime } = await TimeService.get({ timeZone: data.user.time_zone });

  const marquee = (
    <Marquee.Root>
      <Marquee.Content>
        {data.marquee.items.map((content, i) => (
          <Fragment key={i}>
            <Marquee.Item>{content}</Marquee.Item>
            <Marquee.Item aria-hidden>
              <SVGs.Star className="shrink-0 w-[1em] h-[1em]" />
            </Marquee.Item>
          </Fragment>
        ))}
      </Marquee.Content>
    </Marquee.Root>
  );

  return (
    <Main>
      <Hero.Root>
        <Container>
          <Hero.Content>
            <Hero.Title>{data.hero.headline}</Hero.Title>
            <Hero.Description>{data.hero.about}</Hero.Description>
            <Hero.Footer>
              <Hero.Location>
                {data.user.location} — <Time dateTime={dateTime} />
              </Hero.Location>
              <Badges.Links label={data.socials.title} items={data.socials.items} external />
            </Hero.Footer>
          </Hero.Content>
        </Container>
      </Hero.Root>
      {marquee}
      <Body>
        <Quote.Root>
          <Container>
            <Quote.Content>
              <Quote.Blockquote>{data.quote.content}</Quote.Blockquote>
            </Quote.Content>
          </Container>
        </Quote.Root>
        <Projects.Root id="projects">
          <Container>
            <Projects.Content>
              <Projects.Title>{data.projects.title}</Projects.Title>
              <ProjectList items={data.projects.items} />
            </Projects.Content>
          </Container>
        </Projects.Root>
        <Steps.Root>
          <Container>
            <Steps.Content>
              <Steps.Title>{data.steps.title}</Steps.Title>
              <StepList items={data.steps.items} />
            </Steps.Content>
          </Container>
        </Steps.Root>
      </Body>
      {marquee}
      <Contact.Root id="contact">
        <Container>
          <Contact.Content>
            <Contact.Title>{data.contact.title}</Contact.Title>
            <Badge asChild size="2xl">
              <a href={'mailto:' + data.contact.email}>{data.contact.email}</a>
            </Badge>
          </Contact.Content>
        </Container>
      </Contact.Root>
    </Main>
  );
}

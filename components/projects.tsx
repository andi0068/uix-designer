import * as path from '@/utils/path-utils';
import type { Project as ProjectType } from '@/types';

import { Tags } from './badges';
import { Projects as List } from './layouts/list';
import * as Project from './ui/project';
import Image from './ui/image';

interface ProjectsProps {
  items: ProjectType[];
}

export default function Projects({ items }: ProjectsProps) {
  return (
    <List>
      {items.map((project) => (
        <Project.Root key={project.number}>
          <Project.Image asChild>
            <Image
              alt={project.image.name}
              width={project.image.width}
              height={project.image.height}
              src={path.image(project.image.name)}
              sizes={[335, 612]}
            />
          </Project.Image>
          <Project.Content>
            <Project.Title>
              /{project.number} — {project.title}
            </Project.Title>
            <Tags items={project.tags} />
          </Project.Content>
        </Project.Root>
      ))}
    </List>
  );
}

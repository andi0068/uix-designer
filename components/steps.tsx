import { Step as StepType } from '@/types';

import { Steps as List } from './layouts/list';
import * as Step from './ui/step';

interface StepsProps {
  items: StepType[];
}

export default function Steps({ items }: StepsProps) {
  return (
    <List>
      {items.map((step) => (
        <Step.Root key={step.number}>
          <Step.Number>({step.number})</Step.Number>
          <Step.Title>{step.title}</Step.Title>
          <Step.Description>{step.description}</Step.Description>
        </Step.Root>
      ))}
    </List>
  );
}

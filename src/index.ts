import { FC } from 'react';

export interface ChildAppProps {
  info?: {
    name: string,
    age: number
  },
}

export type ChildApp = FC<ChildAppProps>
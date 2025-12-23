
// Fix: Import React to provide the React namespace for React.ReactNode
import React from 'react';

export interface ModuleConfig {
  fs: boolean;
  memory: boolean;
  search: boolean;
  path: string;
}

export type ArchComponent = 'client' | 'server' | 'fs' | 'memory' | 'web';

export interface ArchDetail {
  title: string;
  description: string;
  color: string;
}

export interface Step {
  id: number;
  title: string;
  content: React.ReactNode;
}

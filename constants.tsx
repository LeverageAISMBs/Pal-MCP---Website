
import React from 'react';
import { ArchComponent, ArchDetail } from './types';

export const ARCH_DETAILS: Record<ArchComponent, ArchDetail> = {
  client: {
    title: 'The AI Client',
    description: 'The interface (like Claude Desktop) acts as the logic engine. It communicates via natural language prompts, calling specialized tools through the MCP connection when it needs local context.',
    color: 'text-blue-600',
  },
  server: {
    title: 'Pal MCP Server (The Hub)',
    description: 'The core translation layer. It receives JSON-RPC requests, validates security permissions, and routes execution to specific functional modules like the filesystem or persistent memory.',
    color: 'text-orange-600',
  },
  fs: {
    title: 'Filesystem Module',
    description: 'Provides sandboxed access to local directories. Allows the AI to read codebases, analyze documents, and write updates directly to your project folders.',
    color: 'text-green-600',
  },
  memory: {
    title: 'Memory Module',
    description: 'A semantic storage layer that persists key-value context across sessions, allowing the AI to "remember" preferences, project architectures, and historical decisions.',
    color: 'text-purple-600',
  },
  web: {
    title: 'Web Integration',
    description: 'Extends capabilities with live search APIs (Brave/Google) and URL fetching, ensuring the model is not limited to its static training cutoff date.',
    color: 'text-red-600',
  },
};

export const COMPARISON_DATA = {
  labels: ['Setup Ease', 'Context Depth', 'Orchestration', 'Tool Density', 'Customization'],
  pal: [70, 95, 45, 92, 85],
  zen: [90, 65, 95, 55, 75],
};

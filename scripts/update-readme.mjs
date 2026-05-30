import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const readmePath = path.join(root, 'README.md');
const nextStepsPath = path.join(root, 'NEXT_STEPS.md');
const projectStatusPath = path.join(root, 'PROJECT_STATUS.md');
const agentsPath = path.join(root, 'AGENTS.md');

const startMarker = '<!-- PICKAXE-AUTO-UPDATE:START -->';
const endMarker = '<!-- PICKAXE-AUTO-UPDATE:END -->';

function readIfExists(filePath) {
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
}

function findSection(markdown, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`^## ${escaped}\\s*$([\\s\\S]*?)(?=^## |\\z)`, 'm');
  const match = markdown.match(pattern);
  return match ? match[1].trim() : '';
}

function extractBullets(section, limit = 12) {
  return section
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('- ') || /^\d+\.\s/.test(line))
    .slice(0, limit);
}

function fallbackLines(lines, fallback) {
  return lines.length ? lines : fallback;
}

const readme = readIfExists(readmePath);
const nextSteps = readIfExists(nextStepsPath);
const projectStatus = readIfExists(projectStatusPath);
const agents = readIfExists(agentsPath);

if (!readme.includes(startMarker) || !readme.includes(endMarker)) {
  console.error('README auto-update markers not found.');
  process.exit(1);
}

const workingNow = fallbackLines(
  extractBullets(findSection(nextSteps, 'Working Now'), 12),
  extractBullets(findSection(projectStatus, 'Working Routes'), 12),
);

const currentState = fallbackLines(
  extractBullets(findSection(nextSteps, 'Current State'), 8),
  [
    '- Active app is served by `server.mjs`.',
    '- Main runtime lives in `public/`.',
    '- Mock and future-adapter features must stay labeled.',
  ],
);

const nextPriority = fallbackLines(
  extractBullets(findSection(nextSteps, 'Next Session Priority'), 8),
  extractBullets(findSection(nextSteps, 'Next'), 8),
);

const rules = fallbackLines(
  extractBullets(findSection(agents, 'Engineering Rules'), 10),
  [
    '- Do not rebuild from scratch.',
    '- Keep mock data labeled.',
    '- No fake live integrations.',
    '- No auto-trading or broker order placement.',
  ],
);

const generated = new Date().toISOString().slice(0, 10);

const replacement = `${startMarker}

### Last README Game Plan Update

- Generated: ${generated}
- Sources: \`AGENTS.md\`, \`PROJECT_STATUS.md\`, \`NEXT_STEPS.md\`

### Working Now

${workingNow.join('\n')}

### Current State

${currentState.join('\n')}

### Next Priority

${nextPriority.join('\n')}

### Non-Negotiable Build Rules

${rules.join('\n')}

${endMarker}`;

const updated = readme.replace(
  new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`),
  replacement,
);

fs.writeFileSync(readmePath, updated);
console.log('README.md game plan block updated.');

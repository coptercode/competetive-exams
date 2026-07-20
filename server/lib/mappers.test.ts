import { describe, it, expect } from 'vitest';
import { subjectColor, mapTopic } from './mappers.js';

describe('subjectColor', () => {
  it('is deterministic for the same code and index', () => {
    expect(subjectColor('MATH', 0)).toBe(subjectColor('MATH', 0));
  });

  it('can vary by index for the same code', () => {
    const colors = new Set([0, 1, 2, 3, 4].map((i) => subjectColor('MATH', i)));
    expect(colors.size).toBeGreaterThan(1);
  });
});

describe('mapTopic', () => {
  it('cleans up LaTeX degree notation in title and content', () => {
    const result = mapTopic({ id: 't1', name: 'Angle of $90^\\circ$' });
    expect(result.title).toBe('Angle of 90°');
  });

  it('defaults isCompleted to false when there is no progress record', () => {
    const result = mapTopic({ id: 't1', name: 'Topic' });
    expect(result.isCompleted).toBe(false);
  });

  it('reflects completion from the first progress record', () => {
    const result = mapTopic({ id: 't1', name: 'Topic', studentProgress: [{ isCompleted: true }] });
    expect(result.isCompleted).toBe(true);
  });

  it('marks drmEnabled only when the first video explicitly has it', () => {
    const result = mapTopic({
      id: 't1',
      name: 'Topic',
      videos: [{ id: 'v1', title: 'Vid', videoUrl: 'x', duration: 120, drmEnabled: true }],
    });
    expect(result.drmEnabled).toBe(true);
    expect(result.duration).toBe('2 mins');
  });
});

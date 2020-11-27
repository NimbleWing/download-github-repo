import Fs from 'fs-extra';
import Read from 'fs-readdir-recursive';
import { expect } from 'chai';
import Download from '../src';

describe('download-github-repo', () => {
  afterEach(() => {
    Fs.removeSync('test/tmp');
  });
  it('downloads the main branch by default', async () => {
    await Download('NimbleWing/download-github-repo', 'test/tmp');
    const actual = Read('test/tmp');
    const expected = Read('test/fixtures/main');
    expect(actual).to.include.members(expected);
  });
  it('download branches too', async () => {
    await Download('NimbleWing/download-github-repo#fixtures', 'test/tmp');
    const actual = Read('test/tmp');
    const expected = Read('test/fixtures/fixtures');
    expect(actual).to.deep.equal(expected);
  });
  it('not found by error repo', async () => {
    try {
      await Download('NimbleWin/download-github-repo#fixtures', 'test/tmp');
    } catch ($err) {
      expect($err.message).to.equal('not found');
    }
  });
});

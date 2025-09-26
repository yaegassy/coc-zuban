import {  workspace } from 'coc.nvim';

import which from 'which';

export async function getZubanBinaryPath() {
  // MEMO: Priority to detect binary
  // 1. zuban.path setting
  // 2. current environment

  // 1
  let binaryPath = workspace.getConfiguration('zuban').get('path', '');
  if (!binaryPath) {
    // 2
    binaryPath = which.sync('zuban', { nothrow: true }) || '';
  }

  return binaryPath;
}

# coc-zuban

[Zuban](https://zubanls.com/) Language Server extension for [coc.nvim](https://github.com/neoclide/coc.nvim).

## Usage

To use this coc extension, the `zuban` command must exist in the execution environment.

## Install

**CocInstall**:

```vim
:CocInstall @yaegassy/coc-zuban
```

> scoped packages

**e.g. vim-plug**:

```vim
Plug 'yaegassy/coc-zuban', {'do': 'pnpm install'}
```

## Configuration options

- `zuban.enable`: Enable coc-zuban extension, default: `true`
- `zuban.path`: Custom path for the `zuban` binary when using the native server. If no value is set, the `zuban` command will be detected from the runtime environment, default: `""`
- `zuban.disableDiagnostics`: Disable diagnostics and pullDiagnostic only, default: `false`
- `zuban.disableCompletion`: Disable completion only, default: `false`
- `zuban.disableHover`: Disable hover only, default: `false`
- `zuban.disableDefinition`: Disable definition only, default: `false`
- `zuban.disableTypeDefinition`: Disable typeDefinition only, default: `false`
- `zuban.disableDeclaration`: Disable declaration only, default: `false`
- `zuban.disableImplementation`: Disable implementation only, default: `false`
- `zuban.disableReferences`: Disable references only, default: `false`
- `zuban.disableRename`: Disable rename only, default: `false`
- `zuban.disableDocumentHighlight`: Disable documentHighlight only, default: `false`
- `zuban.trace.server`: Traces the communication between coc.nvim and the zuban server, default: `"off"`

## Commands

- `zuban.showLogs`: Show logs
- `zuban.restart`: Restart Server

## Thanks

- [zubanls/zuban](https://github.com/zubanls/zuban)
- [zubanls/vscode-zubanls](https://github.com/zubanls/vscode-zubanls)

## License

MIT

namespace Zed {

  interface Runnable {
    /**
     * 通过配置文件生成真实的文件(扩展)
     */
    toData(): void
  }

  interface manifest {
    id: string
    name: string
    description: string
    version: string
    author: string
    schema_version: 1
    authors: string[]
    repository: string
    language_servers: languageServer[]
    grammars: grammar[]
  }

  interface languageServer {

  }

  interface grammar {
    name: string
    path_suffixes: string[]
    line_comments: string[]
    brackets: grammarBracket[]
    repository: string
    commit: string

    /**
     * .scm 文件, 高亮相关
     *
     * 1. 可以先从 repository 仓库(即 tree-sitter-*) 中查看有没有 queries 目录, 有就直接使用
     * 2. 从 nvim-treesitter 上游中拿(https://github.com/nvim-treesitter/nvim-treesitter/tree/master/queries)
     * 3. 从 helix 上游中拿 (https://github.com/helix-editor/helix/tree/master/runtime/queries)
     *
     * 拿到之后需要重新修改一下, 因为 zed 中的 .scm 不符合规范(sure)
     */
    scms: grammarSCMKind[]
  }

  // TODO: 添加全部
  type grammarSCMKind = 'highlights' | 'injections'

  interface grammarBracket {
    start: string
    end: string
    close: boolean
    newLine: boolean
    not_in: grammarBracketNotInKind[]
  }

  // TODO: 添加全部
  type grammarBracketNotInKind = 'string' | 'comment'

}
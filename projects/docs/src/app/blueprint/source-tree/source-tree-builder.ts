import { Injectable } from '@angular/core';

type EXTENSION_TYPE = 'ts' | 'html' | 'scss' | 'spec';

export type SourceTreeFolder = {
  name: string;
  files: SourceTreeFile[];
  hideName?: boolean;
};

export type SourceTreeFile = {
  name: string;
  path: string;
  language: EXTENSION_TYPE;
};

@Injectable({
  providedIn: 'root',
})
export class SourceTreeBuilder {
  sourceTree(root: string, folders: (root: string) => SourceTreeFolder[]) {
    return folders(root);
  }

  directive(name: string, root: string): SourceTreeFile {
    return {
      name: `${name}.directive.ts}`,
      path: `ng-verse/${root}/${name}.directive.ts`,
      language: 'ts',
    };
  }

  file(name: string, rootPath: string, extension: EXTENSION_TYPE = 'ts') {
    return {
      name: `${name}.${extension}`,
      path: `ng-verse/${rootPath}/${name}.${extension}`,
      language: extension,
    };
  }

  component(name: string, rootPath: string, extension: EXTENSION_TYPE = 'ts') {
    return {
      name: `${name}.component.${extension}`,
      path: `ng-verse/${rootPath}/${name}.component.${extension}`,
      language: extension,
    };
  }

  fullComponent(name: string, rootPath: string): SourceTreeFile[] {
    return [
      this.component(name, rootPath, 'ts'),
      this.component(name, rootPath, 'html'),
      this.component(name, rootPath, 'scss'),
    ];
  }

  folder(
    name: string,
    root: string,
    files: (root: string) => SourceTreeFile[],
    hideName?: boolean
  ) {
    return {
      name: name,
      files: files(root),
      hideName,
    };
  }
}

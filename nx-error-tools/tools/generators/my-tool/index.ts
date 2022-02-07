import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
interface Schema {
  delay: number;
}

export default async function (tree: Tree, schema: Schema) {
  console.log(`start my-tool delay=${schema.delay}`);
  await new Promise<void>((resolve) =>
    setTimeout(() => resolve(), schema.delay * 1000)
  );
  console.log(`stop my-tool delay=${schema.delay}`);
}

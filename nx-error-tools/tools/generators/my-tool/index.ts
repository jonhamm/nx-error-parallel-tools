import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
interface Schema {
  delay: number
}

export default async function (tree: Tree, schema: Schema) {
  return new Promise<void>(resolve=>setTimeout(()=>resolve(),schema.delay*1000)

}

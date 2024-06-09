import {TreeNode} from "@/types/TreeNode";

export const listToTree = <T>(list: Array<TreeNode>) => {

  let  node, i;
  const map:Record<string, number> = {}, roots: Array<T> = [];

  for (i = 0; i < list.length; i += 1) {
    map[String(list[i].id)] = i;
    list[i].children = [];
  }

  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parentId === 0) {
      roots.push({...node, isVisible: true} as T);
    } else if (list[map[node.parentId]] && list[map[node.parentId]].children) {
      list[map[node.parentId]]?.children?.push(node);
    }
  }
  return roots;
}

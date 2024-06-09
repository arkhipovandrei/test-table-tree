export type TreeNode = {
  id: number;
  parentId: number;
  children?: TreeNode[];
  isVisible?: boolean;
}

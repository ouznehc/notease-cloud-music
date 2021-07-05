// parentDom 数组中是否有 dom 的父节点
export function hasParent(dom, parentDom) {
  parentDom = Array.isArray(parentDom) ? parentDom : [parentDom]
  while(dom){
    if(parentDom.find(p => p === dom)){
      return true
    } else {
      dom = dom.parentNode
    }
  }
}
 // utilitaires
 export function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  export function removeChildNodesWithClassName(parent, className){
    let list_children_to_remove = parent.getElementsByClassName(className);
    while(list_children_to_remove.length){
      parent.removeChild(list_children_to_remove[0]);
    }
  }
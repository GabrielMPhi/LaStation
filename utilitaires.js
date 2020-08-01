// utilitaires
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  function removeChildNodesWithClassName(parent, className){
    let list_children_to_remove = parent.getElementsByClassName(className);
    while(list_children_to_remove.length){
      parent.removeChild(list_children_to_remove[0]);
    }
  }

  function remove_all_children(parent){
    while(parent.firstChild){
      parent.removeChild(parent.firstChild);
    }
  }
// curious what this is doing? https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function() {
    // write your code here
    $("input").keypress(function(event) {
    if (event.which === 13) {
      var todo = $(".new-todo").val();
      var todoItem = `<li>
      <div class="view">
      <input class="toggle" type="checkbox">
      <label>${todo}</label>
      <button class="destroy"></button>
      </div>
      </li>`;
      $(".main").show();
      $("footer").show();
      //$(".destroy").show();
      $(".todo-list").append(todoItem.trim());
      $("input").val("");
      var valueCount= $(".todo-count").find("strong").html();
      var numValueCount = Number(valueCount);
      var newCount = numValueCount + 1;
      $(".todo-count").find("strong").html(newCount);
    }
  })


///CREATE A VALUE FOR EACH LI IMPUT
function checkPlural() {
  if ($("strong") > 1) {
  return $(".plural") + "s";
  console.log("s");
}
}

  $("ul").on("click", ".toggle", function() {
    var newClass = $(this).toggleClass("completed");
    // $("this").newClass;
    // if (li.class !== "completed") {
    //   var valueCount= $(".todo-count").find("strong").html();
    //   var numValueCount = Number(valueCount);
    //   var substractCount = numValueCount - 1;
    //   $(".todo-count").find("strong").html(substractCount);
    // } else if ($({}
    //console.log("click on li");
  })

  $("ul").on("click", ".destroy", function() {
    //console.log("clicked the X");
    // debugger;
    var emptyLi = $(this).parent().parent().remove();
    $("this").emptyLi;
    //I'm deliting all the lIS, How can I target an specific LI?
    $("this").emptyLi;
    var valueCount= $(".todo-count").find("strong").html();
    var numValueCount = Number(valueCount);
    var substractCount = numValueCount - 1;
    $(".todo-count").find("strong").html(substractCount);
  })

  $("ul").on("dblclick", "label", function() {
    //console.log("doubleclick");
    var editingMode = $("li").addClass("editing");
    $("this").editingMode;
    $(".destroy").hide();
    $(".toogle").hide();
  })

});

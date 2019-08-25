var checkboxes = $("input[type = 'checkbox']");
var checked = new Array(checkboxes.length);
for(var i=0; i<checked.length; i++){
    checked[i] = false;
}
checkboxes.each(function(index){
    $(this).on('change', function(){
        if(checked[index] == false){
            checked[index] = true;
            $(`#li-${this.name}`).addClass('checked-task');
        } else{
            checked[index] = false;
            $(`#li-${this.name}`).removeClass('checked-task');
        }
    });
});


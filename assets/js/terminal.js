// var cursor;
window.onload = init;

function init() {
    writer = document.getElementById("writer");
    cursor = document.getElementById("cursor");

    writer.addEventListener("keydown", function (evt) {
        var tmp = this.value;
        this.value = "";
        this.value = tmp;
        //setCursorPos(writer, writer.value.length);
    });
    writer.addEventListener("input", function (evt) {
        cursor.style.left =
            2 + Math.min(this.clientWidth, this.value.length * 11) + "px";
    });
    writer.addEventListener(
        "select",
        function (evt) {
            this.selectionStart = this.selectionEnd;
        },
        false
    );
    writer.addEventListener("keyup", function (evt) {
        if (evt.key === "Enter") {
            if (this.value.startsWith("cd ")) {
                window.location.href = this.value.split("cd ")[1];
            }
            this.value = "";
            cursor.style.left =
                2 + Math.min(this.clientWidth, this.value.length * 11) + "px";
        }
    });
}

function setCursorPos(ctrl, pos) {
    // Modern browsers
    if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(pos, pos);

        // IE8 and below
    } else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
    }
}

const node = document.getElementsByClassName("input1")[0];

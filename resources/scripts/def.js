function selectFile(fileID) {
    var fsFiles = document.getElementsByClassName("fsFile");
    for (var i = 0; i < fsFiles.length; i++) {
        fsFiles[i].classList.remove("fsActiveFile");
        fsFiles[i].children[0].classList.remove("show");
        fsFiles[i].children[0].classList.add("hide");
    }
    var file = document.getElementById(fileID);
    file.classList.add("fsActiveFile");
    file.children[0].classList.add("show");
    file.children[0].classList.remove("hide");
    files["currentFile"] = file.dataset.filename;
    setFile(fileID);
    console.log(files);
}

function setFile(fileID) {
    var file = document.getElementById(fileID);
    files[file.dataset.filename] = [];
    files[file.dataset.filename]["path"] = file.dataset.filepath;
}
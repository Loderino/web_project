function get_new_word(){
    const Http = new XMLHttpRequest();
    const url='http://localhost:8000/';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        document.getElementsByClassName("work_area")[0].innerHTML = Http.responseText;
    }
}
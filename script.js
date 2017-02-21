function toggle_open() {
    console.log('Panel is transforming');
    this.classList.toggle('open');
}

function toggle_active(event) {
    console.log(event.propertyName);
    if (event.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

const panels = document.querySelectorAll('.panel');

function add_event_to_panels() {
    var number_of_panels = panels.length;

    var i;

    for (i = 0; i < number_of_panels; i++) {
        panels[i].addEventListener('click', toggle_open);
        panels[i].addEventListener('transitionend', toggle_active);
    }
}

add_event_to_panels();

document.addEventListener("DOMContentLoaded", () => {

    // when we startup, loop over every panel
    let panels = document.querySelectorAll(".panel").forEach((el) => {

        // add an event listener to the panel
        el.addEventListener("click", (event) => {
            // if we are clicking on the currently selected item
            // then we don't have to do anything
            if (event.target.classList.contains("active")) {
                return;
            }

            // remove active from any existing panel
            document.querySelectorAll(".panel").forEach((panel_el) => { panel_el.classList.remove("active") })

            // add active class to the clicked panel
            event.target.classList.add("active");
        })
    })
})
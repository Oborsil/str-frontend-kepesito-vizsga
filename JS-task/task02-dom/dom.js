function changeOuterLinks() {
    const navElements = document.querySelectorAll('nav#link-list a');
    navElements.forEach(element => {
        if (element.innerHTML.includes('outer-link')) {
            element.target = '_blank';
            element.innerHTML = `<strong>${element.innerHTML}</strong>`;
        }
    })

    document.querySelectorAll("nav").forEach((element) => {
        element.style.display = "flex";
        element.style.flexDirection = "column";
        element.style.margin = "0px auto";
        element.style.width = "30%";
        element.style.border = "1px solid blue";
        element.style.padding = "16px";
    });


}


export { changeOuterLinks };
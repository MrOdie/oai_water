export const toggle = () => {
    const list = document.getElementById("toggle__titles");
    const children = list.childNodes;

    children.forEach(el => {

        el.addEventListener("click", (e) => {
            let elem = e.target;
            let elemId = elem.dataset.id;
            let titleArr = "";
            let titleClass = "";
            // Stage 1
            let elemContent = "";
            let contentClass = "";
            let contentArr = "";

            if (elem.classList.contains("active")) return;

            titleClass = '.' + elem.classList[0];
            titleArr = document.querySelectorAll(titleClass);

            titleArr.forEach((el) => {
                if (el.classList.contains("active")) {
                    el.classList.remove("active");
                }
            });

            elem.classList.add("active");

            //Stage 2
            elemContent = document.getElementById(elemId);
            contentClass = '.' + elemContent.classList[0];
            contentArr = document.querySelectorAll(contentClass);

            contentArr.forEach(el => {
                if (el.classList.contains("visible")) {
                    el.classList.remove('visible');
                }
            })

            elemContent.classList.add("visible");
        });
    });
};

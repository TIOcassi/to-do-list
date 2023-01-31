{
    const tasks = [
        {
            content: "ukończyć zadanie w 100%",
            done: false,
        },
        {
            content: "zjeść krokiety",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
        <li>
          ${task.content}
        </li>
        `;
        };
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render ();

    };

    init();
}
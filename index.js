
    let verbs = [
        {
            "Infinitive": "to be",
            "Past Simple": "was/were",
            "Past Participle": "been",
            "Translation": "бути"
        },
        {
            "Infinitive": "to become",
            "Past Simple": "became",
            "Past Participle": "become",
            "Translation": "ставати"
        },
        {
            "Infinitive": "to begin",
            "Past Simple": "began",
            "Past Participle": "begun",
            "Translation": "починати"
        },
        {
            "Infinitive": "to brake",
            "Past Simple": "broke",
            "Past Participle": "broken",
            "Translation": "ламати"
        },
        {
            "Infinitive": "to bring",
            "Past Simple": "brought",
            "Past Participle": "brought",
            "Translation": "приносити"
        },
        {
            "Infinitive": "to build",
            "Past Simple": "built",
            "Past Participle": "built",
            "Translation": "будувати"
        },
        {
            "Infinitive": "to buy",
            "Past Simple": "bought",
            "Past Participle": "bought",
            "Translation": "купувати"
        },
        {
            "Infinitive": "can",
            "Past Simple": "could",
            "Past Participle": "could",
            "Translation": "могти"
        },
        {
            "Infinitive": "to choose",
            "Past Simple": "chose",
            "Past Participle": "chosen",
            "Translation": "вибирати"
        },
        {
            "Infinitive": "to come",
            "Past Simple": "came",
            "Past Participle": "come",
            "Translation": "приходити"
        }
    ]

    // make an array of headers of the table

    let columns = [];
    for (let i = 0; i < verbs.length; i++) {
        for (let key in verbs[i]) {
            if (columns.indexOf(key) === -1) {
                columns.push(key);
            }
        }
    }

    // creating table and rows

    let table = document.createElement("table");

    let tr = table.insertRow(-1);

    for (let i = 0; i < columns.length; i++) {
        let th = document.createElement("th");
        th.innerHTML = columns[i];
        tr.appendChild(th);
    }


    // adding verbs to rows of table

    for (let i = 0; i < verbs.length; i++) {

        tr = table.insertRow(-1);

        for (let j = 0; j < columns.length; j++) {
            let tabCell = tr.insertCell(-1);
            tabCell.innerHTML = verbs[i][columns[j]];
        }
    }

    // sending data to div with id="data-table"
    
    let container = document.getElementById("data-table");
    container.innerHTML = "";
    container.appendChild(table);
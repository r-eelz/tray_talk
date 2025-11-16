function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let array_of_days = {}

export function pie_chart_data(day) {
    let day_data = null
    console.log(day)

    if (array_of_days[day] != null) {
        day_data = array_of_days[day]
    } else {
        const gen_data = [getRandomInt(25), getRandomInt(25), getRandomInt(25)]
        array_of_days[day] = gen_data
        day_data = gen_data
    }

    return {
        labels: ["Ate Some Lunch", "Ate All Lunch", "Ate No Lunch"],
        datasets: [{
        label: "Lunch Data",
        data: day_data,
        backgroundColor: [
            "rgba(218, 135, 4, 0.26)",
            "rgba(251, 161, 16, 0.4)",
            "rgba(250, 187, 86, 0.52)"
        ],
        hoverOffset: 4
    }]
    }
}
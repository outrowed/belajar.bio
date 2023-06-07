
import { loadUserData } from "./user-data.js";
import { formatDateToString, convertTimeToDate } from "./date-format.js";

const user_data = loadUserData() ?? {
    name: "John Doe",
    name_full: "X-5 John Doe",
    email: "john-doe@example.com",
    date: new Date().toISOString(),
    mapel: "Biologi",
    mapel_full: "H1J1 Biologi Kelas 10 (AAT 2022-2023)",
    max_attempts: 1,
    mapel_num: 1,
    ujian_day_num: 1,
    opened_time: "7:00",
    closed_time: "8:30",
    submitted_time: "7:30",
    time_limit: "01:30",
    is_null: true
};

if (user_data.is_null == null) {
    alert(`Please configure your profile at https://${window.location.hostname}/settings`);
}

const convertToDateKeys = ["date", "opened_time", "closed_time", "submitted_time"];
const dataUKeyElements = document.querySelectorAll("[data-ukey]");

for (const el of dataUKeyElements) {
    if (convertToDateKeys.includes(el.dataset.ukey)) {
        el.textContent = formatDateToString(convertTimeToDate(user_data[el.dataset.ukey]));
    }
    else if (el.dataset.ukey == "time_limit") {
        const [hour, minute] = user_data.time_limit.split(":");
        el.textContent = `${parseInt(hour)} hour ${minute} minutes`;
    }
    else {
        el.textContent = user_data[el.dataset.ukey];
    }
}
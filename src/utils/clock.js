import { addMilliseconds, intervalToDuration, startOfDay, addDays } from "date-fns";

// constant values
export const TimeZone_Offsets = {
    EST: -5,
    EDT: -4,
    PST: -8,
    PDT: -7,
};

export const offsets = [
    { label: "-12:00", value: "-12.00" },
    { label: "-11:00", value: "-11.00" },
    { label: "-10:00", value: "-10.00" },
    { label: "-09:30", value: "-09.50" },
    { label: "-09:00", value: "-09.00" },
    { label: "-08:00", value: "-08.00" },
    { label: "-07:00", value: "-07.00" },
    { label: "-06:00", value: "-06.00" },
    { label: "-05:00", value: "-05.00" },
    { label: "-04:30", value: "-04.50" },
    { label: "-04:00", value: "-04.00" },
    { label: "-03:30", value: "-03.50" },
    { label: "-03:00", value: "-03.00" },
    { label: "-02:00", value: "-02.00" },
    { label: "-01:00", value: "-01.00" },
    { label: "+00:00", value: "+00.00" },
    { label: "+01:00", value: "+01.00" },
    { label: "+02:00", value: "+02.00" },
    { label: "+03:00", value: "+03.00" },
    { label: "+03:30", value: "+03.50" },
    { label: "+04:00", value: "+04.00" },
    { label: "+04:30", value: "+04.50" },
    { label: "+05:00", value: "+05.00" },
    { label: "+05:30", value: "+05.50" },
    { label: "+05:45", value: "+05.75" },
    { label: "+06:00", value: "+06.00" },
    { label: "+06:30", value: "+06.50" },
    { label: "+07:00", value: "+07.00" },
    { label: "+08:00", value: "+08.00" },
    { label: "+08:45", value: "+08.75" },
    { label: "+09:00", value: "+09.00" },
    { label: "+09:30", value: "+09.50" },
    { label: "+10:00", value: "+10.00" },
    { label: "+10:30", value: "+10.50" },
    { label: "+11:00", value: "+11.00" },
    { label: "+12:00", value: "+12.00" },
    { label: "+12:45", value: "+12.75" },
    { label: "+13:00", value: "+13.00" },
    { label: "+14:00", value: "+14.00" },
];

export const getEasternAbbr = (date = new Date()) => {
    const offset = new Date(date).toLocaleString("en-US", {
        timeZone: "America/New_York",
        timeZoneName: "short",
    });

    return offset.split(" ").pop();
};

export const getPacificAbbr = (date = new Date()) => {
    const offset = new Date(date).toLocaleString("en-US", {
        timeZone: "America/Los_Angeles",
        timeZoneName: "short",
    });

    return offset.split(" ").pop();
};


export const getTimeZones = () => {
    return [
        {
            label: "UTC",
            value: "UTC",
        },
        {
            label: getEasternAbbr(),
            value: getEasternAbbr(),
        },
        {
            label: getPacificAbbr(),
            value: getPacificAbbr(),
        },
        {
            label: "GMT",
            value: "GMT",
        },
    ];
};

export const getOffsetLabel = (value) => {
    return offsets.find((item) => item.value === value).label;
};

export const getOtherClockTime = (baseClock, otherClock) => {
    if (!baseClock || baseClock.timeDifference === undefined) return null;
    if (!otherClock.timeZone) return null;

    const validZones = ["UTC", "GMT", "EST", "EDT", "PST", "PDT"];
    if (!validZones.includes(baseClock.timeZone) || !validZones.includes(otherClock.timeZone)) {
        return null;
    }

    // Step 1: Base time = now + adjustment
    const baseLiveTime = addMilliseconds(Date.now(), baseClock.timeDifference);

    // Step 2: Convert base time → UTC
    let utcTime;
    if (["UTC", "GMT"].includes(baseClock.timeZone)) {
        const baseOffset = parseFloat(baseClock.coOrdinate || 0);
        utcTime = addMilliseconds(baseLiveTime, -baseOffset * 3600 * 1000);
    } else {
        const baseOffset = TimeZone_Offsets[baseClock.timeZone];
        utcTime = addMilliseconds(baseLiveTime, -baseOffset * 3600 * 1000);
    }

    // Step 3: Convert UTC → target zone
    if (["UTC", "GMT"].includes(otherClock.timeZone)) {
        const targetOffset = parseFloat(otherClock.coOrdinate || 0);
        return addMilliseconds(utcTime, targetOffset * 3600 * 1000);
    } else {
        const targetOffset = TimeZone_Offsets[otherClock.timeZone];
        return addMilliseconds(utcTime, targetOffset * 3600 * 1000);
    }
};

export const getTimeDifference = (baseClock, otherClock) => {
    if (!baseClock || baseClock.timeDifference === undefined) return null;
    if (!otherClock.timeZone) return null;

    const validZones = ["UTC", "GMT", "EST", "EDT", "PST", "PDT"];
    if (!validZones.includes(baseClock.timeZone) || !validZones.includes(otherClock.timeZone)) {
        return null;
    }

    // Step 2: get base offset
    let baseOffset;
    if (["UTC", "GMT"].includes(baseClock.timeZone)) {
        baseOffset = parseFloat(baseClock.coOrdinate || 0);

    } else {
        baseOffset = TimeZone_Offsets[baseClock.timeZone];
    }

    // Step 3: get other offset
    let otherOffset;
    if (["UTC", "GMT"].includes(otherClock.timeZone)) {
        otherOffset = parseFloat(otherClock.coOrdinate || 0);

    } else {
        otherOffset = TimeZone_Offsets[otherClock.timeZone];
    }

    const offsetDifference = otherOffset - baseOffset;
    const timeMsDifference = offsetDifference * 3600 * 1000;

    return timeMsDifference;
};

export const formatTimeDifference = (ms, showSign = true) => {
    if (ms == null) return null;

    const sign = ms < 0 ? "−" : "+";
    const absMs = Math.abs(ms);

    // intervalToDuration gives you { hours, minutes, seconds, ... }
    const duration = intervalToDuration({ start: 0, end: absMs });

    // formatDuration turns it into human string, but we need HH:mm:ss
    const hh = String(duration.hours || 0).padStart(2, "0");
    const mm = String(duration.minutes || 0).padStart(2, "0");
    const ss = String(duration.seconds || 0).padStart(2, "0");

    return showSign ? `${sign}${hh}:${mm}:${ss}` : `${hh}:${mm}:${ss}`;
};

export const getBaseDate = (jumpNextDay = false) => {
    const todayMidnight = startOfDay(new Date());

    if (!jumpNextDay) return todayMidnight;

    return addDays(todayMidnight, 1);
};

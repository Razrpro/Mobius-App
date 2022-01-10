export const formatPhone = phone => {
    let original = phone.replace(/ /g, "");

    original = original.replace(/-/g, "");
    original = original.replace(/\(/g, "");
    original = original.replace(/\)/g, "");
    original = original.replace(/\+/g, "");
    original = original.substring(0, 11);

    const length = original.length;

    let formatted = "";

    if (!length) {
        formatted = "";
    }

    if (length === 1 && original.substring(0, 1) === "7") {
        formatted = "+"+original.substring(0, 1);
    }

    if (length === 1  && original.substring(0, 1) !== "7") {
        formatted = "+7("+original.substring(0, 1);
    }

    if (length >= 2 ) {
        formatted = "+"+original.substring(0, 1)+"(" + original.substring(1);
    }


    if (length >= 4) {
        formatted =
            "+"+original.substring(0, 1)+"(" + original.substring(1, 4) + ")" + original.substring(4);
    }

    if (length > 7) {
        formatted =
            "+"+original.substring(0, 1)+"(" +
            original.substring(1, 4) +
            ")" +
            original.substring(4, 7) +
            "-" +
            original.substring(7);
    }

    if (length > 8) {
        formatted =
            "+"+original.substring(0, 1)+"(" +
            original.substring(1, 4) +
            ")" +
            original.substring(4, 7) +
            "-" +
            original.substring(7, 9);
    }

    if (length >= 10) {
        formatted =
            "+"+original.substring(0, 1)+"(" +
            original.substring(1, 4) +
            ")" +
            original.substring(4, 7) +
            "-" +
            original.substring(7, 9) +
            "-" +
            original.substring(9, 11);
    }

    return formatted;
};


export const validateEmail = email => {
    var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (email.length > 0 && pattern.test(email)) {
        return true;
    } else {
        return false;
    }
};

export const deformatPhone = phone => {
    let pw = phone.replace(/ /g, "");
    pw = pw.replace(/-/g, "validatePhone");
    pw = pw.replace(/\+/g, "");
    pw = pw.replace(/[^0-9]/g, "");
    pw = pw.substring(0, 11);

    return pw;
}

export const validatePhone = phone => {

    return phone && phone.length === 11;
};

export const validateInput = input => {

    return input && input.length === 4;
};

export const isJson = (item) => {
    item = typeof item !== "string"
        ? JSON.stringify(item)
        : item;

    try {
        item = JSON.parse(item);
    } catch (e) {
        return false;
    }

    if (typeof item === "object" && item !== null) {
        return true;
    }

    return false;
};
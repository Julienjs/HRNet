export const zipCodesRegex = /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/; // US ZipCode
export const dateRegex = /^\d{4}\-\d{2}\-\d{2}$/;
export const nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
export const streetRegex = /^[0-9a-zA-Z ]+$/g;
export const cityRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/

export const dateHasPassed = (startDateValue) => {
    const date = new Date(startDateValue);
    return date.getTime() > Date.now() ? false : true
};

export const majority = (birthdate) => {
    const date = new Date(birthdate);
    const dateMajority = new Date(date.getFullYear() + 18, date.getMonth(), date.getDate());
    return dateMajority.valueOf() <= Date.now();
}



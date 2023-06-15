export const formatAccno = (number:string) : string => {
    const formattedNumber = number.toString().replace(/(\d{4})(\d{4})(\d{3})/, "$1-$2-$3");
    return formattedNumber;
};

export default formatAccno;
export function convertDate(dateFormatedYYYMMDD: string): Date {
/*
    const arrayDate = dateFormatedYYYMMDD.split('-');
    const dateReturn = `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`;
    console.log(dateReturn);
*/
    return new Date(dateFormatedYYYMMDD);
}


    // const option1 = new RegExp('pattern');
    // const option2 = /pattern/;

    // совпадения

    // const firstRegExp = /Geek/g;
    // const str = 'Geekbrains is Geek the best Geek place!';

    // console.log(str.match(firstRegExp));

    // const newstr =  str.replace(firstRegExp, "+");

    // console.log(newstr);

    // const ourRegExp = /(g.+?k)/gi  // поиск без учета регистра (gi)
    // const str = 'Hi, i am Geek geek from GeekBrains'
    // const str1 = 'Gk'

    // const ourRegExp = /(g(e?|o?))/gi
    // const str = 'Geeeee Go oG Geo'

    // const numberRegExp = /^\d+$/ //проверка на наличие цифр

    // const str = "1212123456"

    // const numberRegExp = /^[a-zA-Z]+$/
    // const str = 'ASDasdf'

    // console.log(numberRegExp.test(str));

    const urlRegExp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
    const testStr = "https://yandex.ru/"

    const emailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
    const testMailStr = "aazaroff@gmail.com"

    const tellRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
    const testTellStr = '+7(916)556-19-36'

    const replRegExp =/'([^']+)'/g 
    const replStr = "Гребаный - ебастос, 'двойная' макруха"

    const dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
    const datatieStr = "30-01-2003 15:20";

    const numberRegExp = /^[a-zA-Z]+$/
    const str = 'ASDasdf'

    console.log(numberRegExp.test(str))

    console.log(urlRegExp.test(testStr))

    console.log(emailRegExp.test(testMailStr))

    console.log(tellRegExp.test(testTellStr))

    console.log(replRegExp.test(replStr))

    console.log(dateTime.test(datatieStr));








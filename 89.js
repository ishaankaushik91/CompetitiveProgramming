function generatePassword(obj)
{
    let superObject = {
        symbols : {s1 : {min : 33, max : 48}, s2 : {min : 58, max : 65}, s3 : {min : 123, max : 127}},
        uppercase : {min : 65, max : 91}, lowercase : {min : 97, max : 123},
        digits : {min : 48, max : 58}
    };
    const configurations = [];

    if (obj.symbols)
    {
        configurations.push(superObject.symbols.s1);
        configurations.push(superObject.symbols.s2);
        configurations.push(superObject.symbols.s3);
    }

    let keys = Object.keys(obj);
    for (let k = 0; k < keys.length; k++)
    {
        if (obj[keys[k]] && superObject[keys[k]] && keys[k] != "symbols")
        {
            configurations.push(superObject[keys[k]]);
        }
    }

    let randomIndex;
    let password = "";

    for (let i = 0; i < obj.length; i++)
    {
        let str;
        randomIndex = Math.floor(Math.random() * configurations.length);
        str = String.fromCharCode(Math.floor(Math.random() * (configurations[randomIndex].max - configurations[randomIndex].min) + configurations[randomIndex].min));
        if (obj.excludeAmbigous && (str == "`" || str == "~" || str == "'" || str == ";" || str == "." || str == "<" || str == ">"))
        {
            i--;
        }
        else
        {
            password += str;
        }
    }

    if (obj.excludeDuplicates)
    {
        if (obj.length >= 30) return;


        password = password.split("");
        let newPassword = "";
        new Set(password).forEach((ele) => newPassword += ele);

        newPassword = newPassword.split("");

        for (let i = newPassword.length; newPassword.length != obj.length; i++)
        {
            let str;
            randomIndex = Math.floor(Math.random() * configurations.length);
            str = String.fromCharCode(Math.floor(Math.random() * (configurations[randomIndex].max - configurations[randomIndex].min) + configurations[randomIndex].min));
            
            if (obj.excludeAmbigous && (str == "`" || str == "~" || str == "'" || str == ";" || str == "." || str == "<" || str == ">"))
            {
                i--;
            }
            else
            {
                let charThere = newPassword.find(l => l == str);
                if (charThere)
                {

                }
                else
                {
                    newPassword.push(str);
                }
            }
        }
        console.log(newPassword.join(""));
        return newPassword.join("");
    }
    console.log(password);
    return password;
}

function validatePassword(password)
{
    let length = password.length;
    let validator = {length, symbols : false, digits : false, lowercase : false, uppercase : false, excludeDuplicates : true, excludeAmbigous : true};

    for (let i = 0; i < password.length; i++)
    {
            if (password[i] == "`" || password[i] == "~" || password[i] == "'" || password[i] == ";" || password[i] == "." || password[i] == "<" || password[i] == ">")
            {
                validator.excludeAmbigous = false;
            }
            if ((password.charCodeAt(i) >= 33 && password.charCodeAt(i) < 48) || (password.charCodeAt(i) >= 58 && password.charCodeAt(i) < 65) || password.charCodeAt(i) >= 123 && password.charCodeAt(i) < 128)
            {
                validator.symbols = true;
            }
            if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) < 91)
            {
                validator.uppercase = true;
            }
            if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) < 123)
            {
                validator.lowercase = true;
            }
            if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) < 58)
            {
                validator.digits = true;
            }
    }
    
    for (let i = 0; i < password.length; i++)
    {
        for (let j = i + 1; j < password.length; j++)
        {
            if (password[i] == password[j])
            {
                validator.excludeDuplicates = false;
                break;
            }
        }
        if (!validator.excludeDuplicates) break;
    }
    console.log(validator);
    return validator;
}

let a = generatePassword({length : 2048, symbols : false, digits : true, lowercase : true, uppercase : false, excludeDuplicates : false, excludeAmbigous : true});
validatePassword(a);
class KAUSHIK_ENCRYPTION_2
{
    constructor(message, key)
    {
        this.message = message;
        this.key = key;
        this.layer2 = 7 % 65;
    }
    encrypt()
    {
        if (typeof(this.key) != 'number') return "key has to be a number";

        this.message = String(this.message);
        let ASCIIS = [];

        for (let i = 0; i < this.message.length; i++)
        {
            ASCIIS.push((this.message.charCodeAt(i) + this.key) - this.layer2);
        }
        console.log(ASCIIS.join("A2FE"));
    }
    decrypt(encryptedMessage, key)
    {
        encryptedMessage = String(encryptedMessage);
        encryptedMessage = encryptedMessage.split("A2FE");
        let LETTERS = [];

        for (let i = 0; i < encryptedMessage.length; i++)
        {
            LETTERS.push(String.fromCharCode((Number(encryptedMessage[i]) - key) + this.layer2));
        }
        console.log(LETTERS.join(""));
    }
}

let newMessage = new KAUSHIK_ENCRYPTION_2("Ishaan", 1920101);
newMessage.encrypt();
newMessage.decrypt(`1920167A2FE1920209A2FE1920198A2FE1920191A2FE1920191A2FE1920204`, 192011);
<template>
<div id="app">
    <h1 class=" title">
        Liam & Carter's Encryptor
    </h1>

    <div class="Key">
        <input type="text" v-model="newKey" v-on:keyup.enter="setNewKey" placeholder="Enter your encryption key here" class="uk-input">
    </div>

    <div v-if="key && encryptedKey" class="row center-xs middle-xs Encryptors">
        <div class="col-xs-10 col-md-4 start-xs">
            <div class="row bottom-xs">
                <label>English</label>

                <div class="col-xs end-xs">
                    <button type="button" class="uk-button uk-button-danger uk-icon"
                            uk-icon="trash" uk-tooltip="Clear text section" @click="englishText = null" />

                    <button type="button" class="uk-button uk-button-secondary uk-icon"
                            uk-icon="move" uk-tooltip="Copy text section" v-clipboard="() => englishText" />

                    <button type="button" class="uk-button uk-button-primary uk-text-uppercase"
                            uk-icon="icon: play; ratio: 1.5;" uk-tooltip="Run encryption" @click="encryption" />
                </div>
            </div>

            <textarea rows="10" v-model="englishText" v-on:keyup.enter="encryption" />
        </div>

        <div class="col-xs-10 col-md-1">
        </div>

        <div class="col-xs-10 col-md-4 start-xs">
            <div class="row bottom-xs">
                <label>Encrypted</label>

                <div class="col-xs end-xs">
                    <button type="button" class="uk-button uk-button-danger uk-icon"
                            uk-icon="trash" uk-tooltip="Clear text section" @click="encryptedText = null" />

                    <button type="button" class="uk-button uk-button-secondary uk-icon"
                            uk-icon="move" uk-tooltip="Copy text section" v-clipboard="() => encryptedText" />

                    <button type="button" class="uk-button uk-button-primary uk-text-uppercase"
                            uk-icon="icon: play; ratio: 1.5;" uk-tooltip="Run decryption" @click="decryption" />
                </div>
            </div>

            <textarea rows="10" v-model="encryptedText" v-on:keyup.enter="decryption" />
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            alpha: "`1234567890-=~!@#$%^&*()_+qwertyuiop[]\\QWERTYUIOP{}|asdfghjkl;'ASDFGHJKL:\"zxcvbnm,./ZXCVBNM<>? \n",

            key: null,
            encryptedKey: null,
            newKey: null,

            englishText: null,
            encryptedText: null
        }
    },

    methods: {
        findChar(char, searchKey, retrieveKey) {
            let index = searchKey.indexOf(char)

            if (index >= 0 && index < searchKey.length)
                return retrieveKey[index]
            else
                console.log("Could not find: " + char)
        },
        removeByIndex(text, i) {
            return text.substring(0, i) + text.substring(i+1)
        },

        buildEncrypted(key) {
            // Reset the key to its default state
            this.encryptedKey = this.alpha

            // Convert the encryption key by removing duplicate letters
            let noDups = key.split('')
                            .filter(function(char, pos, self) {
                                return self.indexOf(char) == pos
                            })

            var i
            for (let char of noDups)
                // Push every character of the user specified encryption key to the front of the encrypted alphabet key
                if ((i = this.encryptedKey.indexOf(char)) >= 0)
                    this.encryptedKey = char + this.removeByIndex(this.encryptedKey, i)

            if (this.encryptedKey.length != this.alpha.length)
                alert("Failed to encrypt alpha key correctly")
        },


        getKey() {
            this.key = localStorage.getItem('EncryptKey')

            if (this.key)
                this.buildEncrypted(this.key)
            else
                alert("Could not find Key in localStorage!")
        },
        setNewKey() {
            if (this.newKey) {
                localStorage.setItem("EncryptKey", this.newKey)
                this.newKey = null
                this.getKey()
            } else {
                alert("Please enter a key first")
            }
        },

        translate(text, searchKey, retrieveKey) {
            if (text && searchKey && retrieveKey && this.encryptedKey) {
                let encrypted = ""

                for (let char of text)
                    encrypted += this.findChar(char, searchKey, retrieveKey)

                return encrypted
            } else if (!text) {
                alert("Nothing to encrypt")
            } else if (!this.encryptedKey) {
                alert("Encryption key not built")
            }

            return null
        },

        encryption() {
            this.encryptedText = this.translate(this.englishText, this.alpha, this.encryptedKey)
        },
        decryption() {
            this.englishText = this.translate(this.encryptedText, this.encryptedKey, this.alpha)
        },
    },

    mounted() {
        this.getKey()
    },
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    background-image: url('assets/shattered.png');
    min-height: 100vh;
    max-width: 100vw;

    overflow-y: scroll;
    overflow-x: hidden;
}

.uk-input, .uk-button, textarea {
    border-radius: 5px;
    min-height: 20px;
}

.uk-button {
    line-height: 35px;
    margin: 2px 4px;
    padding: 0 20px;
}

textarea {
    width: 100%;
    max-width: 800px;

    padding: 5px;
    margin-bottom: 40px;
    font-size: 16px;
}

.Encryptors {
    margin-top: 120px;
}

label {
    font-size: 14px;
    font-weight: 500;
}
.Encryptors label {
    margin: 0px 0px 0px 10px;
}

h1 {
    padding: 20px 0;
    text-align: center;
}

.Key {
    width: 400px;
    max-width: 100%;
    margin: auto;
}
</style>

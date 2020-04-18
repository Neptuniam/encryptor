<template>
<div id="app">
    <h1 class="row center-xs title">
        Liam & Carter's Encryption
    </h1>

    <div class="row center-xs">
        <div class="col-xs-6 col-md-3 start-xs">
            <label>Enter a new key</label>
            <input type="text" v-model="newKey" v-on:keyup.enter="setNewKey" class="uk-input">
        </div>
    </div>

    <div v-if="key && encryptedKey" class="row center-xs middle-xs Encryptors">
        <div class="col-xs-10 col-md-4 start-xs">
            <label>English</label>

            <textarea rows="10" v-model="englishText" v-on:keyup.enter="encryption" />
        </div>

        <div class="col-xs-10 col-md-2">
            <button type="button" class="uk-button uk-button-primary uk-text-capitalize" @click="encryption">
                Run Encryption
            </button>
            <br>
            <button type="button" class="uk-button uk-button-primary uk-text-capitalize"  @click="decryption">
                Run Decryption
            </button>
        </div>

        <div class="col-xs-10 col-md-4 start-xs">
            <label>Encrypted</label>

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
}

.uk-input, .uk-button, textarea {
    border-radius: 5px;
    min-height: 20px;
}

.uk-button {
    margin: 10px 0;
}

textarea {
    width: 100% !important;
    padding: 5px;
    font-size: 16px;
}

.Encryptors {
    margin-top: 120px;
}

label {
    font-size: 14px;
    font-weight: 500;

    margin: 0px 0px 5px 5px;
}

h1 {
    margin: 20px 0 50px 0px;
}
</style>

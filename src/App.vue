<template>
<div id="app">
    <h1 class="row center-xs title">
        Liam & Carter's Encryption
    </h1>

    <div class="row center-xs fullWidth">
        <div class="col-xs-3 start-xs">
            <label>Enter a new key</label>
            <input type="text" v-model="newKey" v-on:keyup.enter="setNewKey" class="uk-input">
        </div>
    </div>

    <div v-if="key && encryptedKey" class="row center-xs middle-xs fullWidth Encryptors">
        <div class="col-xs-4 start-xs">
            <label>English</label>

            <textarea rows="10" class="fullWidth" v-model="englishText"
                      v-on:keyup.enter="encryption" />
        </div>

        <div class="col-xs-2">
            <button type="button" class="uk-button uk-button-primary uk-text-capitalize" @click="encryption(englishText)">
                Run Encryption
            </button>
            <br>
            <button type="button" class="uk-button uk-button-primary uk-text-capitalize"  @click="decryption(encryptedText)">
                Run Decryption
            </button>
        </div>

        <div class="col-xs-4 start-xs">
            <label>Encrypted</label>

            <textarea rows="10" class="fullWidth" v-model="encryptedText"
                      v-on:keyup.enter="decryption" />
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: function() {
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
        buildEncrypted(key) {
            this.encryptedKey = this.alpha

            // Convert the encryption key by removing duplicate letters
            let noDups = key.split('')
                            .filter(function(char, pos, self) {
                                return self.indexOf(char) == pos
                            })

            var i
            for (let char of noDups)
                // Push every character of the user specified encryption key to the front of the alphabet
                if ((i = this.encryptedKey.indexOf(char)) >= 0)
                    this.encryptedKey = char + this.encryptedKey.substring(0, i) + this.encryptedKey.substring(i+1)

            if (this.encryptedKey.length != this.alpha.length)
                alert("Failed to generate key properlly")
        },


        getKey() {
            this.key = localStorage.getItem('EncryptKey')

            if (this.key) {
                this.buildEncrypted(this.key)
            } else {
                alert("Could not find Key in localStorage!")
            }
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

        findChar(char, searchKey, retrieveKey) {
            let index = searchKey.indexOf(char)
            return index >= 0 && index < searchKey.length ? retrieveKey[index] : console.log("Could not find: " + char)
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
    mounted: function() {
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

.fullWidth {
    width: 100% !important;
}

.uk-input, .uk-button, textarea {
    border-radius: 5px;
    min-height: 20px;
}

.uk-button {
    margin: 10px 0;
}

textarea {
    padding: 5px;
}

.Encryptors {
    /* margin: 100px 0px 0px 0px; */
    margin-top: 100px;
}

label {
    font-size: 14px;
    font-weight: 500;

    margin: 0px 0px 5px 5px;
}

.title {
    margin: 20px 0 50px 0px;
}
</style>

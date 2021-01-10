<template>
    <form class="create-meow-panel" @submit.prevent="createNewMeow" :class="{ '--exceeded': newMeowCharacterCount > 180 }"> <!-- refeers to method in script -->
        <div>
            <label for="username"><strong>Name</strong></label>
            <br />
            <input id="username" type="text" v-model="meow.name" required> <!-- v-model connects field with data in scripts -->
        </div>
        <br />
        <div class="createMeow" :class="{ '--exceeded': newMeowCharacterCount > 180 }">
            <label for="newMeow"><strong>Your Meow</strong> ({{ newMeowCharacterCount}}/180) </label>
            <br />
            <textarea id="newMeow" rows="4" v-model="meow.content" required/> 
        </div>

        <div class="create-meow-panel_submit createMeow" :class="{ '--exceeded': newMeowCharacterCount > 180 }">
            <button>Meow It!</button>
        </div>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    name: "CreateMeowPanel",
    data() {
        return {
            meow: {
                name: '',
                content: ''
            }
        }
    },
    computed: {
        newMeowCharacterCount() {
            return this.meow.content.length;
        }
    },
    methods: {
        createNewMeow() {
            let apiURL = '/api/create-meow';

            if (this.meow.content.length <= 180) {
                axios.post(apiURL, this.meow).then(() => {
                    this.$router.push('/view')
                    this.meow = {
                        name: '',
                        content: '',
                    }
                }).catch(err => {
                    console.log(err)
                });
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.create-meow-panel {
    margin-top: 20px;
    padding: 1rem 1rem;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;

    textarea {
        border: 1px solid #DFE3E8;
        border-radius: 5px;
        margin-bottom: 5px;
        width: 100%;
    }

    .create-meow-panel_submit {
        display: flex;
        justify-content: space-between;

        button {
            padding: 5px 20px;
            margin: auto 0;
            border-radius: 5px;
            border: none;
            background-color: teal;
            color: white;
            font-weight: bold;
        }
    }

    &.--exceeded {
        color: red;
        border-color: red;

        .create-meow-panel_submit {
            button {
                background-color: red;
                color: white;
            }
        }
    }
}
</style>
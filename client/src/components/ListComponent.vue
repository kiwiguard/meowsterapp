<template>
    <div class="user-profile_container">
        <div class="meow-item" v-for="meow in Meows" :key="meow._id">
            <div class="user-profile_meow" >
                <div class="meow-item_user">{{ meow.name }}</div>
                <div class="meow-item_content">{{ meow.content }}</div>
                <div class="meow-item_controllers">
                    <router-link :to="{name: 'edit', params: { id: meow._id }}" class="btn btn-success">Edit
                    </router-link>
                    <button @click.prevent="deleteMeow(meow._id)" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 import axios from "axios";

    export default {
        name: "MeowItem",
        data() {
            return {
                Meows: []
            }
        },
        created() {
            let apiURL = '/api';
            axios.get(apiURL).then(res => {
                this.Meows = res.data;
            }).catch(err => {
                console.log(err)
            });
        },
        methods: {
            deleteMeow(id){
                let apiURL = `api/delete-meow/${id}`;
                let indexOfArrayItem = this.Meows.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Meows.splice(indexOfArrayItem, 1);
                    }).catch(err => {
                        console.log(err)
                    });
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.meow-item {
    padding: 20px;
    max-width: 85%;
    word-wrap: break-word;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
    box-sizing: border-box;
    transition: all 0.25s ease;
    margin-bottom: 1rem;


    .meow-item_user {
        font-weight: bold;
    }

    .meow-item_content {
        margin-bottom: 16px;
    }

    .meow-item_controllers{
        cursor: pointer;
        display: flex;
        flex-direction: row;
        
        a {
            color: #a10000;
            margin-right: 10px;

            &:hover {
                text-decoration: underline;
            }
        }
      
    }
}

</style>

<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="meow in Meows" :key="meow._id">
                        <td>{{ meow.name }}</td>
                        <td>{{ meow.content }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: meow._id }}" class="btn btn-success">Edit
                            </router-link>
                            <button @click.prevent="deleteMeow(meow._id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
 import axios from "axios";

    export default {
        data() {
            return {
                Meows: []
            }
        },
        created() {
            let apiURL = 'http://localhost:3000/api';
            axios.get(apiURL).then(res => {
                this.Meows = res.data;
            }).catch(err => {
                console.log(err)
            });
        },
        methods: {
            deleteMeow(id){
                let apiURL = `http://localhost:3000/api/delete-meow/${id}`;
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

<style>
    .btn-success {
        margin-right: 10px;
    }
</style>
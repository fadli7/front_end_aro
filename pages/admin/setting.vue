<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col sm="6">
                <b-card header="Form Permission">
                    <b-col>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Name</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-select id="engineer"
                                    :plain="true"
                                    :options="options"
                                    style="border-radius: 5px; vertical-align: center"
                                    value="Select Name"
                                    v-model="user_id">
                                </b-form-select>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Start Date</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="date"
                                    id="start"
                                    v-model="start"
                                    style="border-radius: 5px; vertical-align: center">
                                </b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col>
                        <b-row style="padding: 2px">
                            <b-col sm="4">End Date</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="date"
                                    id="end"
                                    v-model="end"
                                    style="border-radius: 5px; vertical-align: center">
                                </b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col style="padding: 10px" class="text-right">
                        <b-button size="md" variant="primary" style="margin: 10px; border-radius: 5px;" @click="submitPermission()">
                            Submit</b-button>
                    </b-col>
                </b-card>
            </b-col>
            <b-col sm="6">
                <b-card header="Application Date">
                        <b-row style="padding: 2px">
                            <b-col sm="4">Date</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="date"
                                    id="date"
                                    style="border-radius: 5px; vertical-align: center"
                                    v-model="start_date">
                                </b-form-input>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col style="padding: 10px" class="text-right">
                                <b-button size="md" variant="primary" style="margin: 10px; border-radius: 5px;" @click="submitApp()">
                                    Submit</b-button>
                            </b-col>
                        </b-row>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    data () {
        return{
            engineer: null,
            start_date: '',
            start:'',
            end:'',
            user_id:null,
            selected: null,
            options: [
                { value: null, text: 'Select Name', disabled: true },
            ],
        }
    },
    mounted() {
        this.getName();
    },
    methods: {
        getName() {
            this.$axios.get('/engineers')
            .then(response => {
                response.data.forEach(element => {
                    this.options.push({
                        value: element.id,
                        text: element.full_name
                    })
                });
            })
        },
        submitApp(){
            this.$axios.post('/admin/start_date', {
                start_date: this.start_date,
                }).then(response => {
                    this.status = 'Create Assignment Success!';
                    console.log(this.status);
                    swal('Success', this.status, 'success');
                    this.resetApp();
                }, response => {
                    this.status = 'Please Fill In All Data';
                    console.log(this.status);
                    swal('Failed', this.status, 'warning');
            })
        },
        submitPermission(){
            this.$axios.post('/admin/permission', {
                user_id: this.user_id,
                start: this.start,
                end: this.end
                }).then(response => {
                    this.status = 'Submit Permission Success!';
                    console.log(this.status);
                    swal('Success', this.status, 'success');
                    this.reset();
                }, response => {
                    this.status = 'Please Fill In All Data';
                    console.log(this.status);
                    swal('Failed', this.status, 'warning');
            })
        },
        resetApp(){
            this.start_date = "";
        },
        reset(){
            this.user_id = "";
            this.start = "";
            this.end = "";
        }
    },

    middleware: "admin"
}
</script>

<template>
  <b-row>
    <b-col lg="7">
        <b-form-group
            label="Assignment ID "
            label-for="assignment_id"
            :label-cols="4"
            :horizontal="true"> :
            {{ assignment_id }}
          </b-form-group>
        <b-form-group
            label="Assignment Class"
            label-for="assignment_class"
            :label-cols="4"
            :horizontal="true"> :
            {{ assignment_class }}
          </b-form-group>
        <b-form-group
            label="Assignment Title"
            label-for="assignment_title"
            :label-cols="4"
            :horizontal="true">  :
            {{ assignment_tittle }}
          </b-form-group>
    </b-col>
    <b-col lg="12">
        <div class="animated fadeIn" style="padding: 0px">
            <b-card style="border-radius: 3px">
                <b-row style="width: 100%; margin-left: auto; margin-right: auto">
                    <b-col>
                        <b-row style="padding: 2px"><strong>System Status</strong></b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Assignment Type</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-select id="assignment_type"
                                    :plain="true"
                                    :options="['Pre-Sales','Aktivasi','Pembangunan','Pemeliharaan']"
                                    value="Assignment Type"
                                    style="border-radius: 5px"
                                    v-model="assignment_type">
                                </b-form-select>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Project Number</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="text"
                                    id="project_number"
                                    v-model="project_number"
                                    placeholder="project number"
                                    style="border-radius: 5px">
                                </b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">IO Number</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="text"
                                    id="io_number"
                                    v-model="io_number"
                                    placeholder="IO number"
                                    style="border-radius: 5px">
                                </b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col>
                        <b-row style="padding: 2px"><strong>Time record</strong></b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Working Date</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="date"
                                    id="date_work"
                                    v-model="date_work"
                                    style="border-radius: 5px; vertical-align: center">
                                </b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Start</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="time"
                                    id="time_start"
                                    v-model="time_start"
                                    style="border-radius: 5px"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Arrived at location</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="time"
                                    id="time_at"
                                    v-model="time_at"
                                    style="border-radius: 5px"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Job Finish</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="time"
                                    id="time_job_finish"
                                    v-model="time_job_finish"
                                    style="border-radius: 5px"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">End</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="time"
                                    id="time_end"
                                    v-model="time_end"
                                    style="border-radius: 5px"></b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row style="width: 100%; margin-left: auto; margin-right: auto; padding-top: 4px">
                    <b-col>
                        <b-row style="padding: 2px"><strong>Customer Information</strong></b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Company</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="text"
                                    id="company"
                                    v-model="company"
                                    placeholder="company"
                                    style="border-radius: 5px">
                                </b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Address</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="text"
                                    id="address"
                                    v-model="address"
                                    placeholder="address"
                                    style="border-radius: 5px">
                                </b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Contact Person</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="text"
                                    id="cp"
                                    v-model="cp"
                                    placeholder="contact person"
                                    style="border-radius: 5px">
                                </b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">PIC Onsite</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="text"
                                    id="pic"
                                    v-model="pic"
                                    placeholder="PIC onsite"
                                    style="border-radius: 5px"></b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col>
                        <b-row style="padding: 2px"><br></b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4"><strong>SPPD Status</strong></b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-radio-group id="basicInlineRadios"
                                :plain="true"
                                :options="[
                                    {text: 'YA ',value: '1'},
                                    {text: 'TIDAK ',value: '2'}
                                ]"
                                :checked="2"
                                v-model="sppd_status">
                                </b-form-radio-group>
                            </b-col>
                        </b-row>
                        <b-row style="padding-top: 25px; padding-bottom: 25px; padding-left: 2px; padding-right: 2px">
                            <b-col sm="4">Number of day</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="number"
                                    id="day_number"
                                    v-model="day_number"
                                    placeholder="number of day"
                                    style="border-radius: 5px"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Type</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-select
                                    :plain="true"
                                    :options="['Daily','Continue day']"
                                    style="border-radius: 5px"
                                    v-model="type_sppd">
                                </b-form-select>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-card>
            <b-row style="width: 100%; margin-left: auto; margin-right: auto">
                <b-col>
                    <b-form-group>
                        <label for="brief_work"><strong>Brief of Work Carried Out</strong></label>
                        <textarea class="form-control"
                            id="brief_work"
                            v-model="brief_work"
                            placeholder="Brief of Work Carried Out"
                            rows="6" ></textarea>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group>
                        <label for="result"><strong>Result of Assignment & Further Action</strong></label>
                        <textarea class="form-control"
                            id="result"
                            v-model="result"
                            placeholder="Result of Assignment & Further Action"
                            rows="6"></textarea>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row style="width: 100%; margin-left: auto; margin-right: auto; padding-top: 10px">
                <b-col>
                    <b-row style="padding: 6px"><strong>Attachment</strong></b-row>
                    <b-row style="padding: 6px">
                        <b-col sm="4">BAI</b-col>
                        <b-col sm="8">
                            <b-row><b-form-file id="bai" multiple="" accept=".pdf, .jpg, .png" :plain="true" v-model="bai" @change="baiHandler" ></b-form-file></b-row>
                            <b-row style="color : blue">*.pdf, *.jpg, *.png</b-row>
                        </b-col>
                    </b-row>
                    <b-row style="padding: 6px">
                        <b-col sm="4">TNC</b-col>
                        <b-col sm="5">
                            <b-row><b-form-file accept=".pdf, .docx" id="tnc" multiple="" :plain="true" v-model="tnc" @change="tncHandler"></b-form-file></b-row>
                            <b-row style="color : blue">*.pdf, *.docx</b-row>
                        </b-col>
                    </b-row>
                    <b-row style="padding: 6px">
                        <b-col sm="4">Selfie/Wefie at Site with time/location stamp</b-col>
                        <b-col sm="5">
                            <b-row><b-form-file id="photo" multiple="" accept=".jpg" :plain="true" v-model="photos" @change="photoHandler"></b-form-file></b-row>
                            <b-row style="color : blue">*.jpg/.PNG</b-row>
                        </b-col>
                    </b-row>
                    <b-row style="padding: 6px">
                        <b-col sm="4">Other</b-col>
                        <b-col sm="5">
                            <b-row><b-form-file id="other" v-model="other" :plain="true" ref="other" @change="otherHandler"></b-form-file></b-row>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-row>
            <b-col style="padding: 10px" class="text-right">
                    <b-button @click="submit" size="lg" variant="primary" style="margin: 10px">Submit for Approval</b-button>
                    <b-button @click="reset" size="lg" variant="danger" style="margin: 10px">Delete and back</b-button>
            </b-col>
            </b-row>
        </div>
        <br>
    </b-col>
  </b-row>
</template>
<script>
import moment from 'moment'

    export default {

    validate(params) {
      // return /^\d+$/.test(params.id)]
      // console.log("params " + params)
      return true
    },

    name: 'submitReport',

    props: ['id'],

    data () {
        return {
          assignment_id: null,
          assignment_class: null,
          assignment_tittle: null,
          assignment_type: null,
          // project_number: null,
          // io_number: null,
          date_work: null,
          time_start: null,
          time_at: null,
          time_job_finish: null,
          time_end: null,
          company: null,
          address: null,
          cp: null,
          pic: null,
          sppd_status: null,
          day_number: null,
          type_sppd: null,
          brief_work: null,
          result: null,
          bai: [],
          tnc: [],
          photos: [],
          other: '',
          errors: [],
        }
    },
    mounted(){
        this.getAssignment();
    },
    methods: {
        getAssignment() {
          console.log("id : " + this.$route.params.id);
          this.$axios.get('/ar/create/' + this.$route.params.id).then( response => {
            // console.log(response.data);
            this.assignment_id = response.data.id;
            this.assignment_class = response.data.assignment_class;
            this.assignment_tittle = response.data.assignment_tittle;
          })
        },
        submit(){
          let formData = new FormData();
          formData.append('bai', this.file);
          formData.append('tnc', this.file);
          formData.append('photos', this.file);
          formData.append('other', this.file);

          this.$axios.post('/ar/submit', {
            assignment_id: this.assignment_id,
            assignment_type: this.assignment_type, //1
            date_work: this.date_work, //4
            time_start: this.time_start, //5
            time_at: this.time_at, //6
            time_job_finish: this.time_job_finish, //7
            time_end: this.time_end, //8
            company: this.company, //9
            address: this.address, //10
            cp: this.cp, //11
            pic: this.pic, //12
            sppd_status: this.sppd_status, //13
            day_number: this.day_number, //14
            type_sppd: this.type_sppd, //15
            brief_work: this.brief_work, //16
            result: this.result, //17
            bai: this.bai, //18
            tnc: this.tnc, //19
            photos: this.photos, //20
            other: this.other, //21

          }).then(response => {
              this.status = 'Submit Assignment Report Success!';
              console.log(this.status);
              swal('Success', this.status, 'success');
              this.reset();
              this.$router.push('/')
          }, response => {
          })
        },
        baiHandler(e) {
          let files = e.target.files || e.dataTransfer.files
          if (!files.length)
            return
          for(let i = 0; i < files.length; i++) {
            this.createBai(files[i])
          }
        },

        createBai(file) {
          let reader = new FileReader();
          reader.onload = (e) => {
            let bai = e.target.result;
            this.bai.push(bai)
            console.log(this.bai);
          };
          reader.readAsDataURL(file);
        },

        tncHandler(e) {
          let files = e.target.files || e.dataTransfer.files;
          if (!files.length)
            return
          for(let i = 0; i < files.length; i++) {
            this.createTnc(files[i])
          }
        },

        createTnc(file) {
          let reader = new FileReader();
          reader.onload = (e) => {
            let tnc = e.target.result
            this.tnc.push(tnc)
            console.log(this.tnc)
          }
          reader.readAsDataURL(file)
        },

        photoHandler(e) {
          let files = e.target.files || e.dataTransfer.files;
          if (!files.length)
            return;
          for(let i = 0; i < files.length; i++) {
            this.createPhoto(files[i])
          }
        },

        createPhoto(file) {
          let reader = new FileReader();
          reader.onload = (e) => {
            let photos = e.target.result;
            this.photos.push(photos);
            console.log(this.photos)
          };
          reader.readAsDataURL(file);
        },

        otherHandler(e) {
          let files = e.target.files || e.dataTransfer.files;
          if (!files.length)
            return;
          this.createOther(files[0]);
        },

        createOther(file) {
          let reader = new FileReader();
          reader.onload = (e) => {
            this.other = e.target.result;
          };
          reader.readAsDataURL(file);
        },

        reset() {
            this.assignment_type = ""; //1
            this.date_work = ""; //4
            this.time_start = ""; //5
            this.time_at = ""; //6
            this.time_job_finish = ""; //7
            this.time_end = ""; //8
            this.company = "";  //9
            this.address = ""; //10
            this.cp = ""; //11
            this.pic = ""; //12
            this.sppd_status = ""; //13
            this.day_number = "";  //14
            this.type_sppd = ""; //15
            this.brief_work = "";  //16
            this.result = "";  //17
            this.bai = []; //18
            this.tnc = []; //19
            this.photos = []; //20
            this.other = ""; //21
        },
        format_date(value){
         if (value) {
           return moment(String(value)).format('YYYY-MM-DD')
          }
      },
      }
    }
</script>

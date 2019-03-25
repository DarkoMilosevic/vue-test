<template>
    <div class="row">
        <string-component v-model="firstName" :label-text="labelFirstName" :label-name="nameFN"/>

        <string-component v-model="lastName" :label-text="labelLastName" :label-name="nameLN"/>

        <email-component v-model="email" :label-text="labelEmail" :label-name="nameEmail"/>

        <radio-component v-model="gender" :label-text="labelRadio" :label-name="nameRadio"/>

        <select-component :select-opts="attentionSource" @selected-option="optionSelected" :label-text="labelAttSrc" :label-name="nameAttSrc"/>

        <phone-component :select-options="phoneExt" :label-text="labelPhone" :label-name="namePhone"/>

        <multistring-component v-model="voucherText" :label-text="labelMultistring" :label-name="nameMultistring"/>

        <div class="col-md-6 pill-wrapper">
            <span class="badge badge-pill badge-primary pill-style" v-for="(pill, key) in voucherPill" :key="key">{{ pill }} <a href="#" @click="removePill(key)">X</a></span>
        </div>

        <div class="form-group col-md-12 mt-3">
            <button type="button" class="btn btn-primary d-block" @click="$store.dispatch('postData')">Submit</button>
        </div>
    </div>
</template>

<script>
import sample from '../assets/sample'
import StringComponent from '../components/StringComponent'
import EmailComponent from '../components/EmailComponent'
import RadioComponent from '../components/RadioComponent'
import SelectComponent from '../components/SelectComponent'
import PhoneComponent from '../components/PhoneComponent'
import MultistringComponent from '../components/MultistringComponent'

export default {
    components: {
        StringComponent,
        EmailComponent,
        RadioComponent,
        SelectComponent,
        PhoneComponent,
        MultistringComponent
    },
    computed: {
        firstName: {
            get () {
                return this.$store.state.first_name
            },
            set (value) {
                this.$store.commit('firstNameChange', value)
            }
        },
        lastName: {
            get () {
                return this.$store.state.last_name
            },
            set (value) {
                this.$store.commit('lastNameChange', value)
            }
        },
        email: {
            get () {
                return this.$store.state.email
            },
            set (value) {
                this.$store.commit('emailSet', value)
            }
        },
        gender: {
            get () {
                return this.$store.state.gender
            },
            set (value) {
                this.$store.commit('genderSet', value)
            }
        },
        selectedSource: {
            get () {
                return this.$store.state.gender
            },
            set (value) {
                this.$store.commit('genderSet', value)
            }
        },
        voucherText: {
            get () {
                return this.$store.state.vouchers
            },
            set (value) {
                let split = value.split('\n');
                var lines = [];
                for (var i = 0; i < split.length; i++) {
                    lines.push(split[i]);
                }
                this.$store.commit('voucherSet', lines)
            }
        },
        voucherPill: {
            get () {
                return this.$store.state.vouchers
            }
        },
    },
    data() {
        return {
            labelFirstName: '',
            labelLastName: '',
            labelEmail: '',
            labelRadio: '',
            labelAttSrc: '',
            labelPhone: '',
            labelMultistring: '',
            attentionSource: '',
            phoneExt: '',
            nameFN: '',
            nameLN: '',
            nameEmail: '',
            nameRadio: '',
            nameAttSrc: '',
            namePhone: '',
            nameMultistring: ''
        }
    },
    methods: {
        optionSelected(e) {
            this.$store.commit('sourceSet', e)
        },
        removePill(index) {
            this.$store.commit('voucherRemove', index)
        }
    },
    mounted() {
        this.labelFirstName = sample[0].label;
        this.labelLastName = sample[1].label;
        this.labelEmail = sample[2].label;
        this.labelRadio = sample[3].label;
        this.labelAttSrc = sample[4].label;
        this.labelPhone = sample[5].label;
        this.labelMultistring = sample[6].label;

        this.attentionSource = sample[4].options[0];
        this.phoneExt = sample[5].options[0].ext[0];

        this.nameFN = sample[0].name;
        this.nameLN = sample[1].name;
        this.nameEmail = sample[2].name;
        this.nameRadio = sample[3].name;
        this.nameAttSrc = sample[4].name;
        this.namePhone = sample[5].name;
        this.nameMultistring = sample[6].name;
    }
}
</script>

<style>
.pill-wrapper {
    display: flex;
    align-items: center;
}
.pill-style {
    padding: 0.5rem;
    margin: 0.5rem;
    font-size: 1rem;
}
.pill-style a {
    color: #fff;
    text-decoration: none;
    font-size: 0.75rem;
}
.pill-style a:hover {
    color: #fefefe;
}
</style>

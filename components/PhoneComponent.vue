<template>
    <div class="form-group col-md-6 text-left">
        <label :for="labelName">{{ labelText }}:</label>
        <div class="row">
            <select-component :select-opts="selectOptions" :name="labelName" @selected-option="optionSelected"/>
            <string-component :name="labelName" v-model="phoneNum"/>
        </div>
    </div>
</template>

<script>
import StringComponent from '../components/StringComponent'
import SelectComponent from '../components/SelectComponent'
export default {
    props: ['value', 'selectOptions', 'labelText', 'labelName'],
    components: {
        StringComponent,
        SelectComponent
    },
    computed: {
        phoneNum: {
            get () {
                return this.$store.state.first_name
            },
            set (value) {
                this.$store.commit('phoneSet', value)
            }
        },
    },
    data() {
        return {
        }
    },
    methods: {
        optionSelected(e) {
            this.$store.commit('extSet', e)
        }
    }
}
</script>

<style>
</style>

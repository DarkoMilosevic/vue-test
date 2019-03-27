<template>
    <div :class="'text-left form-group col-md-' + col">
        <label :for="name">{{ label }}:</label>
        <div class="row">
            <select-component :name="name" :options="selectOptions"/>
            <string-component :name="name" v-model="phoneNum"/>
        </div>
    </div>
</template>

<script>
import stringComponent from '../components/stringComponent'
import selectComponent from '../components/selectComponent'
export default {
    props: ['value', 'options', 'label', 'name', 'col'],
    components: {
        stringComponent,
        selectComponent
    },
    data() {
        return {
            selectOptions: []
        }
    },
    methods: {
        optionSelected(e) {
            this.$store.commit('extSet', e)
        }
    },
    mounted() {
        this.selectOptions = this.options[0].ext;
    }
}
</script>

<style>
</style>
